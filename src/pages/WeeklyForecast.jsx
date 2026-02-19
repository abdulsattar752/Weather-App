// src/pages/WeeklyForecast.jsx
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader.jsx';
import AlertBanner from '../components/AlertBanner.jsx';
import { getCoordinates } from '../utils/geocode.js';
import '../styles/WeeklyForecast.css';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const WeeklyForecast = () => {
  const [city, setCity] = useState('Lahore');
  const [weeklyData, setWeeklyData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeekly = async (searchCity) => {
    setLoading(true);
    setError(null);
    try {
      const { lat, lon } = await getCoordinates(searchCity, API_KEY);
      const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) throw new Error('Unable to fetch weekly forecast.');
      const data = await res.json();
      setWeeklyData(data.daily.slice(0, 7)); // 7 days
      setAlerts(data.alerts || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeekly(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeekly(city);
  };

  return (
    <div className="weekly-forecast-page">
      <h1>Weekly Forecast</h1>
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
      <div className="weekly-list">
        {weeklyData.map((day, index) => (
          <div key={index} className="weekly-card">
            <h3>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</h3>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
            <p>High: {Math.round(day.temp.max)}°C</p>
            <p>Low: {Math.round(day.temp.min)}°C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;