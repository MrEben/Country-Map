// eslint-disable-next-line no-unused-vars
import React from "react";
import "./nav.css";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <ul>
            <Link to="/">
              <div className="logo center">
                <BsCodeSlash />
                <h2>
                  Busy<span className="danger">Dev</span>
                </h2>
              </div>
            </Link>
            <div className="app-links">
              <div>
                <Link to="/map">
                  <h4 className="center">
                    <AiOutlineGlobal />
                    <span>Open map</span>
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
