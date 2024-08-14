import React from "react";
import "../css/Information.css";

const InformationPage = () => {
  return (
    <div className="information-page">
      <h1>About This Weather App</h1>
      <section>
        <h2>Overview</h2>
        <p>
          This weather application provides real-time weather information for
          any city around the globe. Users can search for a city's current
          weather conditions, and the app displays detailed information,
          including temperature, humidity, wind speed, and more.
        </p>
      </section>
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Search for weather by city name</li>
          <li>View detailed weather data including wind speed, humidity, and temperature</li>
          <li>Display random weather information for popular cities like Tokyo, Paris, and New York</li>
          <li>Responsive design with adaptive layouts for different screen sizes</li>
          <li>Real-time weather data fetched from the OpenWeather API</li>
        </ul>
      </section>
      <section>
        <h2>Technologies Used</h2>
        <ul>
          <li><strong>React:</strong> Frontend library for building user interfaces</li>
          <li><strong>CSS Modules:</strong> For styling components with scoped CSS</li>
          <li><strong>OpenWeather API:</strong> To fetch real-time weather data</li>
          <li><strong>React Toastify:</strong> For showing notifications and alerts</li>
        </ul>
      </section>
      <section>
        <h2>How to Use</h2>
        <p>
          Simply enter the name of a city in the search bar on the main page,
          and the app will fetch and display the current weather conditions for
          that location. The app also shows weather data for three random cities
          at the bottom of the main page.
        </p>
      </section>
    </div>
  );
};

export default InformationPage;
