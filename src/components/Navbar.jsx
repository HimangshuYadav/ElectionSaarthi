import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon" aria-hidden="true">🇮🇳</span>
          <span className="logo-text">Election<span className="text-saffron">Saarthi</span></span>
        </div>
        <div className="navbar-links" aria-label="Navigation Links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#timeline" className="nav-link">Process</a>
          <a href="#voter-guide" className="nav-link">Voter Guide</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>
        <a href="#timeline" className="btn btn-primary nav-btn">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;
