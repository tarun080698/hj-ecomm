import React from "react";

function ProductCard({ item }) {
  return (
    <div className="inline-block m-2 rounded-t-sm">
      <img
        src={item?.Img}
        alt=""
        className="rounded-t-md object-contain object-center"
      />
      <div className="py-1">
        <div className="text-sm md:text-base">
          <span className="pr-1">{item.styleCode}</span>
          <span>{item?.name}</span>
        </div>
        <div className=" text-sm md:text-base font-semibold">
          US${item.price}
        </div>
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
      </div>
    </div>
  );
}

export default ProductCard;
