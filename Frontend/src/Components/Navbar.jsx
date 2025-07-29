// File: Navbar.jsx
// Student: Kekelani Dayo, StudentID: 301451023, Date: May 19, 2025

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../App.css';


export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
