import React, { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const ProductCarousal = ({ images, currentImgIndex, setCurrentImgIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(currentImgIndex);
  const maxVisibleImagesCount = 4; // Number of images visible at once
  console.log({ currentIndex });

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setCurrentImgIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setCurrentImgIndex((currentIndex + 1) % images.length);
  };

  const getVisibleImages = () => {
    const visibleImagesCount = Math.min(images.length, maxVisibleImagesCount);
    const start = currentIndex;
    const end = start + visibleImagesCount;
    if (end <= images.length) {
      return images?.slice(start, end);
    } else {
      return images
        ?.slice(start, end)
        .concat(images?.slice(0, end - images.length));
    }
  };

  return (
    <div className="w-16 max-w-20 mx-auto text-center">
      <button
        onClick={prevImage}
        className="text-2xl text-center p-2 text-gray-placeholder"
      >
        <SlArrowUp />
      </button>
      <div className="overflow-hidden h-96 relative">
        <div className="absolute top-0 left-0 w-16 max-w-20">
          {getVisibleImages()?.map((img, index) => (
            <div
              key={index}
              className={`${
                currentImgIndex === index ? "border-2 border-coral-light " : ""
              }w-16 max-w-20 h-24 mb-2`}
              onClick={() => {
                setCurrentIndex(index);
                setCurrentImgIndex(index);
              }}
            >
              <img
                src={img}
                alt={`img-${index}`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextImage}
        className="text-2xl text-center p-2 text-gray-placeholder"
      >
        <SlArrowDown />
      </button>
    </div>
  );
};

export default ProductCarousal;
