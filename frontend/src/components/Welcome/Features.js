import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Verification',
      description: 'Advanced machine learning algorithms analyze satellite imagery, energy reports, and project documentation for accurate verification.'
    },
    {
      icon: '🔗',
      title: 'Blockchain Transparency',
      description: 'Immutable records on blockchain ensure complete transparency and trust in carbon credit transactions.'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Monitor your carbon credit portfolio with comprehensive analytics and environmental impact tracking.'
    },
    {
      icon: '🏪',
      title: 'Decentralized Marketplace',
      description: 'Buy and sell verified carbon credits in a secure, decentralized marketplace with fair pricing.'
    },
    {
      icon: '🌱',
      title: 'Environmental Impact',
      description: 'Track real environmental benefits and contribute to global sustainability goals with verified projects.'
    },
    {
      icon: '⚡',
      title: 'Instant Processing',
      description: 'Fast verification and processing times powered by AI automation and blockchain efficiency.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2>Why Choose CarbonIQ?</h2>
          <p>Revolutionary features that make carbon credit management transparent, efficient, and trustworthy</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
