import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "pages/HomePage";
import ProductListPage from "pages/ProductListing";
import ProductPage from "pages/ProductPage";

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" exact element={<ProductListPage />} />
        <Route path="/product/:id" exact element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
