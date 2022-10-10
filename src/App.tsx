import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Teachers } from "./pages/Teachers/index";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/route1" />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
