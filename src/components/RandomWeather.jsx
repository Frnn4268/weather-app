import React from "react";
import "../css/WeatherRandomCity.css";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

const RandomWeather = ({ randomWeather }) => {
  return (
    <div className="random-weather">
      {randomWeather.map((weather, index) => (
        <div key={index} className="random-weather-item">
          <div className="weather-info">
            <div className="weather-main">
              <img src={weather.icon} alt="" className="weather-icon" />
              <p className="temperature">{weather.temperature}°c</p>
              <p className="location">{weather.location}</p>
            </div>
            <div className="weather-extra">
              <div className="col">
                <img src={humidity_icon} alt="humidity-icon" />
                <div>
                  <p>{weather.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="wind-icon" />
                <div>
                  <p>{weather.windSpeed} Km/h</p>
                  <span>Wind speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomWeather;
