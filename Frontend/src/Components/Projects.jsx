// Projects.jsx
// Student: Kekelani Dayo | StudentID: 301451023| Date: May 19, 2025

import React from 'react';
import '../App.css';
import calcImg from '../assets/multiplication-table.png';
import bugImg from '../assets/bug-smasher.png';
import bpmImg from '../assets/bpm-simulator.png';

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>
      <p>This page showcases some of my hands-on projects.</p>

      <div className="services-grid">
        <div className="service-card">
          <img src={calcImg} alt="Multiplication Table App" className="project-img" />
          <h3>Multiplication Table Generator</h3>
          <p>This web app allows users to input row and column values to generate a dynamic multiplication table. It helps students visualize basic math patterns and understand multiplication more clearly.</p>
        </div>

        <div className="service-card">
          <img src={bugImg} alt="Bug Smasher Game" className="project-img" />
          <h3>Bug Smasher Game</h3>
          <p>A fun, interactive browser game where players click on a fast-moving bug to score points. The game includes controls for resetting speed and score.</p>
        </div>

        <div className="service-card">
          <img src={bpmImg} alt="BPM Simulator" className="project-img" />
          <h3>BPM Simulator (Python)</h3>
          <p>This application simulates heart rate data using real-time charts. It was developed using Python and Tkinter to display both line and bar chart data, mimicking sensor readings.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;


