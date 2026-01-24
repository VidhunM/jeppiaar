import React, { useMemo, useState, useEffect } from 'react';
import './ApplyOnline.css';
import Logo1 from '../assets/icons/Logo1.png';

const DEFAULT_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzVPgyGqVi2nR9KqB8Wq4Sr50zu-5XDFjYpGgReD0VrakQD9vBbsIWbfhMPfAXIJnk/exec';

function generateApplicationId() {
  const ts = new Date().toISOString().replace(/[-:.TZ]/g, '');
  const rand = Math.random().toString(16).slice(2, 8).toUpperCase();
  return `JAPR-${ts}-${rand}`;
}

function bytesToLabel(bytes) {
  if (!bytes && bytes !== 0) return '';
  const mb = bytes / 1024 / 1024;
  if (mb >= 1) return `${mb.toFixed(2)} MB`;
  const kb = bytes / 1024;
  return `${kb.toFixed(0)} KB`;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || '');
      const base64 = dataUrl.includes(',') ? dataUrl.split(',')[1] : dataUrl;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export default function ApplyOnline() {
  const feeInr = Number(import.meta.env.VITE_APPLICATION_FEE_INR ?? 250);
  const paymentUrl = import.meta.env.VITE_APPLICATION_PAYMENT_URL ?? '';
  const scriptUrl = import.meta.env.VITE_ADMISSION_APPLICATION_SCRIPT_URL ?? DEFAULT_SCRIPT_URL;
  const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID ?? '';

  const programmes = useMemo(
    () => [
      'Advanced Diploma in Counselling and Child Psychology - Weekday',
      'Advanced Diploma in Counselling and Child Psychology - Weekend',
      'Advanced Diploma in Counselling and Organisational Psychology - Weekday',
      'Advanced Diploma in Counselling and Organisational Psychology - Weekend',
      'Advanced Diploma in Counselling and Forensic Psychology - Weekday',
      'Advanced Diploma in Counselling and Forensic Psychology - Weekend',
      'Advanced Diploma in Art Therapy - Friday',
      'Advanced Diploma in Art Therapy - Saturday'
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
      { key: 'aadhaarCopy', label: 'Aadhaar card copy', required: true, accept: 'application/pdf,image/*' },
      { key: 'tenthMarksheet', label: 'SSLC / 10th Mark Sheet', required: true, accept: 'application/pdf,image/*' },
      { key: 'twelfthMarksheet', label: 'HSC / 12th Mark Sheet', required: true, accept: 'application/pdf,image/*' },
      { key: 'ugMarksheets', label: 'UG Mark Sheets copy', required: true, accept: 'application/pdf,image/*' },
      { key: 'ugCertificate', label: 'UG Certificate copy', required: true, accept: 'application/pdf,image/*' },
      { key: 'tcOptional', label: 'Transfer Certificate (optional)', required: false, accept: 'application/pdf,image/*' },
      { key: 'experienceOptional', label: 'Experience Certificate (optional)', required: false, accept: 'application/pdf,image/*' },
      { key: 'scholarshipDocOptional', label: 'Scholarship supporting documents (optional)', required: false, accept: 'application/pdf,image/*' }
    ],
    []
  );

  const qualificationRows = useMemo(
    () => ['SSLC / 10th', 'HSC / 12th', 'Diploma (optional)', 'UG Degree', 'PG Degree (optional)', 'Other (optional)'],
    []
  );

  const [form, setForm] = useState({
    programme: '',

    fullName: '',
    gender: '',
    dob: '',
    nationality: '',
    aadhaar: '',
    phone: '',
    altPhone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',

    altContactName: '',
    altContactRelation: '',
    altContactPhone: '',
    altContactEmail: '',

    sop: '',
    scholarship: 'Not Eligible',

    declarationPlace: '',
    declarationDate: '',
    declarationSignature: '',
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
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Check if Razorpay script is loaded
  useEffect(() => {
    const checkRazorpay = () => {
      if (window.Razorpay) {
        setRazorpayLoaded(true);
      } else {
        // Retry after a short delay
        setTimeout(checkRazorpay, 100);
      }
    };
    checkRazorpay();
  }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'phone' || name === 'altPhone' || name === 'altContactPhone') {
      const numericValue = value.replace(/\D/g, '');
      setForm((p) => ({ ...p, [name]: numericValue }));
      return;
    }

    if (name === 'aadhaar') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 12) {
        setForm((p) => ({ ...p, aadhaar: numericValue }));
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
    setForm((p) => ({ ...p, scholarship: label }));
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
    if (!form.programme) return 'Please select programme.';
    if (!form.fullName || !form.phone || !form.email) return 'Please fill all required fields.';
    if (!form.consent) return 'Please accept consent.';

    if (!form.declarationAccepted) return 'Please accept the applicant declaration.';
    if (!form.declarationPlace || !form.declarationDate || !form.declarationSignature) {
      return 'Please fill Place, Date and Signature in the applicant declaration.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return 'Please enter a valid email address.';

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(form.phone)) return 'Please enter a valid mobile number.';

    // Required files
    for (const f of docFields) {
      if (f.required && !files[f.key]) {
        return `Please upload: ${f.label}.`;
      }
    }

    // File size limits
    const maxPerFile = 3 * 1024 * 1024; // 3MB
    const maxTotal = 15 * 1024 * 1024; // 15MB
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
    setLoading(true);
    setMessage(null);

    try {
      const attachments = {};
      for (const f of docFields) {
        const file = files[f.key];
        if (!file) continue;
        attachments[f.key] = {
          name: file.name,
          type: file.type,
          size: file.size,
          base64: await fileToBase64(file)
        };
      }

      const payload = {
        type: 'online_application_full',
        applicationId: appId,
        feeInr,
        form,
        education,
        work,
        attachments
      };

      const res = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(payload)
      });

      const result = await res.json().catch(() => ({}));
      if (result?.status && result.status !== 'success') {
        throw new Error(result.message || 'Submission failed.');
      }

      // Keep localStorage lightweight (avoid storing base64)
      localStorage.setItem(
        'jeppiaar_online_application',
        JSON.stringify({
          applicationId: appId,
          feeInr,
          programme: form.programme,
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
          submittedAt: new Date().toISOString()
        })
      );

      setApplicationId(appId);
      setSubmitted(true);
      setMessage({ type: 'success', text: 'Form submitted successfully. Proceed to payment.' });
    } catch (ex) {
      setMessage({
        type: 'error',
        text: `Submission error: ${ex?.message || String(ex)}. If you uploaded large files, please try smaller PDFs/images.`
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
      // Create order via Apps Script (recommended) or use direct payment
      // For now, using direct payment - in production, create orders server-side
      const options = {
        key: razorpayKeyId,
        amount: feeInr * 100, // Amount in paise (multiply by 100)
        currency: 'INR',
        name: 'Jeppiaar Academy of Psychology & Research',
        description: `Application Fee for ${form.programme || 'Programme'}`,
        order_id: null, // Will be generated by Razorpay for direct payment
        handler: function (response) {
          // Payment successful
          setMessage({
            type: 'success',
            text: `Payment successful! Payment ID: ${response.razorpay_payment_id}. Your application is confirmed.`
          });
          
          // Optionally send payment confirmation to Apps Script
          fetch(scriptUrl, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'payment_confirmation',
              applicationId: applicationId,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature
            })
          }).catch(err => console.error('Payment confirmation failed:', err));
        },
        prefill: {
          name: form.fullName || '',
          email: form.email || '',
          contact: form.phone || ''
        },
        notes: {
          applicationId: applicationId,
          programme: form.programme || ''
        },
        theme: {
          color: '#0E0529'
        },
        modal: {
          ondismiss: function() {
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
      url.searchParams.set('applicationId', applicationId || 'PENDING');
      url.searchParams.set('amount', String(feeInr));
      url.searchParams.set('name', form.fullName || '');
      url.searchParams.set('phone', form.phone || '');
      url.searchParams.set('email', form.email || '');
      return url.toString();
    } catch {
      const sep = paymentUrl.includes('?') ? '&' : '?';
      return `${paymentUrl}${sep}applicationId=${encodeURIComponent(applicationId || 'PENDING')}&amount=${encodeURIComponent(
        String(feeInr)
      )}`;
    }
  };

  const paymentHref = buildPaymentHref();
  const hasRazorpay = razorpayKeyId && razorpayLoaded;

  return (
    <div className="apply-online-page">
      <section className="apply-online-hero">
        <div className="container">
          <h1>Apply Online</h1>
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

              <h2 className="apply-form-title">ONLINE APPLICATION (2026)</h2>

              <form className="apply-form" onSubmit={handleSubmit}>
                <section className="apply-section">
                  <h3>1. Programme Applied For (Choose any one) *</h3>
                  <select className="apply-input" name="programme" value={form.programme} onChange={onChange} required disabled={submitted}>
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
                      <span>Full Name (as per Aadhaar) *</span>
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
                      <input className="apply-input" type="date" name="dob" value={form.dob} onChange={onChange} disabled={submitted} />
                    </label>

                    <label className="apply-field">
                      <span>Nationality</span>
                      <input className="apply-input" name="nationality" value={form.nationality} onChange={onChange} disabled={submitted} />
                    </label>

                    <label className="apply-field">
                      <span>Aadhaar No</span>
                      <input
                        className="apply-input"
                        name="aadhaar"
                        inputMode="numeric"
                        value={form.aadhaar}
                        onChange={onChange}
                        onKeyPress={handlePhoneKeyPress}
                        placeholder="12 digits"
                        disabled={submitted}
                      />
                    </label>

                    <label className="apply-field">
                      <span>Mobile Number *</span>
                      <input
                        className="apply-input"
                        name="phone"
                        value={form.phone}
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
                        name="altPhone"
                        value={form.altPhone}
                        onChange={onChange}
                        onKeyPress={handlePhoneKeyPress}
                        inputMode="numeric"
                        placeholder="10 digits"
                        disabled={submitted}
                      />
                    </label>

                    <label className="apply-field">
                      <span>Email ID *</span>
                      <input className="apply-input" type="email" name="email" value={form.email} onChange={onChange} required disabled={submitted} />
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
                      <span>State</span>
                      <input className="apply-input" name="state" value={form.state} onChange={onChange} disabled={submitted} />
                    </label>
                    <label className="apply-field">
                      <span>PinCode</span>
                      <input
                        className="apply-input"
                        name="pincode"
                        inputMode="numeric"
                        value={form.pincode}
                        onChange={onChange}
                        onKeyPress={handlePhoneKeyPress}
                        placeholder="enter your pincode"
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
                      <input className="apply-input" name="altContactName" value={form.altContactName} onChange={onChange} required disabled={submitted} />
                    </label>
                    <label className="apply-field">
                      <span>Relationship with Applicant *</span>
                      <input className="apply-input" name="altContactRelation" value={form.altContactRelation} onChange={onChange} required disabled={submitted} />
                    </label>
                    <label className="apply-field">
                      <span>Mobile Number *</span>
                      <input
                        className="apply-input"
                        name="altContactPhone"
                        value={form.altContactPhone}
                        onChange={onChange}
                        onKeyPress={handlePhoneKeyPress}
                        inputMode="numeric"
                        placeholder="10 digits"
                        required
                        disabled={submitted}
                      />
                    </label>
                    <label className="apply-field">
                      <span>Email ID</span>
                      <input className="apply-input" type="email" name="altContactEmail" value={form.altContactEmail} onChange={onChange} disabled={submitted} />
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
                                inputMode="numeric"
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
                              <input className="apply-cell-input" value={row.year} onChange={(e) => setWorkField(idx, 'year', e.target.value)} inputMode="numeric" disabled={submitted} />
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
                  <textarea className="apply-input" name="sop" value={form.sop} onChange={onChange} rows={5} required disabled={submitted} />
                </section>

                <section className="apply-section">
                  <h3>7. Are you eligible for scholarship?</h3>
                  <div className="apply-checklist">
                    {scholarshipOptions.map((opt) => (
                      <label key={opt} className="apply-check">
                        <input
                          type="radio"
                          name="scholarship"
                          value={opt}
                          checked={form.scholarship === opt}
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
                  </div>

                  <label className="apply-field full">
                    <span>Signature of Applicant (Type your name) *</span>
                    <input
                      className="apply-input"
                      name="declarationSignature"
                      value={form.declarationSignature}
                      onChange={onChange}
                      required
                      disabled={submitted}
                    />
                  </label>
                </section>

                <label className="apply-consent">
                  <input
                    type="checkbox"
                    name="declarationAccepted"
                    checked={form.declarationAccepted}
                    onChange={onChange}
                    required
                    disabled={submitted}
                  />
                  <span>I confirm the above declaration is true and correct.</span>
                </label>

                <label className="apply-consent">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} required disabled={submitted} />
                  <span>
                    I authorize Jeppiaar Academy of Psychology &amp; Research and its associates to contact me with updates and notifications.
                  </span>
                </label>

                {!submitted ? (
                  <button className="apply-submit" type="submit" disabled={loading}>
                    {loading ? 'Submitting… (Uploading files)' : 'Submit & Continue to Payment'}
                  </button>
                ) : (
                  <div className="apply-payment">
                    <div className="apply-payment-row">
                      <div>
                        <div className="apply-payment-title">Application ID</div>
                        <div className="apply-payment-id">{applicationId}</div>
                      </div>
                      <div className="apply-payment-amount">Fee: ₹{feeInr}</div>
                    </div>

                    {hasRazorpay ? (
                      <button className="apply-pay-btn" type="button" onClick={handleRazorpayPayment}>
                        Proceed to Payment (Razorpay)
                      </button>
                    ) : paymentHref ? (
                      <a className="apply-pay-btn" href={paymentHref} target="_blank" rel="noopener noreferrer">
                        Proceed to Payment
                      </a>
                    ) : (
                      <div className="apply-payment-warning">
                        Payment gateway is not configured yet. Set <code>VITE_RAZORPAY_KEY_ID</code> or <code>VITE_APPLICATION_PAYMENT_URL</code> and redeploy.
                      </div>
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

