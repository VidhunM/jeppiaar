import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo01 from '../../assets/icons/Logo01.png';
import ApplyModal from '../ApplyModal/ApplyModal';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isCoursesDropdownClicked, setIsCoursesDropdownClicked] = useState(false);
  const [isCampusDropdownOpen, setIsCampusDropdownOpen] = useState(false);
  const [isCampusDropdownClicked, setIsCampusDropdownClicked] = useState(false);
  const [hoverDisabled, setHoverDisabled] = useState(false);
  const dropdownStateRef = useRef(false);
  const coursesDropdownStateRef = useRef(false);
  const campusDropdownStateRef = useRef(false);
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
  const [isMobileViewport, setIsMobileViewport] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobileViewport(e.matches);

    // Set initial in case of late hydration / resize before mount
    setIsMobileViewport(mq.matches);

    if (mq.addEventListener) {
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }

    // Safari fallback
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  // Keep ref in sync with state
  useEffect(() => {
    dropdownStateRef.current = isDropdownOpen;
  }, [isDropdownOpen]);

  useEffect(() => {
    coursesDropdownStateRef.current = isCoursesDropdownOpen;
  }, [isCoursesDropdownOpen]);

  useEffect(() => {
    campusDropdownStateRef.current = isCampusDropdownOpen;
  }, [isCampusDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is inside the diploma dropdown specifically
      const diplomaMenu = document.getElementById('diploma-dropdown');
      const diplomaToggle = document.querySelector('[aria-controls="diploma-dropdown"]');
      const coursesMenu = document.getElementById('courses-dropdown');
      const coursesToggle = document.querySelector('[aria-controls="courses-dropdown"]');
      const campusMenu = document.getElementById('campus-dropdown');
      const campusToggle = document.querySelector('[aria-controls="campus-dropdown"]');
      const clickedElement = event.target;
      
      // Check if click is inside the dropdown menu or its toggle button
      const clickedInsideDiploma = 
        (diplomaMenu && diplomaMenu.contains(clickedElement)) ||
        (diplomaToggle && diplomaToggle.contains(clickedElement)) ||
        clickedElement.closest('#diploma-dropdown') ||
        clickedElement.closest('[aria-controls="diploma-dropdown"]');
        
      const clickedInsideCourses = 
        (coursesMenu && coursesMenu.contains(clickedElement)) ||
        (coursesToggle && coursesToggle.contains(clickedElement)) ||
        clickedElement.closest('#courses-dropdown') ||
        clickedElement.closest('[aria-controls="courses-dropdown"]');

      const clickedInsideCampus = 
        (campusMenu && campusMenu.contains(clickedElement)) ||
        (campusToggle && campusToggle.contains(clickedElement)) ||
        clickedElement.closest('#campus-dropdown') ||
        clickedElement.closest('[aria-controls="campus-dropdown"]');
      
      // Don't close if clicking inside the diploma dropdown area
      if (isDropdownOpen && !clickedInsideDiploma) {
        setIsDropdownOpen(false);
        setIsDropdownClicked(false);
        setHoverDisabled(false);
        dropdownStateRef.current = false;
      }

      if (isCoursesDropdownOpen && !clickedInsideCourses) {
        setIsCoursesDropdownOpen(false);
        setIsCoursesDropdownClicked(false);
        setHoverDisabled(false);
        coursesDropdownStateRef.current = false;
      }

      if (isCampusDropdownOpen && !clickedInsideCampus) {
        setIsCampusDropdownOpen(false);
        setIsCampusDropdownClicked(false);
        setHoverDisabled(false);
        campusDropdownStateRef.current = false;
      }
    };

    if (isDropdownOpen || isCoursesDropdownOpen || isCampusDropdownOpen) {
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
  }, [isDropdownOpen, isCoursesDropdownOpen, isCampusDropdownOpen]);

  const handleNavClick = (e, path) => {
    if (isHomePage && (path === '/research' || path === '/contact')) {
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

  const handleLoginClick = (e) => {
    // ERP login is not live yet — show "Coming Soon"
    e.preventDefault();
    setShowUnderConstruction(true);
    setIsMobileMenuOpen(false);
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
                src={Logo01} 
                alt="Jeppiaar Academy"
                onError={(e) => {
                  console.error('Logo image failed to load, trying fallback');
                  e.target.src = '/icons/Logo01.png';
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

            <div 
              className="nav-dropdown"
              onMouseEnter={(e) => {
                if (window.innerWidth > 768 && !hoverDisabled) {
                  setIsCoursesDropdownOpen(true);
                  coursesDropdownStateRef.current = true;
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768 && !isCoursesDropdownClicked) {
                  setIsCoursesDropdownOpen(false);
                  coursesDropdownStateRef.current = false;
                }
              }}
            >
              <div
                className="dropdown-toggle"
                role="button"
                aria-expanded={isCoursesDropdownOpen}
                aria-controls="courses-dropdown"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsCoursesDropdownOpen(prevState => {
                    const willBeOpen = !prevState;
                    if (willBeOpen) {
                      setIsCoursesDropdownClicked(true);
                      setHoverDisabled(true);
                      setTimeout(() => setHoverDisabled(false), 300);
                    } else {
                      setIsCoursesDropdownClicked(false);
                      setHoverDisabled(false);
                    }
                    return willBeOpen;
                  });
                }}
              >
                <span className="dropdown-label">Corporate & Programs</span>
                <span className={`dropdown-icon ${isCoursesDropdownOpen ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {isCoursesDropdownOpen && (
                <div 
                  id="courses-dropdown" 
                  className="dropdown-menu"
                  onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                      setIsCoursesDropdownOpen(true);
                      coursesDropdownStateRef.current = true;
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768 && !isCoursesDropdownClicked) {
                      setIsCoursesDropdownOpen(false);
                      coursesDropdownStateRef.current = false;
                    }
                  }}
                >
                  <Link 
                    to="/courses" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsCoursesDropdownOpen(false);
                      setIsCoursesDropdownClicked(false);
                      coursesDropdownStateRef.current = false;
                    }}
                  >
                    Organizational Psychology
                  </Link>
                </div>
              )}
            </div>
            <div 
              className="nav-dropdown"
              onMouseEnter={(e) => {
                if (window.innerWidth > 768 && !hoverDisabled) {
                  setIsCampusDropdownOpen(true);
                  campusDropdownStateRef.current = true;
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768 && !isCampusDropdownClicked) {
                  setIsCampusDropdownOpen(false);
                  campusDropdownStateRef.current = false;
                }
              }}
            >
              <div
                className="dropdown-toggle"
                role="button"
                aria-expanded={isCampusDropdownOpen}
                aria-controls="campus-dropdown"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsCampusDropdownOpen(prevState => {
                    const willBeOpen = !prevState;
                    if (willBeOpen) {
                      setIsCampusDropdownClicked(true);
                      setHoverDisabled(true);
                      setTimeout(() => setHoverDisabled(false), 300);
                    } else {
                      setIsCampusDropdownClicked(false);
                      setHoverDisabled(false);
                    }
                    return willBeOpen;
                  });
                }}
              >
                <span className="dropdown-label">Our Campus</span>
                <span className={`dropdown-icon ${isCampusDropdownOpen ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {isCampusDropdownOpen && (
                <div 
                  id="campus-dropdown" 
                  className="dropdown-menu"
                  onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                      setIsCampusDropdownOpen(true);
                      campusDropdownStateRef.current = true;
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768 && !isCampusDropdownClicked) {
                      setIsCampusDropdownOpen(false);
                      campusDropdownStateRef.current = false;
                    }
                  }}
                >
                  <Link 
                    to="/admission-procedure" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsCampusDropdownOpen(false);
                      setIsCampusDropdownClicked(false);
                      campusDropdownStateRef.current = false;
                    }}
                  >
                    Admission
                  </Link>
                  <Link 
                    to="/uae-campus" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsCampusDropdownOpen(false);
                      setIsCampusDropdownClicked(false);
                      campusDropdownStateRef.current = false;
                    }}
                  >
                    UAE Campus
                  </Link>
                </div>
              )}
            </div>
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
          </nav>

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

