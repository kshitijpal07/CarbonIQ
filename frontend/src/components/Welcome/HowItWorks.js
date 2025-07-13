import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload Project Evidence',
      description: 'Submit your carbon offset project documentation, images, and data for AI analysis.',
      icon: '📁'
    },
    {
      number: '02',
      title: 'AI Verification Process',
      description: 'Our advanced AI analyzes satellite imagery, energy reports, and validates your project claims.',
      icon: '🔍'
    },
    {
      number: '03',
      title: 'Blockchain Certification',
      description: 'Verified projects receive blockchain-based carbon credit tokens with immutable records.',
      icon: '🏆'
    },
    {
      number: '04',
      title: 'Trade in Marketplace',
      description: 'Buy, sell, or trade your verified carbon credits in our secure decentralized marketplace.',
      icon: '💱'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2>How CarbonIQ Works</h2>
          <p>Simple, transparent process from verification to trading</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
