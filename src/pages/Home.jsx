import React, { useState } from 'react';
import HeroSection from '../components/Hero/HeroSection';
import CoursesGrid from '../components/Courses/CoursesGrid';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import LearnersReview from '../components/Testimonials/LearnersReview';
import LeadGeneration from '../components/LeadGeneration/LeadGeneration';
import Group7 from '../assets/icons/Group 7.png';
import Group8 from '../assets/icons/Group 8.png';
import Ellipse from '../assets/images/Ellipse.png';
import Layer from '../assets/images/Layer.png';
import Youngvox from '../assets/images/Youngvox.png';
import image3 from '../assets/images/image3.png';
import image2 from '../assets/images/image2.png';
import logo from '../assets/icons/Logo1.png';
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

export default Home;

