import React from 'react';
import './WhyChooseUs.css';
import groupImage from '../../assets/images/Group.png';
import group2Image from '../../assets/images/Group2.png';
import group3Image from '../../assets/images/Group3.png';
import group4Image from '../../assets/images/Group4.png';
import group6Image from '../../assets/images/Group6.png';

const WhyChooseUs = () => {
  const images = [
    { src: groupImage, alt: 'Why Choose Us 1' },
    { src: group2Image, alt: 'Why Choose Us 2' },
    { src: group3Image, alt: 'Why Choose Us 3' },
    { src: group4Image, alt: 'Why Choose Us 4' },
    { src: group6Image, alt: 'Why Choose Us 5' }
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="section-title scroll-from-center">WHY CHOOSE US?</h2>
        <div className="images-grid">
          {images.map((image, index) => (
            <div key={index} className={`image-item image-item-${index + 1} ${index % 3 === 0 ? 'scroll-from-left' : index % 3 === 1 ? 'scroll-from-center' : 'scroll-from-right'}`}>
              <img src={image.src} alt={image.alt} className="group-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

