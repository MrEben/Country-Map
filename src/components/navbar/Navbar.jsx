/* eslint-disable no-unused-vars */
import React from "react";
import "./nav.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <ul>
            <div className="logo">
              <BsCodeSlash />
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
