import React from 'react';
import './ProspectDownload.css';

const ProspectDownload = () => {
  const handlePrint = () => window.print();

  return (
    <div className="prospect-download-page">
      <section className="prospect-download-hero">
        <div className="container">
          <h1>Prospect Download</h1>
          <p className="prospect-download-hero-subtitle">
            View the Student Admission Form 2026 below. Use the button to print or save it as a PDF.
          </p>
        </div>
      </section>
      
      <section className="prospect-download-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="prospect-actions no-print">
              <button className="prospect-action-btn" type="button" onClick={handlePrint}>
                Print / Save as PDF
              </button>
              <p className="prospect-action-hint">
                Tip: On mobile, choose your browser menu → Print → “Save as PDF”.
              </p>
            </div>

            <article className="prospect-document" aria-label="Student Admission Form 2026">
              <header className="prospect-header">
                <div className="prospect-brand">
                  <div className="prospect-brand-title">JEPPIAAR ACADEMY</div>
                  <div className="prospect-brand-subtitle">OF PSYCHOLOGY AND RESEARCH</div>
                  <div className="prospect-brand-unit">(A Unit of Sancta Maria Educational Trust)</div>
                </div>
                <div className="prospect-photo-box" aria-label="Photo box">
                  <div className="prospect-photo-label">PHOTO</div>
                </div>
              </header>

              <h2 className="prospect-form-title">STUDENT ADMISSION FORM 2026</h2>

              <section className="prospect-section">
                <h3>1. Programme Applied For (Choose any one)</h3>
                <ul className="prospect-checklist">
                  <li><label><input type="checkbox" disabled /> Advanced Diploma in Counselling and Child Psychology - Weekday</label></li>
                  <li><label><input type="checkbox" disabled /> Advanced Diploma in Counselling and Child Psychology - Weekend</label></li>
                  <li><label><input type="checkbox" disabled /> Advanced Diploma in Counselling and Organisational Psychology - Weekday</label></li>
                  <li><label><input type="checkbox" disabled /> Advanced Diploma in Counselling and Organisational Psychology - Weekend</label></li>
                  <li><label><input type="checkbox" disabled /> Advanced Diploma in Counselling and Forensic Psychology - Weekday</label></li>
                  <li><label><input type="checkbox" disabled /> Advanced Diploma in Counselling and Forensic Psychology - Weekend</label></li>
                  <li><label><input type="checkbox" disabled /> Advanced Diploma in Art Therapy - Friday</label></li>
                  <li><label><input type="checkbox" disabled /> Advanced Diploma in Art Therapy - Saturday</label></li>
                </ul>
              </section>

              <section className="prospect-section">
                <h3>2. Personal Details of candidate (Fill in capital letters) (Mandatory)</h3>
                <div className="prospect-fields">
                  <div className="prospect-field"><span>Full Name (as per Aadhaar)</span><span className="prospect-line" /></div>
                  <div className="prospect-field">
                    <span>Gender</span>
                    <span className="prospect-inline">
                      <label><input type="checkbox" disabled /> Male</label>
                      <label><input type="checkbox" disabled /> Female</label>
                      <label><input type="checkbox" disabled /> Other</label>
                    </span>
                  </div>
                  <div className="prospect-field"><span>Date of Birth</span><span className="prospect-line short" /></div>
                  <div className="prospect-field"><span>Age (as on Jan 1, 2026)</span><span className="prospect-line short" /></div>
                  <div className="prospect-field"><span>Nationality</span><span className="prospect-line short" /></div>
                  <div className="prospect-field"><span>Aadhaar No</span><span className="prospect-line short" /></div>
                  <div className="prospect-field"><span>Mobile Number</span><span className="prospect-line short" /></div>
                  <div className="prospect-field"><span>Alternate Mobile Number</span><span className="prospect-line short" /></div>
                  <div className="prospect-field"><span>Email ID</span><span className="prospect-line" /></div>
                  <div className="prospect-field"><span>Address for Communication</span><span className="prospect-line" /></div>
                  <div className="prospect-field three">
                    <div><span>City</span><span className="prospect-line short" /></div>
                    <div><span>State</span><span className="prospect-line short" /></div>
                    <div><span>PinCode</span><span className="prospect-line short" /></div>
                  </div>
                </div>
              </section>

              <section className="prospect-section">
                <h3>3. Alternate Contact Details (Mandatory)</h3>
                <ul className="prospect-bullets">
                  <li><span>Name of Contact</span><span className="prospect-line" /></li>
                  <li><span>Relationship with Applicant</span><span className="prospect-line" /></li>
                  <li><span>Mobile Number</span><span className="prospect-line short" /></li>
                  <li><span>Email ID</span><span className="prospect-line" /></li>
                </ul>
              </section>

              <section className="prospect-section">
                <h3>4. Educational Qualifications of candidate</h3>
                <div className="prospect-table-wrap">
                  <table className="prospect-table">
                    <thead>
                      <tr>
                        <th>Qualification</th>
                        <th>Institution / University</th>
                        <th>Board / Discipline</th>
                        <th>Year of Passing</th>
                        <th>Percentage / CGPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['SSLC / 10th', 'HSC / 12th', 'Diploma (optional)', 'UG Degree (optional)', 'PG Degree (optional)', 'Other (optional)'].map((row) => (
                        <tr key={row}>
                          <td>{row}</td>
                          <td className="blank" />
                          <td className="blank" />
                          <td className="blank" />
                          <td className="blank" />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="prospect-section">
                <h3>5. Work Experience (if applicable)</h3>
                <div className="prospect-table-wrap">
                  <table className="prospect-table">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Name of Company</th>
                        <th>Role</th>
                        <th>Year of job</th>
                        <th>Nature of work</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((n) => (
                        <tr key={n}>
                          <td>{n}</td>
                          <td className="blank" />
                          <td className="blank" />
                          <td className="blank" />
                          <td className="blank" />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="prospect-section">
                <h3>6. Statement of Purpose (Mandatory)</h3>
                <p className="prospect-muted">(Briefly explain why you wish to pursue this programme and your career goals)</p>
                <div className="prospect-big-lines">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="prospect-big-line" />
                  ))}
                </div>
              </section>

              <section className="prospect-section">
                <h3>7. Are you eligible for scholarship?</h3>
                <ul className="prospect-checklist">
                  <li><label><input type="checkbox" disabled /> First Graduate in the family (REV – 104)</label></li>
                  <li><label><input type="checkbox" disabled /> Economically Weaker Section (REV – 122)</label></li>
                  <li><label><input type="checkbox" disabled /> Voxdemy Basics / Advanced Student</label></li>
                  <li><label><input type="checkbox" disabled /> University Rank Holder in UG / PG</label></li>
                  <li><label><input type="checkbox" disabled /> NRI Student</label></li>
                  <li><label><input type="checkbox" disabled /> Not Eligible</label></li>
                </ul>
              </section>

              <section className="prospect-section">
                <h3>8. Document copies Enclosed (Tick applicable)</h3>
                <ul className="prospect-checklist two-col">
                  <li><label><input type="checkbox" disabled /> SSLC / 10th Mark Sheet</label></li>
                  <li><label><input type="checkbox" disabled /> HSC / 12th Mark Sheet</label></li>
                  <li><label><input type="checkbox" disabled /> Degree Certificate(s) and Mark sheets</label></li>
                  <li><label><input type="checkbox" disabled /> Aadhaar card</label></li>
                  <li><label><input type="checkbox" disabled /> Transfer / Migration Certificate (optional)</label></li>
                  <li><label><input type="checkbox" disabled /> Experience Certificate (if applicable)</label></li>
                </ul>
              </section>

              <section className="prospect-section">
                <h3>9. Declaration by the Applicant</h3>
                <p className="prospect-step-text">
                  I hereby declare that the information furnished above is true and correct to the best of my knowledge. I understand that admission is subject to verification of documents and fulfillment of eligibility criteria prescribed by Jeppiaar Academy of Psychology and Research. I agree to abide by the rules and regulations of the institution.
                </p>
                <div className="prospect-field two">
                  <div><span>Place</span><span className="prospect-line short" /></div>
                  <div><span>Date</span><span className="prospect-line short" /></div>
                </div>
                <div className="prospect-field">
                  <span>Signature of Applicant</span><span className="prospect-line" />
                </div>
              </section>

              <hr className="prospect-sep" />

              <section className="prospect-section">
                <h3 className="office-only-title">For Office Use Only</h3>
                <div className="prospect-fields">
                  <div className="prospect-field"><span>Application No.</span><span className="prospect-line" /></div>
                  <div className="prospect-field"><span>Date of Receipt</span><span className="prospect-line short" /></div>
                  <div className="prospect-field">
                    <span>Application fee paid as</span>
                    <span className="prospect-inline">
                      <label><input type="checkbox" disabled /> Cash</label>
                      <label><input type="checkbox" disabled /> DD</label>
                      <label><input type="checkbox" disabled /> QR</label>
                      <label><input type="checkbox" disabled /> Bank Transfer</label>
                    </span>
                  </div>
                  <div className="prospect-field"><span>Interview Date</span><span className="prospect-line short" /></div>
                  <div className="prospect-field">
                    <span>Interview Status</span>
                    <span className="prospect-inline">
                      <label><input type="checkbox" disabled /> Scheduled</label>
                      <label><input type="checkbox" disabled /> Completed</label>
                    </span>
                  </div>
                  <div className="prospect-field">
                    <span>Admission Status</span>
                    <span className="prospect-inline">
                      <label><input type="checkbox" disabled /> Selected</label>
                      <label><input type="checkbox" disabled /> Waitlisted</label>
                      <label><input type="checkbox" disabled /> Not Selected</label>
                    </span>
                  </div>
                  <div className="prospect-field"><span>Programme Offered</span><span className="prospect-line" /></div>
                  <div className="prospect-field"><span>Scholarship status</span><span className="prospect-line" /></div>
                  <div className="prospect-field"><span>Authorized Signatory</span><span className="prospect-line" /></div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProspectDownload;
