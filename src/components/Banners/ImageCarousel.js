import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
import { useDeviceTypeContext } from "contexts/DeviceTypeContext";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const ImageCarousel = () => {
  const deviceType = useDeviceTypeContext();
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={deviceType === "Mobile" ? 3 : 4}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        speed={5000}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto aspect-[2/3]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
