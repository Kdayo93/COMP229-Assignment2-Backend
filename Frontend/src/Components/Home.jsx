// Home.jsx
// Name:Kekelani Dayo| StudentID: 301451023 | Date: May 19, 2025

import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1>Kekelani Dayo</h1>
      <h2>Welcome to My Portfolio</h2>
      <p>
        I’m a Software Engineering – Artificial Intelligence student at Centennial College with a passion for building 
        intuitive, responsive, and functional digital experiences. This site showcases my growing skill set in front-end development,
        application design, and practical programming tools including React, JavaScript, Python, and more.
      </p>


      <div className="mission">
        <h2>My Mission</h2>
        <p>
          My goal is to develop innovative, user-friendly solutions that not only function effectively but also create a meaningful experience
          for the end user. I’m focused on continuous learning and applying my skills to real-world projects that demonstrate my capabilities
          in both academic and personal development environments.
        </p>
      </div>

      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
}



