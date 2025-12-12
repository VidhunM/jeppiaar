import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo1 from '../../assets/icons/Logo1.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    if (isHomePage && (path === '/courses' || path === '/research' || path === '/contact')) {
      e.preventDefault();
      setShowUnderConstruction(true);
      setIsMobileMenuOpen(false);
    }
    // Allow navigation to About page
    if (path === '/about') {
      setIsMobileMenuOpen(false);
    }
  };

  const closePopup = () => {
    setShowUnderConstruction(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="/" className="logo-container">
            <div className="logo">
              <img 
                src={Logo1} 
                alt="Jeppiaar Academy"
                onError={(e) => {
                  console.error('Logo image failed to load, trying fallback');
                  e.target.src = '/icons/Logo1.png';
                }}
                onLoad={() => {
                  console.log('Logo image loaded successfully');
                }}
              />
            </div>
          </Link>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={(e) => handleNavClick(e, '/about')}>About Us</Link>
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className="dropdown-toggle"
                onClick={(e) => {
                  if (isMobileMenuOpen) {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }
                }}
              >
                <Link 
                  to="/courses" 
                  onClick={(e) => {
                    if (!isMobileMenuOpen) {
                      handleNavClick(e, '/courses');
                    } else {
                      e.preventDefault();
                    }
                  }}
                >
                  Diploma Programs <span className="dropdown-arrow">▼</span>
                </Link>
              </div>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link 
                    to="/counselling-child-psychology" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Counselling & Child Psychology
                  </Link>
                  <Link 
                    to="/courses" 
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                      handleNavClick(e, '/courses');
                    }}
                  >
                    Counselling & Organizational Psychology
                  </Link>
                  <Link 
                    to="/courses" 
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                      handleNavClick(e, '/courses');
                    }}
                  >
                    Counselling & Forensic Psychology
                  </Link>
                  <Link 
                    to="/courses" 
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                      handleNavClick(e, '/courses');
                    }}
                  >
                    Art Therapy
                  </Link>
                </div>
              )}
            </div>
            <Link to="/research" onClick={(e) => handleNavClick(e, '/research')}>Research & Publication</Link>
            <Link to="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Contact Us</Link>
          </nav>

          <button 
            className="cta-button" 
            onClick={() => {
              const startCareerSection = document.getElementById('start-career-section');
              if (startCareerSection) {
                startCareerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              } else {
                window.location.href = '/contact';
              }
            }}
          >
            Join Us Now
          </button>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    {showUnderConstruction && (
      <div className="under-construction-popup" onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={closePopup}>×</button>
          <h2>Site Under Construction</h2>
          <p>This page is currently under construction. Please check back soon!</p>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;

