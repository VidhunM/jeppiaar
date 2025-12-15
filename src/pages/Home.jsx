import React, { useState } from 'react';
import HeroSection from '../components/Hero/HeroSection';
import CoursesGrid from '../components/Courses/CoursesGrid';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import LearnersReview from '../components/Testimonials/LearnersReview';
import LeadGeneration from '../components/LeadGeneration/LeadGeneration';
import ApplyModal from '../components/ApplyModal/ApplyModal';
import Group7 from '../assets/icons/Group 7.png';
import Group8 from '../assets/icons/Group 8.png';
import Ellipse from '../assets/images/Ellipse.png';
import Layer from '../assets/images/Layer.png';
import Youngvox from '../assets/images/Youngvox.png';
import image3 from '../assets/images/image3.png';
import image2 from '../assets/images/image2.png';
import './Home.css';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
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
    <div className="home-page">
      <HeroSection 
        onShowConstructionPopup={showConstructionPopup}
        onScrollToCareerSection={scrollToCareerSection}
        onOpenApplyModal={openApplyModal}
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
              <span className="badge-bold">Skill India</span>
              <span className="badge-regular">Approved</span>
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
              onClick={() => window.open('https://www.voxdemy.com/courses/Psychology-Basics-Course-Jan-2026-68569c00e0203b5c9661eafa', '_blank')}
            >
              <div className="service-icon">
                <img src={Ellipse} alt="Certification Programs" />
              </div>
              <p>Certification Programs</p>
            </div>
            <div 
              className="service-item scroll-from-right"
              onClick={() => window.open('https://www.thepoloresearch.com/', '_blank')}
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

      <LeadGeneration onShowConstructionPopup={showConstructionPopup} />

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
          <h2> 2026 ADMISSIONS OPEN - START YOUR JOURNEY IN PSYCHOLOGY</h2>
          <p>Join Jeppiaar Academy for practice-oriented psychology diploma programs that blend classroom learning with real-world experience.</p>
          <button 
            className="apply-now-btn"
            onClick={openApplyModal}
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

export default Home;

