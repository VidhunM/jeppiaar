import React from 'react';
import { Link } from 'react-router-dom';
import './AdmissionProcedure.css';

const AdmissionProcedure = () => {
  return (
    <div className="admission-procedure-page">
      <section className="admission-procedure-hero">
        <div className="container">
          <h1>Admission Procedure</h1>
          <p className="admission-procedure-hero-subtitle">
            Our admission process is designed to be simple, secure, and fully online. Please follow the steps below to complete your admission:
          </p>
          <div className="admission-hero-actions">
            <Link className="admission-apply-btn" to="/apply-online">
              Apply Now (Online)
            </Link>
            <Link className="admission-apply-btn secondary" to="/admission-form-download">
              Download Form (PDF)
            </Link>
          </div>
        </div>
      </section>
      
      <section className="admission-procedure-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="admission-eligibility-card">
              <h2 className="section-heading">Eligibility</h2>
              <p className="admission-eligibility-text">
                UG/ PG completed on or before June 5, 2026 or pursuing final year UG/PG in the 2026-2027 academic year.
              </p>
            </div>

            <h2 className="section-heading">Steps</h2>

            <ol className="admission-steps">
              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 1</span>
                  <h3 className="admission-step-title">Online Application Form</h3>
                </div>
                <p className="admission-step-text">
                  Applicants must fill out the online admission form available on our website with accurate personal, academic, and contact details.
                </p>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 2</span>
                  <h3 className="admission-step-title">Application Review</h3>
                </div>
                <p className="admission-step-text">
                  Once the form is submitted, our system will perform a basic validation of the provided details. Eligible applicants will be prompted to proceed with the payment.
                </p>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 3</span>
                  <h3 className="admission-step-title">Secure Payment</h3>
                </div>
                <p className="admission-step-text">
                  After successful form submission, you will be redirected to Razorpay, our trusted and secure payment gateway, to complete the admission fee payment using UPI, Debit Card, Credit Card, or Net Banking.
                </p>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 4</span>
                  <h3 className="admission-step-title">Payment Confirmation</h3>
                </div>
                <p className="admission-step-text">
                  Upon successful payment:
                </p>
                <ul className="admission-bullets">
                  <li>An instant payment confirmation will be generated.</li>
                  <li>Your application status will be updated automatically.</li>
                  <li>A confirmation message/email will be sent to your registered contact details.</li>
                </ul>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 5</span>
                  <h3 className="admission-step-title">Support Team Connect</h3>
                </div>
                <p className="admission-step-text">
                  After payment confirmation, our support/admissions team will contact you within the specified time frame to guide you through the next steps, which may include:
                </p>
                <ul className="admission-bullets">
                  <li>Document verification</li>
                  <li>Course or program onboarding</li>
                  <li>Account or portal access</li>
                  <li>Schedule and commencement details</li>
                </ul>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 6</span>
                  <h3 className="admission-step-title">Admission Confirmation</h3>
                </div>
                <p className="admission-step-text">
                  Once all formalities are completed, your admission will be officially confirmed, and you will receive complete onboarding instructions.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcedure;
