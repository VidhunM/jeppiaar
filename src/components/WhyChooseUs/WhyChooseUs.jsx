import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      number: "01",
      title: "Get trained by the NO:1 Psychologist in India",
      color: "#FFC107"
    },
    {
      id: 2,
      number: "02",
      title: "Practical, research-driven curriculum",
      color: "#E91E63"
    },
    {
      id: 3,
      number: "03",
      title: "Robust industry collaborations",
      color: "#03A9F4"
    },
    {
      id: 4,
      number: "04",
      title: "Holistic growth with extensive hands-on experience",
      color: "#1A237E"
    },
    {
      id: 5,
      number: "05",
      title: "State-of-the-art, air-conditioned smart",
      color: "#0E0529"
    }
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="section-title">WHY CHOOSE US?</h2>
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-item">
              <div className="reason-badge-wrapper">
                <div className="reason-badge" style={{ '--badge-color': reason.color }}>
                  <div className="badge-outer-ring"></div>
                  <div className="badge-inner-ring"></div>
                  <div className="badge-inner-circle">
                    <span className="badge-number">{reason.number}</span>
                  </div>
                </div>
                <div className="reason-bracket" style={{ backgroundColor: reason.color }}></div>
              </div>
              <p className="reason-text">{reason.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

