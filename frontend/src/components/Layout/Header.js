import React from 'react';
import { useWeb3 } from '../../hooks/useWeb3';
import './Header.css';

const Header = () => {
  const { 
    account, 
    isConnected, 
    isConnecting, 
    error, 
    connectWallet, 
    disconnectWallet,
    isMetaMaskInstalled 
  } = useWeb3();

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="page-title">Carbon Credit Management</h1>
        </div>
        
        <div className="header-right">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          {isConnected ? (
            <div className="wallet-info">
              <span className="wallet-address">{formatAddress(account)}</span>
              <button className="wallet-btn disconnect" onClick={disconnectWallet}>
                Disconnect
              </button>
            </div>
          ) : (
            <button 
              className={`wallet-btn connect ${isConnecting ? 'connecting' : ''}`}
              onClick={connectWallet}
              disabled={isConnecting}
            >
              {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </button>
          )}
          
          {!isMetaMaskInstalled && (
            <div className="metamask-warning">
              <small>MetaMask not detected</small>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
