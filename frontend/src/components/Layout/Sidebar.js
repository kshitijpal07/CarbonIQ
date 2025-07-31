import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* START: Add this section for the logo and title */}
      <div className="logo">
        <div className="logo-icon">🌱</div>
        <span className="logo-text">CarbonIQ</span>
      </div>
      {/* END: Add this section */}
      
      <nav className="nav-menu">
        <NavLink to="/dashboard" end className="nav-item">
          <span className="nav-icon">📊</span>
          <span className="nav-text">Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/calculator" className="nav-item">
          <span className="nav-icon">🧮</span>
          <span className="nav-text">Calculator</span>
        </NavLink>
        
        <NavLink to="/verification" className="nav-item">
          <span className="nav-icon">✅</span>
          <span className="nav-text">Verify Project</span>
        </NavLink>
        
        <NavLink to="/marketplace" className="nav-item">
          <span className="nav-icon">🏪</span>
          <span className="nav-text">Marketplace</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;