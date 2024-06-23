import { useDeviceTypeContext } from "contexts/DeviceTypeContext";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const texts = [
  "Welcome to our store!",
  "14 Days Return Warranty",
  "Friend's Invite: Get EXTRA 15% off on first order",
  "Free STANDARD SHIPPING on orders over US$500",
];

const SlidingBanner = () => {
  const deviceType = useDeviceTypeContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    if (deviceType !== "Mobile") {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change text every 3 seconds
    }
    return () => clearInterval(interval);
  }, [currentIndex, deviceType]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <div className="bg-coral-dark text-white flex items-center justify-center w-full text-sm md:text-lg text-center py-2 px-5 md:px-20 overflow-hidden">
      <button
        className="text-white border-none text-2xl cursor-pointer"
        onClick={prevSlide}
      >
        <MdKeyboardArrowLeft />
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            className={`min-w-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-in-out`}
          >
            {text}
          </div>
        ))}
      </div>

      <button
        className="text-white border-none text-2xl cursor-pointer"
        onClick={nextSlide}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default SlidingBanner;
