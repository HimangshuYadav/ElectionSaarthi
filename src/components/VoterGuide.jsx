import React from 'react';
import './VoterGuide.css';

const steps = [
  {
    title: 'Check Eligibility',
    desc: 'You must be an Indian citizen, 18 years or older on the qualifying date (usually Jan 1st).',
    icon: '👤'
  },
  {
    title: 'Fill Form 6',
    desc: 'Apply online via the NVSP portal or Voter Helpline App, or submit a physical Form 6 to your Electoral Registration Officer.',
    icon: '📝'
  },
  {
    title: 'Submit Documents',
    desc: 'Provide proof of age (Birth Certificate/Aadhaar) and proof of residence (Passport/Utility Bill).',
    icon: '📄'
  },
  {
    title: 'Verification',
    desc: 'A Booth Level Officer (BLO) will visit your residence to verify the details provided in your application.',
    icon: '🏠'
  },
  {
    title: 'Get Voter ID',
    desc: 'Once approved, your name is added to the Electoral Roll and your EPIC (Voter ID) is mailed to you.',
    icon: '💳'
  }
];

const VoterGuide = () => {
  return (
    <section id="voter-guide" className="section">
      <div className="container">
        <h2 className="section-title">Voter Registration Guide</h2>
        <p className="text-center subtitle">How to get your Voter ID and exercise your democratic right.</p>
        
        <div className="guide-grid">
          {steps.map((step, index) => (
            <div key={index} className="guide-card glass-panel">
              <div className="step-number">{index + 1}</div>
              <div className="guide-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
          
          <div className="guide-cta glass-panel">
            <h3>Ready to Register?</h3>
            <p>Visit the official National Voters' Services Portal (NVSP) to start your application.</p>
            <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit NVSP Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoterGuide;
