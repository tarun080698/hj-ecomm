import {
  categoryOptions,
  colorOptions,
  occasionOptions,
  sizeOptions,
} from "assets/data/constants";
import React from "react";

function ProductFilter({ filterData, handleFilterchange }) {
  return (
    <aside className="hidden md:block md:w-60">
      <nav>
        <div>
          <div className="pt-2 text-lg font-semibold">Categories</div>
          <div className="p-2">
            {categoryOptions.map(({ name }, index) => (
              <div
                key={index}
                className={`${
                  filterData?.category === name
                    ? "text-coral-dark font-bold"
                    : ""
                } cursor-pointer`}
                onClick={() => handleFilterchange("category", name)}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="border-b border-gray-border"></div>
        </div>

        <div>
          <div className="pt-2 text-lg font-semibold">Color</div>
          <div className="flex p-2 flex-wrap">
            {colorOptions.map(({ name, colorCode }, index) => (
              <div
                key={index}
                onClick={() => handleFilterchange("color", name)}
                className={`${
                  filterData?.color === name ? "text-coral-dark font-bold" : ""
                } cursor-pointer`}
              >
                <div
                  className={`bg-[${colorCode}] w-6 h-6 rounded-full border border-black m-1`}
                  style={{ backgroundColor: colorCode }}
                ></div>
                {/* <div>{name}</div> */}
              </div>
            ))}
          </div>
          <div className="border-b border-gray-border"></div>
        </div>

        <div>
          <div className="pt-2 text-lg font-semibold">Sizes</div>
          <div className="flex p-2 flex-wrap">
            {sizeOptions.map(({ name, code }, index) => (
              <div
                key={index}
                className={`text-lg uppercase p-2 m-1 border border-gray-border ${
                  filterData?.size === name
                    ? "text-coral-dark font-bold bg-black"
                    : ""
                } cursor-pointer`}
                onClick={() => handleFilterchange("size", name)}
              >
                {code}
              </div>
            ))}
          </div>
          <div className="border-b border-gray-border"></div>
        </div>

        <div>
          <div className="pt-2 text-lg font-semibold">Occasions</div>
          <div className="p-2 flex flex-wrap">
            {occasionOptions.map(({ name }, index) => (
              <div
                key={index}
                onClick={() => handleFilterchange("occasion", name)}
                className={`w-fit p-2 m-1 border border-gray-border cursor-pointer ${
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
        <div className="space-y-2 border-b border-gray">
          <h2 className="text-sm font-semibold ">Pattern Type</h2>
        </div>
      </nav>
    </aside>
  );
}

export default ProductFilter;
