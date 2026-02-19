// src/pages/Weather.jsx
import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard.jsx';
import AlertBanner from '../components/AlertBanner.jsx';
import Loader from '../components/Loader.jsx';
import { getCoordinates } from '../utils/geocode.js';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const Weather = () => {
  const [city, setCity] = useState('Lahore');
  const [weatherData, setWeatherData] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (searchCity) => {
    setLoading(true);
    setError(null);
    try {
      const { lat, lon, name } = await getCoordinates(searchCity, API_KEY);

      const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) throw new Error('Unable to fetch weather data. Please try later.');
      const data = await res.json();

      setWeatherData({
        name,
        main: { ...data.current, feels_like: data.current.feels_like },
        weather: data.current.weather,
        wind: data.current,
      });

      setAlerts(data.alerts || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  return (
    <div className="weather-page">
      <h1>Current Weather & Alerts</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter city name (e.g., Lahore)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="City search"
        />
        <button type="submit" className="btn btn-secondary">Search</button>
      </form>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}

      <AlertBanner alerts={alerts} />

      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default Weather;