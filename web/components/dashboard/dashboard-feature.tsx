  // DashboardFeature.jsx
  "use client"
  import React, { useRef,useEffect } from 'react'; // Import useRef from react
  // import { AppHero } from '../ui/ui-layout';
  import CalculateProfit from './CalculateProfit';
  import DashboardSection from './DashboardSection';
  import GetStartedSection from './GetStartedSection';
  import HeroSection from './HeroSection';
  import ReferralSection from './ReferralSection';
  import { useWallet } from '@solana/wallet-adapter-react';
  import { redirect } from 'next/navigation';

  export default function DashboardFeature() {
   
    const calculateProfitRef = useRef<HTMLDivElement | null>(null); // Add type HTMLDivElement | null
    const { publicKey } = useWallet();

    useEffect(() => {
      if (publicKey) {
        return redirect(`/account/${publicKey.toString()}`);
      }
    }, [])
    
   
    const scrollToCalculateProfit = () => {
      if (calculateProfitRef.current) { // Add null check
        calculateProfitRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div >
        <HeroSection handleButtonClick={scrollToCalculateProfit} />
        <CalculateProfit ref={calculateProfitRef} />
        <DashboardSection />
        <ReferralSection />
        <GetStartedSection />
      </div>
    );
  }
