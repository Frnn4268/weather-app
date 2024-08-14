import React from "react";
import "../css/Weather.css";

const WeatherMain = ({ weatherData }) => {
  return (
    <>
      <img
        src={weatherData.icon}
        alt="weather-icon"
        className="weather-icon-principal"
      />
      <p className="temperature-principal">{weatherData.temperature}°c</p>
      <p className="location-principal">{weatherData.location}</p>
    </>
  );
};

export default WeatherMain;
