import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Inicio</a>
      <a href="#detailed-weather">Clima Detallado</a>
      <a href="#information">Información</a>
    </nav>
  );
};

export default Navbar;
