import React, { useState } from "react";

import img7 from "assets/images/E2585 - Blush.png";
import img8 from "assets/images/E2595 - Nude.png";
import img10 from "assets/images/E2607 - Black.png";
import img11 from "assets/images/E2707 - Navy.png";
import RecommendationCard from "./RecommendationCard";
import { productData } from "assets/data/dummydata";

function Recommendations() {
  const party = [
    { ...productData, Img: img7 },
    { ...productData, Img: img8 },
    { ...productData, Img: img10 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
    { ...productData, Img: img11 },
  ];

  const [tab, setTab] = useState(1);
  const changeTab = (e) => {
    e.preventDefault();
    setTab(Number(e.target.id));
  };

  console.log(party[0]);

  return (
    <div>
      <div className="flex items-center space-x-4 justify-center flex-nowrap py-4">
        <div
          id="1"
          onClick={changeTab}
          className={`flex items-center flex-shrink-0 cursor-pointer px-5 py-2 border-b-4 ${
            tab === 1
              ? "border-coral-dark text-coral-dark font-extrabold text-lg"
              : ""
          }`}
        >
          Party
        </div>
        <div
          id="2"
          onClick={changeTab}
          className={`flex items-center flex-shrink-0 cursor-pointer px-5 py-2 border-b-4 ${
            tab === 2
              ? "border-coral-dark text-coral-dark font-extrabold text-lg"
              : ""
          }`}
        >
          Club
        </div>
        <div
          id="3"
          onClick={changeTab}
          className={`flex items-center flex-shrink-0 cursor-pointer px-5 py-2 border-b-4 ${
            tab === 3
              ? "border-coral-dark text-coral-dark font-extrabold text-lg"
              : ""
          }`}
        >
          Bridal
        </div>
        <div
          id="4"
          onClick={changeTab}
          className={`flex items-center flex-shrink-0 cursor-pointer px-5 py-2 border-b-4 ${
            tab === 4
              ? "border-coral-dark text-coral-dark font-extrabold text-lg"
              : ""
          }`}
        >
          Evening
        </div>
      </div>
      <div
        className={`${
          tab === 1 ? "block py-6" : "hidden"
        } relative w-full px-12`}
      >
        <div className="flex justify-start items-center overflow-x-auto scrollbar-thin">
          {party.map((item, index) => (
            <div key={index}>
              <RecommendationCard item={item} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${
          tab === 2 ? "block py-6" : "hidden"
        } relative w-full px-12`}
      >
        <div className="flex justify-start items-center overflow-x-auto scrollbar-thin">
          {party.map((item, index) => (
            <div key={index}>
              <RecommendationCard item={item} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${
          tab === 3 ? "block py-6" : "hidden"
        } relative w-full px-12`}
      >
        <div className="flex justify-start items-center overflow-x-auto scrollbar-thin">
          {party.map((item, index) => (
            <div key={index}>
              <RecommendationCard item={item} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${
          tab === 4 ? "block py-6" : "hidden"
        } relative w-full px-12`}
      >
        <div className="flex justify-start items-center overflow-x-auto scrollbar-thin">
          {party.map((item, index) => (
            <div key={index}>
              <RecommendationCard item={item} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className={`${tab === 5 ? "block py-6" : "hidden"}`}>e</div>
    </div>
  );
}

export default Recommendations;
