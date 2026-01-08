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
            <p><strong>Last Updated:</strong> 07-01-2026</p>
          </div>
          <section className="policy-section">
            <p>Jeppiaar Academy currently does not offer cancellation or refund options for any services, programs, or course registrations.</p>
          </section>

          <section className="policy-section">
            <h2>1. No Cancellation Policy</h2>
            <p>Once a user has enrolled, registered, or made a payment for any course, training program, workshop, or academic service offered by Jeppiaar Academy, the enrollment cannot be cancelled.</p>
          </section>

          <section className="policy-section">
            <h2>2. No Refund Policy</h2>
            <p>All payments made to Jeppiaar Academy are non-refundable, under all circumstances, including but not limited to:</p>
            <ul>
              <li>Change of personal plans</li>
              <li>Non-attendance of classes</li>
              <li>Inability to participate due to personal reasons</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Exceptional Cases</h2>
            <p>In rare and exceptional situations, Jeppiaar Academy management may review specific cases at its sole discretion. Such reviews do not guarantee refunds or cancellations.</p>
          </section>

          <section className="policy-section">
            <h2>4. Course Modifications</h2>
            <p>Jeppiaar Academy reserves the right to reschedule, modify, or replace course content, trainers, or delivery methods without affecting the non-refundability of payments.</p>
          </section>

          <section className="policy-section">
            <h2>5. Acceptance</h2>
            <p>By enrolling or making a payment on jeppiaaracademy.com, you acknowledge that you have read, understood, and agreed to this Cancellation & Refund Policy.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
