import React from "react";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
import "../css/Weather.css";

const WeatherData = ({ weatherData }) => {
  return (
    <div className="weather-data">
      <div className="col">
        <img src={humidity_icon} alt="humidity-icon" />
        <div>
          <p>{weatherData.humidity} %</p>
          <span>Humedad</span>
        </div>
      </div>
      <div className="col">
        <img src={wind_icon} alt="wind-icon" />
        <div>
          <p>{weatherData.windSpeed} Km/h</p>
          <span>Velocidad del Viento</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
