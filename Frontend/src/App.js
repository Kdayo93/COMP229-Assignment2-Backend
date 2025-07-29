 import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainRouter from "./MainRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<MainRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


