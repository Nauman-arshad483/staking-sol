'use client';
import React, { useState } from 'react';

import styles from '@/pages/header.module.css'
const Header = () => {
  
  const [isConnected, setIsConnected] = useState(false); 
  const handleConnectWallet = async () => {
    try {
      const response = await fetch('/api/wallet/login/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // If the response is successful, set isConnected to true
        setIsConnected(true);
      } else {
        // Handle errors if any
        console.error('Error connecting wallet:', response.statusText);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
    setIsConnected(true);
  };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
  };

  return (
    <header className={`bg-blue-500 py-4 ${styles.header}`}>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <img src='/header-logo.png' alt='Logo' className='h-20' />
          <h1 className='text-white text-2xl font-semibold'>
            Solana Staking DApp
          </h1>
        </div>

        <div>
          {!isConnected ? (
            <button
              onClick={handleConnectWallet}
              className='text-white px-4 py-2 rounded-xl text-lg font-bold shadow-md hover:bg-blue-500 hover:text-white bg-gradient-to-r from-orange-500 to-purple-500'
            >
              Connect Wallet
            </button>
          ) : (
            <div className='text-white'>
              <p>
                Wallet Address: <span>0x123...</span>
              </p>
              <p>
                Balance: <span>10 SOL</span>
              </p>
              <button
                onClick={handleDisconnectWallet}
                className='bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-500 hover:text-white mt-2'
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
     </header>
  );
};

export default Header;
