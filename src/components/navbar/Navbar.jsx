/* eslint-disable no-unused-vars */
import React from "react";
import "./nav.css";
import { FiMap } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="container">
      <div className="nav-container">
        <div className="logo">
          <h2>
            Busy<span className="danger">Dev</span>
          </h2>
        </div>
        
        <div className="app-links">
          <div>
            <Link to="./map">
              <h4>
                <AiOutlineGlobal />
                <span>open Map</span>
              </h4>
            </Link>
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
