import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-6 border-t-1 border-gray-500" style={{ borderTop: '1px solid', borderImage: 'linear-gradient(to right, #8B5CF6, #FFA500)', borderImageSlice: 1 }} >

      <div className="container mx-auto flex flex-col md:flex-row justify-between h-52 bg-transparent  ">
        {/* First div with three child divs */}
        <div className="flex flex-col mb-8 md:mb-0 h-3/4 bg-transparent w-full ">
          <div className="flex justify-between mb-4">
            <div className="w-64 bg-transparent h-12 mr-4">
              <div className="w-64 bg-transparent h-12 mr-4 flex items-center justify-start pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 mr-1"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.75 16a1.75 1.75 0 1 1-3.5 0m3.5-5.5a1.75 1.75 0 1 1-3.5 0m7 5.5a1.75 1.75 0 1 1-3.5 0m3.5-5.5a1.75 1.75 0 1 1-3.5 0m5.25 5.5a1.75 1.75 0 1 1-3.5 0"></path>
                </svg>{" "}
                <p className="text-white text-xs"> 2024 Lilding</p>
              </div>
            </div>

            <div className="w-64 bg-transparent h-12 mx-4">
              <button className="bg-gradient-to-r from-purple-500 to-orange-500 text-white text-xl font-bold px-2 py-2 rounded-full hover:bg-blue-600 w-full">
                SmartContract
              </button>
            </div>
            <div className="w-64 bg-transparent h-12 ml-4 flex items-center justify-end pr-2">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <img
                  src="./telegram.svg"
                  alt="Telegram Icon"
                  className="w-3 h-3"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-10 items-center w-full bg-transparent mt-8">
            <div className="w-38  h-10 mr-4">
              <img src="./bscscan.png" alt="Icon" className="w-full h-full" />
            </div>
            <div className="w-38  h-10 mx-4">
              <img src="./React.png" alt="Icon" className="w-full h-full" />
            </div>
            <div className="w-38 h-12 ml-4 flex justify-center items-center ">
              <p className=" text-transparent bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text font-bold">
                Your Text
              </p>
            </div>

            <div className="w-38  h-10 ml-4">
              <img src="./dappradar.png" alt="Icon" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
