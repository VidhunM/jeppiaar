import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/csec1.png';
import groupImage from '../assets/images/C02.png';
import treatImage from '../assets/images/hwts.png';
import ssvImage from '../assets/icons/ssv.svg';
import mdiFamilyIcon from '../assets/icons/mdi_family.svg';
import groupIcon from '../assets/icons/Group.svg';
import vectorIcon from '../assets/icons/Vector.svg';
import vector1Icon from '../assets/icons/Vector (1).svg';
import cos1 from '../assets/images/cos1.jpg';
import cos2 from '../assets/images/cos2.jpg';
import cos3 from '../assets/images/cos3.jpg';
import cos4 from '../assets/images/cos4.png';
import cos5 from '../assets/images/cos5.jpg';
import './Gallery.css';

const Gallery = () => {
  const [form, setForm] = useState({
    childName: '',
    parentName: '',
    age: '',
    class: '',
    school: '',
    city: '',
    phone: '',
    email: '',
    terms: false
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null); // { type: 'success' | 'error', text: string }

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuqzs81q4dIgBrzsfWbAisS1ZUYwk6QL5LjbogLTJ5snkp3xzw6WqAerINLuLwjnCwbw/exec";

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  setSubmitMessage(null);

  try {
    // Google Apps Script web apps often do NOT include CORS headers.
    // With `no-cors`, the request is sent successfully, but the response is opaque (can't read `res.json()`).
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(form)
    });

    setSubmitMessage({ type: 'success', text: "Thank you — we will contact you soon." });
    // Refresh the form (clear fields) after submit
    setForm({
      childName: "",
      parentName: "",
      age: "",
      class: "",
      school: "",
      city: "",
      phone: "",
      email: "",
      terms: false
    });
  } catch (err) {
    console.error(err);
    setSubmitMessage({ type: 'error', text: "Something went wrong. Please try again." });
  } finally {
    setSubmitting(false);
  }
};


  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [currentProgramSlide, setCurrentProgramSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      if (width <= 600) {
        setCardsPerView(1);
      } else if (width <= 1024) {
        setCardsPerView(2);
      } else if (width <= 1200) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const signsList = [
    'Daily activities are affected because of screen use.',
    'Gets angry or upset when screen time is stopped',
    'Needs more and more screen time to feel happy or satisfied',
    'Loses interest in playing, studying, or spending time with others',
    'Screen use affects studies, work or sleep, but still continues'
  ];

  const programItems = [
    { 
      num: '01', 
      title: 'Early Screening',
      description: 'Identify not just symptoms, but underlying causes'
    },
    { 
      num: '02', 
      title: 'Scientific Psychological Assessments',
      description: 'Understand emotional, behavioral, and cognitive patterns'
    },
    { 
      num: '03', 
      title: 'Early Recovery',
      description: 'Tailored to each individual’s habits, triggers, and mental health history '
    },
    { 
      num: '04', 
      title: ' Individual & Family Counselling',
      description: 'One-on-one and family sessions to process emotions'
    },
    { 
      num: '05', 
      title: 'Digital Detox Programs',
      description: 'Experiential activities to reset the brain\'s reward system'
    }
  ];

  const otherServices = [
    { img: cos1, title: 'School-based Awareness Initiatives' },
    { img: cos2, title: 'Counselling and Family Consultation.' },
    { img: cos3, title: 'Clinical Assessments' },
    { img: cos4, title: 'Support for School Refusal and Social Isolation' }
  ];

  // Auto-advance program slides on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentProgramSlide((prev) => {
        const maxSlide = programItems.length - 1;
        if (prev >= maxSlide) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, programItems.length]);

  // Auto-advance other services slides on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentServiceSlide((prev) => {
        const maxSlide = otherServices.length - 1;
        if (prev >= maxSlide) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, otherServices.length]);

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
          </div>
          <h1 className="cw-hero-heading">
            HELPING TO BUILD HEALTHY, BALANCED RELATIONSHIPS<br />
            WITH TECHNOLOGY
          </h1>
          <p className="cw-hero-intro cw-hero-intro-first">
            In today’s digital world, excessive screen use is increasingly affecting both children and adults. What may begin as simple entertainment can gradually interfere with attention, sleep, emotional well-being, academic or work performance, and social relationships. Over time, screen use can become difficult to control and may impact the brain, emotions, and everyday functioning. When not addressed early, it can lead to larger challenges in personal, academic, and professional life. With the right guidance, individuals can learn to use technology in a healthy and balanced way.
          </p>
          <p className="cw-hero-intro cw-hero-intro-second">
            At Jeppiaar Academy of Psychology and Research, Chennai, we support children, adolescents, and adults in developing healthy screen habits through professional, compassionate, and evidence-based guidance for both individuals and families.
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
                <div className="cw-india-vertical-line cw-india-vertical-line-left"></div>
                <div className="cw-india-icon">
                  <img src={groupIcon} alt="Group icon" />
                </div>
                <p>High screen exposure. among children: Around 61% of urban Indian parents report that children aged 9-17 spend 3 or more hours per day on screens (social media, videos/OTT, gaming). Many also show signs of aggression, impatience and hyperactivity linked to this exposure</p>
              </div>
              <div className="cw-india-col cw-india-col-center">
                <div className="cw-india-u-border">
                  <div className="cw-india-u-border-left"></div>
                  <div className="cw-india-u-border-right"></div>
                  <div className="cw-india-u-border-bottom"></div>
                </div>
                <div className="cw-india-icon">
                  <img src={vectorIcon} alt="Vector icon" />
                </div>
                <p>Adult screen use in India is substantial: Indians spend about 7+ hours per day on smartphone screens on average – covering messaging, social media, videos, OTT and more – making everyday digital use a large part of daily life.</p>
              </div>
              <div className="cw-india-col cw-india-col-right">
                <div className="cw-india-vertical-line cw-india-vertical-line-right"></div>
                <div className="cw-india-icon">
                  <img src={vector1Icon} alt="Vector 1 icon" />
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
            <p className="cw-treat-para">At Jeppiaar Academy of Psychology and Research, we use a holistic, evidence-based approach to help children and adults heal from the inside out. We don't just limit screen time - we explore the emotional, social, and behavioral reasons behind excessive screen use and help individuals build healthier, long-term habits.</p>
            <p className="cw-treat-para">Through personalized assessments, counseling, and skill-building strategies, we support lasting change - not just short-term control.</p>
          </div>
          <div className="cw-treat-right">
            <div className="cw-treat-card">
              <div className="cw-treat-image">
                <img src={treatImage} alt="People using screens" />
              </div>
              <div className="cw-treat-callout">
                <img src={mdiFamilyIcon} alt="Family icon" className="cw-callout-icon" />
                <span className="cw-callout-text">100+ children and adults supported so far</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Program Includes */}
      <section className="cw-section cw-section-light cw-program">
        <div className="cw-container">
          <h3 className="cw-section-title cw-title-dark cw-centered">OUR PROGRAM INCLUDES</h3>
          <p className="cw-program-sub">Each component works together to address the full picture of screen addiction, helping children replace unhealthy coping mechanisms with meaningful, lasting tools for growth.</p>
          <div className="cw-program-timeline">
            <div className="cw-program-timeline-line"></div>
            <div className="cw-program-wrapper">
              <div className="cw-program-slider">
                <div 
                  className="cw-program-slider-track" 
                  style={{ transform: `translateX(-${currentProgramSlide * 100}%)` }}
                >
                  {programItems.map((item, i) => (
                    <div key={i} className="cw-program-item">
                      <div className={`cw-program-circle ${i === currentProgramSlide ? 'cw-program-circle-active' : ''}`}>
                        <span className="cw-program-num">{item.num}</span>
                      </div>
                      <h4 className="cw-program-title">{item.title}</h4>
                      <p className="cw-program-description">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="cw-program-grid">
              {programItems.map((item, i) => (
                <div key={i} className="cw-program-item">
                  <div className={`cw-program-circle ${i === 0 ? 'cw-program-circle-active' : ''}`}>
                    <span className="cw-program-num">{item.num}</span>
                  </div>
                  <h4 className="cw-program-title">{item.title}</h4>
                  <p className="cw-program-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Other Services */}
      <section className="cw-section cw-section-light cw-other">
        <div className="cw-container">
          <h3 className="cw-section-title cw-title-dark cw-centered">OTHER SERVICES</h3>
          <div className="cw-other-wrapper">
            <div className="cw-other-slider">
              <div 
                className="cw-other-slider-track" 
                style={{ 
                  transform: isMobile 
                    ? `translateX(-${currentServiceSlide * 100}%)` 
                    : `translateX(-${currentServiceSlide * (100 / cardsPerView)}%)` 
                }}
              >
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
          </div>
          <div className="cw-other-dots">
            {otherServices.map((_, i) => (
              <button
                key={i}
                className={`cw-other-dot ${i === currentServiceSlide ? 'active' : ''}`}
                onClick={() => setCurrentServiceSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Get Help Now */}
      <section className="cw-section cw-section-dark cw-gethelp">
        <div className="cw-container cw-gethelp-inner">
          <div className="cw-gethelp-text">
            <h3 className="cw-gethelp-heading">Ready to Break the Cycle?</h3>
            <p className="cw-gethelp-para">If your child is stuck in a cycle of screen use, emotional withdrawal, or overwhelm, they don't have to stay there. We help families understand the "why" behind screen addiction and build a healthier path forward.-but you don’t have to do it alone. Our team is here to support you and your family with personalised assessments, counselling, and practical strategies that work in the real world.</p>
            <p className="cw-gethelp-para">Fill in your details below and we’ll get back to you within 24-48 hours to discuss how we can help.</p>
          </div>
          <div className="cw-gethelp-form-wrap">
            <div className="cw-form-card">
              <h4 className="cw-form-title">Get Help Now</h4>
              <p className="cw-form-sub">Fill in the form below and our team will reach out:</p>
              {submitMessage && (
                <p className={`cw-form-message ${submitMessage.type}`}>
                  {submitMessage.text}
                </p>
              )}
              <form className="cw-form" onSubmit={handleSubmit}>
                <div className="cw-form-grid">
                  <input name="childName" value={form.childName} onChange={handleFormChange} type="text" placeholder="Name of Child" required />
                  <input name="parentName" value={form.parentName} onChange={handleFormChange} type="text" placeholder="Name of Parent" required />
                  <input name="age" value={form.age} onChange={handleFormChange} type="text" placeholder="Age" inputMode="numeric" />
                  <input name="class" value={form.class} onChange={handleFormChange} type="text" placeholder="Class" />
                  <input name="school" value={form.school} onChange={handleFormChange} type="text" placeholder="School / College Name" />
                  <input name="city" value={form.city} onChange={handleFormChange} type="text" placeholder="City" />
                  <input name="phone" value={form.phone} onChange={handleFormChange} type="tel" placeholder="Phone Number" required />
                  <input name="email" value={form.email} onChange={handleFormChange} type="email" placeholder="Email ID" required />
                </div>
                <label className="cw-form-check">
                  <input name="terms" type="checkbox" checked={form.terms} onChange={handleFormChange} required />
                  <span>Take the first step toward lasting change</span>
                </label>
                <button type="submit" className="cw-form-btn" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
