import React from 'react';
import './CancellationPolicy.css';

const CancellationPolicy = () => {
  return (
    <div className="cancellation-policy-page">
      <div className="cancellation-policy-banner">
        <h1>Cancellation & Refund Policy</h1>
      </div>

      <div className="cancellation-policy-content">
        <div className="policy-container">
          <div className="effective-date">
            <p><strong>Effective Date:</strong> 01 January 2026</p>
          </div>
          <section className="policy-section">
            <h2>Cancellation Process</h2>
            <p>Cancellations must be requested in writing.</p>
          </section>

          <section className="policy-section">
            <h2>Refunds</h2>
            <p><strong>Before course start:</strong> Refund after administrative deductions.</p>
            <p><strong>After course start:</strong> No or partial refund based on course progress.</p>
          </section>

          <section className="policy-section">
            <h2>Processing Time</h2>
            <p>Refunds are processed within 7–15 working days.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
