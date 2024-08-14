import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/detailed-weather">Detailed Weather</Link>
      <Link to="/information">Information</Link>
    </nav>
  );
};

export default Navbar;
