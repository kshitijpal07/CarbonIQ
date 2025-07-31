import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useWeb3 } from '../../hooks/useWeb3';
import { Link } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const { isConnected } = useWeb3();

  // If wallet is not connected, show a prompt
  if (!isConnected) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-empty">
          <div className="empty-state">
            <h2>Welcome to CarbonIQ</h2>
            <p>Please connect your wallet to access the dashboard.</p>
            <Link to="/" className="back-to-welcome">
              ← Back to Welcome Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If connected, show the full dashboard layout
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <Outlet /> {/* This will render the active child route */}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;