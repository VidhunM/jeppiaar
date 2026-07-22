import React, { useState, useEffect, useRef } from 'react';
import CourseApplyModal from '../components/CourseApplyModal/CourseApplyModal';
import { initScrollAnimations } from '../utils/scrollAnimations';
import heroImage from '../assets/images/op.jpeg'; // Using the specified op.jpeg image
import courseImage1 from '../assets/images/cp1.png';
import courseImage2 from '../assets/images/cp2.png';
import courseImage3 from '../assets/images/cp4.png';
import './Courses.css';
import '../components/LeadGeneration/LeadGeneration.css';
import contactImage from '../assets/images/contact.png';
import brochurePdf from '../assets/images/Organizational Psychology_Brouchre.pdf';

const Courses = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: '', email: '', mobile: '', country: '', city: '', state: '', course: '', batch: '', qualification: '', consent: false
  });
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryFor: 'Courses',
    heardAbout: '',
    heardAboutOther: ''
  });
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryMessage, setEnquiryMessage] = useState(null);

  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  const gridRef = useRef(null);

  const handleCardClick = (idx) => {
    setActiveCourseIndex(idx);
  };

  const scrollPrev = () => {
    if (gridRef.current) gridRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };
  const scrollNext = () => {
    if (gridRef.current) gridRef.current.scrollBy({ left: 350, behavior: 'smooth' });
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

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setEnquiryMessage(null);

    const name = String(enquiryForm.name || '').trim();
    const email = String(enquiryForm.email || '').trim();
    const phone = String(enquiryForm.phone || '').replace(/\D/g, '');
    const enquiryFor = String(enquiryForm.enquiryFor || '').trim();
    const heardAbout = String(enquiryForm.heardAbout || '').trim();
    const heardAboutOther = String(enquiryForm.heardAboutOther || '').trim();

    if (!name || !phone || !enquiryFor || !heardAbout) {
      setEnquiryMessage({ type: 'error', text: 'Please fill all fields.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEnquiryMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (phone.length < 10) {
      setEnquiryMessage({ type: 'error', text: 'Please enter a valid mobile number.' });
      return;
    }
    if (heardAbout === 'Other' && !heardAboutOther) {
      setEnquiryMessage({ type: 'error', text: 'Please specify where you heard about this site.' });
      return;
    }

    setEnquiryLoading(true);
    try {
      const heardText = heardAbout === 'Other' ? heardAboutOther : heardAbout;
      const payload = {
        name,
        phone,
        email,
        enquiry: enquiryFor,
        source: 'Website - Organisational Psychology Inline Enquiry Form',
        notes: `Heard about: ${heardText}`,
      };

      const res = await fetch('https://api.jeppiaaracademy.com/api/lead/website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      setEnquiryMessage({ type: 'success', text: 'Thank you! We will contact you soon.' });
      setEnquiryForm({ name: '', email: '', phone: '', enquiryFor: 'Courses', heardAbout: '', heardAboutOther: '' });
      setTimeout(() => setEnquiryMessage(null), 3000);
    } catch (err) {
      setEnquiryMessage({ type: 'error', text: `Submission failed: ${err?.message || String(err)}` });
    } finally {
      setEnquiryLoading(false);
    }
  };

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numeric = value.replace(/\D/g, '');
      if (numeric.length <= 15) {
        setEnquiryForm(prev => ({ ...prev, phone: numeric }));
      }
      return;
    }
    setEnquiryForm(prev => ({ ...prev, [name]: value }));
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

      {/* Program Highlights Section */}
      <section className="courses-program-highlights courses-highlights-section scroll-from-center">
        <div className="container">
          <div className="courses-highlights-content">
            <div className="courses-highlights-image">
              <img src={courseImage2} alt="Organizational Psychology Collaboration" />
            </div>
            <div className="courses-highlights-text" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="courses-highlights-subtitle" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', color: '#ffffff', opacity: '0.95', fontWeight: '400', marginBottom: '0.4rem' }}>
                Unlock your path to mastering organizational behavior and human dynamics
              </p>
              <h2 className="courses-highlights-title" style={{ fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '1.85rem', lineHeight: '1.2', textTransform: 'uppercase', color: '#ffffff', margin: '0.3rem 0 1.25rem' }}>
                ORGANISATIONAL PSYCHOLOGY<br />
                PROGRAMME
              </h2>
              <div className="courses-batch-boxes" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.35rem', marginBottom: '1.25rem' }}>
                <div className="batch-box" style={{ background: 'rgba(90, 85, 106, 0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', margin: '0 0 0.75rem' }}>Foundation Track</h3>
                  <ul className="batch-details" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    <li style={{ color: '#ffffff', fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0' }}>•</span>20 Hours of Core Learning
                    </li>
                    <li style={{ color: '#ffffff', fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0' }}>•</span>Applied Psychology Basics
                    </li>
                    <li style={{ color: '#ffffff', fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0' }}>•</span>Live classes or Self-Paced Learning
                    </li>

                  </ul>
                </div>
                <div className="batch-box" style={{ background: 'rgba(90, 85, 106, 0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', margin: '0 0 0.75rem' }}>Specialised Tracks</h3>
                  <ul className="batch-details" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    <li style={{ color: '#ffffff', fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0' }}>•</span>10 Hours of Focus Areas
                    </li>
                    <li style={{ color: '#ffffff', fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0' }}>•</span>Role-Specific Applied Tracks
                    </li>
                    <li style={{ color: '#ffffff', fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0' }}>•</span>Customized for Corporate Teams
                    </li>
                    <li style={{ color: '#ffffff', fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0' }}>•</span>Direct Classes
                    </li>
                  </ul>
                </div>
              </div>
              <div className="button-text-container" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <a
                  className="download-brochure-btn"
                  href={brochurePdf}
                  download="Organizational Psychology_Brouchre.pdf"
                  style={{ textDecoration: 'none', background: 'white', color: '#333', padding: '0.8rem 1.75rem', borderRadius: '50px', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer', textAlign: 'center', display: 'inline-block' }}
                >
                  Download Brochure
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Bar */}
      <section className="program-details-bar scroll-from-center" style={{ margin: '2rem 0 4rem' }}>
        <div className="container">
          <div className="details-grid" style={{ gridTemplateColumns: '1.2fr 1.2fr 2.5fr 1.4fr' }}>
            {/* Column 1: 30 Hours */}
            <div className="detail-item">
              <span className="detail-label">Duration</span>
              <span className="detail-value">30 Hours</span>
            </div>

            {/* Column 2: Tracks */}
            <div className="detail-item">
              <span className="detail-label">Tracks</span>
              <span className="detail-value" style={{ textTransform: 'none' }}>Track 1 & 2</span>
            </div>

            {/* Column 3: Curriculum */}
            <div className="detail-item">
              <span className="detail-label">Curriculum</span>
              <span className="detail-value" style={{ textTransform: 'none', fontSize: '1.1rem', lineHeight: '1.4', fontWeight: '700' }}>
                • Applied Psychology Foundation<br />
                • Role Specific Applied Tracks
              </span>
            </div>

            {/* Column 4: Delivery */}
            <div className="detail-item" style={{ borderRight: 'none' }}>
              <span className="detail-label">Delivery</span>
              <span className="detail-value" style={{ textTransform: 'none' }}>Online + Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Structure Section */}
      <section className="course-syllabus program-structure-section scroll-from-center">
        <div className="container">
          <div className="syllabus-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div className="structure-title-area">
              <h2 className="section-title">
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
          <div className="structure-intro-box" style={{ background: '#E8E4F4', borderRadius: '12px', padding: '1.25rem 2rem', marginBottom: '1.5rem', color: '#0E0529', fontWeight: '500', fontSize: '1.15rem', lineHeight: '1.6', textShadow: 'none' }}>
            The programme follows a two-track learning model. Participants begin with a 20-hour Applied Psychology Foundation (Track 1) and then move into a role-specific Track 2 pathway. The programme is delivered in a hybrid format through live online and in-person sessions over 45–60 days.
          </div>

          {/* Structure Table */}
          <div className="structure-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="structure-table" style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #ffffff', color: '#ffffff', textAlign: 'center' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ffffff' }}>
                  <th style={{ padding: '1rem', borderRight: '2px solid #ffffff', color: '#E8E4F4', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase' }}>Track</th>
                  <th style={{ padding: '1rem', borderRight: '2px solid #ffffff', color: '#E8E4F4', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase' }}>Sessions</th>
                  <th style={{ padding: '1rem', borderRight: '2px solid #ffffff', color: '#E8E4F4', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase' }}>Hours</th>
                  <th style={{ padding: '1rem', color: '#E8E4F4', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase' }}>Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '2px solid #ffffff' }}>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '700' }}>
                    <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>Track 1</div>
                    <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Applied Psychology Foundation</div>
                  </td>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>20 * 1 Hour</td>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>20 Hours</td>
                  <td style={{ padding: '1.1rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>Online + Live</td>
                </tr>
                <tr style={{ borderBottom: '2px solid #ffffff' }}>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '700' }}>
                    <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>Track 2A</div>
                    <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>HR Leadership</div>
                  </td>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 * 1 Hour</td>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 Hours</td>
                  <td style={{ padding: '1.1rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>In Person - On Location</td>
                </tr>
                <tr style={{ borderBottom: '2px solid #ffffff' }}>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '700' }}>
                    <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>Track 2B</div>
                    <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Managers</div>
                  </td>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 * 1 Hour</td>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 Hours</td>
                  <td style={{ padding: '1.1rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>In Person - On Location</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '700' }}>
                    <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>Track 2C</div>
                    <div style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Individual Contributors</div>
                  </td>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 * 1 Hour</td>
                  <td style={{ padding: '1.1rem 1.5rem', borderRight: '2px solid #ffffff', fontWeight: '600', fontSize: '1.1rem' }}>10 Hours</td>
                  <td style={{ padding: '1.1rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>In Person - On Location</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Programme Outcomes Section */}
      <section className="programme-outcomes scroll-from-center">
        <div className="container">
          <h2 className="section-title">PROGRAMME OUTCOMES</h2>
          <div className="programme-outcomes-box">
            <ul className="programme-outcomes-list">
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

      {/* Inline Enquiry Form Section */}
      <section id="start-career-section" className="lead-generation-section" style={{ paddingTop: '0', paddingBottom: '0' }}>
        <div className="container">
          <div className="lead-content">
            <div className="lead-form-panel scroll-from-left" style={{ background: '#0E0529', padding: '0.75rem 1.25rem' }}>
              <h2 style={{ color: '#ffffff', fontSize: '1.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.25rem', lineHeight: '1.2' }}>
                Enquire Now
              </h2>
              <p className="lead-subtitle" style={{ color: '#E8E4F4', opacity: '0.9', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Please share your details. We will reach you soon.
              </p>

              <form onSubmit={handleEnquirySubmit} className="enquiry-popup-form" style={{ background: 'transparent', padding: '0', boxShadow: 'none' }}>
                <div className="courses-inline-form-grid">
                  <label className="enquiry-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.9rem' }}>Name *</span>
                    <input
                      name="name"
                      value={enquiryForm.name}
                      onChange={handleEnquiryChange}
                      type="text"
                      placeholder="Your name"
                      required
                      style={{ background: '#ffffff', border: '1px solid #CCCCCC', borderRadius: '8px', padding: '0.6rem 0.9rem', color: '#0E0529', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }}
                    />
                  </label>

                  <label className="enquiry-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.9rem' }}>Email ID *</span>
                    <input
                      name="email"
                      value={enquiryForm.email}
                      onChange={handleEnquiryChange}
                      type="email"
                      placeholder="yourname@example.com"
                      maxLength={100}
                      required
                      style={{ background: '#ffffff', border: '1px solid #CCCCCC', borderRadius: '8px', padding: '0.6rem 0.9rem', color: '#0E0529', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }}
                    />
                  </label>

                  <label className="enquiry-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.9rem' }}>Mobile Number *</span>
                    <input
                      name="phone"
                      value={enquiryForm.phone}
                      onChange={handleEnquiryChange}
                      type="tel"
                      inputMode="numeric"
                      placeholder="Enter phone number"
                      maxLength={15}
                      required
                      style={{ background: '#ffffff', border: '1px solid #CCCCCC', borderRadius: '8px', padding: '0.6rem 0.9rem', color: '#0E0529', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }}
                    />
                  </label>

                  <label className="enquiry-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.95rem' }}>Enquire for *</span>
                    <select
                      name="enquiryFor"
                      value={enquiryForm.enquiryFor}
                      onChange={handleEnquiryChange}
                      required
                      style={{ background: '#ffffff', border: '1px solid #CCCCCC', borderRadius: '8px', padding: '0.6rem 0.9rem', color: '#0E0529', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }}
                    >
                      <option value="Courses">Courses</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </label>
                </div>

                <div className="courses-inline-form-grid" style={{ gridTemplateColumns: enquiryForm.heardAbout === 'Other' ? '1fr 1fr' : '1fr' }}>
                  <label className="enquiry-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.95rem' }}>Where did you hear about this site? *</span>
                    <select
                      name="heardAbout"
                      value={enquiryForm.heardAbout}
                      onChange={handleEnquiryChange}
                      required
                      style={{ background: '#ffffff', border: '1px solid #CCCCCC', borderRadius: '8px', padding: '0.6rem 0.9rem', color: '#0E0529', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }}
                    >
                      <option value="">Select</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Friend / Family">Friend / Family</option>
                      <option value="College / Staff">College / Staff</option>
                      <option value="Newspaper / TV">Newspaper / TV</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  {enquiryForm.heardAbout === 'Other' && (
                    <label className="enquiry-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.95rem' }}>Please specify *</span>
                      <input
                        name="heardAboutOther"
                        value={enquiryForm.heardAboutOther}
                        onChange={handleEnquiryChange}
                        type="text"
                        placeholder="Eg: referral, website, etc."
                        required
                        style={{ background: '#ffffff', border: '1px solid #CCCCCC', borderRadius: '8px', padding: '0.6rem 0.9rem', color: '#0E0529', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }}
                      />
                    </label>
                  )}
                </div>

                {enquiryMessage && (
                  <div
                    className={`enquiry-message ${enquiryMessage.type === 'error' ? 'error' : 'success'}`}
                    style={{ margin: '0.85rem 0', padding: '0.6rem', borderRadius: '8px', textAlign: 'center', fontWeight: '600', background: enquiryMessage.type === 'error' ? 'rgba(255, 77, 77, 0.15)' : 'rgba(77, 255, 77, 0.15)', color: enquiryMessage.type === 'error' ? '#ff4d4d' : '#4dff4d', border: enquiryMessage.type === 'error' ? '1px solid #ff4d4d' : '1px solid #4dff4d', fontSize: '0.9rem' }}
                  >
                    {enquiryMessage.text}
                  </div>
                )}

                <button className="enquiry-submit" type="submit" disabled={enquiryLoading} style={{ background: '#ffffff', color: '#0E0529', border: 'none', padding: '0.8rem 2rem', borderRadius: '50px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s ease', width: '100%', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                  {enquiryLoading ? 'Sending…' : 'Submit'}
                </button>
              </form>
            </div>
            <div className="lead-image-panel scroll-from-right" style={{ minHeight: '220px', margin: '0 0 -1rem 0.3rem' }}>
              <img src={contactImage} alt="Student" />
            </div>
          </div>
        </div>
      </section>

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
