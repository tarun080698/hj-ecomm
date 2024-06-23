import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";

import { LiaShippingFastSolid } from "react-icons/lia";
function MobileBanner() {
  const mobileTexts = [
    { text: "Free SHIPPING over US$500", icon: LiaShippingFastSolid },
    { text: "14 Days Return Warranty", icon: GiReturnArrow },
    { text: "For new users EXTRA 15% off", icon: CiDiscount1 },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-1 text-center bg-coral-dark text-white">
      {mobileTexts.map((item, index) => (
        <div
          key={index}
          className="uppercase text-sm flex flex-col items-center"
        >
          <item.icon className="text-3xl" />
          {item?.text}
        </div>
      ))}
    </div>
  );
}

export default MobileBanner;
