import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import ProductListing from "./ProductListing";

import img7 from "assets/images/E2585 - Blush.png";
import img8 from "assets/images/E2595 - Nude.png";
import img10 from "assets/images/E2607 - Black.png";
import img11 from "assets/images/E2707 - Navy.png";
import "./styles.css";
import { categoryOptions } from "assets/data/constants";
import useDeviceType from "hooks/useDeviceType";

function Products() {
  const devicetype = useDeviceType();
  const { search } = useLocation();
  const paramObj = {};
  for (let [key, value] of new URLSearchParams(search).entries()) {
    paramObj[key] = value;
  }

  const [filterData, setFilterdata] = useState({ ...paramObj });

  const handleFilterchange = (type, value) => {
    setFilterdata((prev) => ({ ...prev, [type]: value }));
  };
  const removeFilter = (type) => {
    let filters = filterData;
    delete filters[type];
    setFilterdata((prev) => ({ ...prev, ...filters }));
  };

  // const [isSticky, setIsSticky] = useState(false);
  // const elementRef = useRef(null);
  // const placeholderRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (elementRef.current && placeholderRef.current) {
  //       const placeholderTop =
  //         placeholderRef.current.getBoundingClientRect().top;
  //       setIsSticky(placeholderTop <= 0);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="container px-4 md:px-10 pt-8">
      {/* <div className="container px-10 pt-8" ref={elementRef}> */}
      {/* <div
        ref={placeholderRef}
        className={`w-full ${isSticky ? "h-16" : "h-0"}`}
      ></div> */}
      <div
        className="text-2xl font-extrabold uppercase tracking-widest pr-2 pb-3"
        // className={`text-2xl font-extrabold uppercase tracking-widest pr-2 pb-3 ${
        //   isSticky ? "fixed top-0 w-full" : ""
        // }`}
        // style={{ transition: "all 0.3s ease-in-out" }}
      >
        Dresses
      </div>

      <div className="">
        <div className="overflow-x-auto flex justify-between gap-3 border-b border-b-gray-border mb-6 pb-3">
          {categoryOptions.map(({ name }, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer flex flex-col justify-between w-28 max-w-32 text-center items-start align-top`}
                onClick={() => handleFilterchange("category", name)}
              >
                <img
                  src={img11}
                  alt={name}
                  className={`w-28 aspect-[1] max-w-32 p-1 rounded-full outline-1 outline-gray-border hover:outline-coral-dark
                    ${
                      filterData?.category === name ? "outline-coral-dark" : ""
                    }`}
                />
                <div className="mt-2 text-gray text-base">{name}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex">
        <ProductFilter
          handleFilterchange={handleFilterchange}
          filterData={filterData}
        />
        {devicetype !== "Mobile" && (
          <div className="border-[1px] border-gray-light"></div>
        )}
        <ProductListing
          filterData={filterData}
          handleFilterchange={removeFilter}
        />
      </div>
    </div>
  );
}

export default Products;
