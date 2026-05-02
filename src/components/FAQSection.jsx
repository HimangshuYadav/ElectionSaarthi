import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: "What is a VVPAT and how does it work?",
    answer: "VVPAT stands for Voter Verifiable Paper Audit Trail. It is an independent verification system attached to the EVM. When you cast your vote, it prints a paper slip containing the serial number, name, and symbol of the candidate you voted for. The slip is visible for 7 seconds behind a glass window before dropping into a sealed drop box."
  },
  {
    question: "Can I vote if I don't have my Voter ID card?",
    answer: "Yes! If your name is on the electoral roll, you can vote using other alternative photo identity documents approved by the Election Commission, such as Aadhaar Card, PAN Card, Driving License, Indian Passport, or MGNREGA Job Card."
  },
  {
    question: "What is the Model Code of Conduct (MCC)?",
    answer: "The MCC is a set of guidelines issued by the Election Commission of India for political parties and candidates to ensure free and fair elections. It regulates speeches, polling day, polling booths, election manifestos, processions, and general conduct."
  },
  {
    question: "How do I check if my name is on the voter list?",
    answer: "You can check your name on the electoral roll online at the National Voters' Services Portal (NVSP), through the Voter Helpline App, or by sending an SMS to 1950."
  },
  {
    question: "What happens if NOTA gets the maximum votes?",
    answer: "NOTA means 'None of the Above'. Even if NOTA receives the highest number of votes, the candidate with the second-highest number of votes is declared the winner. NOTA is a way for voters to express dissatisfaction, but it does not invalidate the election."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Your Election Assistant</h2>
        <p className="text-center subtitle">Common questions answered about voting and the election process.</p>
        
        <div className="faq-container">
          <div className="faq-illustration">
            <div className="assistant-avatar">🤖</div>
            <div className="chat-bubble">
              Hi! I'm ElectionSaarthi. Here are some of the most frequently asked questions. Need more help? Let me know!
            </div>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item glass-panel ${openIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
