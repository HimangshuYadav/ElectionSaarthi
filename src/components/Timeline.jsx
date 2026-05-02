import React, { useState } from 'react';
import './Timeline.css';

const timelineData = [
  {
    id: 1,
    phase: 'Announcement & MCC',
    date: 'Phase 1',
    description: 'The Election Commission announces the dates. The Model Code of Conduct (MCC) comes into effect immediately to ensure free and fair elections.',
    icon: '📢'
  },
  {
    id: 2,
    phase: 'Nominations',
    date: 'Phase 2',
    description: 'Candidates file their nomination papers along with affidavits detailing their assets, liabilities, and criminal records.',
    icon: '📝'
  },
  {
    id: 3,
    phase: 'Scrutiny & Withdrawal',
    date: 'Phase 3',
    description: 'The returning officer scrutinizes the nominations. Candidates can withdraw their names if they wish to back out.',
    icon: '🔍'
  },
  {
    id: 4,
    phase: 'Campaigning',
    date: 'Phase 4',
    description: 'Candidates campaign to win voters. Campaigning stops 48 hours before the voting day.',
    icon: '🎤'
  },
  {
    id: 5,
    phase: 'Polling Day',
    date: 'Phase 5',
    description: 'Citizens cast their votes using Electronic Voting Machines (EVMs) equipped with VVPATs for verification.',
    icon: '🗳️'
  },
  {
    id: 6,
    phase: 'Counting & Results',
    date: 'Phase 6',
    description: 'Votes are counted under heavy security, and the results are declared. The party with the majority forms the government.',
    icon: '📈'
  }
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="timeline" className="section bg-light">
      <div className="container">
        <h2 className="section-title">The Election Process</h2>
        
        <div className="timeline-container">
          <div className="timeline-nav" role="tablist">
            {timelineData.map((item, index) => (
              <button 
                key={item.id}
                className={`timeline-nav-item ${index === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
                role="tab"
                aria-selected={index === activeStep}
                aria-controls={`timeline-panel-${item.id}`}
                id={`timeline-tab-${item.id}`}
              >
                <div className="timeline-nav-icon" aria-hidden="true">{item.icon}</div>
                <div className="timeline-nav-text">{item.phase}</div>
              </button>
            ))}
          </div>

          <div className="timeline-content-wrapper">
            {timelineData.map((item, index) => (
              <div 
                key={item.id} 
                className={`timeline-content glass-panel ${index === activeStep ? 'active' : ''}`}
                role="tabpanel"
                id={`timeline-panel-${item.id}`}
                aria-labelledby={`timeline-tab-${item.id}`}
                hidden={index !== activeStep}
              >
                <div className="content-header">
                  <span className="phase-badge">{item.date}</span>
                  <h3>{item.phase}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
