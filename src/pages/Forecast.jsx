// src/pages/Forecast.jsx
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader.jsx';
import AlertBanner from '../components/AlertBanner.jsx';
import { getCoordinates } from '../utils/geocode.js';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const Forecast = () => {
  const [city, setCity] = useState('Lahore');
  const [forecastData, setForecastData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchForecast = async (searchCity) => {
    setLoading(true);
    setError(null);
    try {
      const { lat, lon } = await getCoordinates(searchCity, API_KEY);

      let res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      
      if (!res.ok) {
        res = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
      }
      
      if (!res.ok) throw new Error('Unable to fetch forecast.');
      const data = await res.json();
      setForecastData((data.hourly || data.list || []).slice(0, 8));
      setAlerts(data.alerts || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecast(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) fetchForecast(city);
  };

  return (
    <div className="forecast-page">
      <h1>Hourly Forecast</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-secondary">Search</button>
      </form>
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      <AlertBanner alerts={alerts} />
      <div className="forecast-list">
        {forecastData.map((item, index) => (
          <div key={index} className="forecast-card">
            <h3>{new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
            <p>Temp: {Math.round(item.temp)}°C</p>
            <p>{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;