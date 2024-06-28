import {
  categoryOptions,
  colorOptions,
  occasionOptions,
  sizeOptions,
} from "assets/data/constants";
import React from "react";

function ProductFilter({ filterData, handleFilterchange }) {
  return (
    <div className="hidden md:block sticky top-[150px] h-full w-1/5 overflow-auto pr-4">
      <div className="flex justify-between items-center">
        <div className="uppercase text-sm text-gray font-extrabold">
          Filters
        </div>
        {Object.keys(filterData).length > 0 && (
          <div className="text-xs text-coral-dark font-extrabold">
            Clear All
          </div>
        )}
      </div>
      <div>
        <div>
          <div className="pt-2 text-base font-semibold">Category</div>
          <div className="py-2 px-1">
            {categoryOptions.map(({ name }, index) => (
              <div
                key={index}
                className={`p-1 ${
                  filterData?.category === name
                    ? "text-coral-dark font-bold"
                    : "text-gray"
                } cursor-pointer hover:bg-gray-light`}
                onClick={() => handleFilterchange("category", name)}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="border-b border-gray-border"></div>
        </div>

        <div>
          <div className="pt-2 text-base font-semibold">Color</div>
          <div className="flex py-2 px-1 flex-wrap">
            {colorOptions.map(({ name, colorCode }, index) => (
              <div
                key={index}
                onClick={() => handleFilterchange("color", name)}
                className={`p-1 ${
                  filterData?.color === name ? "text-coral-dark font-bold" : ""
                } cursor-pointer hover:bg-gray-light`}
              >
                <div
                  className={`bg-[${colorCode}] w-6 h-6 rounded-full border border-black m-1`}
                  style={{ backgroundColor: colorCode }}
                ></div>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-border"></div>
        </div>

        <div>
          <div className="pt-2 text-base font-semibold">Sizes</div>
          <div className="flex py-2 px-1 flex-wrap">
            {sizeOptions.map(({ name, code }, index) => (
              <div
                key={index}
                className={`text-base uppercase p-1 m-1 border border-gray-border ${
                  filterData?.size === name
                    ? "text-coral-dark font-bold bg-black"
                    : ""
                } cursor-pointer hover:bg-gray-light`}
                onClick={() => handleFilterchange("size", name)}
              >
                {code}
              </div>
            ))}
          </div>
          <div className="border-b border-gray-border"></div>
        </div>

        <div>
          <div className="pt-2 text-base font-semibold">Occasions</div>
          <div className="py-2 px-1 flex flex-wrap">
            {occasionOptions.map(({ name }, index) => (
              <div
                key={index}
                onClick={() => handleFilterchange("occasion", name)}
                className={`w-fit p-1 m-1 border border-gray-border cursor-pointer ${
                  filterData?.occasion === name
                    ? "text-coral-dark font-bold bg-black"
                    : ""
                }`}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="border-b border-gray-border"></div>
        </div>
        <div>
          <div className="pt-2 text-base font-semibold ">Pattern Type</div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
