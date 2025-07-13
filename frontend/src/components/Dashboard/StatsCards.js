import React from 'react';
import './StatsCards.css';

const StatsCards = ({ stats }) => {
  return (
    <div className="stats-grid">
      <div className="stat-card primary">
        <div className="stat-icon">🌍</div>
        <div className="stat-content">
          <h3>{stats.totalCredits.toLocaleString()}</h3>
          <p>Total Credits</p>
        </div>
      </div>

      <div className="stat-card success">
        <div className="stat-icon">✅</div>
        <div className="stat-content">
          <h3>{stats.verifiedCredits.toLocaleString()}</h3>
          <p>Verified Credits</p>
        </div>
      </div>

      <div className="stat-card warning">
        <div className="stat-icon">⏳</div>
        <div className="stat-content">
          <h3>{stats.pendingCredits.toLocaleString()}</h3>
          <p>Pending Verification</p>
        </div>
      </div>

      <div className="stat-card info">
        <div className="stat-icon">💰</div>
        <div className="stat-content">
          <h3>${stats.totalValue.toLocaleString()}</h3>
          <p>Portfolio Value</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
