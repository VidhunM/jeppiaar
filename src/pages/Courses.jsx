import React from 'react';
import CoursesGrid from '../components/Courses/CoursesGrid';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="container">
          <h1>Diploma Programs</h1>
          <p>Explore our comprehensive range of advanced diploma programs</p>
        </div>
      </div>
      <CoursesGrid />
    </div>
  );
};

export default Courses;

