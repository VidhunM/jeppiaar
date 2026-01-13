import React, { useEffect, useState } from 'react';
import './WhyChooseUs.css';
import groupImage from '../../assets/images/Group.png';
import group2Image from '../../assets/images/Group2.png';
import group3Image from '../../assets/images/Group3.png';
import group4Image from '../../assets/images/Group4.png';
import group5Image from '../../assets/images/Group6.png';

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: groupImage, alt: 'Why Choose Us 1' },
    { src: group2Image, alt: 'Why Choose Us 2' },
    { src: group3Image, alt: 'Why Choose Us 3' },
    { src: group4Image, alt: 'Why Choose Us 4' },
    { src: group5Image, alt: 'Why Choose Us 5' }
  ];

  // Create infinite loop by duplicating images for seamless scrolling
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // Reset to 0 when we complete one full cycle
        return nextIndex >= images.length ? 0 : nextIndex;
      });
    }, 5000); // Slow slide - 5 seconds between slides
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="section-title">WHY CHOOSE US?</h2>
          <div className="images-slider">
          <div className="slider-wrapper">
            <div
              className="images-track"
              style={{ 
                transform: `translateX(-${currentIndex * 33.333}%)`,
                transition: currentIndex === 0 ? 'none' : 'transform 2s ease-in-out'
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="group-image"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image load error:', image.src);
                      e.target.style.border = '2px solid red';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

