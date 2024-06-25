import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListing from "components/products/ProductListing";
import HomePage from "pages/Home";

function App() {
  return (
    <div className="bg-ivory">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" exact element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
