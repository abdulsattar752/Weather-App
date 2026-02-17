import React from "react";
import "../styles/WeeklyForecast.css";


function WeeklyForecast() {
  const forecastData = [
    { day: "Monday", temp: "28°C", condition: "Sunny", icon: "☀️" },
    { day: "Tuesday", temp: "24°C", condition: "Cloudy", icon: "☁️" },
    { day: "Wednesday", temp: "22°C", condition: "Rainy", icon: "🌧" },
  ];

  return (
    <div className="weekly-container">
      <h1 className="weekly-title">3-Day Weekly Forecast</h1>

      <div className="forecast-grid">
        {forecastData.map((item, index) => (
          <div className="forecast-card" key={index}>
            <div className="icon">{item.icon}</div>
            <div className="day">{item.day}</div>
            <div className="temp">{item.temp}</div>
            <div className="condition">{item.condition}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyForecast;
