import React, { useRef, useState } from 'react';
import './ProspectDownload.css';
import Logo1 from '../assets/icons/Logo1.png';

const ProspectDownload = () => {
  const formRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = () => window.print();
  const handleDownloadPdf = async () => {
    if (!formRef.current) return;

    try {
      setIsGenerating(true);
      // Temporarily switch to PDF-friendly layout (tables, margins, page width)
      formRef.current.classList.add('pdf-export');

      const mod = await import('html2pdf.js');
      const html2pdf = mod?.default ?? mod;

      const el = formRef.current;
      const w = el.scrollWidth;
      const h = el.scrollHeight;
      const opt = {
        margin: [6, 6, 6, 6], // mm
        filename: 'Student_Admission_Form_2026.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          scrollX: 0,
          scrollY: 0,
          windowWidth: w,
          windowHeight: h,
          width: w,
          height: h
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
      };

      await html2pdf()
        .set(opt)
        .from(el)
        .save();
    } finally {
      if (formRef.current) {
        formRef.current.classList.remove('pdf-export');
      }
      setIsGenerating(false);
    }
  };

  return (
    <div className="prospect-download-page">
      <section className="prospect-page-banner no-print">
        <div className="container">
          <h1>Prospect Download</h1>
          <p>Student Admission Form 2026</p>
        </div>
      </section>
      
      <section className="prospect-download-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="prospect-actions no-print">
              <div className="prospect-action-buttons">
                <button
                  className="prospect-action-btn"
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isGenerating}
                >
                  {isGenerating ? 'Generating PDF…' : 'Download PDF'}
                </button>
                <button className="prospect-action-btn secondary" type="button" onClick={handlePrint}>
                  Print
                </button>
              </div>
              <p className="prospect-action-hint">
                Tip: On mobile, choose your browser menu → Print → “Save as PDF”.
              </p>
            </div>

            <article
              ref={formRef}
              className="prospect-document"
              aria-label="Student Admission Form 2026"
            >
              <header className="prospect-letterhead">
                <div className="prospect-letterhead-left">
                  <img
                    className="prospect-logo"
                    src={Logo1}
                    alt="Jeppiaar Academy of Psychology and Research"
                    loading="eager"
                  />
                </div>

                <div className="prospect-letterhead-center">
                  <div className="prospect-letterhead-title">JEPPIAAR ACADEMY</div>
                  <div className="prospect-letterhead-subtitle">Of PSYCHOLOGY and RESEARCH</div>
                  <div className="prospect-letterhead-unit">(A Unit of Sancta Maria Educational Trust)</div>
                </div>

                <div className="prospect-letterhead-right" aria-label="Photo box">
                  <div className="prospect-photo-box">
                    <div className="prospect-photo-label">PHOTO</div>
                  </div>
                </div>
              </header>

              <h2 className="prospect-form-title">STUDENT ADMISSION FORM 2026</h2>

              <section className="prospect-section">
                <h3>1. Programme Applied For (Choose any one)</h3>
                <ul className="prospect-checklist">
                  <li><span className="prospect-box">☐</span> Advanced Diploma in Counselling and Child Psychology - Weekday</li>
                  <li><span className="prospect-box">☐</span> Advanced Diploma in Counselling and Child Psychology - Weekend</li>
                  <li><span className="prospect-box">☐</span> Advanced Diploma in Counselling and Organisational Psychology - Weekday</li>
                  <li><span className="prospect-box">☐</span> Advanced Diploma in Counselling and Organisational Psychology - Weekend</li>
                  <li><span className="prospect-box">☐</span> Advanced Diploma in Counselling and Forensic Psychology - Weekday</li>
                  <li><span className="prospect-box">☐</span> Advanced Diploma in Counselling and Forensic Psychology - Weekend</li>
                  <li><span className="prospect-box">☐</span> Advanced Diploma in Art Therapy - Friday</li>
                  <li><span className="prospect-box">☐</span> Advanced Diploma in Art Therapy - Saturday</li>
                </ul>
              </section>

              <section className="prospect-section">
                <h3>2. Personal Details of candidate (Fill in capital letters) (Mandatory)</h3>
                <div className="prospect-fields">
                  <div className="prospect-field"><span>Full Name (as per Aadhaar)</span><span className="prospect-line" /></div>
                  <div className="prospect-field prospect-field-inline">
                    <span>Gender</span>
                    <span className="prospect-inline">
                      <span><span className="prospect-box">☐</span> Male</span>
                      <span><span className="prospect-box">☐</span> Female</span>
                      <span><span className="prospect-box">☐</span> Other</span>
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
                  <li><span className="prospect-box">☐</span> First Graduate in the family (REV – 104)</li>
                  <li><span className="prospect-box">☐</span> Economically Weaker Section (REV – 122)</li>
                  <li><span className="prospect-box">☐</span> Voxdemy Basics / Advanced Student</li>
                  <li><span className="prospect-box">☐</span> University Rank Holder in UG / PG</li>
                  <li><span className="prospect-box">☐</span> NRI Student</li>
                  <li><span className="prospect-box">☐</span> Not Eligible</li>
                </ul>
              </section>

              <section className="prospect-section">
                <h3>8. Document copies Enclosed (Tick applicable)</h3>
                <ul className="prospect-checklist two-col">
                  <li><span className="prospect-box">☐</span> SSLC / 10th Mark Sheet</li>
                  <li><span className="prospect-box">☐</span> HSC / 12th Mark Sheet</li>
                  <li><span className="prospect-box">☐</span> Degree Certificate(s) and Mark sheets</li>
                  <li><span className="prospect-box">☐</span> Aadhaar card</li>
                  <li><span className="prospect-box">☐</span> Transfer / Migration Certificate (optional)</li>
                  <li><span className="prospect-box">☐</span> Experience Certificate (if applicable)</li>
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
                      <span><span className="prospect-box">☐</span> Cash</span>
                      <span><span className="prospect-box">☐</span> DD</span>
                      <span><span className="prospect-box">☐</span> QR</span>
                      <span><span className="prospect-box">☐</span> Bank Transfer</span>
                    </span>
                  </div>
                  <div className="prospect-field"><span>Interview Date</span><span className="prospect-line short" /></div>
                  <div className="prospect-field">
                    <span>Interview Status</span>
                    <span className="prospect-inline">
                      <span><span className="prospect-box">☐</span> Scheduled</span>
                      <span><span className="prospect-box">☐</span> Completed</span>
                    </span>
                  </div>
                  <div className="prospect-field">
                    <span>Admission Status</span>
                    <span className="prospect-inline">
                      <span><span className="prospect-box">☐</span> Selected</span>
                      <span><span className="prospect-box">☐</span> Waitlisted</span>
                      <span><span className="prospect-box">☐</span> Not Selected</span>
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
