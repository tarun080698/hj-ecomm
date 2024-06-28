import React from "react";
import { Link } from "react-router-dom";

function OccasionsCard({ occasion }) {
  return (
    <Link to={occasion.to}>
      <div className="relative">
        <img
          src={occasion?.Img}
          alt=""
          className="rounded-xl object-contain object-center dark:bg-gray-500"
        />
        <div className="inset-0 flex items-end mb-[20px] justify-center absolute text-3xl text-black-dark font-semibold tracking-wide">
          {occasion?.name}
        </div>
      </div>
    </Link>
  );
}

export default OccasionsCard;
