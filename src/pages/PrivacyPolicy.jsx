import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-policy-banner">
        <h1>Privacy Policy</h1>
      </div>

      <div className="privacy-policy-content">
        <div className="policy-container">
          <div className="effective-date">
            <p><strong>Effective Date:</strong> 01 January 2026</p>
          </div>
          <section className="policy-section">
            <h2>Introduction</h2>
            <p>Jeppiaar Academy respects your privacy and is committed to protecting personal information collected through https://jeppiaaracademy.com/.</p>
          </section>

          <section className="policy-section">
            <h2>Information Collected</h2>
            <p>Name, email, phone number, city, educational details, payment-related information, and usage data.</p>
          </section>

          <section className="policy-section">
            <h2>Use of Information</h2>
            <p>To respond to enquiries, manage registrations, process payments, improve services, and comply with legal obligations.</p>
          </section>

          <section className="policy-section">
            <h2>Data Sharing</h2>
            <p>We do not sell or rent personal data. Information may be shared with trusted service providers or legal authorities if required.</p>
          </section>

          <section className="policy-section">
            <h2>Data Security</h2>
            <p>Reasonable security measures are implemented to protect personal data.</p>
          </section>

          <section className="policy-section">
            <h2>User Rights</h2>
            <p>Users may request access, correction, or deletion of personal data by contacting the academy.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
