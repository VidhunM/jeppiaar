import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import heroImage from '../../assets/images/hero.png';
import hero2Image from '../../assets/images/hero2.png';
import hero3Image from '../../assets/images/hero3.png';
import hero4Image from '../../assets/images/hero4.png';

const HeroSection = ({ onShowConstructionPopup, onScrollToCareerSection, onOpenApplyModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const slides = [
    {
      image: heroImage,
      title: 'Jeppiaar Academy of Psychology & Research',
      tagline: 'Mind - Science - Innovation'
    },
    {
      image: hero2Image,
      title: 'Jeppiaar Academy of Psychology & Research',
      tagline: 'Mind - Science - Innovation'
    },
    {
      image: hero3Image,
      title: 'Jeppiaar Academy of Psychology & Research',
      tagline: 'Mind - Science - Innovation'
    },
    {
      image: hero4Image,
      title: 'Jeppiaar Academy of Psychology & Research',
      tagline: 'Mind - Science - Innovation'
    }
  ];

  // Preload all hero images
  useEffect(() => {
    const imageUrls = [heroImage, hero2Image, hero3Image, hero4Image];
    const imagePromises = imageUrls.map((imageUrl) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
        // Force iOS to load the image
        if (img.complete) {
          resolve();
        }
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Still show content even if preload fails
      });
  }, []);

  const programCards = [
    { text: 'Counselling and Child Psychology', color: '#FDFFB6' },
    { text: 'Counselling and Organizational Psychology', color: '#D9EDF8' },
    { text: 'Counselling and Forensic Psychology', color: '#DEDAF3' },
    { text: 'Art Therapy', color: '#FFAEAD' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-section">
      {/* Preload all images as hidden img tags for iOS */}
      <div style={{ position: 'absolute', visibility: 'hidden', width: 0, height: 0, overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <img key={index} src={slide.image} alt="" />
        ))}
      </div>
      {/* Vertical Apply Now Tab - positioned relative to hero-section */}
      <div 
        className="vertical-apply-tab"
        onClick={() => {
          if (onOpenApplyModal) {
            onOpenApplyModal();
          } else if (onShowConstructionPopup) {
            onShowConstructionPopup();
          }
        }}
      >
        <span>Apply Now</span>
      </div>
      <div 
        className={`hero-slide ${currentSlide === 0 ? 'hero-slide-first' : ''} ${currentSlide === 3 ? 'hero-slide-fourth' : ''} ${imagesLoaded ? 'images-loaded' : ''}`}
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        {currentSlide === 0 && <div className="hero-gradient-overlay"></div>}
        <button className="hero-nav prev" onClick={prevSlide} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="hero-nav next" onClick={nextSlide} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {currentSlide === 0 && (
          <>
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  <span className="title-line">{slides[currentSlide].title}</span>
                  <span className="title-line">{slides[currentSlide].titleLine2}</span>
                </h1>
                <p className="tagline">{slides[currentSlide].tagline}</p>
                <p className="tagline-subtitle">(A unit of Sancta Maria Educational Trust)</p>
              </div>
            </div>

            <div className="hero-sidebar">
              <div className="admission-box">
                <div className="admission-year">2026</div>
                <div className="admission-text">
                  <span>Admissions</span>
                  <span>Open Now</span>
                </div>
              </div>
              <button 
                className="apply-now-btn"
                onClick={() => {
                  if (onOpenApplyModal) {
                    onOpenApplyModal();
                  } else if (onScrollToCareerSection) {
                    onScrollToCareerSection();
                  } else {
                    const startCareerSection = document.getElementById('start-career-section');
                    if (startCareerSection) {
                      startCareerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
              >
                Apply Now
              </button>
            </div>

          </>
        )}

        {currentSlide === 1 && (
          <>
            <div className="hero-rated-badge">
              <div className="rated-text">STUDENT RATED</div>
            </div>
            <div className="hero-rated-stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </>
        )}

        {currentSlide === 2 && (
          <>
            <div className="hero-feature-badge">
              <div className="feature-text">AC CLASSROOMS</div>
              <div className="feature-text">WITH SMART BOARD</div>
            </div>
          </>
        )}

        {currentSlide === 3 && (
          <>
            <div className="hero-feature-badge hero-feature-badge-fourth">
              <div className="feature-text feature-text-fourth">LEARN FROM</div>
              <div className="feature-text feature-text-fourth">LEADING PSYCHOLOGISTS</div>
            </div>
          </>
        )}
      </div>

      <div className="hero-programs-section">
        <div className="hero-programs-container">
          <div className="hero-programs-title-block">
            <div className="hero-programs-small-heading">OUR ADVANCED</div>
            <div className="hero-programs-bold-title">DIPLOMA PROGRAMS</div>
          </div>

          <div className="hero-programs-bubbles">
            {programCards.map((card, index) => (
              <div 
                key={index} 
                className="hero-program-bubble"
                style={{ backgroundColor: card.color }}
              >
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

