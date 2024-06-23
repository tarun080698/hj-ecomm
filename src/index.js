import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DeviceTypeProvider } from "contexts/DeviceTypeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DeviceTypeProvider>
      <App />
      </DeviceTypeProvider>
  </BrowserRouter>
);
