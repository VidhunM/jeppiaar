import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero2.png';
import groupImage from '../assets/images/C02.png';
import treatImage from '../assets/images/c5.jpeg';
import ssvImage from '../assets/icons/ssv.svg';
import our1 from '../assets/images/our1.png';
import our2 from '../assets/images/our2.png';
import our3 from '../assets/images/our3.png';
import our4 from '../assets/images/our4.png';
import './Gallery.css';

const Gallery = () => {
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    email: '',
    gender: '',
    phone: '',
    city: '',
    concern: '',
    terms: false
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Get Help form:', form);
    alert('Thank you for reaching out. We will contact you soon.');
    setForm({ fullName: '', age: '', email: '', gender: '', phone: '', city: '', concern: '', terms: false });
  };

  const signsList = [
    'Excessive preoccupation with screen use',
    'Withdrawal symptoms when not using screens',
    'Neglecting important areas of life',
    'Continuing to use despite negative consequences',
    'Loss of control over screen use'
  ];

  const programItems = [
    { num: '01', label: 'Early Screening' },
    { num: '02', label: 'Clinical & Psychological Assessments' },
    { num: '03', label: 'Early Recovery' },
    { num: '04', label: 'Individual & Parent Counselling' },
    { num: '05', label: 'Digital Detox Programs' }
  ];

  const otherServices = [
    { img: our1, title: 'School Workshops' },
    { img: our2, title: 'Family Therapy' },
    { img: our3, title: 'Individual Counselling' },
    { img: our4, title: 'Community Outreach' }
  ];

  return (
    <div className="consultations-page">
      {/* 1. Banner */}
      <section className="cw-banner">
        <div className="cw-container">
          <h2 className="cw-banner-title">DIGITAL WELLNESS & SCREEN ADDICTION SUPPORT FOR ALL</h2>
        </div>
      </section>

      {/* 2. Hero: image + Apply Now strip, then heading & text */}
      <section className="cw-hero">
        <div className="cw-container">
          <div className="cw-hero-row">
            <div className="cw-hero-image-wrap">
              <img src={heroImage} alt="Family engaging with technology at home" />
            </div>
            <Link to="/apply-online" className="cw-apply-now-strip">
              <span className="cw-apply-now-text">Apply Now</span>
            </Link>
          </div>
          <h1 className="cw-hero-heading">HELPING TO BUILD HEALTHY, BALANCED RELATIONSHIPS WITH TECHNOLOGY</h1>
          <p className="cw-hero-intro">
            In today’s digital world, excessive screen use can affect the well-being of children and adults alike. Understanding and managing our relationship with technology is important, and the right guidance can help families build healthy, balanced habits.
          </p>
          <p className="cw-hero-intro">
            Jeppiaar Academy of Psychology and Research offers support for developing healthy screen habits. Our team provides professional, compassionate, and evidence-based guidance for individuals and families.
          </p>
        </div>
      </section>

      {/* 3. Signs of Screen Addiction */}
      <section className="cw-section cw-section-dark cw-signs">
        <div className="cw-container cw-signs-inner">
          <div className="cw-signs-illus">
            <img src={ssvImage} alt="Screen addiction illustration" />
          </div>
          <div className="cw-signs-content">
            <h3 className="cw-section-title cw-title-light">SIGNS OF SCREEN ADDICTION</h3>
            <div className="cw-signs-box">
              <ul>
                {signsList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Screen Use in India */}
      <section className="cw-section cw-section-light cw-india">
        <div className="cw-container">
          <h3 className="cw-section-title cw-title-dark cw-centered">SCREEN USE IN INDIA</h3>
          <div className="cw-india-timeline-wrapper">
            <div className="cw-india-timeline">
              <div className="cw-india-timeline-line-top"></div>
              <div className="cw-india-timeline-node cw-india-node-left"></div>
              <div className="cw-india-timeline-node cw-india-node-center"></div>
              <div className="cw-india-timeline-node cw-india-node-right"></div>
            </div>
            <div className="cw-india-grid">
              <div className="cw-india-col cw-india-col-left">
                <div className="cw-india-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>High screen exposure among children: Around 61% of urban Indian parents report that children aged 9-17 spend 3 or more hours per day on screens (social media, videos/OTT, gaming). Many also show signs of aggression, impatience and hyperactivity linked to this exposure</p>
              </div>
              <div className="cw-india-col cw-india-col-center">
                <div className="cw-india-icon cw-india-icon-glow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>Adult screen use in India is substantial: Indians spend about 7+ hours per day on smartphone screens on average – covering messaging, social media, videos, OTT and more – making everyday digital use a large part of daily life.</p>
              </div>
              <div className="cw-india-col cw-india-col-right">
                <div className="cw-india-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 18L8 12L13 15L21 6" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="3" cy="18" r="1.5" fill="currentColor"/>
                    <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
                    <circle cx="13" cy="15" r="1.5" fill="currentColor"/>
                    <circle cx="21" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
                <p>Behavioural and wellbeing concerns: Excessive screen use (in children and adults) is associated with behavioural issues and wellbeing impacts such as poor sleep, irritability and difficulty with self-regulation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Treat */}
      <section className="cw-section cw-section-dark cw-treat">
        <div className="cw-container cw-treat-inner">
          <div className="cw-treat-text">
            <h3 className="cw-section-title cw-title-light">HOW WE TREAT SCREEN ADDICTION AT ITS CORE</h3>
            <p className="cw-treat-para">We focus on understanding the underlying emotional and behavioural patterns that drive excessive screen use. Through individualised assessments, counselling, and structured digital detox programmes, we help clients and their families develop healthier habits and stronger connections beyond the screen.</p>
            <p className="cw-treat-para">Our goal is lasting change—not just cutting hours, but building a balanced, intentional relationship with technology.</p>
          </div>
          <div className="cw-treat-right">
            <div className="cw-treat-image">
              <img src={treatImage} alt="Therapy or workshop setting" />
            </div>
            <div className="cw-treat-callout">
              <span className="cw-callout-diamond">◆</span>
              <span>100+ children and adults supported so far</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Program Includes */}
      <section className="cw-section cw-section-light cw-program">
        <div className="cw-container">
          <h3 className="cw-section-title cw-title-dark cw-centered">OUR PROGRAM INCLUDES</h3>
          <p className="cw-program-sub">A comprehensive, step-by-step approach from screening to sustained recovery.</p>
          <div className="cw-program-grid">
            {programItems.map((item, i) => (
              <div key={i} className="cw-program-item">
                <div className="cw-program-circle">
                  <span className="cw-program-num">{item.num}</span>
                </div>
                <span className="cw-program-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Other Services */}
      <section className="cw-section cw-section-light cw-other">
        <div className="cw-container">
          <h3 className="cw-section-title cw-title-dark cw-centered">OTHER SERVICES</h3>
          <div className="cw-other-grid">
            {otherServices.map((s, i) => (
              <div key={i} className="cw-other-card">
                <div className="cw-other-image">
                  <img src={s.img} alt={s.title} />
                </div>
                <p className="cw-other-title">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Get Help Now */}
      <section className="cw-section cw-section-dark cw-gethelp">
        <div className="cw-container cw-gethelp-inner">
          <div className="cw-gethelp-text">
            <h3 className="cw-gethelp-heading">Ready to Break the Cycle?</h3>
            <p className="cw-gethelp-para">Taking the first step towards healthier screen habits can feel overwhelming—but you don’t have to do it alone. Our team is here to support you and your family with personalised assessments, counselling, and practical strategies that work in the real world.</p>
            <p className="cw-gethelp-para">Fill in your details below and we’ll get back to you within 24–48 hours to discuss how we can help.</p>
          </div>
          <div className="cw-gethelp-form-wrap">
            <div className="cw-form-card">
              <h4 className="cw-form-title">Get Help Now</h4>
              <p className="cw-form-sub">Fill out your details below</p>
              <form className="cw-form" onSubmit={handleSubmit}>
                <div className="cw-form-grid">
                  <input name="fullName" value={form.fullName} onChange={handleFormChange} type="text" placeholder="Full Name" required />
                  <input name="age" value={form.age} onChange={handleFormChange} type="text" placeholder="Age" inputMode="numeric" />
                  <input name="email" value={form.email} onChange={handleFormChange} type="email" placeholder="Email" required />
                  <select name="gender" value={form.gender} onChange={handleFormChange}>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <input name="phone" value={form.phone} onChange={handleFormChange} type="tel" placeholder="Phone Number" />
                  <input name="city" value={form.city} onChange={handleFormChange} type="text" placeholder="City" />
                </div>
                <textarea name="concern" value={form.concern} onChange={handleFormChange} placeholder="Concern" rows={3} />
                <label className="cw-form-check">
                  <input name="terms" type="checkbox" checked={form.terms} onChange={handleFormChange} required />
                  <span>I agree to the terms and conditions</span>
                </label>
                <button type="submit" className="cw-form-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
