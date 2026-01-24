import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo1 from '../../assets/icons/Logo1.png';
import ApplyModal from '../ApplyModal/ApplyModal';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [hoverDisabled, setHoverDisabled] = useState(false);
  const dropdownStateRef = useRef(false);
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep ref in sync with state
  useEffect(() => {
    dropdownStateRef.current = isDropdownOpen;
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is inside the diploma dropdown specifically
      const diplomaMenu = document.getElementById('diploma-dropdown');
      const diplomaToggle = document.querySelector('[aria-controls="diploma-dropdown"]');
      const clickedElement = event.target;
      
      // Check if click is inside the dropdown menu or its toggle button
      const clickedInsideDiploma = 
        (diplomaMenu && diplomaMenu.contains(clickedElement)) ||
        (diplomaToggle && diplomaToggle.contains(clickedElement)) ||
        clickedElement.closest('#diploma-dropdown') ||
        clickedElement.closest('[aria-controls="diploma-dropdown"]');
      
      // Don't close if clicking inside the diploma dropdown area
      if (isDropdownOpen && !clickedInsideDiploma) {
        setIsDropdownOpen(false);
        setIsDropdownClicked(false);
        setHoverDisabled(false);
        dropdownStateRef.current = false;
      }
    };

    if (isDropdownOpen) {
      // Use click event with a small delay to let click handlers complete first
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

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

  const openApplyModal = () => {
    setShowApplyModal(true);
    setIsMobileMenuOpen(false);
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
    console.log('Apply form submitted:', applyForm);
    alert('Thank you for your interest! We will contact you soon.');
    closeApplyModal();
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
              onMouseEnter={(e) => {
                // Only allow hover on desktop
                if (window.innerWidth > 768 && !hoverDisabled) {
                  setIsDropdownOpen(true);
                  dropdownStateRef.current = true;
                }
              }}
              onMouseLeave={(e) => {
                // Only close on hover leave if it was opened by hover (not click)
                if (window.innerWidth > 768 && !isDropdownClicked) {
                  setIsDropdownOpen(false);
                  dropdownStateRef.current = false;
                }
              }}
            >
              <div
                className="dropdown-toggle"
                role="button"
                aria-expanded={isDropdownOpen}
                aria-controls="diploma-dropdown"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  // Toggle dropdown
                  setIsDropdownOpen(prevState => {
                    const willBeOpen = !prevState;
                    
                    if (willBeOpen) {
                      // Opening - set clicked state and disable hover temporarily
                      setIsDropdownClicked(true);
                      setHoverDisabled(true);
                      setTimeout(() => {
                        setHoverDisabled(false);
                      }, 300);
                    } else {
                      // Closing - reset states
                      setIsDropdownClicked(false);
                      setHoverDisabled(false);
                    }
                    
                    return willBeOpen;
                  });
                }}
              >
                <span className="dropdown-label">Advanced Diploma Programs</span>
                <span className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              {isDropdownOpen && (
                <div 
                  id="diploma-dropdown" 
                  className="dropdown-menu"
                  onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                      setIsDropdownOpen(true);
                      dropdownStateRef.current = true;
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768) {
                      // Close only if not clicked (hover mode)
                      if (!isDropdownClicked) {
                        setIsDropdownOpen(false);
                        dropdownStateRef.current = false;
                      }
                    }
                  }}
                >
                  <Link 
                    to="/counselling-child-psychology" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                      setIsDropdownClicked(false);
                      dropdownStateRef.current = false;
                    }}
                  >
                  Advanced Diploma in Counselling & Child Psychology
                  </Link>
                  <Link 
                    to="/counselling-organizational-psychology" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                      setIsDropdownClicked(false);
                      dropdownStateRef.current = false;
                    }}
                  >
                  Advanced Diploma in Counselling & Organizational Psychology
                  </Link>
                  <Link 
                    to="/counselling-forensic-psychology" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                      setIsDropdownClicked(false);
                      dropdownStateRef.current = false;
                    }}
                  >
                   Advanced Diploma in Counselling & Forensic Psychology
                  </Link>
                  <Link 
                    to="/counselling-art-therapy" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                      setIsDropdownClicked(false);
                      dropdownStateRef.current = false;
                    }}
                  >
                    Advanced Diploma in Art Therapy
                  </Link>
                </div>
              )}
            </div>
            <Link to="/admission-procedure" onClick={() => setIsMobileMenuOpen(false)}>Admission</Link>
            <Link 
              to="/research" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consultations
            </Link>
            <Link 
              to="/contact" 
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Us
            </Link>
            <a
              className="cta-button mobile-menu-cta"
              href="https://erp.jeppiaaracademy.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ERP Login"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
          </nav>

          <a
            className="cta-button desktop-cta"
            href="https://erp.jeppiaaracademy.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ERP Login"
          >
            Login
          </a>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
          <h2>Coming Soon</h2>
          <p>Please check back soon!</p>
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
    </>
  );
};

export default Header;

