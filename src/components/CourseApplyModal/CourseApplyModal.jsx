import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import logo from "../../assets/icons/Logo1.png";
import "../ApplyModal/ApplyModal.css"; // Reuse existing styles

const WEBSITE_LEAD_URL = "https://api.jeppiaaracademy.com/api/lead/website";

const CourseApplyModal = ({ isOpen, onClose, formData, onFormChange }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.mobile)) {
      setMessage({ type: "error", text: "Please enter a valid 10-digit mobile number." });
      return;
    }

    const payload = {
      name: formData.name,
      phone: `91${formData.mobile}`,
      email: formData.email,
      city: formData.city,
      state: formData.state,
      enquiry: formData.course || "Certification Courses",
      source: "Website - Course Apply Modal",
      notes: [
        formData.qualification ? `Highest Qualification: ${formData.qualification}` : '',
        formData.batch ? `Selected Batch: ${formData.batch}` : ''
      ].filter(Boolean).join(' | '),
    };

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(WEBSITE_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

      setMessage({ type: "success", text: "Application submitted successfully!" });
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Submission failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  
  const modal = (
    <div className="apply-modal-overlay" onClick={onClose}>
      <div className="apply-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="apply-modal-close" onClick={onClose}>×</button>

        <div className="apply-modal-header">
          <div className="apply-modal-logo">
            <img src={logo} alt="Jeppiaar Academy Logo" />
          </div>
          <h2 className="apply-modal-title">
            Certification Courses
            <br />
            2026 Admissions open!
          </h2>
        </div>

        <form className="apply-modal-form" onSubmit={handleSubmit}>
          <div className="apply-form-row">
            <div className="apply-form-column">
              <input type="text" name="name" value={formData.name} onChange={onFormChange} placeholder="Name" required />
              <input type="tel" name="mobile" value={formData.mobile} onChange={onFormChange} onKeyPress={(e) => { const char = String.fromCharCode(e.which || e.keyCode); if (!/[0-9]/.test(char)) e.preventDefault(); }} inputMode="numeric" placeholder="Mobile Number (10 digits)" maxLength={10} pattern="[0-9]{10}" required />
              
              <select name="state" value={formData.state} onChange={onFormChange} required>
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Telangana">Telangana</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Other">Other</option>
              </select>

              <input type="text" name="qualification" value={formData.qualification} onChange={onFormChange} placeholder="Highest Qualification" required />
            </div>

            <div className="apply-form-column">
              <input type="email" name="email" value={formData.email} onChange={onFormChange} placeholder="Email Address" maxLength={100} pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required />
              
              <select name="country" value={formData.country} onChange={onFormChange} required>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>

              <select name="city" value={formData.city} onChange={onFormChange} required>
                <option value="">Select City</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Other">Other</option>
              </select>

              <select name="course" value={formData.course} onChange={onFormChange} required>
                <option value="">Select Certification Course</option>
                <option value="Certification in Learning & Behavior Support Specialist">Certification in Learning & Behavior Support Specialist</option>
                <option value="Certification in Play Therapy & Child Emotional Specialist">Certification in Play Therapy & Child Emotional Specialist</option>
                <option value="Certification in Sports Literacy Coach (Special Needs)">Certification in Sports Literacy Coach (Special Needs)</option>
              </select>

              <select name="batch" value={formData.batch || ""} onChange={onFormChange} required>
                <option value="">Select Batch</option>
                <option value="Summer Batch (June 15 – Sept 15)">Summer Batch (June 15 – Sept 15)</option>
                <option value="Fall Batch (Sept 15 – Dec 15)">Fall Batch (Sept 15 – Dec 15)</option>
                <option value="Winter Batch (Jan 15 – April 15)">Winter Batch (Jan 15 – April 15)</option>
              </select>
            </div>
          </div>

          <label className="apply-form-checkbox">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={onFormChange} required />
            <span>I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates</span>
          </label>

          <button type="submit" className="apply-form-submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          {message && <p className={`apply-form-message ${message.type === "error" ? "error" : "success"}`}>{message.text}</p>}
        </form>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modal, document.body);
};

export default CourseApplyModal;
