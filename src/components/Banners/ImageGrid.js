import React from "react";

import img7 from "assets/images/E2585 - Blush.png";
import img8 from "assets/images/E2595 - Nude.png";
import img10 from "assets/images/E2607 - Black.png";
import img11 from "assets/images/E2707 - Navy.png";
import { Gallery } from "react-grid-gallery";

function ImageGrid() {
  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (240 - 160 + 1)) + 160;

  const images = [
    { src: img7, width: 350, height: getRandomInt() },
    { src: img8, width: 350, height: getRandomInt() },
    { src: img10, width: 350, height: getRandomInt() },
    { src: img11, width: 350, height: getRandomInt() },
    { src: img8, width: 350, height: getRandomInt() },
    { src: img7, width: 350, height: getRandomInt() },
    { src: img10, width: 350, height: getRandomInt() },
  ];

  return (
    <div className="px-12">
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
}

export default ImageGrid;
