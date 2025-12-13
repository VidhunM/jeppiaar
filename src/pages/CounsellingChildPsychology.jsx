import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadGeneration from '../components/LeadGeneration/LeadGeneration';
import image2 from '../assets/images/image2.png';
import cc1Image from '../assets/images/cc1.png';
import cc2Image from '../assets/images/cc2.png';
import cp1Image from '../assets/images/cp1.png';
import cp2Image from '../assets/images/cp2.png';
import cp3Image from '../assets/images/cp4.png';
import cp4Image from '../assets/images/cp4.jpg';
import cc1Icon from '../assets/icons/cc1.png';
import cc2Icon from '../assets/icons/cc02.png';
import cc3Icon from '../assets/icons/cc3.png';
import logo from '../assets/icons/Logo1.png';
import './CounsellingChildPsychology.css';

const CounsellingChildPsychology = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentCareerIndex, setCurrentCareerIndex] = useState(0);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    mobile: '',
    country: '',
    city: '',
    state: '',
    course: '',
    qualification: '',
    consent: false
  });

  const showConstructionPopup = () => {
    setShowUnderConstruction(true);
  };

  const closePopup = () => {
    setShowUnderConstruction(false);
  };

  const openApplyModal = () => {
    setShowApplyModal(true);
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
    setApplyForm({
      name: '',
      email: '',
      mobile: '',
      country: '',
      city: '',
      state: '',
      course: '',
      qualification: '',
      consent: false
    });
  };

  const handleApplyFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApplyForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Apply form submitted:', applyForm);
    // You can add API call here similar to LeadGeneration component
    alert('Thank you for your interest! We will contact you soon.');
    closeApplyModal();
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const careers = [
    { title: 'Child Counselor', image: cp1Image },
    { title: 'Educational Psychologist', image: cp2Image },
    { title: 'Rehabilitation & Behavioral Therapist', image: cp3Image },
    { title: 'School Psychologist', image: cp4Image }
  ];

  useEffect(() => {
    const handleResize = () => {
      const newCardsToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setCardsToShow((prevCardsToShow) => {
        if (prevCardsToShow !== newCardsToShow) {
          const newMaxIndex = Math.max(0, careers.length - newCardsToShow);
          setCurrentCareerIndex((prevIndex) => Math.min(prevIndex, newMaxIndex));
        }
        return newCardsToShow;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [careers.length]);

  const maxIndex = Math.max(0, careers.length - cardsToShow);

  const nextCareer = () => {
    setCurrentCareerIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevCareer = () => {
    setCurrentCareerIndex((prev) => Math.max(prev - 1, 0));
  };

  const faqs = [
    {
      question: '1. Who can apply for the advanced diploma programs?',
      answer: 'Any UG graduate from a recognized university can apply, regardless of their academic background.'
    },
    {
      question: '2. What is the duration of each advanced diploma?',
      answer: 'The duration of each Advanced Diploma is one year.'
    },
    {
      question: '3. Are the programs accredited or recognized?',
      answer: 'Our diploma courses are conducted in collaboration with Bharathidasan university, which is recognized by the University of Grants Commission (UGC).'
    },
    {
      question: '4. Can you become a counselor by attending this course?',
      answer: 'Yes, you can become a counselor in your chosen specialization (Child Psychology, Psychology, Forensic Psychology, or Art Therapy). After completing this course, you can work as a counselor under the supervision of a qualified psychologist.'
    }
  ];

  return (
    <div className="counselling-child-psychology-page">
      {/* Hero Banner Section */}
      <div className="program-hero-banner">
        <h1>COUNSELLING & CHILD PSYCHOLOGY</h1>
      </div>

      {/* Program Overview Section */}
      <section className="program-overview overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h1 className="overview-title">ADVANCED DIPLOMA IN COUNSELLING AND CHILD PSYCHOLOGY</h1>
              <p>
                The Diploma in Counselling Psychology (Specialization in Child Psychology) equips learners with essential counselling skills, child-focused assessment techniques, and ethically grounded practice. With a blend of theory, supervised practicum, and real-world exposure, the program prepares reflective practitioners to support the emotional, behavioural, and developmental needs of children and adolescents across diverse settings.
              </p>
              <button className="enroll-now-btn" onClick={openApplyModal}>Enroll Now</button>
            </div>
            <div className="overview-image">
              <img src={cc1Image} alt="Child counselling session" />
            </div>
            <div 
              className="vertical-apply-tab"
              onClick={openApplyModal}
            >
              <span>Apply Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="program-highlights highlights-section">
        <div className="container">
          <div className="highlights-content">
            <div className="highlights-image">
              <img src={cc2Image} alt="Children" />
            </div>
            <div className="highlights-text">
              <p className="highlights-subtitle">Unlock your path to becoming a skilled child counsellor</p>
              <h2 className="highlights-title">ADVANCED DIPLOMA IN COUNSELLING AND CHILD PSYCHOLOGY</h2>
              <div className="batch-boxes">
                <div className="batch-box">
                  <div className="batch-icon"></div>
                  <h3>Batch 1</h3>
                  <ul className="batch-details">
                    <li>Weekday Morning Batch</li>
                    <li>Monday - Thursday</li>
                    <li>9 AM - 1 PM</li>
                  </ul>
                </div>
                <div className="batch-box">
                  <div className="batch-icon"></div>
                  <h3>Batch 2</h3>
                  <ul className="batch-details">
                    <li>Weekday Evening Batch</li>
                    <li>Monday - Thursday</li>
                    <li>1 PM - 6 PM</li>
                  </ul>
                </div>
              </div>
              <button className="download-brochure-btn">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Bar */}
      <section className="program-details-bar">
        <div className="container">
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Duration</span>
              <span className="detail-value">12 Months</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Fees</span>
              <span className="detail-value">₹0 per Semester</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Eligibility</span>
              <span className="detail-value">Eligibility - Bachelor's degree in any discipline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="learning-outcomes">
        <div className="container">
          <h2 className="section-title">LEARNING OUTCOMES</h2>
          <div className="outcomes-box">
            <ul className="outcomes-list">
              <li>Gain practical counselling skills for children and adolescents</li>
              <li>Learn to assess and support children's emotional and behavioral needs</li>
              <li>Practice ethical and child-centered counselling approaches</li>
              <li>Apply learning through hands-on training and real-world experience</li>
              <li>Promote children's mental health and overall wellbeing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Syllabus Section */}
      <section className="course-syllabus">
        <div className="container">
          <div className="syllabus-header">
            <h2 className="section-title">COURSE SYLLABUS</h2>
            <div className="syllabus-buttons">
              <button className="apply-now-btn-syllabus">Apply now</button>
              <button className="download-brochure-btn">Download Brochure</button>
            </div>
          </div>
          <div className="syllabus-content">
            <div className="semester-card">
              <div className="semester-header semester-1">SEMESTER I</div>
              <h3>FOUNDATIONS OF COUNSELLING PSYCHOLOGY</h3>
              <p className="credits">Total Credits - 22</p>
              <ul className="semester-topics">
                <li>Foundations of Psychology</li>
                <li>Introduction to Counselling Psychology</li>
                <li>Developmental Psychology Across the Lifespan</li>
                <li>Foundations of Child Psychology</li>
                <li>Practical Paper - Child Assessment, Testing & Counselling Lab</li>
              </ul>
            </div>
            <div className="semester-card">
              <div className="semester-header semester-2">SEMESTER 2</div>
              <h3>ADVANCEMENT TO SPECIALIZATION</h3>
              <p className="credits">Total Credits - 32</p>
              <ul className="semester-topics">
                <li>Ethics and Professional Issues in Counselling</li>
                <li>Child Psychopathology and Counselling</li>
                <li>Positive Development, Family, School & Community Interventions</li>
                <li>Media Psychology</li>
                <li>Dissertation</li>
                <li>Internship / Field Placement</li>
              </ul>
            </div>
          </div>
          <div className="internship-section">
            <h3>Internship Opportunities</h3>
            <p>
              Gain real-world experience in approved counselling, rehabilitation, educational, or clinical settings. Structured internships help you build practical skills, professional confidence, and industry-ready expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Course Fee Section */}
      <section className="course-fee">
        <div className="container">
          <h2 className="section-title">COURSE FEE</h2>
          <div className="fee-wrapper">
            <div className="fee-content">
              <div className="main-fee">
                <p className="fee-label">Full course fee (Four semesters)</p>
                <p className="fee-amount">INR 75,000</p>
                <p className="fee-note">Inclusive of all taxes</p>
              </div>
              <div className="fee-right-column">
                <div className="fee-options">
                  <div className="fee-option">
                    <p className="fee-option-label">Each semester fee</p>
                    <p className="fee-option-amount">INR 18,750</p>
                    <p className="fee-option-note">Inclusive of all taxes</p>
                  </div>
                  <div className="fee-option">
                    <p className="fee-option-label">EMI starting at</p>
                    <p className="fee-option-amount">INR 3,125 /Month</p>
                    <p className="fee-option-note">Terms & conditions apply</p>
                  </div>
                </div>
                <div className="fee-note-section">
                  <span className="info-icon">ℹ</span>
                  <p>Note for online payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">SKILLS</h2>
          <ul className="skills-list">
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Active Listening & Empathy</strong> – Understand children's emotions and respond with care.
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Assessment & Observation</strong> – Identify emotional, behavioral, and developmental needs
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Communication Skills</strong> – Effectively interact with children, parents, and caregivers
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Counselling Techniques</strong> – Apply child-centered, ethical strategies to support wellbeing
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Problem Solving & Intervention</strong> – Develop practical solutions and therapeutic plans for children's challenges
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="career-prospects">
        <div className="container">
          <h2 className="section-title-white">CAREER PROSPECTS</h2>
          <p className="career-description">
          With a Child Counselling specialization, this course builds a strong psychology foundation and 
prepares <br /> you for impactful careers in child and adolescent mental health. Potential career paths 
include
          </p>
          <div className="career-carousel-wrapper">
            <button 
              className="career-carousel-btn prev" 
              onClick={prevCareer}
              aria-label="Previous career"
              disabled={currentCareerIndex === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="career-carousel-container">
              <div 
                className="career-cards-slider"
                style={{ 
                  transform: `translateX(calc(-${currentCareerIndex} * (100% / ${cardsToShow})))` 
                }}
              >
                {careers.map((career, index) => (
                  <div 
                    key={index} 
                    className="career-card"
                  >
                    <div className="career-image">
                      <img src={career.image} alt={career.title} />
                      <div className="career-overlay">
                        <p className="career-title-overlay">{career.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="career-carousel-btn next" 
              onClick={nextCareer}
              aria-label="Next career"
              disabled={currentCareerIndex >= maxIndex}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="career-carousel-dots">
            {careers.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentCareerIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentCareerIndex(index)}
                aria-label={`Go to career ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Advanced Diploma Programs Section */}
      <section className="other-programs">
        <div className="container">
          <h2 className="section-title">OTHER ADVANCED DIPLOMA PROGRAMS</h2>
          <div className="programs-grid">
            <Link to="/courses" className="program-card">
              <div className="program-icon-wrapper">
                <img src={cc1Icon} alt="Organizational Psychology" className="program-icon" />
              </div>
              <p>Advanced Diploma in Counselling and Organizational Psychology</p>
            </Link>
            <Link to="/courses" className="program-card">
              <div className="program-icon-wrapper">
                <img src={cc2Icon} alt="Forensic Psychology" className="program-icon" />
              </div>
              <p>Advanced Diploma in Counselling and Forensic Psychology</p>
            </Link>
            <Link to="/courses" className="program-card">
              <div className="program-icon-wrapper">
                <img src={cc3Icon} alt="Art Therapy" className="program-icon" />
              </div>
              <p>Advanced Diploma in Art Therapy</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-list scroll-from-left">
              <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="faq-items">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <div 
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <span className={`faq-icon ${openFaq === index ? 'open' : ''}`}>▼</span>
                    </div>
                    {openFaq === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="faq-image scroll-from-right">
              <img 
                src={image2} 
                alt="Student studying"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e0e0e0" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <LeadGeneration onShowConstructionPopup={showConstructionPopup} />

      {showUnderConstruction && (
        <div className="under-construction-popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>Site Under Construction</h2>
            <p>This page is currently under construction. Please check back soon!</p>
          </div>
        </div>
      )}

      {showApplyModal && (
        <div className="apply-modal-overlay" onClick={closeApplyModal}>
          <div className="apply-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="apply-modal-close" onClick={closeApplyModal}>×</button>
            
            <div className="apply-modal-header">
              <div className="apply-modal-logo">
                <img src={logo} alt="Jeppiaar Academy Logo" />
              </div>
              <h2 className="apply-modal-title">Advanced Diploma Courses in Psychology- Admissions open!</h2>
            </div>

            <form className="apply-modal-form" onSubmit={handleApplySubmit}>
              <div className="apply-form-row">
                <div className="apply-form-column">
                  <input
                    type="text"
                    name="name"
                    value={applyForm.name}
                    onChange={handleApplyFormChange}
                    placeholder="Name"
                    required
                  />
                  <input
                    type="tel"
                    name="mobile"
                    value={applyForm.mobile}
                    onChange={handleApplyFormChange}
                    placeholder="Mobile Number"
                    required
                  />
                  <select
                    name="country"
                    value={applyForm.country}
                    onChange={handleApplyFormChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Singapore">Singapore</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Other">Other</option>
                  </select>
                  <select
                    name="city"
                    value={applyForm.city}
                    onChange={handleApplyFormChange}
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="apply-form-column">
                  <input
                    type="email"
                    name="email"
                    value={applyForm.email}
                    onChange={handleApplyFormChange}
                    placeholder="Email address"
                    required
                  />
                  <select
                    name="state"
                    value={applyForm.state}
                    onChange={handleApplyFormChange}
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    type="text"
                    name="qualification"
                    value={applyForm.qualification}
                    onChange={handleApplyFormChange}
                    placeholder="Highest Qualification (completed as of June 2026)"
                    className="apply-form-input"
                    required
                  />
                  <select
                    name="course"
                    value={applyForm.course}
                    onChange={handleApplyFormChange}
                    required
                  >
                    <option value="">Select Diploma Course</option>
                    <option value="Counselling and Child Psychology">Counselling and Child Psychology</option>
                    <option value="Counselling and Organisational Psychology">Counselling and Organisational Psychology</option>
                    <option value="Counselling and Forensic Psychology">Counselling and Forensic Psychology</option>
                    <option value="Art Therapy">Art Therapy</option>
                  </select>
                </div>
              </div>

              <label className="apply-form-checkbox">
                <input
                  type="checkbox"
                  name="consent"
                  checked={applyForm.consent}
                  onChange={handleApplyFormChange}
                  required
                />
                <span>I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates</span>
              </label>

              <button type="submit" className="apply-form-submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CounsellingChildPsychology;

