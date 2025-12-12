import React, { useState } from 'react';
import RouteMap from '../components/RouteMap/RouteMap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    hearAbout: '',
    message: '',
    authorize: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      location: '',
      hearAbout: '',
      message: '',
      authorize: false
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column - Get in Touch with Jeppiaar */}
            <div className="contact-info-section">
              <h2 className="contact-main-heading">Get in Touch with Jeppiaar</h2>
              <div className="contact-info-card-wrapper">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h3>Admissions</h3>
                    <a href="tel:+919381811111" className="contact-value">+91 93818-11111</a>
                  </div>
                </div>

                <div className="contact-divider"></div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h3>Address</h3>
                    <p className="contact-value">1/40H , EJR Enclave , Mount Poonamallee Road , St. Thomas Mt , Chennai - 600016</p>
                  </div>
                </div>

                <div className="contact-divider"></div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h3>Queries</h3>
                    <a href="mailto:mail@jeppiaaracademy.com" className="contact-value">mail@jeppiaaracademy.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Get in Touch Form */}
            <div className="contact-form-section">
              <h2 className="contact-form-heading">Get in Touch</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="hearAbout"
                  placeholder="How did you hear about us?"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="authorize"
                    id="authorize"
                    checked={formData.authorize}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="authorize">
                    I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates and notification.
                  </label>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <RouteMap />
    </div>
  );
};

export default Contact;
