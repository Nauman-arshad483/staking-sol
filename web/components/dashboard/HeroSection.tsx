// src/pages/HeroSection.jsx
import React, { useRef } from "react";

const Hero = ({ handleButtonClick }) => {
  const calculateProfitRef = useRef(null);

  return (
    <section className="bg-black py-16 flex flex-grow justify-center items-center">
      <div className="container mx-auto grid grid-cols-2 gap-8 pb-64 pt-8">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-6xl font-bold ">
            <span className="inline-block py-2 pr-52">
              Stable & Profitable Flash Staking Dapp on
            </span>
            <span className="text-orange-500"> Solana Chain</span>
          </h1>
          <p className="text-white text-lg mt-4">From 1.2 to 3.5% Daily ROI.</p>
          <button onClick={handleButtonClick} className="w-32 text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 text-white px-2 py-2 rounded-full mt-8 hover:bg-purple-500 hover:text-white">
            Deposit
          </button>
        </div>
        {/* Right column */}
        <div className="flex flex-col justify-center items-end pr-32">
          <div className="flex w-80 h-16 text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-3 rounded-full mt-8 hover:bg-purple-500 hover:text-white mb-4">
            <div className="flex justify-between w-full items-center">
              <div className="w-70">
                <p className="text-2xl ">391.5185</p>
              </div>
              <div className="w-30 flex flex-col">
                {" "}
                <p className="text-sm font-normal text-black">
                  Total<span className="text-orange-500">SOL</span>
                </p>
                <p className="font-bold text-xs text-black">Invested</p>
              </div>
            </div>{" "}
          </div>
          <div className="w-80 h-16 text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-3 rounded-full hover:bg-orange-500 hover:text-white">
            <div className="flex justify-between w-full items-center">
              <div className="w-70">
                <p className="text-2xl">287.3706</p>
              </div>
              <div className="w-30 flex flex-col">
                {" "}
                <p className="text-sm font-normal  text-black">
                  Total<span className="text-orange-500">SOL</span>
                </p>
                <p className="font-bold text-xs  text-black ">Reward</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
