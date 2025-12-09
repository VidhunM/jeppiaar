import React from 'react';
import RouteMap from '../components/RouteMap/RouteMap';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for more information</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <a href="tel:+919840200420">+91 98402 00420</a>
                </div>
                <div className="contact-item">
                  <strong>Email:</strong>
                  <a href="mailto:info@jeppiaaracademy.com">info@jeppiaaracademy.com</a>
                </div>
                <div className="contact-item">
                  <strong>Address:</strong>
                  <p>Tambaram, India</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form 
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! We will get back to you soon.');
                }}
              >
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" required />
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
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

