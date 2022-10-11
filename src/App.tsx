import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Courses } from "./pages/Courses/index";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/route1" />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
