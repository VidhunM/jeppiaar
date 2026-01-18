import React from 'react';
import cc1Image from '../assets/images/cc1.png';
import './Gallery.css';

const Gallery = () => {
  // Using the same image for all 9 cards as shown in the image
  // Replace cc1Image with the actual gallery image path if needed
  const galleryImage = cc1Image;
  
  const galleryItems = Array(9).fill({
    image: galleryImage,
    text: "Gain practical counselling skills for children and adolescents"
  });

  return (
    <div className="gallery-page">
      <section className="gallery-header">
        <div className="container">
          <h1 className="gallery-title">GALLERY</h1>
        </div>
      </section>
      
      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-card">
                <div className="gallery-card-image">
                  <img 
                    src={item.image} 
                    alt="Counselling session with children"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <p className="gallery-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
