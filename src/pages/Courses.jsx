import React, { useState, useEffect, useRef } from 'react';
import CourseApplyModal from '../components/CourseApplyModal/CourseApplyModal';
import LeadGeneration from '../components/LeadGeneration/LeadGeneration';
import { initScrollAnimations } from '../utils/scrollAnimations';
import heroImage from '../assets/images/ad01.jpg'; // Using an existing relevant image
import courseImage1 from '../assets/images/cp1.png';
import courseImage2 from '../assets/images/cp2.png';
import courseImage3 from '../assets/images/cp4.png';
import './Courses.css';
import brochurePdf from '../assets/images/Blue & White Clean Minimalist Business Corporate Bifold Brochure.pdf';

const Courses = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: '', email: '', mobile: '', country: '', city: '', state: '', course: '', batch: '', qualification: '', consent: false
  });

  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  const gridRef = useRef(null);

  const handleCardClick = (idx) => {
    setActiveCourseIndex(idx);
  };

  const scrollPrev = () => {
    if(gridRef.current) gridRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };
  const scrollNext = () => {
    if(gridRef.current) gridRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  useEffect(() => {
    // Re-initialize scroll animations when the page mounts
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
  }, []);

  const openApplyModal = () => {
    setApplyForm(prev => ({
      ...prev,
      course: certificationCourses[activeCourseIndex].title === "Sports Literacy Coach (Special Needs)"
        ? "Certification in Sports Literacy Coach (Special Needs)"
        : `Certification in ${certificationCourses[activeCourseIndex].title}`
    }));
    setShowApplyModal(true);
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
    setApplyForm({
      name: '', email: '', mobile: '', country: '', city: '', state: '', course: '', batch: '', qualification: '', consent: false
    });
  };

  const handleApplyFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        setApplyForm(prev => ({ ...prev, [name]: numericValue }));
      }
      return;
    }
    if (name === 'email' && value.length > 100) return;
    setApplyForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    closeApplyModal();
  };

  const certificationCourses = [
    {
      title: "Learning & Behavior Support Specialist",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      desc: "Master evidence-based strategies for behavioral interventions and learning support in diverse environments.",
      image: courseImage1
    },
    {
      title: "Play Therapy & Child Emotional Specialist",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      desc: "Specialized training in therapeutic play to support the emotional and psychological development of children.",
      image: courseImage2
    },
    {
      title: "Sports Literacy Coach (Special Needs)",
      icon: "M5.5 10.5V6a2.5 2.5 0 015 0v4.5m0 0V15a2.5 2.5 0 01-5 0v-4.5m13 0V6a2.5 2.5 0 00-5 0v4.5m0 0V15a2.5 2.5 0 005 0v-4.5",
      desc: "Empower children with special needs through tailored, inclusive sports and physical literacy coaching.",
      image: courseImage3
    }
  ];

  const batches = [
    { label: "Summer Batch", date: "June 15 – Sept 15", status: "20 students" },
    { label: "Fall Batch", date: "Sept 15 – Dec 15", status: "20 students" },
    { label: "Winter Batch", date: "Jan 15 – April 15", status: "20 students" }
  ];

  return (
    <div className="courses-page-premium">
      {/* 1. Banner */}
      <section className="cw-banner">
        <div className="cw-container">
          <h2 className="cw-banner-title">ORGANISATIONAL PSYCHOLOGY</h2>
        </div>
      </section>

      {/* 2. Hero Overview Section */}
      <section className="cw-hero scroll-from-center">
        <div className="cw-container">
          <div className="cw-hero-row">
            <div className="cw-hero-image-wrap">
              <img src={heroImage} alt="Organisational Psychology Banner" />
            </div>
          </div>
          <h2 className="cw-hero-heading">ORGANISATIONAL PSYCHOLOGY</h2>
          <div className="cw-hero-intro">
            <p className="cw-hero-intro-first" style={{ textAlign: 'justify', textAlignLast: 'center', marginBottom: '1.5rem' }}>
              Our Organisational Psychology programme is committed to helping professionals discover the human dynamics that shape workplace culture, performance, and growth. Guided by the belief that people always carry within them the resources they need to succeed, the programme brings a coaching sensibility to every session — equipping HR managers, team leaders, and individual contributors alike with the insight and tools to make a meaningful impact in their organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Academy Overview Cards Section */}
      <section className="academy-overview-cards-section">
        <div className="container">
          <div className="overview-cards-container scroll-from-center">
            <div className="overview-card-box">
              <div className="card-number-badge">01</div>
              <p>
                Established to bridge the gap between academic psychology and real-world organisational application, Jeppiaar Academy of Psychology & Research offers specialised programmes aligned with global mental health and behavioural science standards.
              </p>
            </div>
            <div className="overview-card-box">
              <div className="card-number-badge">02</div>
              <p>
                The Academy delivers advanced diploma programmes across key domains including Counselling & Organisational Psychology, Child Psychology, Forensic Psychology, and Art Therapy — combining strong theoretical foundations with practical, real-world application.
              </p>
            </div>
            <div className="overview-card-box">
              <div className="card-number-badge">03</div>
              <p>
                Our corporate programmes extend this expertise into organisations, equipping professionals with psychological tools to improve leadership effectiveness, enhance workplace relationships, and build high-performance cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats Banner Section (Compact site-themed layout) */}
      <section className="program-details-bar scroll-from-center" style={{ margin: '2rem 0 4rem', background: '#f5f5f5', padding: '1.5rem 0' }}>
        <div className="container">
          <div className="details-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 2.5fr 1.4fr', gap: '0', textAlign: 'center', background: '#f5f5f5' }}>
            {/* Column 1: 30 Hours */}
            <div className="detail-item" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem 1.75rem', borderRight: '3px solid #1A1260', background: '#f5f5f5', alignItems: 'center', justifyContent: 'center' }}>
              <span className="detail-value" style={{ fontFamily: "'Inter', sans-serif", fontSize: '2.6rem', color: '#1A1260', fontWeight: '900', textTransform: 'uppercase', lineHeight: '1' }}>30</span>
              <span className="detail-label" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', color: '#666', fontWeight: '600', textTransform: 'uppercase', marginTop: '0.4rem' }}>Hours</span>
            </div>
            
            {/* Column 2: Track 1 & 2 */}
            <div className="detail-item" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem 1.75rem', borderRight: '3px solid #1A1260', background: '#f5f5f5', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center', height: '100%' }}>
                <span className="detail-value" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.35rem', color: '#1A1260', fontWeight: '900', textTransform: 'uppercase' }}>Track 1</span>
                <span className="detail-value" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.35rem', color: '#1A1260', fontWeight: '900', textTransform: 'uppercase' }}>Track 2</span>
              </div>
            </div>

            {/* Column 3: Curriculums */}
            <div className="detail-item" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem 1.75rem', borderRight: '3px solid #1A1260', background: '#f5f5f5', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center', height: '100%', textAlign: 'left' }}>
                <span className="detail-value" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', color: '#1A1260', fontWeight: '800', lineHeight: '1.3', textTransform: 'none' }}>Applied Psychology Foundation</span>
                <span className="detail-value" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', color: '#1A1260', fontWeight: '800', lineHeight: '1.3', textTransform: 'none' }}>Role Specific Applied Tracks</span>
              </div>
            </div>

            {/* Column 4: Online + Offline */}
            <div className="detail-item" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem 1.75rem', borderRight: 'none', background: '#f5f5f5', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '0.2rem' }}>
                <span className="detail-value" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.4rem', color: '#1A1260', fontWeight: '900', textTransform: 'uppercase', lineHeight: '1.1' }}>Online</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.3rem', color: '#1A1260', fontWeight: '900' }}>+</span>
                <span className="detail-value" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.4rem', color: '#1A1260', fontWeight: '900', textTransform: 'uppercase', lineHeight: '1.1' }}>Offline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Structure Section */}
      <section className="course-syllabus program-structure-section scroll-from-center" style={{ background: '#0E0529', padding: '5rem 0 6rem' }}>
        <div className="container">
          <div className="syllabus-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div className="structure-title-area">
              <h2 className="section-title" style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '700', textTransform: 'uppercase', margin: '0' }}>
                PROGRAMME STRUCTURE
              </h2>
              <p style={{ color: '#E8E4F4', fontSize: '1.15rem', fontWeight: '700', textTransform: 'uppercase', margin: '0.6rem 0 0', letterSpacing: '1px' }}>
                TWO TRACKS. ONE INTEGRATED LEARNING JOURNEY
              </p>
            </div>
            <div className="syllabus-buttons" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button className="apply-now-btn-syllabus" onClick={openApplyModal} style={{ cursor: 'pointer' }}>
                Apply now
              </button>
              <a
                className="download-brochure-btn"
                href={brochurePdf}
                download="Blue_White_Corporate_Bifold_Brochure.pdf"
                style={{ textDecoration: 'none', textAlign: 'center' }}
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* Intro highlight box */}
          <div className="structure-intro-box" style={{ background: '#E8E4F4', borderRadius: '12px', padding: '2rem', marginBottom: '3rem', color: '#0E0529', fontWeight: '500', fontSize: '1.15rem', lineHeight: '1.6', textShadow: 'none' }}>
            The programme follows a two-track learning model. Participants begin with a 20-hour Applied Psychology Foundation (Track 1) and then move into a role-specific Track 2 pathway. The programme is delivered in a hybrid format through live online and in-person sessions over 45–60 days.
          </div>

          {/* Structure Table */}
          <div className="structure-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="structure-table" style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #ffffff', color: '#ffffff', textAlign: 'center' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ffffff' }}>
                  <th style={{ padding: '1.5rem', borderRight: '2px solid #ffffff', color: '#E8E4F4', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase' }}>Track</th>
                  <th style={{ padding: '1.5rem', borderRight: '2px solid #ffffff', color: '#E8E4F4', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase' }}>Sessions</th>
                  <th style={{ padding: '1.5rem', borderRight: '2px solid #ffffff', color: '#E8E4F4', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase' }}>Hours</th>
                  <th style={{ padding: '1.5rem', color: '#E8E4F4', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase' }}>Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '2px solid #ffffff' }}>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '700' }}>
                    <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>Track 1</div>
                    <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Applied Psychology Foundation</div>
                  </td>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>20 * 1 Hour</td>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>20 Hours</td>
                  <td style={{ padding: '1.8rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>Online + Live</td>
                </tr>
                <tr style={{ borderBottom: '2px solid #ffffff' }}>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '700' }}>
                    <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>Track 2A</div>
                    <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>HR Leadership</div>
                  </td>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 * 1 Hour</td>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 Hours</td>
                  <td style={{ padding: '1.8rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>In Person - On Location</td>
                </tr>
                <tr style={{ borderBottom: '2px solid #ffffff' }}>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '700' }}>
                    <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>Track 2B</div>
                    <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Managers</div>
                  </td>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 * 1 Hour</td>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 Hours</td>
                  <td style={{ padding: '1.8rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>In Person - On Location</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '700' }}>
                    <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>Track 2C</div>
                    <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Individual Contributors</div>
                  </td>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 * 1 Hour</td>
                  <td style={{ padding: '1.8rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 Hours</td>
                  <td style={{ padding: '1.8rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>In Person - On Location</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Programme Outcomes Section */}
      <section className="learning-outcomes scroll-from-center">
        <div className="container">
          <h2 className="section-title">PROGRAMME OUTCOMES</h2>
          <div className="outcomes-box">
            <ul className="outcomes-list">
              <li>Understand Human Behaviour & Applied Psychology</li>
              <li>Improve Leadership & Managerial Effectiveness</li>
              <li>Build High-Performance Teams</li>
              <li>Reduce Workplace Stress & Conflict</li>
              <li>Design a Strong Organisational Culture</li>
              <li>Sharpen Decision-Making at Every Level</li>
              <li>Increase Individual & Team Productivity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <LeadGeneration />

      <CourseApplyModal
        isOpen={showApplyModal}
        onClose={closeApplyModal}
        formData={applyForm}
        onFormChange={handleApplyFormChange}
        onSubmit={handleApplySubmit}
      />
    </div>
  );
};

export default Courses;
