import React from "react";
import { products } from "assets/data/dummydata";
import ProductCard from "./ProductCard";
import Dropdown from "components/common/Dropdown";

function ProductListing({ filterData, handleFilterchange, sortBy, setSortBy }) {
  const items = [
    { name: "Popular", value: "popular" },
    { name: "New", value: "new" },
    { name: "Price: High to Low", value: "lowtohigh" },
    { name: "Price: Low to High", value: "hightolow" },
  ];

  return (
    <div className="w-full md:w-4/5 overflow-y-auto">
      {/* filter pills */}
      {/* <div className="flex justify-start items-center">
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
      </div> */}

      <div className="flex justify-end items-center mr-8">
        <Dropdown items={items} sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* product listing */}
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item, index) => (
            <div key={index}>
              <ProductCard item={item} key={index} simple={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
