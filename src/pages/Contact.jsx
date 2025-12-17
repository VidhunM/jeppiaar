// import React, { useState } from 'react';
// import RouteMap from '../components/RouteMap/RouteMap';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     location: '',
//     hearAbout: '',
//     message: '',
//     authorize: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({
//       fullName: '',
//       email: '',
//       phoneNumber: '',
//       location: '',
//       hearAbout: '',
//       message: '',
//       authorize: false
//     });
//   };

//   return (
//     <div className="contact-page">
//       <div className="contact-content">
//         <div className="container">
//           <div className="contact-grid">
//             {/* Left Column - Get in Touch with Jeppiaar */}
//             <div className="contact-info-section">
//               <h2 className="contact-main-heading">Get in Touch with Jeppiaar</h2>
//               <div className="contact-info-card-wrapper">
//                 <div className="contact-info-item">
//                   <div className="contact-icon">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
//                     </svg>
//                   </div>
//                   <div className="contact-info-content">
//                     <h3>Admissions</h3>
//                     <a href="tel:+919381811111" className="contact-value">+91 93818-11111</a>
//                   </div>
//                 </div>

//                 <div className="contact-divider"></div>

//                 <div className="contact-info-item">
//                   <div className="contact-icon">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
//                     </svg>
//                   </div>
//                   <div className="contact-info-content">
//                     <h3>Address</h3>
//                     <p className="contact-value">1/40H , EJR Enclave , Mount Poonamallee Road , St. Thomas Mt , Chennai - 600016</p>
//                   </div>
//                 </div>

//                 <div className="contact-divider"></div>

//                 <div className="contact-info-item">
//                   <div className="contact-icon">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white"/>
//                     </svg>
//                   </div>
//                   <div className="contact-info-content">
//                     <h3>Queries</h3>
//                     <a href="mailto:mail@jeppiaaracademy.com" className="contact-value">mail@jeppiaaracademy.com</a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Get in Touch Form */}
//             <div className="contact-form-section">
//               <h2 className="contact-form-heading">Get in Touch</h2>
//               <form className="contact-form" onSubmit={handleSubmit}>
//                 <div className="form-row">
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Full Name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-row">
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     placeholder="Phone Number"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="location"
//                     placeholder="Location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <select
//                   name="hearAbout"
//                   value={formData.hearAbout}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">How did you hear about us?</option>
//                   <option value="Google Search">Google Search</option>
//                   <option value="Social Media">Social Media</option>
//                   <option value="Friend/Referral">Friend/Referral</option>
//                   <option value="Advertisement">Advertisement</option>
//                   <option value="Website">Website</option>
//                   <option value="Email">Email</option>
//                   <option value="Newsletter">Newsletter</option>
//                   <option value="Event/Seminar">Event/Seminar</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 <textarea
//                   name="message"
//                   placeholder="Your message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 />
//                 <div className="checkbox-container">
//                   <input
//                     type="checkbox"
//                     name="authorize"
//                     id="authorize"
//                     checked={formData.authorize}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label htmlFor="authorize">
//                     I authorize Jeppiaar Academy of Psychology & Research and its associates to contact me with updates and notification.
//                   </label>
//                 </div>
//                 <button type="submit" className="submit-btn">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <RouteMap />
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import RouteMap from '../components/RouteMap/RouteMap';
import './Contact.css';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxkxbxdGjZXg6gEwlwLj06EBsqjazMeFRfegIgx3C-s9hhxKuGe95eruoVKrhcneWm/exec";

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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Restrict phone number to digits only and limit to 10 digits
    if (name === 'phoneNumber') {
      const numericValue = value.replace(/\D/g, ''); // Remove non-digits
      if (numericValue.length <= 10) {
        setFormData(prev => ({
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
    
    setFormData(prev => ({
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
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    // Phone number validation (must be exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setMessage({ type: 'error', text: 'Please enter a valid 10-digit phone number.' });
      return;
    }
    
    setLoading(true);
    setMessage(null);
  
    try {
      const formBody = new URLSearchParams(formData).toString();
  
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      });
  
      const text = await response.text();
  
      if (text === "success") {
        setMessage({ type: 'success', text: 'Thank you! Your message has been submitted.' });
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          location: '',
          hearAbout: '',
          message: '',
          authorize: false
        });
      } else {
        setMessage({ type: 'error', text: 'Submission failed. Please try again.' });
      }
  
    } catch (error) {
      console.error(error);
      setMessage({ type: 'error', text: 'Network error! Please try again.' });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">

            {/* Left Section */}
            <div className="contact-info-section">
              <h2 className="contact-main-heading">Get in Touch with Jeppiaar</h2>

              <div className="contact-info-card-wrapper">

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h3>Admissions</h3>
                    <a href="tel:+919381811111" className="contact-value">
                      +91 93818-11111
                    </a>
                  </div>
                </div>

                <div className="contact-divider"></div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h3>Address</h3>
                    <p className="contact-value">
                      1/40H, EJR Enclave, Mount Poonamallee Road,
                      St. Thomas Mount, Chennai - 600016
                    </p>
                  </div>
                </div>

                <div className="contact-divider"></div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h3>Queries</h3>
                    <a href="mailto:mail@jeppiaaracademy.com" className="contact-value">
                      mail@jeppiaaracademy.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Section */}
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
                    maxLength={100}
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number (10 digits)"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onKeyPress={handlePhoneKeyPress}
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
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

                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  required
                >
                  <option value="">How did you hear about us?</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend/Referral">Friend/Referral</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Website">Website</option>
                  <option value="Email">Email</option>
                  <option value="Newsletter">Newsletter</option>
                  <option value="Event/Seminar">Event/Seminar</option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="authorize"
                    name="authorize"
                    checked={formData.authorize}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="authorize">
                    I authorize Jeppiaar Academy of Psychology & Research
                    to contact me with updates and notifications.
                  </label>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
                {message && (
                  <p className={`contact-form-message ${message.type === 'error' ? 'error' : 'success'}`}>
                    {message.text}
                  </p>
                )}
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
