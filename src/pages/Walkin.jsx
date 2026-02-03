import React, { useMemo, useState } from 'react';
import './Walkin.css';

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email || '').trim());
}

function normalizePhone(raw) {
  return String(raw || '').replace(/\D/g, '');
}

export default function Walkin() {
  const webhookUrl = import.meta.env.VITE_WEBSITE_LEAD_WEBHOOK_URL ?? 'https://api.jeppiaaracademy.com/api/lead/website';

  const hearAboutOptions = useMemo(
    () => [
      'Google Search',
      'Instagram',
      'Facebook',
      'YouTube',
      'Friend / Referral',
      'Advertisement',
      'Website',
      'Event / Seminar',
      'Other',
    ],
    []
  );

  const options = useMemo(
    () => [
      'Cambridge',
      'Young Research',
      'English Certification Course',
      'Psychology Basic Course',
      'Voxdemy',
      'Events',
      'School Workshops',
      'College Workshops',
      'Corporate Workshops',
      'Diploma Programs',
      'Patient Consultations',
    ],
    []
  );

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    hearAbout: '',
    hearAboutOther: '',
    interests: [],
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numeric = normalizePhone(value);
      if (numeric.length <= 15) setForm((p) => ({ ...p, phone: numeric }));
      return;
    }
    setForm((p) => ({ ...p, [name]: value }));
  };

  const toggleInterest = (label) => {
    setForm((p) => {
      const exists = p.interests.includes(label);
      return { ...p, interests: exists ? p.interests.filter((x) => x !== label) : [...p.interests, label] };
    });
  };

  const submitToWebhook = async (payload) => {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    let data = null;
    try {
      data = await res.json();
    } catch {
      // ignore
    }

    if (!res.ok) {
      const msg = (data && (data.message || data.error)) || `Request failed (${res.status})`;
      throw new Error(msg);
    }
    return data;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const name = String(form.name || '').trim();
    const email = String(form.email || '').trim();
    const phone = normalizePhone(form.phone);
    const hearAbout = String(form.hearAbout || '').trim();
    const hearAboutOther = String(form.hearAboutOther || '').trim();
    const interests = Array.isArray(form.interests) ? form.interests : [];

    if (!name || !phone || interests.length === 0) {
      setMessage({ type: 'error', text: 'Please enter Name, Mobile Number, and select at least one option.' });
      return;
    }
    if (email && !isValidEmail(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (phone.length < 10) {
      setMessage({ type: 'error', text: 'Please enter a valid mobile number.' });
      return;
    }
    if (!hearAbout) {
      setMessage({ type: 'error', text: 'Please select: How did you hear about us?' });
      return;
    }
    if (hearAbout === 'Other' && !hearAboutOther) {
      setMessage({ type: 'error', text: 'Please specify where you heard about us.' });
      return;
    }

    setLoading(true);
    try {
      // API requires phone + enquiry + (name OR first_name+last_name)
      const hearText = hearAbout === 'Other' ? hearAboutOther : hearAbout;
      const payload = {
        name,
        phone,
        email,
        enquiry: interests.join(', '),
        source: 'Walkin page',
        notes: `Heard about: ${hearText}\nSelected: ${interests.join(', ')}\nPage: ${
          typeof window !== 'undefined' ? window.location.href : ''
        }`,
      };

      await submitToWebhook(payload);

      setMessage({ type: 'success', text: 'Thank you! We will contact you soon.' });
      setForm({ name: '', email: '', phone: '', hearAbout: '', hearAboutOther: '', interests: [] });
    } catch (err) {
      setMessage({ type: 'error', text: `Submission failed: ${err?.message || String(err)}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="walkin-page">
      <section className="walkin-banner">
        <div className="container walkin-banner-inner">
          <h1>Walk-in Enquiry</h1>
          <p>Please fill your details and select what you are enquiring for.</p>
        </div>
      </section>

      <section className="walkin-content">
        <div className="container">
          <div className="walkin-card">
            <h2>Enquiry Form</h2>

            <form className="walkin-form" onSubmit={onSubmit}>
              <div className="walkin-grid">
                <label className="walkin-field">
                  <span>Name *</span>
                  <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your name" required />
                </label>

                <label className="walkin-field">
                  <span>Email ID</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    placeholder="yourname@example.com"
                    maxLength={100}
                  />
                </label>

                <label className="walkin-field">
                  <span>Mobile Number *</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    type="tel"
                    inputMode="numeric"
                    placeholder="10 digits"
                    maxLength={15}
                    required
                  />
                </label>

                <label className="walkin-field">
                  <span className="walkin-placeholder-label">How did you hear about us? *</span>
                  <select name="hearAbout" value={form.hearAbout} onChange={onChange} required>
                    <option value="" disabled>
                      How did you hear about us?
                    </option>
                    {hearAboutOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                {form.hearAbout === 'Other' && (
                  <label className="walkin-field">
                    <span>Please specify *</span>
                    <input
                      name="hearAboutOther"
                      value={form.hearAboutOther}
                      onChange={onChange}
                      type="text"
                      placeholder="Please specify"
                      required
                    />
                  </label>
                )}
              </div>

              <details className="walkin-dropdown" open>
                <summary className="walkin-dropdown-summary">Workshops / Courses / Programs (Select) *</summary>
                <div className="walkin-dropdown-body">
                  <div className="walkin-interests-grid">
                    {options.map((opt) => (
                      <label key={opt} className="walkin-check">
                        <input
                          type="checkbox"
                          checked={form.interests.includes(opt)}
                          onChange={() => toggleInterest(opt)}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </details>

              <button className="walkin-submit" type="submit" disabled={loading}>
                {loading ? 'Submitting…' : 'Submit'}
              </button>

              {message && (
                <div className={`walkin-message ${message.type === 'error' ? 'error' : 'success'}`}>{message.text}</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

