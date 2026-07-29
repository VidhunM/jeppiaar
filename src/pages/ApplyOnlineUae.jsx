import React, { useMemo, useState, useEffect } from 'react';
import './ApplyOnline.css'; // Reuse the existing ApplyOnline styles
import Logo1 from '../assets/icons/Logo1.png';

const API_URL = 'https://myguesi.com/api/public/apply';

function generateApplicationId() {
  const ts = new Date().toISOString().replace(/[-:.TZ]/g, '');
  const rand = Math.random().toString(16).slice(2, 8).toUpperCase();
  return `JAPR-UAE-${ts}-${rand}`;
}

function bytesToLabel(bytes) {
  if (!bytes && bytes !== 0) return '';
  const mb = bytes / 1024 / 1024;
  if (mb >= 1) return `${mb.toFixed(2)} MB`;
  const kb = bytes / 1024;
  return `${kb.toFixed(0)} KB`;
}

export default function ApplyOnlineUae() {
  const feeInr = Number(import.meta.env.VITE_APPLICATION_FEE_INR ?? 250);
  const paymentUrl = import.meta.env.VITE_APPLICATION_PAYMENT_URL ?? '';
  const scriptUrl = API_URL;
  const razorpayKeyId = (import.meta.env.VITE_RAZORPAY_KEY_ID || '').trim();

  // ONLY first two child psychology options are applicable for UAE Campus
  const programmes = useMemo(
    () => [
      'Advanced Diploma in Counselling and Child Psychology - Weekday',
      'Advanced Diploma in Counselling and Child Psychology - Weekend'
    ],
    []
  );

  const scholarshipOptions = useMemo(
    () => [
      'First Graduate in the family (REV – 104)',
      'Economically Weaker Section (REV – 122)',
      'Basics / Advanced Student',
      'University Rank Holder in UG / PG',
      'NRI Student',
      'Not Eligible'
    ],
    []
  );

  const docFields = useMemo(
    () => [
      { key: 'photo', label: 'Passport-size Photograph (PHOTO)', required: true, accept: 'image/*' },
      { key: 'aadhaarDoc', label: 'Aadhaar card copy / National ID', required: true, accept: 'application/pdf,image/*' },
      { key: 'sslcDoc', label: 'SSLC / 10th Mark Sheet', required: true, accept: 'application/pdf,image/*' },
      { key: 'hscDoc', label: 'HSC / 12th Mark Sheet', required: true, accept: 'application/pdf,image/*' },
      { key: 'ugMarksDoc', label: 'UG Mark Sheets copy', required: true, accept: 'application/pdf,image/*' },
      { key: 'ugCertDoc', label: 'UG Certificate copy', required: true, accept: 'application/pdf,image/*' },
      { key: 'transferCertDoc', label: 'Transfer Certificate (optional)', required: false, accept: 'application/pdf,image/*' },
      { key: 'experienceCertDoc', label: 'Experience Certificate (optional)', required: false, accept: 'application/pdf,image/*' },
      { key: 'scholarshipDoc', label: 'Scholarship supporting documents (optional)', required: false, accept: 'application/pdf,image/*' }
    ],
    []
  );

  const qualificationRows = useMemo(
    () => ['SSLC / 10th', 'HSC / 12th', 'Diploma (optional)', 'UG Degree', 'PG Degree (optional)', 'Other (optional)'],
    []
  );

  const [form, setForm] = useState({
    programmeAppliedFor: '',

    fullName: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    aadhaarNo: '',
    mobileNumber: '',
    alternateMobile: '',
    emailId: '',
    address: '',
    city: '',
    state: '',
    pincode: '',

    contactName: '',
    contactRelationship: '',
    contactMobile: '',
    contactEmail: '',

    statementOfPurpose: '',
    scholarshipEligibility: 'Not Eligible',

    declarationPlace: '',
    declarationDate: '',
    signatureName: '',
    declarationAccepted: false,

    consent: false
  });

  const [education, setEducation] = useState(
    qualificationRows.map((q) => ({
      qualification: q,
      institution: '',
      board: '',
      year: '',
      score: ''
    }))
  );

  const [work, setWork] = useState([
    { company: '', role: '', year: '', nature: '' },
    { company: '', role: '', year: '', nature: '' },
    { company: '', role: '', year: '', nature: '' }
  ]);

  const [files, setFiles] = useState(
    docFields.reduce((acc, f) => {
      acc[f.key] = null;
      return acc;
    }, {})
  );

  const [photoPreviewUrl, setPhotoPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [applicationId, setApplicationId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [paymentFinished, setPaymentFinished] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const checkRazorpay = () => {
      if (window.Razorpay) {
        setRazorpayLoaded(true);
      } else {
        setTimeout(checkRazorpay, 100);
      }
    };
    checkRazorpay();
  }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'mobileNumber' || name === 'alternateMobile' || name === 'contactMobile') {
      const numericValue = value.replace(/\D/g, '');
      setForm((p) => ({ ...p, [name]: numericValue }));
      return;
    }

    if (name === 'aadhaarNo') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 12) {
        setForm((p) => ({ ...p, aadhaarNo: numericValue }));
      }
      return;
    }

    if (name === 'pincode') {
      const numericValue = value.replace(/\D/g, '');
      setForm((p) => ({ ...p, pincode: numericValue }));
      return;
    }

    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

  const handlePhoneKeyPress = (e) => {
    const char = String.fromCharCode(e.which || e.keyCode);
    if (!/[0-9]/.test(char)) e.preventDefault();
  };

  const setScholarship = (label) => {
    setForm((p) => ({ ...p, scholarshipEligibility: label }));
  };

  const setEducationField = (idx, field, value) => {
    setEducation((rows) => rows.map((r, i) => (i === idx ? { ...r, [field]: value } : r)));
  };

  const setWorkField = (idx, field, value) => {
    setWork((rows) => rows.map((r, i) => (i === idx ? { ...r, [field]: value } : r)));
  };

  const onFileChange = (key, file) => {
    setFiles((p) => ({ ...p, [key]: file || null }));
    if (key === 'photo') {
      if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
      setPhotoPreviewUrl(file ? URL.createObjectURL(file) : '');
    }
  };

  const validate = () => {
    if (!form.programmeAppliedFor) return 'Please select programme.';
    if (!form.fullName || !form.mobileNumber || !form.emailId) return 'Please fill all required fields.';
    if (!form.consent) return 'Please accept consent.';

    if (!form.declarationAccepted) return 'Please accept the applicant declaration.';
    if (!form.declarationPlace || !form.declarationDate || !form.signatureName) {
      return 'Please fill Place, Date and Signature in the applicant declaration.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.emailId)) return 'Please enter a valid email address.';

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(form.mobileNumber)) return 'Please enter a valid mobile number.';

    for (const f of docFields) {
      if (f.required && !files[f.key]) {
        return `Please upload: ${f.label}.`;
      }
    }

    const maxPerFile = 3 * 1024 * 1024;
    const maxTotal = 15 * 1024 * 1024;
    const selected = Object.values(files).filter(Boolean);
    const total = selected.reduce((sum, file) => sum + (file?.size || 0), 0);
    const tooBig = selected.find((file) => (file?.size || 0) > maxPerFile);
    if (tooBig) return `File too large: ${tooBig.name}. Max 3MB per file.`;
    if (total > maxTotal) return `Total upload size is too large (${bytesToLabel(total)}). Please reduce files.`;

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setMessage({ type: 'error', text: err });
      return;
    }

    const appId = generateApplicationId();
    setApplicationId(appId);
    setLoading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('applicationId', appId);

      formData.append('programmeAppliedFor', form.programmeAppliedFor);
      formData.append('fullName', form.fullName);
      formData.append('mobileNumber', form.mobileNumber);
      formData.append('emailId', form.emailId);

      if (form.gender) formData.append('gender', form.gender);
      if (form.dateOfBirth) formData.append('dateOfBirth', form.dateOfBirth);
      if (form.nationality) formData.append('nationality', form.nationality);
      if (form.aadhaarNo) formData.append('aadhaarNo', form.aadhaarNo);
      if (form.alternateMobile) formData.append('alternateMobile', form.alternateMobile);
      if (form.address) formData.append('address', form.address);
      if (form.city) formData.append('city', form.city);
      if (form.state) formData.append('state', form.state);
      if (form.pincode) formData.append('pincode', form.pincode);

      if (form.contactName) formData.append('contactName', form.contactName);
      if (form.contactRelationship) formData.append('contactRelationship', form.contactRelationship);
      if (form.contactMobile) formData.append('contactMobile', form.contactMobile);
      if (form.contactEmail) formData.append('contactEmail', form.contactEmail);

      formData.append('educationalQualifications', JSON.stringify(education));
      formData.append('workExperience', JSON.stringify(work));

      if (form.statementOfPurpose) formData.append('statementOfPurpose', form.statementOfPurpose);
      if (form.scholarshipEligibility) formData.append('scholarshipEligibility', form.scholarshipEligibility);
      if (form.declarationPlace) formData.append('declarationPlace', form.declarationPlace);
      if (form.declarationDate) formData.append('declarationDate', form.declarationDate);
      if (form.signatureName) formData.append('signatureName', form.signatureName);

      Object.keys(files).forEach((key) => {
        if (files[key]) {
          formData.append(key, files[key]);
        }
      });

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.statusText}`);
      }

      setSubmitted(true);
      setMessage({
        type: 'success',
        text: 'Thank you for your registration. Our team will contact you.'
      });
    } catch (ex) {
      setMessage({
        type: 'error',
        text: `Submission error: ${ex?.message || String(ex)}`
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    if (!razorpayKeyId) {
      setMessage({ type: 'error', text: 'Razorpay is not configured. Please contact support.' });
      return;
    }

    if (!window.Razorpay) {
      setMessage({ type: 'error', text: 'Razorpay script is still loading. Please wait a moment and try again.' });
      return;
    }

    try {
      const options = {
        key: razorpayKeyId,
        amount: feeInr * 100,
        currency: 'INR',
        name: 'Jeppiaar Academy - UAE Campus',
        description: `Application Fee for ${form.programmeAppliedFor || 'Programme'}`,
        handler: function (response) {
          setPaymentFinished(true);
          setMessage({
            type: 'success',
            text: `Payment successful! Payment ID: ${response.razorpay_payment_id}.`
          });

          fetch(scriptUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              type: 'payment_confirmation',
              applicationId: applicationId,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature
            })
          }).catch((err) => console.error('Payment confirmation failed:', err));
        },
        prefill: {
          name: form.fullName || '',
          email: form.emailId || '',
          contact: form.mobileNumber || ''
        },
        notes: {
          applicationId: applicationId,
          programme: form.programmeAppliedFor || ''
        },
        theme: {
          color: '#0E0529'
        },
        modal: {
          ondismiss: function () {
            setMessage({ type: 'info', text: 'Payment cancelled. You can try again later.' });
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      setMessage({
        type: 'error',
        text: `Payment initialization failed: ${error.message || String(error)}`
      });
    }
  };

  const buildPaymentHref = () => {
    if (!paymentUrl) return '';
    try {
      const url = new URL(paymentUrl, window.location.origin);
      url.searchParams.set('description', `Application Fee for ${form.programmeAppliedFor || 'Programme'}`);
      url.searchParams.set('applicationId', applicationId || 'PENDING');
      url.searchParams.set('amount', String(feeInr));
      url.searchParams.set('name', form.fullName || '');
      url.searchParams.set('phone', form.mobileNumber || '');
      url.searchParams.set('email', form.emailId || '');
      return url.toString();
    } catch {
      const sep = paymentUrl.includes('?') ? '&' : '?';
      return `${paymentUrl}${sep}applicationId=${encodeURIComponent(applicationId || 'PENDING')}&amount=${encodeURIComponent(
        String(feeInr)
      )}&name=${encodeURIComponent(form.fullName || '')}&phone=${encodeURIComponent(form.mobileNumber || '')}&email=${encodeURIComponent(form.emailId || '')}`;
    }
  };

  const paymentHref = buildPaymentHref();
  const hasRazorpay = razorpayKeyId && razorpayLoaded;

  return (
    <div className="apply-online-page">
      <section className="apply-online-hero">
        <div className="container">
          <h1>Apply Online - UAE Campus</h1>
          <p>Fill the application form and pay the application fee (₹{feeInr}).</p>
        </div>
      </section>

      <section className="apply-online-content">
        <div className="container">
          <div className="apply-wrapper">
            {message && (
              <div className={`apply-message ${message.type === 'error' ? 'error' : 'success'}`}>{message.text}</div>
            )}

            <article className="apply-document" aria-label="Online application form">
              <header className="apply-letterhead">
                <div className="apply-letterhead-left">
                  <img className="apply-logo" src={Logo1} alt="Jeppiaar Academy" />
                </div>

                <div className="apply-letterhead-center">
                  <div className="apply-title">JEPPIAAR ACADEMY</div>
                  <div className="apply-subtitle">Of PSYCHOLOGY and RESEARCH</div>
                  <div className="apply-unit">(A Unit of Sancta Maria Educational Trust)</div>
                </div>

                <div className="apply-letterhead-right" aria-label="Photo upload">
                  <input
                    id="apply-photo-input"
                    className="apply-file-hidden"
                    type="file"
                    accept="image/*"
                    onChange={(e) => onFileChange('photo', e.target.files?.[0] || null)}
                    disabled={submitted}
                  />
                  <label className={`apply-photo-box ${submitted ? 'disabled' : ''}`} htmlFor="apply-photo-input">
                    {photoPreviewUrl ? (
                      <img className="apply-photo-preview" src={photoPreviewUrl} alt="Uploaded passport photo preview" />
                    ) : (
                      <div className="apply-photo-label">PHOTO</div>
                    )}
                    {!submitted && <div className="apply-photo-hint">Click to upload</div>}
                  </label>
                </div>
              </header>

              <h2 className="apply-form-title">ONLINE APPLICATION (UAE CAMPUS 2026)</h2>

              <form className="apply-form" onSubmit={handleSubmit}>
                <section className="apply-section">
                  <h3>1. Programme Applied For (Choose any one) *</h3>
                  <select className="apply-input" name="programmeAppliedFor" value={form.programmeAppliedFor} onChange={onChange} required disabled={submitted}>
                    <option value="">Select programme</option>
                    {programmes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </section>

                <section className="apply-section">
                  <h3>2. Personal Details of candidate (Mandatory)</h3>
                  <div className="apply-grid">
                    <label className="apply-field">
                      <span>Full Name (as per ID/Aadhaar) *</span>
                      <input className="apply-input" name="fullName" value={form.fullName} onChange={onChange} required disabled={submitted} />
                    </label>

                    <label className="apply-field">
                      <span>Gender</span>
                      <select className="apply-input" name="gender" value={form.gender} onChange={onChange} disabled={submitted}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>

                    <label className="apply-field">
                      <span>Date of Birth</span>
                      <input className="apply-input" type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={onChange} disabled={submitted} />
                    </label>

                    <label className="apply-field">
                      <span>Nationality</span>
                      <input className="apply-input" name="nationality" value={form.nationality} onChange={onChange} disabled={submitted} />
                    </label>

                    <label className="apply-field">
                      <span>Aadhaar No / National ID</span>
                      <input
                        className="apply-input"
                        name="aadhaarNo"
                        value={form.aadhaarNo}
                        onChange={onChange}
                        placeholder="ID number"
                        disabled={submitted}
                      />
                    </label>

                    <label className="apply-field">
                      <span>Mobile Number *</span>
                      <input
                        className="apply-input"
                        name="mobileNumber"
                        value={form.mobileNumber}
                        onChange={onChange}
                        onKeyPress={handlePhoneKeyPress}
                        inputMode="numeric"
                        placeholder="enter your mobile number"
                        required
                        disabled={submitted}
                      />
                    </label>

                    <label className="apply-field">
                      <span>Alternate Mobile Number</span>
                      <input
                        className="apply-input"
                        name="alternateMobile"
                        value={form.alternateMobile}
                        onChange={onChange}
                        onKeyPress={handlePhoneKeyPress}
                        inputMode="numeric"
                        placeholder="alternate contact number"
                        disabled={submitted}
                      />
                    </label>

                    <label className="apply-field">
                      <span>Email ID *</span>
                      <input className="apply-input" type="email" name="emailId" value={form.emailId} onChange={onChange} required disabled={submitted} />
                    </label>
                  </div>

                  <label className="apply-field full">
                    <span>Address for Communication</span>
                    <textarea className="apply-input" name="address" value={form.address} onChange={onChange} rows={3} disabled={submitted} />
                  </label>

                  <div className="apply-grid three">
                    <label className="apply-field">
                      <span>City</span>
                      <input className="apply-input" name="city" value={form.city} onChange={onChange} disabled={submitted} />
                    </label>
                    <label className="apply-field">
                      <span>State / Emirate</span>
                      <input className="apply-input" name="state" value={form.state} onChange={onChange} disabled={submitted} />
                    </label>
                    <label className="apply-field">
                      <span>PinCode / ZipCode</span>
                      <input
                        className="apply-input"
                        name="pincode"
                        value={form.pincode}
                        onChange={onChange}
                        placeholder="pincode/zipcode"
                        disabled={submitted}
                      />
                    </label>
                  </div>
                </section>

                <section className="apply-section">
                  <h3>3. Alternate Contact Details (Mandatory)</h3>
                  <div className="apply-grid">
                    <label className="apply-field">
                      <span>Name of Contact *</span>
                      <input className="apply-input" name="contactName" value={form.contactName} onChange={onChange} required disabled={submitted} />
                    </label>
                    <label className="apply-field">
                      <span>Relationship with Applicant *</span>
                      <input className="apply-input" name="contactRelationship" value={form.contactRelationship} onChange={onChange} required disabled={submitted} />
                    </label>
                    <label className="apply-field">
                      <span>Mobile Number *</span>
                      <input
                        className="apply-input"
                        name="contactMobile"
                        value={form.contactMobile}
                        onChange={onChange}
                        onKeyPress={handlePhoneKeyPress}
                        inputMode="numeric"
                        placeholder="contact mobile number"
                        required
                        disabled={submitted}
                      />
                    </label>
                    <label className="apply-field">
                      <span>Email ID</span>
                      <input className="apply-input" type="email" name="contactEmail" value={form.contactEmail} onChange={onChange} disabled={submitted} />
                    </label>
                  </div>
                </section>

                <section className="apply-section">
                  <h3>4. Educational Qualifications of candidate</h3>
                  <div className="apply-table-wrap">
                    <table className="apply-table">
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
                        {education.map((row, idx) => (
                          <tr key={row.qualification}>
                            <td>{row.qualification}</td>
                            <td>
                              <input
                                className="apply-cell-input"
                                value={row.institution}
                                onChange={(e) => setEducationField(idx, 'institution', e.target.value)}
                                disabled={submitted}
                              />
                            </td>
                            <td>
                              <input
                                className="apply-cell-input"
                                value={row.board}
                                onChange={(e) => setEducationField(idx, 'board', e.target.value)}
                                disabled={submitted}
                              />
                            </td>
                            <td>
                              <input
                                className="apply-cell-input"
                                value={row.year}
                                onChange={(e) => setEducationField(idx, 'year', e.target.value)}
                                disabled={submitted}
                              />
                            </td>
                            <td>
                              <input
                                className="apply-cell-input"
                                value={row.score}
                                onChange={(e) => setEducationField(idx, 'score', e.target.value)}
                                disabled={submitted}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="apply-section">
                  <h3>5. Work Experience (if applicable)</h3>
                  <div className="apply-table-wrap">
                    <table className="apply-table">
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
                        {work.map((row, idx) => (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>
                              <input className="apply-cell-input" value={row.company} onChange={(e) => setWorkField(idx, 'company', e.target.value)} disabled={submitted} />
                            </td>
                            <td>
                              <input className="apply-cell-input" value={row.role} onChange={(e) => setWorkField(idx, 'role', e.target.value)} disabled={submitted} />
                            </td>
                            <td>
                              <input className="apply-cell-input" value={row.year} onChange={(e) => setWorkField(idx, 'year', e.target.value)} disabled={submitted} />
                            </td>
                            <td>
                              <input className="apply-cell-input" value={row.nature} onChange={(e) => setWorkField(idx, 'nature', e.target.value)} disabled={submitted} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="apply-section">
                  <h3>6. Statement of Purpose (Mandatory)</h3>
                  <p className="apply-muted">(Briefly explain why you wish to pursue this programme and your career goals)</p>
                  <textarea className="apply-input" name="statementOfPurpose" value={form.statementOfPurpose} onChange={onChange} rows={5} required disabled={submitted} />
                </section>

                <section className="apply-section">
                  <h3>7. Are you eligible for scholarship?</h3>
                  <div className="apply-checklist">
                    {scholarshipOptions.map((opt) => (
                      <label key={opt} className="apply-check">
                        <input
                          type="radio"
                          name="scholarshipEligibility"
                          value={opt}
                          checked={form.scholarshipEligibility === opt}
                          onChange={() => setScholarship(opt)}
                          disabled={submitted}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </section>

                <section className="apply-section">
                  <h3>8. Upload Document copies (Mandatory)</h3>
                  <p className="apply-muted">
                    Upload clear PDF/JPG/PNG files. Max <b>3MB</b> per file, total max <b>15MB</b>.
                  </p>
                  <div className="apply-doc-grid">
                    {docFields
                      .filter((f) => f.key !== 'photo')
                      .map((f) => {
                        const file = files[f.key];
                        return (
                          <label key={f.key} className="apply-doc-item">
                            <span className="apply-doc-label">
                              {f.label} {f.required ? <b>*</b> : <span className="apply-doc-optional">(optional)</span>}
                            </span>
                            <input
                              className="apply-input apply-file"
                              type="file"
                              accept={f.accept}
                              onChange={(e) => onFileChange(f.key, e.target.files?.[0] || null)}
                              disabled={submitted}
                            />
                            {file && (
                              <span className="apply-doc-selected">
                                Selected: {file.name} ({bytesToLabel(file.size)})
                              </span>
                            )}
                          </label>
                        );
                      })}
                  </div>
                </section>

                <section className="apply-section">
                  <h3>9. Declaration by the Applicant</h3>
                  <p className="apply-declaration">
                    I hereby declare that the information furnished above is true and correct to the best of my knowledge. I
                    understand that admission is subject to verification of documents and fulfillment of eligibility criteria
                    prescribed by Jeppiaar Academy of Psychology and Research. I agree to abide by the rules and regulations of the
                    institution.
                  </p>

                  <div className="apply-grid">
                    <label className="apply-field">
                      <span>Place *</span>
                      <input
                        className="apply-input"
                        name="declarationPlace"
                        value={form.declarationPlace}
                        onChange={onChange}
                        required
                        disabled={submitted}
                      />
                    </label>
                    <label className="apply-field">
                      <span>Date *</span>
                      <input
                        className="apply-input"
                        type="date"
                        name="declarationDate"
                        value={form.declarationDate}
                        onChange={onChange}
                        required
                        disabled={submitted}
                      />
                    </label>
                    <label className="apply-field">
                      <span>Signature Name *</span>
                      <input
                        className="apply-input"
                        name="signatureName"
                        value={form.signatureName}
                        onChange={onChange}
                        placeholder="Type applicant full name"
                        required
                        disabled={submitted}
                      />
                    </label>
                  </div>

                  <label className="apply-check consent">
                    <input
                      type="checkbox"
                      name="declarationAccepted"
                      checked={form.declarationAccepted}
                      onChange={onChange}
                      required
                      disabled={submitted}
                    />
                    <span>I declare that all details are accurate *</span>
                  </label>
                </section>

                <div className="apply-consent-wrap">
                  <label className="apply-check consent">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={onChange}
                      required
                      disabled={submitted}
                    />
                    <span>I consent to the terms of the data privacy policy *</span>
                  </label>
                </div>

                {!submitted ? (
                  <button className="apply-submit-btn" type="submit" disabled={loading}>
                    {loading ? 'Submitting Form...' : 'SUBMIT REGISTRATION'}
                  </button>
                ) : (
                  <div className="apply-post-submit">
                    <h3>Form Registered! Application ID: {applicationId}</h3>
                    <p className="apply-muted">To complete registration, proceed with the Application Fee (₹{feeInr}).</p>

                    {hasRazorpay ? (
                      <button className="apply-pay-btn" type="button" onClick={handleRazorpayPayment} disabled={paymentFinished}>
                        {paymentFinished ? 'PAYMENT DONE' : 'PAY APPLICATION FEE (ONLINE)'}
                      </button>
                    ) : (
                      paymentHref && (
                        <a className="apply-pay-btn-link" href={paymentHref} target="_blank" rel="noopener noreferrer">
                          PAY APPLICATION FEE (ONLINE)
                        </a>
                      )
                    )}
                  </div>
                )}
              </form>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
