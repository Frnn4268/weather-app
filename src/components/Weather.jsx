import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import WeatherMain from "./WeatherMain";
import WeatherData from "./WeatherData";
import RandomWeather from "./RandomWeather";

import "../css/Weather.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);
  const [randomWeather, setRandomWeather] = useState([]);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      toast.warn("Por favor, ingresa un nombre de ciudad :)");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_WEATHER_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        toast.error("Ciudad no encontrada :(");
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      toast.error("Error al obtener los datos del clima");
      console.error("Error al obtener los datos del clima", error);
    }
  };

  const fetchRandomWeather = async () => {
    const randomCities = ["Tokyo", "Paris", "New York"];
    const weatherPromises = randomCities.map(async (city) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_WEATHER_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      return {
        location: data.name,
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: allIcons[data.weather[0].icon] || clear_icon,
      };
    });

    const randomWeatherData = await Promise.all(weatherPromises);
    setRandomWeather(randomWeatherData);
  };

  useEffect(() => {
    search("Guatemala");
    fetchRandomWeather();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="weather">
        <SearchBar inputRef={inputRef} onSearch={search} />
        {weatherData && (
          <>
            <WeatherMain weatherData={weatherData} />
            <WeatherData weatherData={weatherData} />
            <RandomWeather randomWeather={randomWeather} />
          </>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Weather;
