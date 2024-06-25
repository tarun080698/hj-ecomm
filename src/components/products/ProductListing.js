import React from "react";
import { IoClose } from "react-icons/io5";

import img7 from "assets/images/E2585 - Blush.png";
import img8 from "assets/images/E2595 - Nude.png";
import img10 from "assets/images/E2607 - Black.png";
import img11 from "assets/images/E2707 - Navy.png";
import { productData } from "assets/data/dummydata";
import ProductCard from "./ProductCard";

function ProductListing({ filterData, handleFilterchange }) {
  const party = [
    { ...productData, Img: img7 },
    { ...productData, Img: img8 },
    { ...productData, Img: img10 },
    { ...productData, Img: img11 },
    { ...productData, Img: img7 },
    { ...productData, Img: img8 },
    { ...productData, Img: img10 },
    { ...productData, Img: img11 },
    { ...productData, Img: img7 },
    { ...productData, Img: img8 },
    { ...productData, Img: img10 },
    { ...productData, Img: img11 },
    { ...productData, Img: img7 },
    { ...productData, Img: img8 },
    { ...productData, Img: img10 },
    { ...productData, Img: img11 },
    { ...productData, Img: img7 },
    { ...productData, Img: img8 },
    { ...productData, Img: img10 },
    { ...productData, Img: img11 },
  ];

  return (
    <div className="md:pl-4 w-full">
      {/* filter pills */}
      <div className="flex justify-start items-center">
        {Object.keys(filterData).length > 0 && (
          <div className="text-2xl font-bold">Filters:</div>
        )}
        <div className="flex flex-wrap gap-2 p-1">
          {Object.keys(filterData).map((item, index) => (
            <div
              className="hover:outline-2 hover:outline-coral cursor-pointer flex justify-center items-center gap-1 rounded-2xl font-bold outline outline-1 outline-coral text-coral py-1 px-2"
              key={index}
            >
              {filterData[item]}
              <span
                className="text-black text-xl"
                onClick={() => handleFilterchange(item, filterData[item])}
              >
                <IoClose />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* product listing */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {party.map((item, index) => (
            <div key={index}>
              <ProductCard item={item} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
