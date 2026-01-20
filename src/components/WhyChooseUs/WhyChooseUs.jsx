import React, { useEffect, useState } from 'react';
import './WhyChooseUs.css';
import why01 from '../../assets/images/01.png';
import why02 from '../../assets/images/02.png';
import why03 from '../../assets/images/03.png';
import why04 from '../../assets/images/04.png';
import why05 from '../../assets/images/05.png';

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidePct, setSlidePct] = useState(() => {
    if (typeof window === 'undefined') return 33.333;
    return window.matchMedia('(max-width: 768px)').matches ? 100 : 33.333;
  });

  const images = [
    { src: why01, alt: 'Why Choose Us 01' },
    { src: why02, alt: 'Why Choose Us 02' },
    { src: why03, alt: 'Why Choose Us 03' },
    { src: why04, alt: 'Why Choose Us 04' },
    { src: why05, alt: 'Why Choose Us 05' }
  ];

  // Create infinite loop by duplicating images for seamless scrolling
  const duplicatedImages = [...images, ...images];

  // Responsive slide width (mobile: 1 image, desktop: 3 images)
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mql = window.matchMedia('(max-width: 768px)');
    const update = () => setSlidePct(mql.matches ? 100 : 33.333);

    update();

    // Safari fallback: addListener/removeListener
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', update);
      return () => mql.removeEventListener('change', update);
    }

    mql.addListener(update);
    return () => mql.removeListener(update);
  }, []);

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
                transform: `translateX(-${currentIndex * slidePct}%)`,
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

