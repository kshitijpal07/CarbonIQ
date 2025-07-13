import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import { useWeb3 } from '../../hooks/useWeb3';

const credits = [
  {
    project: "Renewable Energy Project",
    quantity: 300,
    vintage: "20 mm",
    status: "Verified",
  },
  {
    project: "Reforestation Initiative",
    quantity: 100,
    vintage: "21 apr",
    status: "Pending",
  },
  {
    project: "Methane Capture Program",
    quantity: 200,
    vintage: "20 gar",
    status: "Testest",
  },
  {
    project: "Soil Carbon Sequestration",
    quantity: 300,
    vintage: "30 set",
    status: "Verified",
  },
];

function StatusBadge({ status }) {
  let className = "status verified";
  
  if (status === "Pending") {
    className = "status pending";
  } else if (status === "Testest") {
    className = "status testest";
  }
  
  return <span className={className}>{status}</span>;
}

const Dashboard = () => {
  const { isConnected } = useWeb3();

  if (!isConnected) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-empty">
          <div className="empty-state">
            <h2>Welcome to CarbonIQ Dashboard</h2>
            <p>Connect your wallet to start managing carbon credits</p>
            <Link to="/" className="back-to-welcome">
              ← Back to Welcome
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">🌱</div>
          <span>CarbonIQ</span>
        </div>
        <nav>
          <a href="#" className="active">
            <span className="icon">📋</span> Dashboard
          </a>
          <a href="#">
            <span className="icon">💳</span> Credits
          </a>
          <a href="#">
            <span className="icon">📁</span> Projects
          </a>
          <a href="#">
            <span className="icon">🕒</span> Activity
          </a>
        </nav>
        
        <div className="sidebar-footer">
          <Link to="/" className="back-link">
            ← Back to Welcome
          </Link>
        </div>
      </aside>
      
      <main className="main-content">
        <Header />
        
        <div className="dashboard-content">
          <h1>Welcome to CarbonIQ</h1>
          <p className="subtitle">Your platform for managing carbon credits.</p>
          
          <div className="top-cards">
            <div className="card balance-card">
              <div className="balance-content">
                <span className="balance-label">Total Balance</span>
                <h2>1,200</h2>
                <span className="balance-unit">carbon credits</span>
              </div>
            </div>
            
            <div className="card icon-card">
              <div className="leaf-icon">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="22" fill="#e8f5e9"/>
                  <path d="M16 32c6-8 16-8 16-8s-2 10-8 10-8-2-8-2z" fill="#66bb6a"/>
                  <path d="M24 28l4-8" stroke="#388e3c" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="card credits-table">
            <h3>Carbon Credits</h3>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Quantity</th>
                  <th>Vintage</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {credits.map((credit, index) => (
                  <tr key={index}>
                    <td>{credit.project}</td>
                    <td>{credit.quantity}</td>
                    <td>{credit.vintage}</td>
                    <td>
                      <StatusBadge status={credit.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
