import React, { useState, useEffect } from "react";

function Therapy({ therapy }) {
  // State to track small screen detection
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 650);
  const [width, setWidth] = useState(false);
  const [isMidScreen, setIsMidScreen] = useState(
    window.innerWidth >= 570 && window.innerWidth <= 960
  );

  // Update `isSmallScreen` on window resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 650);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMidScreen = () =>
      setIsMidScreen(window.innerWidth >= 570 && window.innerWidth <= 960);
    window.addEventListener("resize", handleMidScreen);
  }, []);

  return (
    <div className="p-4 flex flex-wrap justify-evenly">
      <div
        key={therapy._id}
        className={`my-4 rounded-lg bg-gray-100 border border-gray-300 shadow-lg overflow-hidden ${
          isSmallScreen
            ? "h-[500px] w-[97%]"
            : isMidScreen
            ? "h-[500px] w-[97%] "
            : "h-[400px] flex w-[80%]"
        }`}
      >
        {/* Therapy Image */}
        <div
          className={`overflow-hidden flex items-center justify-center ${
            isSmallScreen
              ? "w-full h-64"
              : isMidScreen
              ? "w-full h-[350px]"
              : "w-1/2 h-full"
          }`}
        >
          <img
            src={therapy.image} // Use the correct `therapy.image` key
            alt={therapy.name}
            className="object-cover rounded-lg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Therapy Details */}
        <div
          className={`p-4 ${
            isSmallScreen
              ? "w-full text-center"
              : isMidScreen
              ? "wfull text-center"
              : "w-1/2 flex flex-col justify-center text-left"
          }`}
        >
          <div className="bg-gray-200 p-4 rounded-lg">
            <h1 className="text-2xl font-semibold mb-3 break-words">
              {therapy.name}
            </h1>
            <p className="text-sm text-gray-700 break-words">
              {therapy.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Therapy;
