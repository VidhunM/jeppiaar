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
            <p><strong>Last Updated:</strong> 07-01-2026</p>
          </div>
          <section className="policy-section">
            <p>Jeppiaar Academy values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
          </section>

          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Name, email address, phone number</li>
              <li>Educational details provided through forms</li>
              <li>Website usage data such as IP address, browser type, and pages visited</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Respond to enquiries and provide academic information</li>
              <li>Process registrations and communications</li>
              <li>Improve website performance and user experience</li>
              <li>Send updates related to courses, events, or announcements</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Data Protection</h2>
            <p>We implement reasonable security measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
          </section>

          <section className="policy-section">
            <h2>4. Sharing of Information</h2>
            <p>We do not sell or rent personal data. Information may be shared only:</p>
            <ul>
              <li>When required by law</li>
              <li>With trusted service providers for website or communication support</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Cookies</h2>
            <p>Our website may use cookies to enhance browsing experience. You may disable cookies through your browser settings if preferred.</p>
          </section>

          <section className="policy-section">
            <h2>6. User Rights</h2>
            <p>You may request access, correction, or deletion of your personal data by contacting us using the details provided on the website.</p>
          </section>

          <section className="policy-section">
            <h2>7. Policy Updates</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
