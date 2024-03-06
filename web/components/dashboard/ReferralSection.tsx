import React from "react";

const ReferralSection = () => {
  return (
    <section className="bg-black flex flex-grow py-16">
      <div className="container mx-auto grid grid-cols-1 gap-8 ">
        {/* First div */}
        <div className="flex flex-col justify-center items-center h-20 bg-transparent">
          <h1 className="text-4xl font-bold text-white">REFERRAL</h1>
        </div>

        <div className="flex justify-center">
          {/* Second div */}
          <div className="flex flex-col justify-center items-center h-80 bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl w-2/4">
            {/* First sub div */}
            <div className="flex justify-center items-start w-full">
              <div className="flex w-1/3 h-28 bg-white p-1 rounded-lg m-4 flex-col">
                <div className="flex flex-col justify-center pl-2 w-full h-full bg-transparent">
                  <span className="text-black font-bold">Total Claimed</span>
                </div>

                <div className="flex flex-col justify-center pl-2 w-full h-full bg-transparent  ">
                  <div className="text-black">
                    <span>0</span>
                    <span className="font-bold text-orange-500">SOL</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex w-1/3  h-28 bg-white p-1 rounded-lg m-4 flex-col">
                <div className="flex flex-col justify-center pl-2 w-full h-full bg-transparent">
                  <span className="text-black font-bold">
                    Total Withdrawable
                  </span>
                </div>

                <div className="flex flex-col justify-center pl-2 w-full h-full bg-transparent ">
                  <div className="text-black">
                    <span>0</span>
                    <span className="font-bold text-orange-500">SOL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second sub div */}

            <div className="flex flex-col items-center w-full">
              {/* Container for the button and line */}
              <div className="relative w-full flex justify-center mt-10 ">
                {/* Your button */}
                <button className="bg-orange-500 text-white px-2 py-2 text-white rounded-full hover:bg-blue-600 relative z-10 hover:bg-purple-500 hover:text-white w-48 text-xl font-bold ">
                  Claim Ref Reward
                </button>
                {/* Container for the line */}
                <div className="absolute  left-0 right-0 w-3/4 h-0.5 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto top-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
