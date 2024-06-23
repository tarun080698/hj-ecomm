import React from "react";

function OccasionsCard({ occasion }) {
  return (
    <div className="max-w-xs">
      <img
        src={occasion?.Img}
        alt=""
        className="object-contain object-center w-auto h-auto rounded-t-md dark:bg-gray-500 rounded-3xl aspect-[1]"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {occasion?.name}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default OccasionsCard;
