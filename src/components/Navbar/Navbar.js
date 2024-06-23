import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";

import { useDeviceTypeContext } from "contexts/DeviceTypeContext";
import SlidingBanner from "./SlidingBanner";
import MobileBanner from "./MobileBanner";

function Navbar() {
  const menu = [
    "Party",
    "Birthday",
    "Wedding",
    "Graduation",
    "Evening",
    "Casual",
  ];
  const deviceType = useDeviceTypeContext();

  const trendingItems = ["Top Selling", "Best Rated", "Trending Products"];
  return (
    <div className="shadow-md bg-black text-ivory duration-200 relative z-40">
      {deviceType !== "Mobile" && <SlidingBanner />}

      {/* upper nav */}
      <div className="bg-primarySkyBlue md:p-4 p-2">
        <div className="flex container justify-between items-center">
          <div className="cursor-pointer">
            <Link
              to="/"
              className="font-bold text-xl sm:text-2xl flex gap-2 uppercase tracking-widest"
            >
              Vani's Vibes
            </Link>
          </div>
          {/* searchbar and order */}
          <div className="flex justify-between items-center">
            <div className="relative group sm:block hidden">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-3xl border border-darkGrey px-2 py-1 focus:outline-none focus:border-1 focus:border-darkSkyBlue text-black"
              />
              <FaSearch className="text-black group-hover:text-black absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <button
              className="bg-gradient-to-r hover:from-coral-light hover:to-coral-dark transition-all duration-500 text-white py-1 px-4 rounded-full flex items-center text-lg gap-3 group h-9"
              onClick={() => {
                console.log("order button clicked");
              }}
            >
              <FaSearch className="text-lg text-white drop-shadow-sm cursor-pointer" />
            </button>
            <button
              className="bg-gradient-to-r hover:from-coral-light hover:to-coral-dark transition-all duration-500 text-white py-1 px-4 rounded-full flex items-center text-lg gap-3 group h-9"
              onClick={() => {
                console.log("order button clicked");
              }}
            >
              <FaUser className="text-lg text-white drop-shadow-sm cursor-pointer" />
            </button>
            <button
              className="bg-gradient-to-r hover:from-coral-light hover:to-coral-dark transition-all duration-500 text-white py-1 px-4 rounded-full flex items-center text-lg gap-3 group h-9"
              onClick={() => {
                console.log("order button clicked");
              }}
            >
              <FaShoppingCart className="text-lg text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {deviceType === "Mobile" && <MobileBanner />}

      {/* lower nav */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((item, index) => (
            <li key={index} className="group relative">
              <Link
                to={`/${item}`}
                className="inline-block px-4 hover:text-coral duration-200"
              >
                {item}
              </Link>
              <div className="absolute left-4 h-1 w-1 invisible group-hover:w-5 group-hover:visible duration-300 transition-all bg-coral-dark"></div>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <Link to={`/trending`} className="flex items-center gap-1 py-2">
              Trending{" "}
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </Link>
            <div className="absolute z-[9990] hidden group-hover:block w-48 rounded-md bg-white p-2 text-black shadow-md top-11">
              <ul className="">
                {trendingItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item}`}
                      className="inline-block w-full p-2 hover:bg-primaryOrange/30 hover:text-googleBlue duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
