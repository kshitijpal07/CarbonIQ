import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './hooks/useWeb3';

import Welcome from './components/Welcome/Welcome';
import Dashboard from './components/Dashboard/Dashboard';
import Calculator from './components/Calculator/Calculator';
// Correct the import path here
import DashboardLayout from './components/Layout/DashboardLayout'; 

import './styles/App.css';

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Welcome />} />
            
            {/* All dashboard-related routes go here */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="calculator" element={<Calculator />} />
            </Route>

          </Routes>
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;