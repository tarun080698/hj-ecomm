import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import ProductListing from "./ProductListing";
import "./styles.css";
import CategoryBytype from "components/Banners/CategoryBytype";

function Products() {
  const { search } = useLocation();
  const paramObj = {};
  for (let [key, value] of new URLSearchParams(search).entries()) {
    paramObj[key] = value;
  }

  const [filterData, setFilterdata] = useState({
    ...paramObj,
  });

  const [sortBy, setSortBy] = useState("popular");

  const handleFilterchange = (type, value) => {
    setFilterdata((prev) => ({ ...prev, [type]: value }));
  };
  const removeFilter = (type) => {
    let filters = filterData;
    delete filters[type];
    setFilterdata((prev) => ({ ...prev, ...filters }));
  };

  return (
    <div className="container px-4 md:px-8 pt-8">
      <div className="text-2xl font-extrabold uppercase tracking-widest pr-2 pb-3">
        Dresses
      </div>

      <CategoryBytype
        handleFilterchange={handleFilterchange}
        filterData={filterData}
      />

      <div className="flex max-h-full relative">
        <ProductFilter
          handleFilterchange={handleFilterchange}
          filterData={filterData}
        />
        {/* {devicetype !== "Mobile" && (
          <div className="border-[1px] border-gray-light"></div>
        )} */}
        <ProductListing
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterData={filterData}
          handleFilterchange={removeFilter}
        />
      </div>
    </div>
  );
}

export default Products;
