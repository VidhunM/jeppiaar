import React, { useState } from 'react';
import HeroSection from '../components/Hero/HeroSection';
import CoursesGrid from '../components/Courses/CoursesGrid';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import LearnersReview from '../components/Testimonials/LearnersReview';
import Group7 from '../assets/icons/Group 7.png';
import Group8 from '../assets/icons/Group 8.png';
import Ellipse from '../assets/images/Ellipse.png';
import Layer from '../assets/images/Layer.png';
import Youngvox from '../assets/images/Youngvox.png';
import contactImage from '../assets/images/contact.png';
import image3 from '../assets/images/image3.png';
import image2 from '../assets/images/image2.png';
import './Home.css';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const showConstructionPopup = () => {
    setShowUnderConstruction(true);
  };

  const closePopup = () => {
    setShowUnderConstruction(false);
  };

  const scrollToCareerSection = () => {
    const startCareerSection = document.getElementById('start-career-section');
    if (startCareerSection) {
      startCareerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
      answer: 'Our Advanced Diploma courses are accredited in collaboration with Bharathidasan University, which is recognized by the University Grants Commission (UGC).'
    },
    {
      question: '4. Do I need prior clinical or counselling experience?',
      answer: 'Prior counselling or clinical experience is not required to apply for the Advanced Diploma.'
    }
  ];
  return (
    <div className="home-page">
      <HeroSection 
        onShowConstructionPopup={showConstructionPopup}
        onScrollToCareerSection={scrollToCareerSection}
      />
      
      {/* Collaboration Section */}
      <section className="collaboration-section">
        <div className="collaboration-decorative-left">
          <img src={Group7} alt="Decoration" />
        </div>
        <div className="container">
          <h2 className="scroll-from-center">JEPPIAAR ACADEMY OF PSYCHOLOGY AND RESEARCH</h2>
          <p className="collaboration-text scroll-from-center">IN COLLABORATION WITH</p>
          <h3 className="university-name scroll-from-center">BHARATHIDASAN UNIVERSITY</h3>
          <p className="accreditation-text scroll-from-center">
            (Accredited with A+ Grade by NAAC in the Third Cycle & 36th Rank among the Indian Universities in NIRF-2025)
          </p>
          <div className="accreditation-badges">
            <div className="badge scroll-from-left">
              <span className="badge-bold">IAO</span>
              <span className="badge-regular">Accredited</span>
            </div>
            <div className="badge scroll-from-right">
              <span className="badge-bold">Approved</span>
              <span className="badge-regular">by Skill</span>
              <span className="badge-regular">India</span>
            </div>
          </div>
        </div>
        <div className="collaboration-decorative-right">
          <img src={Group8} alt="Decoration" />
        </div>
      </section>

      <CoursesGrid onKnowMoreClick={showConstructionPopup} />

      {/* Other Services Section */}
      <section className="other-services-section">
        <div className="container">
          <h2 className="section-title scroll-from-center">OTHER SERVICES</h2>
          <div className="services-grid">
            <div 
              className="service-item scroll-from-left"
              onClick={showConstructionPopup}
            >
              <div className="service-icon">
                <img src={Ellipse} alt="Certification Programs" />
              </div>
              <p>Certification Programs</p>
            </div>
            <div 
              className="service-item scroll-from-right"
              onClick={() => window.open('https://www.voxdemy.com/courses/YOUNG-RESAEARCHER-67da64a1f529217c97f00cd6', '_blank')}
            >
              <div className="service-icon">
                <img src={Layer} alt="Research Wing - POLO" />
              </div>
              <p>Research Wing - POLO</p>
            </div>
            <div 
              className="service-item scroll-from-left"
              onClick={() => window.open('https://www.voxdemy.com/courses/Voxdemy-Internship-May-2025-Batch-680dcda04238861d5cad3f02', '_blank')}
            >
              <div className="service-icon">
                <img src={Ellipse} alt="Internships" />
              </div>
              <p>Internships</p>
            </div>
            <div 
              className="service-item scroll-from-right"
              onClick={showConstructionPopup}
            >
              <div className="service-icon">
                <img src={Youngvox} alt="YoungVox" />
              </div>
              <p>YoungVox</p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Lead Generation Form Section */}
      <section id="start-career-section" className="lead-generation-section">
        <div className="container">
          <div className="lead-content">
            <div className="lead-form-panel scroll-from-left">
              <h2>Start your Psychology<br />Career Today!</h2>
              <p className="lead-subtitle">Upgrade your skills with practice-oriented diploma programs</p>
              <form 
                className="lead-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your interest! We will contact you soon.');
                }}
              >
                <div className="form-row">
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email address" required />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Mobile number" required />
                  <select className="course-select" required>
                    <option value="">Select Course</option>
                    <option value="Counselling and Child Psychology">1. Counselling and Child Psychology</option>
                    <option value="Counselling and Organisational Psychology">2. Counselling and Organisational Psychology</option>
                    <option value="Counselling and Forensic Psychology">3. Counselling and Forensic Psychology</option>
                    <option value="Art Therapy">4. Art Therapy</option>
                  </select>
                </div>
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates and notification</span>
                </label>
                <div className="form-buttons">
                  <button type="submit" className="btn-primary">Apply Now</button>
                  <button 
                    type="button" 
                    className="btn-secondary"
                    onClick={showConstructionPopup}
                  >
                    Download Prospectus
                  </button>
                  <button 
                    type="button" 
                    className="btn-secondary"
                    onClick={showConstructionPopup}
                  >
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
            <div className="lead-image-panel scroll-from-right">
              <img 
                src={contactImage} 
                alt="Student"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500"%3E%3Crect fill="%23e0e0e0" width="500" height="500"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <LearnersReview />

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

      {/* Admissions Banner */}
      <section className="admissions-banner" style={{ backgroundImage: `url(${image3})` }}>
        <div className="banner-overlay"></div>
        <div className="banner-content scroll-from-left">
          <h2>ADMISSIONS OPEN 2026 - START YOUR JOURNEY IN PSYCHOLOGY</h2>
          <p>Join Jeppiaar Academy for practice-oriented psychology diplomas that blend classroom learning with real-world experience.</p>
          <button 
            className="apply-now-btn"
            onClick={showConstructionPopup}
          >
            Apply Now
          </button>
        </div>
      </section>

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

export default Home;

