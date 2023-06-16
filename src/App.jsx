/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import MyMaps from "./components/map/Map";
// import Countries from "./pages/countries/Countries";
import Countries from "./UI/Countries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Countries />} />
          {/* <Route path="/map" element={<MyMaps />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
