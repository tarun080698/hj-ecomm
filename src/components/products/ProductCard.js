import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item, simple = false }) {
  return (
    <Link
      to={`/product/${item?.name.replaceAll(" ", "-").toLowerCase()}_${
        item?.code
      }`}
    >
      <div
        className={`
        ${simple ? "w-60 max-w-64 " : ""}
        inline-block m-2 rounded-t-sm cursor-pointer`}
      >
        <img
          src={item?.additional_images_url[0]}
          alt=""
          className="rounded-t-md object-contain object-center"
        />
        <div className="py-1">
          <div className="text-sm md:text-base">
            <div className="pr-1 font-bold">{item?.code}</div>
            <div className="text-sm text-gray-500 font-semibold">
              {item?.name}
            </div>
          </div>
          {!simple && false && (
            <div className=" text-sm md:text-base font-semibold">
              US${item?.price}
            </div>
          )}
          {!simple && false && (
            <div className="flex flex-wrap gap-1">
              {item?.colors.map(({ colorName, hex }, index) => (
                <div
                  key={index}
                  // onClick={() => handleFilterchange("color", name)}
                  // className={`${
                  //   filterData?.color === name ? "text-coral-dark font-bold" : ""
                  // } cursor-pointer`}
                >
                  <div
                    className={`cursor-pointer w-4 h-4 rounded-full border border-black`}
                    style={{ backgroundColor: hex }}
                  ></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
