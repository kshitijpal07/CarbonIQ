import React from 'react';
import { useWeb3 } from '../../hooks/useWeb3';
import './Header.css';

const Header = () => {
  const { 
    account, 
    isConnected, 
    isConnecting, 
    error, 
    chainId,
    connectWallet, 
    disconnectWallet,
    isMetaMaskInstalled 
  } = useWeb3();

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getNetworkName = (chainId) => {
    const networks = {
      '0x1': 'Ethereum',
      '0x89': 'Polygon',
      '0x38': 'BSC',
      '0xa86a': 'Avalanche',
      '0x2105': 'Base'
    };
    return networks[chainId] || 'Unknown Network';
  };

  const handleWalletAction = () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="page-title">Carbon Credit Management</h1>
          <p className="page-subtitle">Manage your environmental impact with blockchain technology</p>
        </div>
        
        <div className="header-right">
          {/* Error Message Display */}
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              <span className="error-text">{error}</span>
              <button 
                className="error-close"
                onClick={() => window.location.reload()}
                title="Dismiss error"
              >
                ✕
              </button>
            </div>
          )}
          
          {/* MetaMask Not Installed Warning */}
          {!isMetaMaskInstalled && (
            <div className="metamask-warning">
              <span className="warning-icon">🦊</span>
              <div className="warning-content">
                <small>MetaMask not detected</small>
                <a 
                  href="https://metamask.io/download/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="install-link"
                >
                  Install MetaMask
                </a>
              </div>
            </div>
          )}
          
          {/* Connected Wallet Info */}
          {isConnected ? (
            <div className="wallet-connected">
              <div className="wallet-info">
                <div className="wallet-details">
                  <span className="wallet-address">{formatAddress(account)}</span>
                  {chainId && (
                    <span className="network-info">
                      <span className="network-dot"></span>
                      {getNetworkName(chainId)}
                    </span>
                  )}
                </div>
                <div className="wallet-actions">
                  <button 
                    className="wallet-btn copy-btn"
                    onClick={() => navigator.clipboard.writeText(account)}
                    title="Copy address"
                  >
                    📋
                  </button>
                  <button 
                    className="wallet-btn disconnect-btn" 
                    onClick={disconnectWallet}
                    title="Disconnect wallet"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Connect Wallet Button */
            <div className="wallet-disconnected">
              <button 
                className={`wallet-btn connect-btn ${isConnecting ? 'connecting' : ''}`}
                onClick={connectWallet}
                disabled={isConnecting || !isMetaMaskInstalled}
              >
                {isConnecting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Connecting...
                  </>
                ) : (
                  <>
                    <span className="wallet-icon">🔗</span>
                    Connect Wallet
                  </>
                )}
              </button>
              
              {isMetaMaskInstalled && (
                <div className="connect-help">
                  <small>Connect your MetaMask wallet to start trading carbon credits</small>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
