import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeadGeneration from '../components/LeadGeneration/LeadGeneration';
import image2 from '../assets/images/image2.png';
import cc1Image from '../assets/images/cc1.png';
import './CounsellingChildPsychology.css';

const CounsellingChildPsychology = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentCareerIndex, setCurrentCareerIndex] = useState(0);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const showConstructionPopup = () => {
    setShowUnderConstruction(true);
  };

  const closePopup = () => {
    setShowUnderConstruction(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const careers = [
    { title: 'Child Counselor', image: '/api/placeholder/400/300' },
    { title: 'Educational Psychologist', image: '/api/placeholder/400/300' },
    { title: 'Rehabilitation & Behavioral Therapist', image: '/api/placeholder/400/300' },
    { title: 'School Psychologist', image: '/api/placeholder/400/300' }
  ];

  const nextCareer = () => {
    setCurrentCareerIndex((prev) => (prev + 1) % careers.length);
  };

  const prevCareer = () => {
    setCurrentCareerIndex((prev) => (prev - 1 + careers.length) % careers.length);
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
      <section className="program-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h1>ADVANCED DIPLOMA IN COUNSELLING AND CHILD PSYCHOLOGY</h1>
              <p>
                The Diploma in Counselling Psychology (Specialization in Child Psychology) equips learners with essential counselling skills, child-focused assessment techniques, and ethically grounded practice. With a blend of theory, supervised practicum, and real-world exposure, the program prepares reflective practitioners to support the emotional, behavioural, and developmental needs of children and adolescents across diverse settings.
              </p>
              <button className="enroll-now-btn">Enroll Now</button>
            </div>
            <div className="overview-image">
              <img src={cc1Image} alt="Child counselling session" />
            </div>
            <div 
              className="vertical-apply-tab"
              onClick={() => {
                const section = document.getElementById('start-career-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#start-career-section';
                }
              }}
            >
              <span>Apply Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="program-highlights">
        <div className="container">
          <div className="highlights-content">
            <div className="highlights-image">
              <img src="/api/placeholder/600/500" alt="Child counselling" />
            </div>
            <div className="highlights-text">
              <p className="highlights-subtitle">Unlock your path to becoming a skilled child counselor or</p>
              <h2>ADVANCED DIPLOMA IN COUNSELLING AND CHILD PSYCHOLOGY</h2>
              <div className="accreditation-badges">
                <div className="badge">
                  <span className="badge-text">UGC-DEB Approved</span>
                </div>
                <div className="badge">
                  <span className="badge-text">NAAC Accredited</span>
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
              <span className="detail-value">INR 18,750 per Semester</span>
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
          <ul className="outcomes-list">
            <li>Gain practical counselling skills for children and adolescents</li>
            <li>Learn to assess and support children's emotional and behavioral needs</li>
            <li>Practice ethical and child-centered counselling approaches</li>
            <li>Apply learning through hands-on training and real-world experience</li>
            <li>Promote children's mental health and overall well-being</li>
          </ul>
        </div>
      </section>

      {/* Course Syllabus Section */}
      <section className="course-syllabus">
        <div className="container">
          <div className="syllabus-header">
            <h2 className="section-title">COURSE SYLLABUS</h2>
            <div className="syllabus-buttons">
              <button className="apply-now-btn-outline">Apply Now</button>
              <button className="download-brochure-btn">Download Brochure</button>
            </div>
          </div>
          <div className="syllabus-content">
            <div className="semester-card">
              <div className="semester-header semester-1">SEMESTER 1</div>
              <h3>FOUNDATIONS OF COUNSELLING PSYCHOLOGY</h3>
              <p className="credits">Total Credits - 22</p>
              <ul className="semester-topics">
                <li>Introduction to Psychology</li>
                <li>Introduction to Counselling Psychology</li>
                <li>Developmental Psychology across the Lifespan</li>
                <li>Foundations of Child Psychology</li>
                <li>Elective Paper - Child Assessment, Testing & Counselling</li>
              </ul>
            </div>
            <div className="semester-card">
              <div className="semester-header semester-2">SEMESTER 2</div>
              <h3>ADVANCEMENT TO SPECIALIZATION</h3>
              <p className="credits">Total Credits - 22</p>
              <ul className="semester-topics">
                <li>Advanced Therapeutic Counselling</li>
                <li>Child Psychopathology and Counselling</li>
                <li>Positive Development & Role of School & Community in Mental Health</li>
                <li>Methods in Research</li>
                <li>Dissertation</li>
                <li>Internship and Field Practicum</li>
              </ul>
            </div>
          </div>
          <div className="internship-section">
            <h3>Internship Opportunities</h3>
            <p>
              Gain hands-on experience through internships in school counselling, rehabilitation, 
              educational, or clinical settings. These opportunities help you build practical skills, 
              professional competence, and industry-ready expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Course Fee Section */}
      <section className="course-fee">
        <div className="container">
          <h2 className="section-title">COURSE FEE</h2>
          <div className="fee-content">
            <div className="main-fee">
              <p className="fee-label">Full course fee (Two semesters)</p>
              <p className="fee-amount">INR 75,000</p>
              <p className="fee-note">inclusive of all taxes</p>
            </div>
            <div className="fee-options">
              <div className="fee-option">
                <p className="fee-option-label">Per semester fee</p>
                <p className="fee-option-amount">INR 18,750</p>
                <p className="fee-option-note">inclusive of all taxes</p>
              </div>
              <div className="fee-option">
                <p className="fee-option-label">EMI (12 Months)</p>
                <p className="fee-option-amount">INR 3,125 /Month</p>
                <p className="fee-option-note">inclusive of all taxes</p>
              </div>
            </div>
          </div>
          <div className="fee-note-section">
            <p>Note for online payments</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">SKILLS</h2>
          <ul className="skills-list">
            <li>
              <strong>Active Listening & Empathy</strong> - Understand children's emotions and needs in care.
            </li>
            <li>
              <strong>Assessment & Observation</strong> - Identify emotional, behavioral, and developmental needs.
            </li>
            <li>
              <strong>Communication Skills</strong> - Effectively interact with children, parents, and caregivers.
            </li>
            <li>
              <strong>Counselling Techniques</strong> - Apply child-centered, ethical strategies to support well-being.
            </li>
            <li>
              <strong>Problem Solving & Intervention</strong> - Develop practical solutions and therapeutic plans for children's challenges.
            </li>
          </ul>
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="career-prospects">
        <div className="container">
          <h2 className="section-title-white">CAREER PROSPECTS</h2>
          <p className="career-description">
            With a Child Counselling specialization, this course lays a strong psychological foundation 
            and prepares you for impactful careers in child and adolescent mental health. Potential career paths include:
          </p>
          <div className="career-carousel">
            <button className="carousel-btn prev" onClick={prevCareer}>‹</button>
            <div className="career-cards">
              {careers.map((career, index) => (
                <div 
                  key={index} 
                  className={`career-card ${index === currentCareerIndex ? 'active' : ''}`}
                >
                  <div className="career-image">
                    <img src={career.image} alt={career.title} />
                  </div>
                  <p className="career-title">{career.title}</p>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={nextCareer}>›</button>
          </div>
        </div>
      </section>

      {/* Other Advanced Diploma Programs Section */}
      <section className="other-programs">
        <div className="container">
          <h2 className="section-title">OTHER ADVANCED DIPLOMA PROGRAMS</h2>
          <div className="programs-grid">
            <Link to="/courses" className="program-card">
              <div className="program-icon">🧠</div>
              <p>Advanced Diploma in Counselling and Organizational Psychology</p>
            </Link>
            <Link to="/courses" className="program-card">
              <div className="program-icon">🧠</div>
              <p>Advanced Diploma in Counselling and Forensic Psychology</p>
            </Link>
            <Link to="/courses" className="program-card">
              <div className="program-icon">🧠</div>
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
    </div>
  );
};

export default CounsellingChildPsychology;

