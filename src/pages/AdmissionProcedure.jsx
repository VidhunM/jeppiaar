import React from 'react';
import { Link } from 'react-router-dom';
import './AdmissionProcedure.css';

const AdmissionProcedure = () => {
  return (
    <div className="admission-procedure-page">
      <section className="admission-procedure-hero">
        <div className="container">
          <h1>Admission Process – Jeppiaar Academy of Psychology and Research</h1>
          <p className="admission-procedure-hero-subtitle">All diploma programmes at Jeppiaar Academy of Psychology and Research are conducted through direct classes.<br /> This is not a recorded or online programme.</p>
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
            <h2 className="section-heading">Step 1: Programme Enquiry</h2>
            <p className="admission-step-text">Prospective candidates are encouraged to review the programmes offered and submit an enquiry through the website or contact the Admissions Office for guidance regarding:</p>
            <ul className="admission-bullets">
              <li>Course details</li>
              <li>Eligibility criteria</li>
              <li>Programme duration</li>
              <li>Fee structure</li>
            </ul>

            <h2 className="section-heading section-heading-spaced">Step 2: Application Submission</h2>
            <div className="admission-subcard">
              <h3 className="admission-subcard-title">Offline Application</h3>
              <ul className="admission-bullets">
                <li>Purchase Application Form & Brochure for ₹250 from the Admissions Desk at Jeppiaar Academy.</li>
                <li>Submit the completed application form along with the following documents:</li>
              </ul>
              <h4 className="admission-subcard-title">Required Documents (Photocopies only)</h4>
              <ul className="admission-bullets">
                <li>Recent passport-size photograph (to be pasted on application form)</li>
                <li>Aadhaar Card copy</li>
                <li>10th Mark Sheet copy</li>
                <li>12th Mark Sheet copy</li>
                <li>UG Degree Certificate & Mark Sheets (if applicable)</li>
                <li>Transfer Certificate (TC) - Optional</li>
                <li>Experience Certificate – optional</li>
                <li>Additional documents required for scholarship (if applicable)</li>
              </ul>
              <h4 className="admission-subcard-title">Submission Method:</h4>
              <ul className="admission-bullets">
                <li>In person at Admissions Desk or</li>
                <li>Through courier to: Jeppiaar Academy of Psychology and Research, 1/40H, Mount Poonamallee Road, St. Thomas Mount, Chennai – 600016</li>
                <li>Or by scanning into a single PDF document and sending mail to <span className="admission-link">mail@jeppiaaracademy.com</span></li>
              </ul>
              <div className="admission-notes">
                <div className="admission-notes-title">Note</div>
                <p className="admission-step-text">No original certificates should be submitted along with the application form.</p>
              </div>
            </div>

            <div className="admission-subcard">
              <h3 className="admission-subcard-title">Online Application</h3>
              <p className="admission-step-text">Applicants can also fill out the Online Admission Form available on the official website with accurate:</p>
              <ul className="admission-bullets">
                <li>Personal details</li>
                <li>Academic information</li>
                <li>Contact details</li>
              </ul>
              <p className="admission-step-text">After successful form submission, candidates will be redirected to Razorpay (secure payment gateway) to complete the admission form fee payment using:</p>
              <ul className="admission-bullets">
                <li>UPI</li>
                <li>Debit Card</li>
                <li>Credit Card</li>
                <li>Net Banking</li>
              </ul>
              <p className="admission-step-text">Upon successful payment:</p>
              <ul className="admission-bullets">
                <li>Instant payment confirmation will be generated</li>
                <li>Application status will be updated automatically</li>
                <li>Confirmation message/email will be sent to registered contact details</li>
              </ul>
            </div>

            <div className="admission-notes">
              <div className="admission-notes-title">Important Notes</div>
              <ul className="admission-bullets">
                <li>Separate application forms must be submitted for each programme.</li>
                <li>Clearly mention the choice of programme and preferred batch in the application form.</li>
              </ul>
            </div>

            <div className="admission-notes">
              <p className="admission-step-text"><strong>The last date for submission of admission application form is 15th April 2026.</strong></p>
            </div>

            <h2 className="section-heading section-heading-spaced">Step 3: Eligibility Screening</h2>
            <p className="admission-step-text">All applications will be reviewed by the Admissions Committee to verify eligibility as per the selected programme.</p>
            <ul className="admission-bullets">
              <li>Preference may be given to candidates who apply earlier (first-come basis where applicable).</li>
              <li>After payment confirmation, the Admissions/Support Team will contact applicants within the specified time frame to guide them through the next steps.</li>
            </ul>

            <h2 className="section-heading section-heading-spaced">Step 4: Interview Session</h2>
            <p className="admission-step-text">Shortlisted candidates will be invited for a personal interview (Online / In-person) to assess:</p>
            <ul className="admission-bullets">
              <li>Academic interest</li>
              <li>Motivation</li>
              <li>Suitability for the chosen programme</li>
            </ul>

            <h2 className="section-heading section-heading-spaced">Step 5: Admission Confirmation</h2>
            <p className="admission-step-text">Selected candidates will receive:</p>
            <ul className="admission-bullets">
              <li>Official Admission Offer Letter with Fee Details via Email</li>
              <li>Student Portal Login Credentials</li>
            </ul>
            <p className="admission-step-text">Admission is confirmed only after payment of the prescribed fees through the student portal within the stipulated timeline.</p>

            <div className="admission-subcard">
              <h3 className="admission-subcard-title">Fee Payment Options</h3>
              <ul className="admission-bullets">
                <li>Full payment for both semesters together → Eligible for ₹5,000 reduction on total fees</li>
                <li>Semester-wise payment option available</li>
                <li>EMI facility also available</li>
              </ul>
            </div>

            <h2 className="section-heading section-heading-spaced">Step 6: Enrollment & Orientation</h2>
            <p className="admission-step-text">Upon successful enrollment:</p>
            <ul className="admission-bullets">
              <li>Students will receive detailed programme information</li>
              <li>Academic schedules</li>
              <li>Orientation programme details</li>
              <li>Important academic and institutional guidelines</li>
            </ul>

            <h2 className="section-heading section-heading-spaced">Programme-wise Batch & Class Commencement Dates</h2>
            <div className="admission-eligibility-card">
              <h2 className="section-heading">Eligibility</h2>
              <ul className="admission-bullets">
                UG / PG completed in any discipline on or before 15th June 2026.
                              </ul>
            </div>
            <div className="admission-subcard">
              <h3 className="admission-subcard-title">1. Advanced Diploma in Counselling and Child Psychology</h3>
              <ul className="admission-bullets">
                <li>Weekday Classes commence on 15th July 2026</li>
                <li>Weekend Classes commence on 20th June 2026</li>
              </ul>
            </div>
            <div className="admission-subcard">
              <h3 className="admission-subcard-title">2. Advanced Diploma in Counselling & Organizational Psychology</h3>
              <ul className="admission-bullets">
                <li>Weekday Classes commence on 15th July 2026</li>
                <li>Weekend Classes commence on 20th June 2026</li>
              </ul>
            </div>
            <div className="admission-subcard">
              <h3 className="admission-subcard-title">3. Advanced Diploma in Counselling & Forensic Psychology</h3>
              <ul className="admission-bullets">
                <li>Weekday Classes commence on 15th July 2026</li>
                <li>Weekend Classes commence on 20th June 2026</li>
              </ul>
            </div>
            <div className="admission-subcard">
              <h3 className="admission-subcard-title">4. Advanced Diploma in Art Therapy</h3>
              <ul className="admission-bullets">
                <li>Friday Batch Classes commence on 19th june 2026</li>
                <li>Saturday Batch Classes commence on 20th June 2026</li>
              </ul>
            </div>

            <div className="admission-notes">
              <p className="admission-step-text"><strong>The last date for submission of admission application form is 15th April 2026.</strong></p>
            </div>

            <p className="admission-step-text">Note: The decision of the Admission Committee is final and binding in all matters related to the admission process and selection.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcedure;
