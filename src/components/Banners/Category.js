import React from "react";
import img1 from "assets/images/E2046 - Red, Rose Quarts, Navy, White.png";
import img2 from "assets/images/E2233 - Gold.png";
import img3 from "assets/images/E2275 - Royal.png";
import img4 from "assets/images/E2510 - White, Ivory.png";
import img5 from "assets/images/E2572 - Black.png";
import img6 from "assets/images/E2573 - Champagne.png";
import img7 from "assets/images/E2585 - Blush.png";
import img8 from "assets/images/E2595 - Nude.png";
import img9 from "assets/images/E2603 - Gold.png";
import img10 from "assets/images/E2607 - Black.png";
import img11 from "assets/images/E2707 - Navy.png";
import OccasionsCard from "./OccasionsCard";

function Category() {
  const categories = [
    { name: "Bodycon", Img: img1 },
    { name: "Mini", Img: img2 },
    { name: "Print", Img: img3 },
    { name: "Casual", Img: img4 },
    { name: "Summer", Img: img5 },
    { name: "Floral", Img: img6 },
    { name: "Midi", Img: img7 },
    { name: "Maxi", Img: img8 },
    { name: "Sweater", Img: img9 },
    { name: "Long Sleeve", Img: img10 },
  ];

  const occasions = [
    { name: "Daily", Img: img6 },
    { name: "Vacation", Img: img7 },
    { name: "Party", Img: img8 },
    { name: "Casual", Img: img9 },
    { name: "Club", Img: img10 },
    { name: "Wedding", Img: img11 },
  ];
  return (
    <div className="py-10 px-16">
      {/* category */}
      <div></div>

      {/* occasions */}
      <div>
        <div className="text-coral-dark text-3xl font-bold py-3">
          Shop by Occasions
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {occasions.map((occasion, index) => (
            <OccasionsCard occasion={occasion} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
