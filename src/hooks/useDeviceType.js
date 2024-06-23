import { useState, useEffect } from "react";

const useDeviceType = () => {
  const getDeviceType = () => {
    const width = window.innerWidth;

    if (width < 640) {
      return "Mobile";
    } else if (width >= 640 && width < 768) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  };
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
