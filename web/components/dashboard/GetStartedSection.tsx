import React from 'react';

const GetStartedSection = () => {
  return (
    <section className='bg-black flex flex-grow py-16'>
      <div className='container mx-auto grid grid-cols-1 gap-8 '>
        <div className='flex flex-col justify-center items-center h-20 bg-transparent'>
          <h1 className='text-4xl font-bold text-white'>GET STARTED</h1>
        </div>

        <div className='flex flex-col p-10 justify-center items-center h-90 bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl'>
          <div className='flex flex-row justify-center items-center h-14 bg-transparent m-2 rounded-xl w-3/4'>
            <div className='flex flex-col justify-center items-center h-full bg-transparent w-1/5 relative'>
              <div className='rounded-full bg-white opacity-50 w-14 h-14 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0'>
                <span className='text-black text-lg font-bold'>1</span>
              </div>
            </div>

            <div className='flex flex-col justify-center items-start pl-2   bg-transparent w-4/5'>
              <div className='flex flex-col  '>
                <p className='text-white font-bold text-sm'>Create a Wallet</p>
                <p className='text-black text-sm'>
                  Download MetaMask or TrustWallet and create a wallet. Add the
                  Binance Smart Chain to your network-list.Guide here
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center h-14 bg-transparent m-2 rounded-xl w-3/4'>
            <div className='flex flex-col justify-center items-center h-full bg-transparent w-1/5 relative'>
              <div className='rounded-full bg-white opacity-50 w-14 h-14 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0'>
                <span className='text-black text-lg font-bold'>2</span>
              </div>
            </div>
            <div className='flex flex-col justify-center items-start pl-2 h-full bg-transparent w-4/5'>
              <div className='flex flex-col'>
                <p className='text-white font-bold text-sm'>Get SOL</p>
                <p className='text-black text-sm'>
                  Buy BNB on an exchange (i.e. Binance). Transfer BNB to your
                  wallet address. BEP-20 addresses start with a &quot;0x&quot;
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center h-14 bg-transparent m-2 rounded-xl w-3/4'>
            <div className='flex flex-col justify-center items-center h-full bg-transparent w-1/5 relative'>
              <div className='rounded-full bg-white opacity-50 w-14 h-14 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0'>
                <span className='text-black text-lg font-bold'>3</span>
              </div>
            </div>
            <div className='flex flex-col justify-center items-start pl-2 h-full bg-transparent w-4/5'>
              <div className='flex flex-col'>
                <p className='text-white font-bold text-sm'>Connect your Wallet</p>
                <p className='text-black text-sm'>
                  At the top of the site, click &quot;Connect wallet&quot;, confirm the
                  action, after which you should see the numbers of your wallet
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center h-14 bg-transparent m-2 rounded-xl w-3/4'>
            <div className='flex flex-col justify-center items-center h-full bg-transparent w-1/5 relative'>
              <div className='rounded-full bg-white opacity-50 w-14 h-14 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0'>
                <span className='text-black text-lg font-bold'>4</span>
              </div>
            </div>
            <div className='flex flex-col justify-center items-start pl-2 h-full bg-transparent w-4/5'>
              <div className='flex flex-col'>
                <p className='text-white font-bold text-sm'>Make a deposit</p>
                <p className='text-black text-sm'>
                  Click on the &quot;Deposit&quot; button. In the window that opens, enter
                  the amount, click again on the &quot;Deposit&quot; button and confirm
                  the action
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center h-14 bg-transparent m-2 rounded-xl w-3/4'>
            <div className='flex flex-col justify-center items-center h-full bg-transparent w-1/5 relative'>
              <div className='rounded-full bg-white opacity-50 w-14 h-14 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0'>
                <span className='text-black text-lg font-bold'>5</span>
              </div>
            </div>
            <div className='flex flex-col justify-center items-start pl-2 h-full bg-transparent w-4/5'>
              <div className='flex flex-col'>
                <p className='text-white font-bold text-sm'>Get rewards</p>
                <p className='text-black text-sm'>
                  You have successfully created a deposit! Now every second you
                  will receive rewards that you can withdraw once the lockup
                  period ends by clicking on the &quot;Withdraw&quot; button
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
