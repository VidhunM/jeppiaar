import React from 'react';
import { Link } from 'react-router-dom';
import our1 from '../../assets/images/our1.png';
import our2 from '../../assets/images/our2.png';
import our3 from '../../assets/images/our3.png';
import our4 from '../../assets/images/our4.png';
import D1 from '../../assets/icons/D1.png';
import D2 from '../../assets/icons/D2.png';
import './CoursesGrid.css';

const CoursesGrid = ({ onKnowMoreClick }) => {
  const programs = [
    {
      id: 1,
      title: "Advanced Diploma in Counselling and Child Psychology",
      duration: "12-Month Program",
      eligibility: "Open to All UG Graduates",
      image: our1,
      path: "/counselling-child-psychology"
    },
    {
      id: 2,
      title: "Advanced Diploma in Counselling and Organisational Psychology",
      duration: "12-Month Program",
      eligibility: "Open to All UG Graduates",
      image: our2,
      path: "/counselling-organizational-psychology"
    },
    {
      id: 3,
      title: "Advanced Diploma in Counselling and Forensic Psychology",
      duration: "12-Month Program",
      eligibility: "Open to All UG Graduates",
      image: our3,
      path: "/counselling-forensic-psychology"
    },
    {
      id: 4,
      title: "Advanced Diploma in Art Therapy",
      duration: "12-Month Program",
      eligibility: "Open to All UG Graduates",
      image: our4,
      path: "/counselling-art-therapy"
    }
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <div className="courses-description">
          <h2 className="courses-section-title courses-heading scroll-from-center">
            <span className="courses-heading-line courses-heading-line-1">OUR ADVANCED</span>
            {' '}
            <span className="courses-heading-line courses-heading-line-2">DIPLOMA COURSES</span>
          </h2>
          <p className="courses-description-text scroll-from-center">
            Jeppiaar Academy of Psychology and Research prepares ethical, skilled, and globally competent psychology professionals through world-class, practice-oriented education. Our academy bridges the gap between classroom knowledge and real-world mental health practice.
          </p>
        </div>

        <div className="courses-grid">
          {programs.map((program, index) => (
            <div key={program.id} className={`course-card ${index % 2 === 0 ? 'scroll-from-left' : 'scroll-from-right'}`}>
              <div className="course-image">
                <img 
                  src={program.image} 
                  alt={program.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250"%3E%3Crect fill="%23e0e0e0" width="400" height="250"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="course-content">
                <h3>{program.title}</h3>
                <div className="course-divider"></div>
                <div className="course-details">
                  <div className="course-detail-item">
                    <img src={D1} alt="Duration" className="course-icon" />
                    <span>Duration: {program.duration}</span>
                  </div>
                  <div className="course-detail-item">
                    <img src={D2} alt="Courses" className="course-icon" />
                    <span>Courses: {program.eligibility}</span>
                  </div>
                </div>
                <Link to={program.path} className="know-more-btn">Know more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;

