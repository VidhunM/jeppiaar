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
  const clickInProgressRef = useRef(false);
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
      // Don't close if clicking inside the dropdown area
      const navDropdown = event.target.closest('.nav-dropdown');
      const dropdownToggle = event.target.closest('.dropdown-toggle');
      const dropdownMenu = event.target.closest('.dropdown-menu');
      const dropdownLabel = event.target.closest('.dropdown-label');
      const dropdownIcon = event.target.closest('.dropdown-icon');
      
      const clickedInside = navDropdown || dropdownToggle || dropdownMenu || dropdownLabel || dropdownIcon;
      
      if (isDropdownOpen && !clickedInside) {
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
                // Only allow hover if not disabled, not clicked, and no click in progress
                if (window.innerWidth > 768 && !isDropdownClicked && !hoverDisabled && !clickInProgressRef.current) {
                  setIsDropdownOpen(true);
                  dropdownStateRef.current = true;
                }
              }}
              onMouseLeave={(e) => {
                // Only close on hover leave if it was opened by hover (not click)
                if (window.innerWidth > 768 && !isDropdownClicked && !hoverDisabled && !clickInProgressRef.current) {
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
                onMouseDown={(e) => {
                  // Mark that a click is in progress to prevent hover interference
                  clickInProgressRef.current = true;
                  e.stopPropagation();
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  // Immediately disable hover to prevent interference
                  setHoverDisabled(true);
                  
                  // Use functional form of setState to ensure we have the latest state
                  setIsDropdownOpen(prevState => {
                    const willBeOpen = !prevState;
                    
                    // Handle side effects based on the new state
                    if (willBeOpen) {
                      // Will be opening the dropdown
                      setIsDropdownClicked(true);
                      // Re-enable hover after opening to allow normal hover behavior
                      setTimeout(() => {
                        setHoverDisabled(false);
                        clickInProgressRef.current = false;
                      }, 200);
                    } else {
                      // Will be closing the dropdown
                      setIsDropdownClicked(false);
                      setHoverDisabled(false); // Re-enable hover immediately when closing
                      setTimeout(() => {
                        clickInProgressRef.current = false;
                      }, 100);
                    }
                    
                    return willBeOpen;
                  });
                }}
                onMouseUp={(e) => {
                  // Also stop propagation on mouseup to prevent issues
                  e.stopPropagation();
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
                      // Maintain clicked state when opened via click
                      if (isDropdownClicked) {
                        setIsDropdownClicked(true);
                      }
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768) {
                      // If opened via click, close when leaving menu
                      // If opened via hover, also close when leaving
                      setIsDropdownOpen(false);
                      setIsDropdownClicked(false);
                      dropdownStateRef.current = false;
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
            <Link 
              to="/research" 
              onClick={(e) => {
                e.preventDefault();
                setShowUnderConstruction(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Us
            </Link>
          </nav>

          <button 
            className="cta-button" 
            onClick={openApplyModal}
          >
            Join Us Now
          </button>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
        </button>
        <button 
            className="cta-button" 
            onClick={openApplyModal}
          >
            Login
          </button>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
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

