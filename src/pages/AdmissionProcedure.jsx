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
            Jeppiaar Academy of Psychology and Research follows a transparent and student-friendly admission process to ensure the selection of motivated learners committed to the field of psychology.
          </p>
          <div className="admission-hero-actions">
            <Link className="admission-apply-btn" to="/apply-online">
              Apply Now (Online)
            </Link>
            <Link className="admission-apply-btn secondary" to="/prospect-download">
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
                  <h3 className="admission-step-title">Programme Enquiry</h3>
                </div>
                <p className="admission-step-text">
                  Prospective candidates are encouraged to review the programmes offered and submit an enquiry through the website or contact the admissions office for guidance on course details, eligibility, duration, and fees.
                </p>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 2</span>
                  <h3 className="admission-step-title">Application Submission</h3>
                </div>
                <p className="admission-step-text">
                  Applicants must complete the official application form by purchasing application form and brochure for Rs.250 directly from the admissions desk at Jeppiaar Academy and submit it along with the required supporting documents that include:
                </p>
                <ul className="admission-bullets">
                  <li>Recent passport-size photograph to be pasted on completed application form.</li>
                  <li>Aadhaar card copy</li>
                  <li>10th Mark Sheet copy</li>
                  <li>12th Mark sheet copy</li>
                  <li>UG certificate and Mark Sheets copy</li>
                  <li>TC (optional)</li>
                  <li>Experience Certificate (optional)</li>
                  <li>Any additional documents required for scholarship if eligible</li>
                </ul>

                <div className="admission-subcard">
                  <h4 className="admission-subcard-title">Submission options</h4>
                  <ul className="admission-bullets">
                    <li>Submit directly to the admissions desk in person</li>
                    <li>
                      Or through courier to:
                      <div className="admission-address">
                        Jeppiaar Academy of Psychology and Research,
                        1/40H, Mount Poonamallee Road,
                        St.Thomas Mount, Chennai - 600016
                      </div>
                    </li>
                    <li>
                      Or by scanning into a single PDF document and sending mail to{' '}
                      <a className="admission-link" href="mailto:mail@jeppiaaracademy.com">
                        mail@jeppiaaracademy.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="admission-notes">
                  <h4 className="admission-notes-title">Important Notes</h4>
                  <ul className="admission-bullets">
                    <li>
                      You can also download the form from the website and pay the form fees of Rs 250 during submission along with payment screenshot.
                    </li>
                    <li>
                      One application form for each programme to be submitted separately. Clearly mention choice of programme and batch in the application form.
                    </li>
                    <li>
                      NO ORIGINAL CERTIFICATES TO BE SUBMITTED ALONG WITH APPLICATION FORM.
                    </li>
                  </ul>
                </div>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 3</span>
                  <h3 className="admission-step-title">Eligibility Screening</h3>
                </div>
                <p className="admission-step-text">
                  Applications are reviewed by the admissions committee to verify eligibility criteria as per the selected programme. Preference may be given to candidates who apply first.
                </p>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 4</span>
                  <h3 className="admission-step-title">Interview Session</h3>
                </div>
                <p className="admission-step-text">
                  Shortlisted candidates will be invited for a personal interview session (online or in person) to assess academic interest, motivation, and suitability for the programme.
                </p>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 5</span>
                  <h3 className="admission-step-title">Admission Confirmation</h3>
                </div>
                <p className="admission-step-text">
                  Selected candidates will receive an admission offer by mail along with student portal login details. Admission is confirmed upon payment of the prescribed fees through the portal within the stipulated timeline.
                </p>

                <div className="admission-subcard">
                  <h4 className="admission-subcard-title">Fee options</h4>
                  <ul className="admission-bullets">
                    <li>Both semesters can be paid together (Rs. 5000 reduction on total fees)</li>
                    <li>Each semester can be paid separately</li>
                    <li>EMI option is also available</li>
                  </ul>
                </div>
              </li>

              <li className="admission-step">
                <div className="admission-step-header">
                  <span className="admission-step-badge">Step 6</span>
                  <h3 className="admission-step-title">Enrollment & Orientation</h3>
                </div>
                <p className="admission-step-text">
                  Upon successful enrollment, students will receive programme details, academic schedules, and orientation information prior to the commencement of classes.
                </p>
              </li>
            </ol>

            <div className="admission-notes" role="note" aria-label="Admission committee note">
              <p className="admission-step-text">
                <b>Note:</b> The decision of the Admission Committee is final and binding in all matters related to the admission process and selection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcedure;
