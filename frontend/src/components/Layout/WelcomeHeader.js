import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3 } from '../../hooks/useWeb3';
import './WelcomeHeader.css';

const WelcomeHeader = () => {
  const { isConnected, account } = useWeb3();

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="welcome-header">
      <div className="welcome-header-content">
        <div className="welcome-logo">
          <div className="logo-icon">🌱</div>
          <span className="logo-text">CarbonIQ</span>
        </div>
        
        <nav className="welcome-nav">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#about" className="nav-link">About</a>
          
          <div className="nav-actions">
            {isConnected && (
              <span className="connected-indicator">
                {formatAddress(account)}
              </span>
            )}
            <Link to="/dashboard" className="dashboard-btn">
              Dashboard
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default WelcomeHeader;
