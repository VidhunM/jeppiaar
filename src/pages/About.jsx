import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Jeppiaar Academy of Psychology & Research</p>
        </div>
      </div>
      
      <div className="about-content">
        <div className="container">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              Jeppiaar Academy of Psychology and Research prepares ethical, skilled, and globally conscious psychology professionals through world-class, practice-oriented education. Our academy bridges the gap between classroom knowledge and real-world mental health practice.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Vision</h2>
            <p>
              To be a leading institution in psychology education, fostering innovation, research, and excellence in mental health care.
            </p>
          </section>

          <section className="about-section">
            <h2>Why Choose Us</h2>
            <p>
              We offer comprehensive diploma programs designed to equip students with practical skills and theoretical knowledge needed to excel in the field of psychology.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

