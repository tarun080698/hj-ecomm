import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "pages/HomePage";
import ProductListPage from "pages/ProductPage";

function App() {
  return (
    <div className="bg-ivory">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" exact element={<ProductListPage />} />
      </Routes>
    </div>
  );
}

export default App;
