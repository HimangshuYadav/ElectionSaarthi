import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="chakra-decor hero-chakra"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="badge">Your Digital Guide to Indian Elections</span>
          <h1 className="hero-title">
            Empowering Voters,<br/>
            <span className="text-gradient">Strengthening Democracy</span>
          </h1>
          <p className="hero-subtitle">
            Understand the world's largest democratic exercise. From voter registration to result day, ElectionSaarthi makes the entire electoral process easy to understand for every Indian citizen.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary hero-btn">Explore Timeline</button>
            <button className="btn btn-outline hero-btn">Check Voter Guide</button>
          </div>
        </div>
        <div className="hero-image-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-card glass-panel">
            <div className="card-header">
              <div className="dot saffron-dot"></div>
              <div className="dot white-dot"></div>
              <div className="dot green-dot"></div>
            </div>
            <div className="card-body">
              <h3>Next Phase: Voting Day</h3>
              <div className="countdown">
                <div className="time-box"><span>14</span><small>Days</small></div>
                <div className="time-box"><span>08</span><small>Hours</small></div>
                <div className="time-box"><span>45</span><small>Mins</small></div>
              </div>
              <p className="card-note">Be ready with your Voter ID!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
