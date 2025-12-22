import React from 'react';
import './RouteMap.css';

const RouteMap = () => {
  return (
    <section className="route-map-section">
      <div className="map-header">
        <div className="container">
        </div>
      </div>
    <div className="map-container-full">
      <iframe
        src="https://maps.google.com/maps?q=1/40H,%20EJR%20Enclave,%20Mount%20Poonamallee%20Road,%20St.%20Thomas%20Mt,%20Chennai%20-%20600016&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

