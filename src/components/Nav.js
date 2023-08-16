import React from "react";
import "../Nav.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} className="logo" alt="company logo"></img>
        </Link>
      </div>
      <div className="nav-btn-container">
        <Link className="nav-btn" to="/about-us">
          ABOUT US
        </Link>
        <HashLink className="nav-btn" smooth to="/#Services">
          SERVICES
        </HashLink>
        <HashLink className="nav-btn" smooth to="/#ServiceArea">
          SERVICE AREA
        </HashLink>
        <Link className="nav-btn book-btn" to="/contact-us">
          BOOK NOW
        </Link>
      </div>
    </div>
  );
}
