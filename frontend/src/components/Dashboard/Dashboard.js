import React from 'react';
import './Dashboard.css'; // You'll likely need a CSS file for this component's specific styles

const credits = [
  // ... (your credits data remains the same)
  { project: "Renewable Energy Project", quantity: 300, vintage: "20 mm", status: "Verified" },
  { project: "Reforestation Initiative", quantity: 100, vintage: "21 apr", status: "Pending" },
  { project: "Methane Capture Program", quantity: 200, vintage: "20 gar", status: "Testest" },
  { project: "Soil Carbon Sequestration", quantity: 300, vintage: "30 set", status: "Verified" },
];

function StatusBadge({ status }) {
  // ... (your StatusBadge component remains the same)
  let className = "status verified";
  if (status === "Pending") { className = "status pending"; }
  else if (status === "Testest") { className = "status testest"; }
  return <span className={className}>{status}</span>;
}

const Dashboard = () => {
  return (
    // The parent layout is now handled by DashboardLayout.js
    // This component only needs to render its own content.
    <>
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
        <div className="card icon-card">{/* ... svg icon ... */}</div>
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
                <td><StatusBadge status={credit.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;