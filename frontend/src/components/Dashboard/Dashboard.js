import React, { useState, useEffect } from 'react';
import StatsCards from './StatsCards';
import CreditTable from './CreditTable';
import ActivityFeed from './ActivityFeed';
import { useWeb3 } from '../../hooks/useWeb3';
import './Dashboard.css';

const Dashboard = () => {
  const { account, isConnected } = useWeb3();
  const [stats, setStats] = useState({
    totalCredits: 0,
    verifiedCredits: 0,
    pendingCredits: 0,
    totalValue: 0
  });

  const [recentCredits, setRecentCredits] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (isConnected && account) {
      fetchDashboardData();
    }
  }, [isConnected, account]);

  const fetchDashboardData = async () => {
    // Mock data - replace with actual API calls
    setStats({
      totalCredits: 1250,
      verifiedCredits: 950,
      pendingCredits: 300,
      totalValue: 62500
    });

    setRecentCredits([
      {
        id: 1,
        project: "Solar Farm Initiative",
        quantity: 500,
        vintage: "2024",
        status: "Verified",
        co2Offset: 250
      },
      {
        id: 2,
        project: "Reforestation Project",
        quantity: 300,
        status: "Pending",
        co2Offset: 150
      }
    ]);

    setActivities([
      {
        id: 1,
        type: "verification",
        message: "Solar Farm Initiative verified successfully",
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: "trade",
        message: "Sold 100 credits to EcoTech Corp",
        timestamp: new Date(Date.now() - 3600000).toISOString()
      }
    ]);
  };

  if (!isConnected) {
    return (
      <div className="dashboard-empty">
        <div className="empty-state">
          <h2>Welcome to CarbonIQ</h2>
          <p>Connect your wallet to start managing carbon credits</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>Track your carbon credit portfolio and environmental impact</p>
      </div>

      <StatsCards stats={stats} />
      
      <div className="dashboard-grid">
        <div className="dashboard-section">
          <CreditTable credits={recentCredits} />
        </div>
        
        <div className="dashboard-section">
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
