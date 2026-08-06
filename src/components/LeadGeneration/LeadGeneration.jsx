// import React from 'react';
// import contactImage from '../../assets/images/contact.png';
// import './LeadGeneration.css';

// const LeadGeneration = ({ onShowConstructionPopup }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your interest! We will contact you soon.');
//   };

//   return (
//     <section id="start-career-section" className="lead-generation-section">
//       <div className="container">
//         <div className="lead-content">
//           <div className="lead-form-panel scroll-from-left">
//             <h2>Start your Psychology<br />Career Today!</h2>
//             <p className="lead-subtitle">Upgrade your skills with practice-oriented diploma programs</p>
//             <form 
//               className="lead-form"
//               onSubmit={handleSubmit}
//             >
//               <div className="form-row">
//                 <input type="text" placeholder="Name" required />
//                 <input type="email" placeholder="Email address" required />
//               </div>
//               <div className="form-row">
//                 <input type="tel" placeholder="Mobile number" required />
//                 <select className="course-select" required>
//                   <option value="">Select Diploma Course</option>
//                   <option value="Counselling and Child Psychology">1. Counselling and Child Psychology</option>
//                   <option value="Counselling and Organisational Psychology">2. Counselling and Organisational Psychology</option>
//                   <option value="Counselling and Forensic Psychology">3. Counselling and Forensic Psychology</option>
//                   <option value="Art Therapy">4. Art Therapy</option>
//                 </select>
//               </div>
//               <label className="checkbox-label">
//                 <input type="checkbox" required />
//                 <span>I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates and notification</span>
//               </label>
//               <div className="form-buttons">
//                 <button type="submit" className="btn-primary">Apply Now</button>
//                 <button 
//                   type="button" 
//                   className="btn-secondary"
//                   onClick={onShowConstructionPopup}
//                 >
//                   Download Prospectus
//                 </button>
//                 <button 
//                   type="button" 
//                   className="btn-secondary"
//                   onClick={onShowConstructionPopup}
//                 >
//                   Contact Us
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="lead-image-panel scroll-from-right">
//             <img 
//               src={contactImage} 
//               alt="Student"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500"%3E%3Crect fill="%23e0e0e0" width="500" height="500"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadGeneration;

import React, { useState } from 'react';
import contactImage from '../../assets/images/contact.png';
import brochurePdf from '../../assets/images/broucher.pdf';
import uaeBrochurePdf from '../../assets/images/AURA ACADEMIA - UAE Broucher.pdf';
import './LeadGeneration.css';

// Website lead API endpoint
const WEBSITE_LEAD_URL = "https://api.jeppiaaracademy.com/api/lead/website";

const LeadGeneration = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    consent: false
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Restrict phone number to digits only and limit to 10 digits
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, ''); // Remove non-digits
      if (numericValue.length <= 10) {
        setForm(prev => ({
          ...prev,
          [name]: numericValue
        }));
      }
      return;
    }
    
    // Limit email length
    if (name === 'email' && value.length > 100) {
      return;
    }
    
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhoneKeyPress = (e) => {
    // Only allow numeric keys (0-9)
    const char = String.fromCharCode(e.which || e.keyCode);
    if (!/[0-9]/.test(char)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // client-side basic validation
    if (!form.name || !form.email || !form.phone || !form.course || !form.consent) {
      setMessage({ type: 'error', text: 'Please fill all fields and accept consent.' });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    // Phone number validation (must be exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(form.phone)) {
      setMessage({ type: 'error', text: 'Please enter a valid 10-digit mobile number.' });
      return;
    }

    // Build payload for Website Lead API
    const payload = {
      name: form.name,
      phone: `91${form.phone}`,
      email: form.email,
      enquiry: form.course || 'Advanced Diploma Programmes',
      source: 'Website - Lead Generation',
    };

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(WEBSITE_LEAD_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setMessage({ type: 'success', text: 'Thank you — we will contact you soon.' });
      setForm({ name: '', email: '', phone: '', course: '', consent: false });
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Network error! Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="start-career-section" className="lead-generation-section">
      <div className="container">
        <div className="lead-content">
          <div className="lead-form-panel scroll-from-left">
            {message && (
              <p className={`form-message form-message-top ${message.type === 'error' ? 'error' : 'success'}`}>
                {message.text}
              </p>
            )}
            <h2>Start your Psychology Career Today!</h2>
            <p className="lead-subtitle">Upgrade your skills with practice-oriented diploma programs</p>
            <form 
              className="lead-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" required />
                <input 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  type="email" 
                  placeholder="Email address" 
                  maxLength={100}
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  required 
                />
              </div>
              <div className="form-row">
                <input 
                  name="phone" 
                  value={form.phone} 
                  onChange={handleChange}
                  onKeyPress={handlePhoneKeyPress}
                  type="tel" 
                  inputMode="numeric"
                  placeholder="Mobile number (10 digits)" 
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required 
                />
                <select name="course" value={form.course} onChange={handleChange} className="course-select" required>
                  <option value="">Select Programme / Course</option>
                  <optgroup label="Diploma Programmes - India">
                    <option value="Advanced Diploma in Counselling and Child Psychology (India)">1. Counselling & Child Psychology (India)</option>
                    <option value="Advanced Diploma in Counselling and Organisational Psychology (India)">2. Counselling & Organisational Psychology (India)</option>
                    <option value="Advanced Diploma in Counselling and Forensic Psychology (India)">3. Counselling & Forensic Psychology (India)</option>
                    <option value="Advanced Diploma in Art Therapy (India)">4. Art Therapy (India)</option>
                  </optgroup>
                  <optgroup label="Dubai">
                    <option value="Advanced Diploma in Counselling and Child Psychology (Dubai)">Counselling & Child Psychology (Dubai)</option>
                  </optgroup>
                  <option value="Dubai Short Online Certifications">Dubai Short Online Certifications</option>
                </select>
              </div>
              <label className="checkbox-label">
                <input name="consent" type="checkbox" checked={form.consent} onChange={handleChange} required />
                <span>I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates and notification</span>
              </label>
              <div className="form-buttons">
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Enquire Now'}
                </button>
                <a
                  className="btn-secondary"
                  href={brochurePdf}
                  download="Jeppiaar_Psychology_India_Prospectus.pdf"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap'
                  }}
                >
                  India Prospectus
                </a>
                <a
                  className="btn-secondary"
                  href={uaeBrochurePdf}
                  download="AURA_ACADEMIA_UAE_Prospectus.pdf"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap'
                  }}
                >
                  UAE Prospectus
                </a>
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
