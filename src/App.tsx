import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Route1 } from "./pages/Route1";
import { Route2 } from "./pages/Route2";

function App() {
  return (
    <Routes>
      <Route path="/route1" element={<Route1 />} />
      <Route path="/" element={<Navigate to="/route1" />} />
      <Route path="/route2" element={<Route2 />} />
    </Routes>
  );
}

export default App;
