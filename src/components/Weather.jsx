import React from "react";
import "../css/Weather.css";
import searc_icon from "../assets/search.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={searc_icon} alt="" />
      </div>
    </div>
  );
};

export default Weather;
