import React, { useState } from 'react';
import UploadForm from './UploadForm';
import VerificationStatus from './VerificationStatus';
import './Verification.css';

const Verification = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [verificationHistory, setVerificationHistory] = useState([]);

  return (
    <div className="verification">
      <div className="verification-header">
        <h2>Project Verification</h2>
        <p>Upload evidence and get your carbon offset projects verified by AI</p>
      </div>

      <div className="verification-tabs">
        <button 
          className={`tab ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          Upload Project
        </button>
        <button 
          className={`tab ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          Verification Status
        </button>
      </div>

      <div className="verification-content">
        {activeTab === 'upload' && <UploadForm />}
        {activeTab === 'status' && <VerificationStatus history={verificationHistory} />}
      </div>
    </div>
  );
};

export default Verification;
