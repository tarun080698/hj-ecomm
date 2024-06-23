import useDeviceType from "hooks/useDeviceType";
import React, { createContext, useContext } from "react";

const DeviceTypeContext = createContext();

export const DeviceTypeProvider = ({ children }) => {
  const deviceType = useDeviceType();

  return (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

export const useDeviceTypeContext = () => {
  return useContext(DeviceTypeContext);
};
