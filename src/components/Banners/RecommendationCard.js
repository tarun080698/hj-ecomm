import React from "react";

function RecommendationCard({ item }) {
  return (
    <div className="m-2 border border-black-dark rounded-md w-60 max-w-64">
      <img
        src={item?.Img}
        alt=""
        className="rounded-t-md object-contain object-center"
      />
      <div className="p-2">
        <div className="">{item?.name}</div>
      </div>
    </div>
  );
}

export default RecommendationCard;
