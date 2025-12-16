import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadGeneration from '../components/LeadGeneration/LeadGeneration';
import ApplyModal from '../components/ApplyModal/ApplyModal';
import image2 from '../assets/images/image2.png';
import cc1Image from '../assets/images/cc1.png';
import cc2Image from '../assets/images/cc2.png';
import cc201Image from '../assets/images/cc201.png';
import cop1Image from '../assets/images/cop1.jpeg';
import cop2Image from '../assets/images/cop2.jpeg';
import cop3Image from '../assets/images/cop3.jpeg';
import cop4Image from '../assets/images/cop4.jpeg';
import cc1Icon from '../assets/icons/cc1.png';
import cc2Icon from '../assets/icons/cc02.png';
import cc3Icon from '../assets/icons/cc3.png';
import './CounsellingOrganizationalPsychology.css';

const CounsellingOrganizationalPsychology = () => {
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
    console.log('Apply form submitted:', applyForm);
    alert('Thank you for your interest! We will contact you soon.');
    closeApplyModal();
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const careers = [
    { title: 'Corporate Counsellor', image: cop1Image },
    { title: 'Employee Wellbeing & Counselling Specialist', image: cop2Image },
    { title: 'Learning & Development (L&D) Manager', image: cop3Image },
    { title: 'Human Resources Specialist', image: cop4Image }
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
    <div className="counselling-organizational-psychology-page">
      {/* Hero Banner Section */}
      <div className="program-hero-banner">
        <h1>COUNSELLING & ORGANIZATIONAL PSYCHOLOGY</h1>
      </div>

      {/* Program Overview Section */}
      <section className="program-overview overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h1 className="overview-title">ADVANCED DIPLOMA IN COUNSELLING & ORGANIZATIONAL PSYCHOLOGY</h1>
              <p>
                The Diploma in Counselling Psychology (Specialization in Organizational Psychology) equips learners with core counselling and workplace assessment skills. The program builds a strong foundation in organizational behaviour, employee motivation, performance, and well-being, while fostering ethical and culturally sensitive counselling and coaching practices. Through supervised practicum, organizational case studies, and HR-focused field exposure, learners become reflective practitioners capable of enhancing employee mental health, engagement, and productivity across diverse workplaces.
              </p>
              <button className="enroll-now-btn" onClick={openApplyModal}>Enroll Now</button>
            </div>
            <div className="overview-image">
              <img src={cc1Image} alt="Organizational counselling session" />
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="program-highlights highlights-section">
        <div className="container">
          <div className="highlights-content">
            <div className="highlights-image">
              <img src={cc201Image} alt="Organizational Psychology" />
            </div>
            <div className="highlights-text">
              <p className="highlights-subtitle">Unlock your potential as a skilled organizational counsellor</p>
              <h2 className="highlights-title">ADVANCED DIPLOMA IN COUNSELLING & ORGANIZATIONAL PSYCHOLOGY</h2>
              <div className="batch-boxes">
                <div className="batch-box">
                  <div className="batch-icon"></div>
                  <h3>Batch 1</h3>
                  <ul className="batch-details">
                    <li>Weekday Evening Batch</li>
                    <li>Monday - Thursday</li>
                    <li>1 PM - 6 PM</li>
                  </ul>
                </div>
                <div className="batch-box">
                  <div className="batch-icon"></div>
                  <h3>Batch 2</h3>
                  <ul className="batch-details">
                    <li>Weekend Morning Batch</li>
                    <li>Saturday</li>
                    <li>9 AM - 1 PM</li>
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
              <span className="detail-value">-</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Eligibility</span>
              <span className="detail-value">Bachelor's degree in any discipline</span>
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
              <li>Gain practical counselling skills for workplace and organizational settings</li>
              <li>Learn to assess and address employee behaviour, motivation, performance, and well-being</li>
              <li>Practice ethical, culturally sensitive, and employee-centered counselling and coaching approaches</li>
              <li>Apply learning through supervised practicum, organizational case studies, and real-world HR exposure</li>
              <li>Promote employee mental health, engagement, and productivity across diverse organizational environments</li>
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
              <button className="apply-now-btn-syllabus" onClick={openApplyModal}>Apply now</button>
              <button className="download-brochure-btn">Download Brochure</button>
            </div>
          </div>
          <div className="syllabus-content">
            <div className="semester-card">
              <div className="semester-header semester-1">SEMESTER 1</div>
              <h3>FOUNDATIONS OF COUNSELLING PSYCHOLOGY</h3>
              <p className="credits">TOTAL CREDITS - 22</p>
              <ul className="semester-topics">
                <li>Foundations of Psychology</li>
                <li>Introduction to Counselling Psychology</li>
                <li>Developmental Psychology Across the Lifespan</li>
                <li>Human Resource Management – I</li>
                <li>Practical Paper – Employee Assessment, Testing & Organisational Counselling Lab</li>
              </ul>
            </div>
            <div className="semester-card">
              <div className="semester-header semester-2">SEMESTER 2</div>
              <h3>ADVANCEMENT TO SPECIALIZATION</h3>
              <p className="credits">TOTAL CREDITS - 32</p>
              <ul className="semester-topics">
                <li>Ethics and Professional Issues in Counselling</li>
                <li>Human Resource Management – II</li>
                <li>Organizational and Industrial Psychology</li>
                <li>Media Psychology</li>
                <li>Dissertation</li>
                <li>Internship / Field Placement</li>
              </ul>
            </div>
          </div>
          <div className="internship-section">
            <h3>Internship Opportunities</h3>
            <p>
              Gain real-world experience in organizational, HR, corporate counselling, or workplace wellbeing settings. Structured internships help you build practical skills, professional confidence, and industry-ready expertise for organizational practice.
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
                    <p className="fee-option-amount">INR 3,125 <span className="fee-month-text">/Month</span></p>
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
                <strong>Employee Assessment Skills</strong> – Understanding behaviour, motivation, performance, and workplace dynamics.
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Communication & Interpersonal Skills</strong> – Engaging effectively with employees, teams, and leadership.
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Counselling & Coaching Techniques</strong> – Supporting employee wellbeing, growth, and conflict resolution.
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Problem-Solving & Critical Thinking</strong> – Designing interventions for workplace challenges and organizational improvement.
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Data Interpretation & Organizational Analysis</strong> – Using assessments, surveys, and feedback tools to guide decisions.
              </span>
            </li>
            <li>
              <span className="skill-checkmark">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="white"/>
                </svg>
              </span>
              <span className="skill-text">
                <strong>Change Management & Workplace Wellbeing</strong> – Facilitate organizational change while promoting a healthy, productive work culture.
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
            With an Organizational Psychology specialization, this course builds a strong foundation in workplace counselling and prepares you for impactful careers in corporate mental health and organizational development. Potential career paths include
          </p>
          <div className="career-carousel-wrapper">
            <div className="career-carousel-container">
              <div className="career-cards-slider">
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
          </div>
        </div>
      </section>

      {/* Other Advanced Diploma Programs Section */}
      <section className="other-programs">
        <div className="container">
          <h2 className="section-title">OTHER ADVANCED DIPLOMA PROGRAMS</h2>
          <div className="programs-grid">
            <Link to="/counselling-child-psychology" className="program-card">
              <div className="program-icon-wrapper">
                <img src={cc1Icon} alt="Child Psychology" className="program-icon" />
              </div>
              <p>Advanced Diploma in Counselling and Child Psychology</p>
            </Link>
            <Link to="/counselling-forensic-psychology" className="program-card">
              <div className="program-icon-wrapper">
                <img src={cc2Icon} alt="Forensic Psychology" className="program-icon" />
              </div>
              <p>Advanced Diploma in Counselling and Forensic Psychology</p>
            </Link>
            <Link to="/counselling-art-therapy" className="program-card">
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

      <ApplyModal
        isOpen={showApplyModal}
        onClose={closeApplyModal}
        formData={applyForm}
        onFormChange={handleApplyFormChange}
        onSubmit={handleApplySubmit}
      />
    </div>
  );
};

export default CounsellingOrganizationalPsychology;

