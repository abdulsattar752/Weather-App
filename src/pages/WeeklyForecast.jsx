import React, { useState } from "react";
import "../styles/WeeklyForecast.css";


function WeeklyForecast() {
  const [country, setCountry] = useState("Pakistan");

  const countries = ["UK", "India", "Pakistan" ,"Australia"];

  const forecastData = {
    UK: [
      { day: "Monday", temp: "15°C", condition: "Cloudy", icon: "☁️" },
        { day: "Friday", temp : " 33°C", condition: "Low", icon: "☀️" },
      { day: "Tuesday", temp: "18°C", condition: "Sunny", icon: "☀️" },
      { day: "Wednesday", temp: "16°C", condition: "Rainy", icon: "🌧" },
    ],
    India: [
      { day: "Monday", temp: "32°C", condition: "Sunny", icon: "☀️" },
      { day: "Tuesday", temp: "30°C", condition: "Rainy", icon: "🌧" },
      { day: "Wednesday", temp: "31°C", condition: "Cloudy", icon: "☁️" },
    ],
    Pakistan: [
      { day: "Monday", temp: "28°C", condition: "Sunny", icon: "☀️" },
      { day: "Tuesday", temp: "27°C", condition: "Cloudy", icon: "☁️" },
      { day: "Wednesday", temp: "26°C", condition: "Rainy", icon: "🌧" },
    ],
    Australia: [
      { day: "Monday", temp: "28°C", condition: "Sunny", icon: "☀️" },
      { day: "Tuesday", temp: "27°C", condition: "Cloudy", icon: "☁️" },
      { day: "Wednesday", temp: "26°C", condition: "Rainy", icon: "🌧" },
    ],
  };

  return (
    <div className="weekly-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">AI-Powered Weekly Forecast</h1>
          <p className="hero-subtitle">
            Know the upcoming weather and plan your week smartly.
          </p>
        </div>
      </section>

      {/* Country Selector */}
      <div className="country-select-wrapper">
        <label htmlFor="country">Select Country:</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((c, index) => (
            <option key={index} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Forecast Cards */}
      <div className="forecast-grid">
        {forecastData[country].map((item, index) => (
          <div className="forecast-card" key={index}>
            <div className="card-icon">{item.icon}</div>
            <div className="card-day">{item.day}</div>
            <div className="card-temp">{item.temp}</div>
            <div className="card-condition">{item.condition}</div>
          </div>
        ))}
      </div>

      {/* Footer / Info Section */}
      <section className="forecast-info">
        <p>
          All forecasts are AI-generated and for educational purposes. Stay
          prepared for any weather changes.
        </p>
      </section>
    </div>
  );
}

export default WeeklyForecast;
