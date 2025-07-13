import React, { createContext, useContext, useState, useEffect } from 'react';

const Web3Context = createContext();

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);
  const [chainId, setChainId] = useState(null);

  // Check if MetaMask is installed
  const isMetaMaskInstalled = () => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  };

  // Check existing connection on component mount
  useEffect(() => {
    checkConnection();
    
    if (isMetaMaskInstalled()) {
      // Listen for account changes
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      // Listen for chain changes
      window.ethereum.on('chainChanged', handleChainChanged);
      
      // Cleanup listeners
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []);

  const checkConnection = async () => {
    if (!isMetaMaskInstalled()) return;

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts'
      });
      
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        
        // Get chain ID
        const chainId = await window.ethereum.request({
          method: 'eth_chainId'
        });
        setChainId(chainId);
      }
    } catch (error) {
      console.error('Error checking connection:', error);
      setError(error.message);
    }
  };

  const connectWallet = async () => {
    if (!isMetaMaskInstalled()) {
      setError('MetaMask is not installed. Please install MetaMask to continue.');
      // Redirect to MetaMask installation
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        
        // Get chain ID
        const chainId = await window.ethereum.request({
          method: 'eth_chainId'
        });
        setChainId(chainId);
        
        console.log('Wallet connected successfully:', accounts[0]);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      
      if (error.code === 4001) {
        setError('Connection rejected by user');
      } else if (error.code === -32002) {
        setError('Connection request already pending');
      } else {
        setError('Failed to connect wallet: ' + error.message);
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setIsConnected(false);
    setChainId(null);
    setError(null);
    console.log('Wallet disconnected');
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      setAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  const handleChainChanged = (chainId) => {
    setChainId(chainId);
    // Reload the page to avoid state inconsistencies
    window.location.reload();
  };

  const value = {
    account,
    isConnected,
    isConnecting,
    error,
    chainId,
    connectWallet,
    disconnectWallet,
    isMetaMaskInstalled: isMetaMaskInstalled()
  };

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};
