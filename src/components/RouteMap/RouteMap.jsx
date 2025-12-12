import React from 'react';
import './RouteMap.css';

const RouteMap = () => {
  return (
    <section className="route-map-section">
      <div className="map-header">
        <div className="container">
          <h2>Find Us</h2>
          
        </div>
      </div>
      <div className="map-container-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d80.12345678901234!3d12.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzE1LjYiTiA4MMKwMDcjMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jeppiaar Academy Location"
        ></iframe>
      </div>
    </section>
  );
};

export default RouteMap;

