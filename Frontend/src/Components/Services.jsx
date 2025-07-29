// Services.jsx
// Student: Kekelani Dayo | StudentID: 301451023 | Date: May 19, 2025

import React from 'react';
import '../App.css';
import programming from '../assets/programming.png';
import web from '../assets/web-dev.png';
import mobile from '../assets/mobile-app.png';

export default function Services() {
  return (
    <div className="container">
      <h1>My Services</h1>
      <p>I offer a variety of development services that bring ideas to life.</p>

      <div className="services-grid">
        <div className="service-card">
          <img src={programming} alt="Programming" className="service-img" />
          <h3>General Programming</h3>
          <p>Custom logic, scripting, and tools using Python, JavaScript, and C#.</p>
        </div>
        <div className="service-card">
          <img src={web} alt="Web Development" className="service-img" />
          <h3>Web Development</h3>
          <p>Responsive websites and user-friendly interfaces built with React, HTML, and CSS.</p>
        </div>
        <div className="service-card">
          <img src={mobile} alt="Mobile App Development" className="service-img" />
          <h3>Mobile App Development</h3>
          <p>Prototypes and front-end layouts for mobile applications using React Native and Flutter basics.</p>
        </div>
      </div>
    </div>
  );
}
