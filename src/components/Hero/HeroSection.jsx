import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import heroImage from '../../assets/images/hero.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroImage,
      title: 'Transform Your Future',
      titleLine2: 'Through Psychology',
      tagline: 'Join Jeppiaar Academy for world-class psychology education'
    },
    {
      image: heroImage,
      title: 'Excellence in',
      titleLine2: 'Psychology Education',
      tagline: 'Practice-oriented diplomas with real-world experience'
    }
  ];

  const programCards = [
    { text: 'Clinical Psychology', color: '#FDFFB6' },
    { text: 'Counseling Psychology', color: '#D9EDF8' },
    { text: 'Industrial Psychology', color: '#DEDAF3' },
    { text: 'Research Methods', color: '#FFAEAD' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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
      <div 
        className="hero-slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <button className="hero-nav prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="hero-nav next" onClick={nextSlide}>
          ›
        </button>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="title-line">{slides[currentSlide].title}</span>
              <span className="title-line">{slides[currentSlide].titleLine2}</span>
            </h1>
            <p className="tagline">{slides[currentSlide].tagline}</p>
          </div>
        </div>

        <div className="hero-sidebar">
          <div className="admission-box">
            <div className="admission-year">2025</div>
            <div className="admission-text">
              <span>Admissions</span>
              <span>Open Now</span>
            </div>
          </div>
          <button 
            className="apply-now-btn"
            onClick={() => window.location.href = '/contact'}
          >
            Apply Now
          </button>
        </div>

        <div 
          className="vertical-apply-tab"
          onClick={() => window.location.href = '/contact'}
        >
          <span>Apply Now</span>
        </div>
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

