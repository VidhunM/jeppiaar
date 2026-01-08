import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-conditions-page">
      <div className="terms-conditions-banner">
        <h1>Terms and Conditions</h1>
      </div>

      <div className="terms-conditions-content">
        <div className="policy-container">
          <div className="effective-date">
            <p><strong>Last Updated:</strong> 07-01-2026</p>
          </div>
          <section className="policy-section">
            <p>Welcome to Jeppiaar Academy ("we", "our", "us"). By accessing or using https://jeppiaaracademy.com, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree, please do not use our website or services.</p>
          </section>

          <section className="policy-section">
            <h2>1. Use of Website</h2>
            <p>This website is intended for individuals seeking information about our academic programs, training services, courses, events, and institutional offerings. You agree to use this website only for lawful purposes and in a manner that does not violate any applicable laws or regulations.</p>
          </section>

          <section className="policy-section">
            <h2>2. Intellectual Property</h2>
            <p>All content on this website, including text, images, videos, logos, graphics, course materials, and branding, is the exclusive property of Jeppiaar Academy or its licensors. Unauthorized reproduction, distribution, modification, or commercial use is strictly prohibited.</p>
          </section>

          <section className="policy-section">
            <h2>3. Course & Service Information</h2>
            <p>We strive to ensure that all information related to courses, schedules, fees, and offerings is accurate. However, Jeppiaar Academy reserves the right to modify, update, or discontinue any course or service without prior notice.</p>
          </section>

          <section className="policy-section">
            <h2>4. User Responsibilities</h2>
            <p>Users agree not to:</p>
            <ul>
              <li>Submit false or misleading information</li>
              <li>Attempt to gain unauthorized access to the website or systems</li>
              <li>Upload malicious code or engage in activities that disrupt website functionality</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. External Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or policies of such external sites.</p>
          </section>

          <section className="policy-section">
            <h2>6. Limitation of Liability</h2>
            <p>Jeppiaar Academy shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website or services.</p>
          </section>

          <section className="policy-section">
            <h2>7. Governing Law</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Tamil Nadu, India.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
