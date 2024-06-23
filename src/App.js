import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "components/Home";

function App() {
  return (
    <div className="bg-ivory">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
