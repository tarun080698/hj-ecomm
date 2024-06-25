import React from "react";
import img7 from "assets/images/E2585 - Blush.png";
import img8 from "assets/images/E2595 - Nude.png";
import img10 from "assets/images/E2607 - Black.png";
import img11 from "assets/images/E2707 - Navy.png";
import OccasionsCard from "./OccasionsCard";

import Recommendations from "./Recommendations";
import ImageGrid from "./ImageGrid";

function Category() {
  const occasions = [
    { name: "Party", Img: img7 },
    { name: "Club", Img: img8 },
    { name: "Bridal", Img: img10 },
    { name: "Evening", Img: img11 },
  ];
  return (
    <div className="flex flex-col">
      {/* occasions */}
      <div className="container">
        <div className="text-coral-dark text-2xl font-semibold sm:text-4xl py-3">
          Shop by Occasions
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          {occasions.map((occasion, index) => (
            <OccasionsCard occasion={occasion} key={index} />
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <div className="flex items-center justify-center text-2xl sm:text-4xl p-1 bg-gradient-to-r from-coral-light to-coral-dark text-ivory">
          <span className="text-2xl sm:text-4xl font-extrabold uppercase tracking-widest pr-2">
            Vani's
          </span>{" "}
          Recommendations
        </div>
        <Recommendations />
      </div>

      <div>
        <div className="flex items-center justify-center text-2xl sm:text-4xl p-1 text-gray-950 border border-ivory">
          Find your perfect look at
          <span className="text-2xl sm:text-4xl text-coral-dark font-extrabold uppercase tracking-widest pl-2">
            Vani's
          </span>
        </div>
        <ImageGrid />
      </div>
    </div>
  );
}

export default Category;
