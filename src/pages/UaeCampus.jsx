import React from 'react';
import { Link } from 'react-router-dom';
import './UaeCampus.css';
import admissionFormPdfUrl from '../assets/images/Student_Admission_Form_2026.pdf';
import uaeBrochurePdf from '../assets/images/AURA ACADEMIA - UAE Broucher.pdf';
import uaeImage from '../assets/images/uae.jpeg';

const UaeCampus = () => {
  const handleDownloadFormPdf = () => {
    const a = document.createElement('a');
    a.href = admissionFormPdfUrl;
    a.download = 'Student_Admission_Form_2026.pdf';
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleDownloadBrochure = () => {
    const a = document.createElement('a');
    a.href = uaeBrochurePdf;
    a.download = 'AURA ACADEMIA - UAE Broucher.pdf';
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="admission-procedure-page uae-campus-page">
      <section className="admission-procedure-hero uae-campus-hero">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="uae-hero-subtitle">International Collaboration</span>
          
          <div className="collaboration-container">
            <div className="collab-card jeppiaar-card">
              <h3>JEPPIAAR ACADEMY OF PSYCHOLOGY AND RESEARCH</h3>
              <span className="location-tag">Tamil Nadu, India</span>
            </div>
            
            <div className="collab-connector">
              <div className="connector-line"></div>
              <span className="collab-text">in collaboration with</span>
              <div className="connector-line"></div>
            </div>
            
            <div className="collab-card aura-card">
              <h3>AURA ACADEMIA</h3>
              <span className="location-tag">Sharjah, UAE</span>
            </div>
          </div>

          <div className="collab-programme-banner">
            <h2>For Psychology Programme in UAE</h2>
          </div>

          <div className="admission-hero-actions">
            <Link className="admission-apply-btn" to="/apply-online-uae">
              Apply Now (Online)
            </Link>
            <button
              type="button"
              className="admission-apply-btn secondary"
              onClick={handleDownloadFormPdf}
            >
              Download Form (PDF)
            </button>
          </div>
        </div>
      </section>

      <section className="uae-who-we-are-section">
        <div className="container">
          <div className="uae-who-we-are-grid">
            <div className="uae-who-we-are-text-col">
              <h2 className="uae-who-we-are-title">WHO WE ARE</h2>
              <div className="uae-who-we-are-separator"></div>
              
              <p className="uae-who-we-are-text highlight-text">
                The Jeppiaar Group of Institutions is a well-established educational group with over three decades of excellence in higher education, consistently providing quality, value-based, and future-oriented education.
              </p>
              <p className="uae-who-we-are-text">
                Founded with a vision to make education accessible and meaningful, the group has grown into a trusted name across Tamil Nadu. Rooted in academic rigor and strong ethical values, the Jeppiaar Group emphasizes innovation, industry relevance, experiential learning, and holistic student development.
              </p>
              <p className="uae-who-we-are-text">
                Within this progressive educational ecosystem, the Jeppiaar Academy of Psychology and Research was established to bridge the gap between academic learning in psychology and real-world application. Guided by a vision to nurture ethical, skilled, and research-oriented mental health professionals, the Academy offers advanced, practice-focused programmes aligned with global mental health standards. The Academy follows a strong practice-oriented approach, integrating applied learning, professional supervision, ethical practice, and research exposure, thereby preparing learners for impactful and responsible careers in the field of psychology.
              </p>
            </div>
            
            <div className="uae-who-we-are-image-col">
              <div className="uae-vertical-image-wrapper">
                <img src={uaeImage} alt="UAE Campus Collaboration" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="uae-course-offering-section">
        <div className="container">
          <div className="uae-section-header">
            <span className="uae-section-subtitle">Collaborative Offering</span>
            <h2 className="uae-section-title">COURSE OFFERED IN COLLABORATION WITH AURA ACADEMIA - UAE</h2>
            <div className="uae-section-separator"></div>
            <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
              <button 
                type="button" 
                className="admission-apply-btn" 
                onClick={handleDownloadBrochure}
                style={{ background: '#1A1260', color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download UAE Brochure
              </button>
            </div>
          </div>
          
          <div className="uae-course-grid">
            <div className="uae-course-info-col">
              <h2 className="uae-course-title">Diploma in Counselling and Child Psychology</h2>
              
              <div className="uae-location-info">
                <span className="location-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span><strong>Direct Class Location:</strong> Flat 803 tower A, Al rayyan complex, Al Nahdha, Sharjah, UAE</span>
              </div>

              <div className="uae-learning-outcomes">
                <h3>Program Objectives:</h3>
                <p className="curriculum-intro">The Advanced Diploma in Counselling and Child Psychology Curriculum aims to:</p>
                <ul className="uae-objectives-list">
                  <li>
                    <span className="objective-checkmark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="objective-text">Build a strong foundation in counselling theories and skills with emphasis on child and adolescent populations.</span>
                  </li>
                  <li>
                    <span className="objective-checkmark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="objective-text">Develop competencies in assessing and addressing emotional, behavioral, and developmental concerns in children.</span>
                  </li>
                  <li>
                    <span className="objective-checkmark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="objective-text">Foster ethical, culturally sensitive, and child-centered counselling practices.</span>
                  </li>
                  <li>
                    <span className="objective-checkmark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="objective-text">Integrate theory with hands-on training through supervised practicum and field exposure.</span>
                  </li>
                  <li>
                    <span className="objective-checkmark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="objective-text">Prepare reflective practitioners capable of promoting children’s mental health and wellbeing across settings.</span>
                  </li>
                  <li>
                    <span className="objective-checkmark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="objective-text">Jeppiaar Academy of Psychology and Research course will be offered at Sharjah, UAE.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="uae-course-feature-col">
              <div className="uae-infrastructure-card">
                <div className="infrastructure-badge">Facilities & Infrastructure</div>
                <h3>State-of-the-Art Learning Environment</h3>
                <p>
                  With state-of-the-art infrastructure, equipped with smart boards and air-conditioned classrooms, Jeppiaar Academy of Psychology and Research offers an application-driven learning environment in Aura Academia where students gain real world psychological skills to thrive in the fast growing mental health field.
                </p>
                <div className="infrastructure-decor-line"></div>
                <div className="infrastructure-features">
                  <div className="infra-feature-item">
                    <span className="infra-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </span>
                    <span>Smart Boards</span>
                  </div>
                  <div className="infra-feature-item">
                    <span className="infra-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="2" x2="12" y2="22"></line>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M20 16.5l-4-4 4-4M4 7.5l4 4-4 4M7.5 20l4-4 4 4M16.5 4l-4 8-4-8"></path>
                      </svg>
                    </span>
                    <span>Air-Conditioned Classrooms</span>
                  </div>
                  <div className="infra-feature-item">
                    <span className="infra-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12.5V16a6 6 0 0 0 12 0v-3.5"></path>
                      </svg>
                    </span>
                    <span>Application-Driven Environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="uae-about-programme-section">
        <div className="container">
          <div className="uae-programme-grid">
            <div className="uae-programme-content-col">
              <span className="uae-section-subtitle">ABOUT PROGRAMME</span>
              <h2 className="uae-programme-title">Diploma in Counselling and Child Psychology</h2>
              
              <div className="uae-programme-description">
                <p>
                  The Advanced Diploma in Counselling and Child Psychology offers strong theoretical and practical training to support the emotional and developmental needs of children and adolescents. The programme covers counselling psychology, child development, assessment methods, and ethical practice, preparing learners for roles in educational, clinical, and community settings.
                </p>
                <p>
                  Through supervised practice and case-based learning, students develop age-appropriate counselling skills and gain hands-on experience in promoting mental health, resilience, and positive coping.
                </p>
              </div>
            </div>

            <div className="uae-programme-details-col">
              <div className="uae-details-card">
                <div className="details-card-section">
                  <h4>Entry Requirements</h4>
                  <p>Bachelor Degree in any discipline</p>
                </div>
                
                <div className="details-card-divider"></div>
                
                <div className="details-card-section">
                  <h4>Duration</h4>
                  <p className="duration-highlight">6 Months <span>(150 Hours)</span></p>
                </div>

                <div className="details-card-divider"></div>

                <div className="details-card-section">
                  <h4>Hybrid Course Structure</h4>
                  <ul className="hours-breakdown">
                    <li>
                      <span className="breakdown-label">Offline Classes:</span>
                      <span className="breakdown-value">60 hours at Sharjah, UAE</span>
                    </li>
                    <li>
                      <span className="breakdown-label">Online Sessions:</span>
                      <span className="breakdown-value">60 hours</span>
                    </li>
                    <li>
                      <span className="breakdown-label">Supervised Internship:</span>
                      <span className="breakdown-value">30 hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="uae-skills-careers-section">
        <div className="container">
          <div className="uae-skills-careers-grid">
            <div className="uae-skills-col">
              <span className="uae-section-subtitle">SKILL-BASED TRAINING INCLUDES</span>
              
              <ul className="uae-skills-list">
                <li>
                  <span className="skill-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="skill-item-text">Learning Disabilities</span>
                </li>
                <li>
                  <span className="skill-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="skill-item-text">Family Counselling</span>
                </li>
                <li>
                  <span className="skill-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="skill-item-text">Child Counselling</span>
                </li>
                <li>
                  <span className="skill-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="skill-item-text">Handling Children with Special Needs</span>
                </li>
                <li>
                  <span className="skill-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="skill-item-text">School Counselling</span>
                </li>
                <li>
                  <span className="skill-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="skill-item-text">Effective Parenting</span>
                </li>
              </ul>
            </div>

            <div className="uae-careers-col">
              <div className="uae-careers-card">
                <h3>Career Opportunities</h3>
                <ul className="careers-list">
                  <li>
                    <span className="career-dot"></span>
                    <span className="career-text">Child Counsellor</span>
                  </li>
                  <li>
                    <span className="career-dot"></span>
                    <span className="career-text">Educational Counsellor</span>
                  </li>
                  <li>
                    <span className="career-dot"></span>
                    <span className="career-text">Rehabilitation and Behavioural Counsellor</span>
                  </li>
                  <li>
                    <span className="career-dot"></span>
                    <span className="career-text">School Counsellor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="uae-programme-structure-section">
        <div className="container">
          <span className="uae-section-subtitle">PROGRAMME STRUCTURE</span>
          <h2 className="uae-structure-title">Diploma in Counselling and Child Psychology</h2>
          
          <div className="uae-structure-grid">
            <div className="structure-card">
              <div className="structure-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3>Programme Duration</h3>
              <p><strong>Six Months</strong></p>
              <p className="sub-detail">Total Hours: 150 hours (inclusive of 30 hours internship with Dr. Saranya Jaikumar and team)</p>
            </div>

            <div className="structure-card">
              <div className="structure-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3>Delivery Mode</h3>
              <p><strong>Blended Learning Model</strong></p>
              <p className="sub-detail">Comprising both offline classroom sessions at Sharjah, UAE and online learning through live classes and recorded sessions.</p>
            </div>

            <div className="structure-card">
              <div className="structure-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Commencement</h3>
              <p><strong>Programme Start Date</strong></p>
              <p className="commence-date">15th October 2026</p>
            </div>
          </div>

          <div className="uae-intakes-container">
            <h3 className="intakes-section-title">Proposed Student Intake</h3>
            
            <div className="intakes-grid">
              <div className="intake-card">
                <div className="intake-header">
                  <h4>October 2026 Intake</h4>
                </div>
                <div className="intake-body">
                  <ul>
                    <li>
                      <strong>Mode of Delivery:</strong>
                      <span>Hybrid (Offline Classroom & Online Learning)</span>
                    </li>
                    <li>
                      <strong>Student Intake:</strong>
                      <span>20–70 Students / Batch</span>
                    </li>
                    <li>
                      <strong>Batches Available:</strong>
                      <span>Weekend & Weekday</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="intake-card">
                <div className="intake-header">
                  <h4>February 2027 Intake</h4>
                </div>
                <div className="intake-body">
                  <ul>
                    <li>
                      <strong>Mode of Delivery:</strong>
                      <span>Hybrid (Offline Classroom & Online Learning)</span>
                    </li>
                    <li>
                      <strong>Student Intake:</strong>
                      <span>20–70 Students / Batch</span>
                    </li>
                    <li>
                      <strong>Batches Available:</strong>
                      <span>Weekend & Weekday</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uae-study-materials-banner">
          <p>All the study materials and manuals will be provided to all the students</p>
        </div>
      </section>
    </div>
  );
};

export default UaeCampus;
