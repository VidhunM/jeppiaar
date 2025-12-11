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
import './LeadGeneration.css';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw94ZBBLU5OIcbG_Ydo-Qizu-JiSmA6x0JwNmtHTcQ9-L2onyqDhwkACsVGfXgxI708/exec";

const LeadGeneration = ({ onShowConstructionPopup }) => {
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
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // client-side basic validation
    if (!form.name || !form.email || !form.phone || !form.course || !form.consent) {
      setMessage({ type: 'error', text: 'Please fill all fields and accept consent.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors', // default
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      // Apps Script returns JSON
      const result = await res.json();

      if (result.status === 'success') {
        setMessage({ type: 'success', text: 'Thank you — we will contact you soon.' });
        // reset or keep values
        setForm({ name: '', email: '', phone: '', course: '', consent: false });
      } else {
        setMessage({ type: 'error', text: result.message || 'Submission failed.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Network error: ' + err.toString() });
    } finally {
      setLoading(false);
    }
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
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" required />
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email address" required />
              </div>
              <div className="form-row">
                <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Mobile number" required />
                <select name="course" value={form.course} onChange={handleChange} className="course-select" required>
                  <option value="">Select Diploma Course</option>
                  <option value="Counselling and Child Psychology">Counselling and Child Psychology</option>
                  <option value="Counselling and Organisational Psychology">Counselling and Organisational Psychology</option>
                  <option value="Counselling and Forensic Psychology">Counselling and Forensic Psychology</option>
                  <option value="Art Therapy">Art Therapy</option>
                </select>
              </div>
              <label className="checkbox-label">
                <input name="consent" type="checkbox" checked={form.consent} onChange={handleChange} required />
                <span>I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates and notification</span>
              </label>
              <div className="form-buttons">
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Apply Now'}
                </button>
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
              {message && (
                <p className={`form-message ${message.type === 'error' ? 'error' : 'success'}`}>
                  {message.text}
                </p>
              )}
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
