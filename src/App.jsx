import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import DetailedWeatherPage from "./pages/DetailedWeatherPage";
import InformationPage from "./pages/InformationPage";
import Navbar from "./components/Navbar"; 

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <div className="app">
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/detailed-weather" element={<DetailedWeatherPage />} />
          <Route path="/information" element={<InformationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
