import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import './EnquiryPopup.css';

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email || '').trim());
}

function normalizePhone(raw) {
  // keep digits only; backend will normalize to +91... if needed
  return String(raw || '').replace(/\D/g, '');
}

export default function EnquiryPopup({
  delayMs = 1200,
  scriptUrl = import.meta.env.VITE_ENQUIRY_SCRIPT_URL ?? import.meta.env.VITE_ADMISSION_APPLICATION_SCRIPT_URL ?? '',
}) {
  const webhookUrl = import.meta.env.VITE_WEBSITE_LEAD_WEBHOOK_URL ?? 'https://api.jeppiaaracademy.com/api/lead/website';

  const heardAboutOptions = useMemo(
    () => [
      'Google Search',
      'Instagram',
      'Facebook',
      'YouTube',
      'Friend / Family',
      'College / Staff',
      'Newspaper / TV',
      'Other',
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryFor: 'Consultation',
    heardAbout: '',
    heardAboutOther: '',
  });

  // Show on every page load (including refresh)
  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), Math.max(0, Number(delayMs) || 0));
    return () => clearTimeout(t);
  }, [delayMs]);

  // Prevent background scroll when open
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    if (!isOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setMessage(null);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numeric = normalizePhone(value);
      // allow up to 15 digits (supports country code)
      if (numeric.length <= 15) setForm((p) => ({ ...p, phone: numeric }));
      return;
    }
    setForm((p) => ({ ...p, [name]: value }));
  };

  const postToWebhook = async (payload) => {
    if (!webhookUrl) throw new Error('Webhook URL is not configured.');
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // If the API returns JSON, try to read it (helps show validation errors)
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

  const postToAppsScript = async (payload) => {
    if (!scriptUrl) throw new Error('Enquiry endpoint is not configured.');
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const name = String(form.name || '').trim();
    const email = String(form.email || '').trim();
    const phone = normalizePhone(form.phone);
    const enquiryFor = String(form.enquiryFor || '').trim();
    const heardAbout = String(form.heardAbout || '').trim();
    const heardAboutOther = String(form.heardAboutOther || '').trim();

    if (!name || !phone || !enquiryFor || !heardAbout) {
      setMessage({ type: 'error', text: 'Please fill all fields.' });
      return;
    }
    if (!isValidEmail(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (phone.length < 10) {
      setMessage({ type: 'error', text: 'Please enter a valid mobile number.' });
      return;
    }
    if (heardAbout === 'Other' && !heardAboutOther) {
      setMessage({ type: 'error', text: 'Please specify where you heard about this site.' });
      return;
    }

    setLoading(true);
    try {
      const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
      const referrer = typeof document !== 'undefined' ? document.referrer : '';
      const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
      const heardText = heardAbout === 'Other' ? heardAboutOther : heardAbout;

      // CRM webhook payload (matches your mapping)
      const webhookPayload = {
        name,
        phone,
        email,
        enquiry: enquiryFor,
        source: 'Website popup form',
        notes: `Heard about: ${heardText}\nPage: ${pageUrl}\nReferrer: ${referrer}\nUA: ${userAgent}`,
      };

      // Keep also sending to Apps Script if configured (optional, for backup reporting)
      const appsScriptPayload = {
        type: 'site_enquiry',
        form: {
          name,
          email,
          phone,
          enquiryFor,
          heardAbout,
          heardAboutOther: heardAbout === 'Other' ? heardAboutOther : '',
        },
        meta: { pageUrl, referrer, userAgent, submittedAt: new Date().toISOString() },
      };

      // Primary: CRM webhook
      await postToWebhook(webhookPayload);

      // Optional backup: Apps Script
      if (scriptUrl) await postToAppsScript(appsScriptPayload);

      setMessage({ type: 'success', text: 'Thank you! We will contact you soon.' });
      setTimeout(() => close(), 1500);
      setForm({ name: '', email: '', phone: '', enquiryFor: 'Consultation', heardAbout: '', heardAboutOther: '' });
    } catch (err) {
      setMessage({ type: 'error', text: `Submission failed: ${err?.message || String(err)}` });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="enquiry-popup-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Enquiry form">
      <div className="enquiry-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="enquiry-popup-close" onClick={close} aria-label="Close enquiry form">
          ×
        </button>

        <h2 className="enquiry-popup-title">Enquire Now</h2>
        <p className="enquiry-popup-subtitle">Please share your details. We will reach you soon.</p>

        <form className="enquiry-popup-form" onSubmit={handleSubmit}>
          <label className="enquiry-field">
            <span>Name *</span>
            <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your name" required />
          </label>

          <label className="enquiry-field">
            <span>Email ID *</span>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              placeholder="yourname@example.com"
              maxLength={100}
              required
            />
          </label>

          <label className="enquiry-field">
            <span>Mobile Number *</span>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              type="tel"
              inputMode="numeric"
              placeholder="Enter phone number"
              maxLength={15}
              required
            />
          </label>

          <label className="enquiry-field">
            <span>Enquire for *</span>
            <select name="enquiryFor" value={form.enquiryFor} onChange={onChange} required>
              <option value="Consultation">Consultation</option>
              <option value="Courses">Courses</option>
            </select>
          </label>

          <label className="enquiry-field">
            <span>Where did you hear about this site? *</span>
            <select name="heardAbout" value={form.heardAbout} onChange={onChange} required>
              <option value="">Select</option>
              {heardAboutOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          {form.heardAbout === 'Other' && (
            <label className="enquiry-field">
              <span>Please specify *</span>
              <input
                name="heardAboutOther"
                value={form.heardAboutOther}
                onChange={onChange}
                type="text"
                placeholder="Eg: referral, website, etc."
                required
              />
            </label>
          )}

          {message && (
            <div className={`enquiry-message ${message.type === 'error' ? 'error' : 'success'}`}>{message.text}</div>
          )}

          <button className="enquiry-submit" type="submit" disabled={loading}>
            {loading ? 'Sending…' : 'Submit'}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}

