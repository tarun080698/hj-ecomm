import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useDeviceTypeContext } from "contexts/DeviceTypeContext";
import { products } from "assets/data/dummydata";

const ImageCarousel = () => {
  const deviceType = useDeviceTypeContext();
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={deviceType === "Mobile" ? 3 : 4}
        centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          // waitForTransition: false,
        }}
        // navigation={true}
        speed={3000}
        loop={true}
      >
        {products.map(({ additional_images_url }, index) => (
          <SwiperSlide key={index}>
            <img
              src={additional_images_url[0]}
              alt={`Slide ${index + 1}`}
              className="w-full aspect-[2/3] h-auto max-h-[600px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
