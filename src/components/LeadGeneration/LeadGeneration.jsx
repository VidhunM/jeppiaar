import React from 'react';
import contactImage from '../../assets/images/contact.png';
import './LeadGeneration.css';

const LeadGeneration = ({ onShowConstructionPopup }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <section id="start-career-section" className="lead-generation-section">
      <div className="container">
        <div className="lead-content">
          <div className="lead-form-panel scroll-from-left">
            <h2>Start your Psychology<br />Career Today!</h2>
            <p className="lead-subtitle">Upgrade your skills with practice-oriented diploma programs</p>
            <form 
              className="lead-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email address" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Mobile number" required />
                <select className="course-select" required>
                  <option value="">Select Diploma Course</option>
                  <option value="Counselling and Child Psychology">1. Counselling and Child Psychology</option>
                  <option value="Counselling and Organisational Psychology">2. Counselling and Organisational Psychology</option>
                  <option value="Counselling and Forensic Psychology">3. Counselling and Forensic Psychology</option>
                  <option value="Art Therapy">4. Art Therapy</option>
                </select>
              </div>
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates and notification</span>
              </label>
              <div className="form-buttons">
                <button type="submit" className="btn-primary">Apply Now</button>
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={onShowConstructionPopup}
                >
                  Download Prospectus
                </button>
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={onShowConstructionPopup}
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
          <div className="lead-image-panel scroll-from-right">
            <img 
              src={contactImage} 
              alt="Student"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500"%3E%3Crect fill="%23e0e0e0" width="500" height="500"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;

