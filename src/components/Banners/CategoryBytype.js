import { categoryOptions } from "assets/data/constants";
import React from "react";

import img11 from "assets/images/E2613 - Mauve.png";

function CategoryBytype({ handleFilterchange, filterData }) {
  return (
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
                ${filterData?.category === name ? "outline-coral-dark" : ""}`}
              />
              <div className="mt-2 text-gray text-base">{name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 

export default CategoryBytype;
