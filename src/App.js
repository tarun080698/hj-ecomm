import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "components/Home";
import ProductListing from "components/products/ProductListing";

function App() {
  return (
    <div className="bg-ivory">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
