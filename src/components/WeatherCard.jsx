// src/components/WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <div className="weather-card" aria-label={`Weather for ${name}`}>
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p><strong>Temperature:</strong> {Math.round(main.temp)}°C</p>
      <p><strong>Feels Like:</strong> {Math.round(main.feels_like)}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
      <p><strong>Condition:</strong> {weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;