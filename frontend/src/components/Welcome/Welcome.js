import React from 'react';
import WelcomeHeader from '../Layout/WelcomeHeader';
import HeroSection from './HeroSection';
import Features from './Features';
import HowItWorks from './HowItWorks';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <WelcomeHeader />
      <main className="welcome-content">
        <HeroSection />
        <Features />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Welcome;
