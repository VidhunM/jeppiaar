import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo1 from '../../assets/images/footerI.png';
import './Footer.css';
import '../../pages/ApplyModalPopup.css';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and page render
      setTimeout(() => {
        const attemptScroll = () => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            // Retry if section not found yet
            setTimeout(attemptScroll, 50);
          }
        };
        attemptScroll();
      }, 300);
    } else {
      // If already on home page, scroll immediately
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  const handleCertificationPrograms = (e) => {
    e.preventDefault();
    window.open('https://www.voxdemy.com/courses/Psychology-Basics-Course-Jan-2026-68569c00e0203b5c9661eafa', '_blank');
  };

  const handleResearchWing = (e) => {
    e.preventDefault();
    window.open('https://www.thepoloresearch.com/', '_blank');
  };

  const handleInternships = (e) => {
    e.preventDefault();
    window.open('https://www.voxdemy.com/courses/Voxdemy-Internship-May-2025-Batch-680dcda04238861d5cad3f02', '_blank');
  };

  const handleYoungVox = (e) => {
    e.preventDefault();
    setShowUnderConstruction(true);
  };

  const handleFAQ = (e) => {
    e.preventDefault();
    scrollToSection('faq-section');
  };

  const handleAdmissions = (e) => {
    e.preventDefault();
    scrollToSection('admissions-banner');
  };

  const closePopup = () => {
    setShowUnderConstruction(false);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src={Logo1} 
                alt="Jeppiaar Academy"
              />
            </div>
            <div className="social-media">
              <a href="https://www.instagram.com/jeppiaar_academy_of_psychology?igsh=MTZkNnNtZWpmdWRoag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/zhSC2v7vYjZ5ifAr/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/jeppiaar-academy-of-psychology-and-research/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#" onClick={handleCertificationPrograms}>Online Courses</a></li>
              <li><a href="#" onClick={handleResearchWing}>Research Wing - POLO</a></li>
              <li><a href="#" onClick={handleInternships}>Internships</a></li>
              <li><a href="#" onClick={handleYoungVox}>YoungVox</a></li>
              <li><a href="#" onClick={handleFAQ}>FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Academics</h4>
            <ul>
              <li><Link to="/counselling-child-psychology">Advanced Diploma in Counselling and Child Psychology</Link></li>
              <li><Link to="/counselling-organizational-psychology">Advanced Diploma in Counselling and Organizational Psychology</Link></li>
              <li><Link to="/counselling-forensic-psychology">Advanced Diploma in Counselling and Forensic Psychology</Link></li>
              <li><Link to="/counselling-art-therapy">Advanced Diploma in Art Therapy</Link></li>
              <li><a href="#" onClick={handleAdmissions}>Admissions 2026</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>GET IN TOUCH</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </span>
                <p>First floor, EJR Enclave, 1/40H, Mount Poonamallee Rd, Ramapuram, Viralur, Parangi Malai, Chennai, St.Thomas Mount, Tamil Nadu 600016</p>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <a href="mailto:mail@jeppiaaracademy.com">mail@jeppiaaracademy.com</a>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.59a1 1 0 0 1-.24 1.01l-2.21 2.19z" />
                  </svg>
                </span>
                <a href="tel:+919381811111"> +91 93818-11111 / +91 80987-87575</a>
              </div>
            </div>
            <div className="footer-map">
              <iframe
                src="https://maps.google.com/maps?q=13.007243,80.201819&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px', aspectRatio: '1 / 1' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Jeppiaar Academy of Psychology & Research. All Rights Reserved. | <Link to="/terms">Terms and Conditions</Link> | <Link to="/privacy">Privacy Policy</Link> | <Link to="/cancellation">Cancellation Policy</Link></p>
        </div>
      </div>

      {showUnderConstruction && (
        <div className="under-construction-popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>Coming Soon</h2>
            <p>Please check back soon!</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
