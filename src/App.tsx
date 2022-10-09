import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Teachers } from "./pages/Teachers/index";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/route1" />} />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
  );
}

export default App;
