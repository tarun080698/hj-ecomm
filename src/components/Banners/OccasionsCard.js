import React from "react";

function OccasionsCard({ occasion }) {
  return (
    <div className="relative">
      <img
        src={occasion?.Img}
        alt=""
        className="rounded-xl object-contain object-center dark:bg-gray-500"
      />
      <div className="inset-0 flex items-end mb-[20px] justify-center absolute text-2xl font-semibold tracking-wide">
        {occasion?.name}
      </div>
    </div>
  );
}

export default OccasionsCard;
