import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './hooks/useWeb3';
import Welcome from './components/Welcome/Welcome';
import Dashboard from './components/Dashboard/Dashboard';
import './styles/App.css';

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;
