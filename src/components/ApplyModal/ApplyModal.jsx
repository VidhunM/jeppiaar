import React from 'react';
import logo from '../../assets/icons/Logo1.png';
import './ApplyModal.css';

const ApplyModal = ({ isOpen, onClose, formData, onFormChange, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="apply-modal-overlay" onClick={onClose}>
      <div className="apply-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="apply-modal-close" onClick={onClose}>×</button>
        
        <div className="apply-modal-header">
          <div className="apply-modal-logo">
            <img src={logo} alt="Jeppiaar Academy Logo" />
          </div>
          <h2 className="apply-modal-title">Advanced Diploma Courses in Psychology- Admissions open!</h2>
        </div>

        <form className="apply-modal-form" onSubmit={onSubmit}>
          <div className="apply-form-row">
            <div className="apply-form-column">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onFormChange}
                placeholder="Name"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={onFormChange}
                placeholder="Mobile Number"
                required
              />
              <select
                name="country"
                value={formData.country}
                onChange={onFormChange}
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Singapore">Singapore</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Other">Other</option>
              </select>
              <select
                name="city"
                value={formData.city}
                onChange={onFormChange}
                required
              >
                <option value="">Select City</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="apply-form-column">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onFormChange}
                placeholder="Email address"
                required
              />
              <select
                name="state"
                value={formData.state}
                onChange={onFormChange}
                required
              >
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Telangana">Telangana</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={onFormChange}
                placeholder="Highest Qualification (completed as of June 2026)"
                className="apply-form-input"
                required
              />
              <select
                name="course"
                value={formData.course}
                onChange={onFormChange}
                required
              >
                <option value="">Select Diploma Course</option>
                <option value="Counselling and Child Psychology">Counselling and Child Psychology</option>
                <option value="Counselling and Organisational Psychology">Counselling and Organisational Psychology</option>
                <option value="Counselling and Forensic Psychology">Counselling and Forensic Psychology</option>
                <option value="Art Therapy">Art Therapy</option>
              </select>
            </div>
          </div>

          <label className="apply-form-checkbox">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={onFormChange}
              required
            />
            <span>I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates</span>
          </label>

          <button type="submit" className="apply-form-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;

