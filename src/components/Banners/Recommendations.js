import React, { useState } from "react";

import { products } from "assets/data/dummydata";
import ProductCard from "components/products/ProductCard";

function Recommendations() {
  const party = products
    .filter((item) => item?.name.includes("Short and Cocktail"))
    .slice(0, 10);
  const bridal = products
    .filter((item) => item?.name.includes("Bridesmaids"))
    .slice(0, 10);
  const evening = products
    .filter((item) => item?.name.includes("Prom"))
    .slice(0, 10);
  const club = products
    .filter((item) => item?.name.includes("Ball Gowns"))
    .slice(0, 10);

  const [tab, setTab] = useState(1);
  const changeTab = (e) => {
    e.preventDefault();
    setTab(Number(e.target.id));
  };

  return (
    <div>
      <div className="flex items-center space-x-4 justify-center flex-nowrap p-4">
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
        } relative w-full px-1 md:px-12`}
      >
        <div className="flex justify-start items-center overflow-x-auto scrollbar-thin">
          {party.map((item, index) => (
            <div key={index}>
              <ProductCard item={item} key={index} simple={true} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${
          tab === 2 ? "block py-6" : "hidden"
        } relative w-full px-1 md:px-12`}
      >
        <div className="flex justify-start items-center overflow-x-auto scrollbar-thin">
          {club.map((item, index) => (
            <div key={index}>
              <ProductCard item={item} key={index} simple={true} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${
          tab === 3 ? "block py-6" : "hidden"
        } relative w-full px-1 md:px-12`}
      >
        <div className="flex justify-start items-center overflow-x-auto scrollbar-thin">
          {bridal?.map((item, index) => (
            <div key={index}>
              <ProductCard item={item} key={index} simple={true} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${
          tab === 4 ? "block py-6" : "hidden"
        } relative w-full px-1 md:px-12`}
      >
        <div className="flex justify-start items-center overflow-x-auto scrollbar-thin">
          {evening.map((item, index) => (
            <div key={index}>
              <ProductCard item={item} key={index} simple={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
