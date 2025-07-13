import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3 } from '../../hooks/useWeb3';

const HeroSection = () => {
  const { connectWallet, isConnected } = useWeb3();

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Carbon Credit
            <span className="highlight"> Verification</span>
          </h1>
          
          <p className="hero-description">
            Revolutionize carbon credit management with blockchain technology. 
            Verify, score, and trade carbon offsets with complete transparency 
            and AI-powered accuracy.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1,250+</span>
              <span className="stat-label">Credits Verified</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Audited</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
          </div>
          
          <div className="hero-actions">
            {isConnected ? (
              <Link to="/dashboard" className="cta-primary">
                Go to Dashboard
              </Link>
            ) : (
              <button onClick={connectWallet} className="cta-primary">
                Connect Wallet & Start
              </button>
            )}
            <a href="#features" className="cta-secondary">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="carbon-visualization">
            <div className="carbon-circle main-circle">
              <div className="carbon-icon">🌍</div>
              <div className="pulse-ring"></div>
            </div>
            <div className="carbon-circle satellite-1">
              <div className="carbon-icon">🌱</div>
            </div>
            <div className="carbon-circle satellite-2">
              <div className="carbon-icon">⚡</div>
            </div>
            <div className="carbon-circle satellite-3">
              <div className="carbon-icon">🔬</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
