import React, { useState, useEffect, useRef } from 'react';
import CourseApplyModal from '../components/CourseApplyModal/CourseApplyModal';
import { initScrollAnimations } from '../utils/scrollAnimations';
import heroImage from '../assets/images/ad01.jpg'; // Using an existing relevant image
import courseImage1 from '../assets/images/cp1.png';
import courseImage2 from '../assets/images/cp2.png';
import courseImage3 from '../assets/images/cp4.png';
import './Courses.css';

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
          <h2 className="cw-banner-title">CERTIFICATION PROGRAMS & SPECIALIZED TRAINING</h2>
        </div>
      </section>

      {/* Courses Showcase */}
      <section className="premium-courses-section">
        <div className="container">
          <div className="section-header-top scroll-from-center">
            <div className="section-header-left">
              <h2 className="premium-heading">Explore Certifications</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="slider-nav">
              <button className="nav-arrow prev" onClick={scrollPrev}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="nav-arrow next" onClick={scrollNext}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="premium-grid scroll-from-center" ref={gridRef}>
            {certificationCourses.map((course, idx) => (
              <div
                key={idx}
                className={`premium-card ${activeCourseIndex === idx ? 'active-card' : ''}`}
                onClick={() => handleCardClick(idx)}
              >
                <div className="card-image-wrap">
                  <img src={course.image} alt={course.title} className="card-main-image" />
                </div>
                <div className="card-content">
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batches Section (Dark cinematic transition) */}
      <section className="premium-batches-section">
        <div className="container">
          <div className="batches-container scroll-from-center">
            <div className="batches-info">
              <h2 className="premium-heading">Batches and Eligibility</h2>
              <h3 className="selected-course-title">
                Certification in {certificationCourses[activeCourseIndex].title}
              </h3>
              <p className="text-gray" style={{ marginBottom: '2.5rem' }}>Here is the schedule for our upcoming batches. Each cohort is strictly limited to 20 students to ensure maximum engagement.</p>

              <div className="batches-timeline">
                {batches.map((batch, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                      {idx !== batches.length - 1 && <div className="marker-line"></div>}
                    </div>
                    <div className="timeline-content">
                      <span className="batch-label">{batch.label}</span>
                      <h4 className="batch-date">{batch.date}</h4>
                      <span className="batch-capacity">{batch.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="eligibility-glass-panel">
              <div className="glass-inner">
                <h3>Eligibility criteria:</h3>
                <p className="eligibility-desc">To ensure all participants can keep up with our rigorous standards, we require a foundational academic background.</p>

                <div className="eligibility-options">
                  <div className="e-option">
                    <div className="e-icon">✓</div>
                    <span>Completion of Diploma course (Any)</span>
                  </div>
                  <div className="e-divider"><span>(or)</span></div>
                  <div className="e-option">
                    <div className="e-icon">✓</div>
                    <span>Completion of Degree program (Any)</span>
                  </div>
                </div>

                <div className="apply-cta-box">
                  <h4>Ready to join our next intake?</h4>
                  <button className="premium-apply-btn" onClick={openApplyModal}>
                    <span>Apply Now</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
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
