import React from "react";

import "../css/DetailedWeather.css"

const DetailedWeather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>There is not data available to show.</div>;
  }

  return (
    <div className="detailed-weather">
  <h2>
    Weather details for {weatherData.location}, {weatherData.country}
  </h2>
  <div className="weather-detail">
    <div className="weather-column">
      <p><strong>Description:</strong> {weatherData.description}</p>
      <p><strong>Temperature:</strong> {weatherData.temperature}°C</p>
      <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
    </div>
    <div className="weather-column">
      <p><strong>Wind Velocity:</strong> {weatherData.windSpeed} m/s</p>
      <p><strong>Pressure:</strong> {weatherData.pressure} hPa</p>
      <p><strong>Latitude:</strong> {weatherData.latitude}</p>
    </div>
    <div className="weather-column">
      <p><strong>Longitude:</strong> {weatherData.longitude}</p>
      <p><strong>Sunrise:</strong> {new Date(weatherData.sunrise * 1000).toLocaleTimeString()}</p>
      <p><strong>Sunset:</strong> {new Date(weatherData.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  </div>
</div>
  );
};

export default DetailedWeather;
