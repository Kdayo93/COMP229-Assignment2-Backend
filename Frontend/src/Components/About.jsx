// About.jsx
// Student: Kekelani Dayo | StudentID: 301451023| Date: May 19, 2025

import React from 'react';
import '../App.css';
import profile from '../assets/profile.png';

export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={profile} alt="Profile" className="profile-pic" />
      <p className="bio">
        Hello! I’m Kekelani Dayo, a dedicated Software Engineering – Artificial Intelligence student at Centennial College.
        My focus is on front-end development, user interface design, and practical programming using tools like React, JavaScript,
        and Python. With a background in developing small games, web apps, and interactive dashboards, I’m passionate about bringing 
        digital ideas to life through clean, responsive design and efficient code.
      </p>
      <a
        href="/Kekelani Dayo Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        View My Resume (PDF)
      </a>
    </div>
  );
}



