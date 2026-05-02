import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🇮🇳</span>
            <span className="logo-text">Election<span className="text-saffron">Saarthi</span></span>
          </div>
          <p className="footer-tagline">
            Empowering every Indian citizen to make informed decisions in the world's largest democracy.
          </p>
        </div>
        
        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#timeline">Election Process</a></li>
            <li><a href="#voter-guide">Voter Guide</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>
        
        <div className="footer-links-group">
          <h4>Official Resources</h4>
          <ul>
            <li><a href="https://eci.gov.in/" target="_blank" rel="noopener noreferrer">Election Commission of India</a></li>
            <li><a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer">NVSP Portal</a></li>
            <li><a href="https://results.eci.gov.in/" target="_blank" rel="noopener noreferrer">Election Results</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ElectionSaarthi. Built for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
