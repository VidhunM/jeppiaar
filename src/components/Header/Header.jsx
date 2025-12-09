import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/icons/Logo1.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/leadership" onClick={() => setIsMobileMenuOpen(false)}>Leadership</Link>
          <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Diploma Programs</Link>
          <Link to="/research" onClick={() => setIsMobileMenuOpen(false)}>Research & Publication</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </nav>

        <button className="cta-button" onClick={() => window.location.href = '/contact'}>
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
  );
};

export default Header;

