/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Map from "./pages/map/Map";
import Countries from "./pages/countries/Countries";
import CountryDetails from "./pages/countries/CountryDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/map" element={<Map />} />
          <Route path="/countries/:countryname" element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
