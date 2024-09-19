"use client";

import React, { useEffect, useState } from "react";

export const Timer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-10-12T00:00:00"); // Replace with your event date
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center  text-white font-mono p-4">
      <p className="text-base sm:text-lg mb-4 italic text-center">
        THE MUCH AWAITED EVENT WILL START IN
      </p>

      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days || "0"}</span>
          <span className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Days
          </span>
        </div>
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">-</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours || "0"}</span>
          <span className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Hours
          </span>
        </div>
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">-</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes || "0"}</span>
          <span className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Minutes
          </span>
        </div>
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">-</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds || "0"}</span>
          <span className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
            Seconds
          </span>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="uppercase text-xs sm:text-sm md:text-base">Venue:</p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Sree Chitra Thirunal College of Engineering
        </p>
      </div>
    </div>
  );
};
