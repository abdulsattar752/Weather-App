// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="cloud cloud-1">☁</div>
        <div className="cloud cloud-2">☁</div>
        <div className="sun">☀</div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-icon">⛅</div>
        
        <h1 className="hero-title">Weather Pro</h1>
        
        <p className="hero-subtitle">Your Personal Weather Companion</p>
        
        <p className="hero-description">
          Get accurate, real-time weather updates for any city in the world. 
          <br />
          From hourly forecasts to weekly predictions, stay prepared for anything.
        </p>

        {/* Feature Cards */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌡️</div>
            <h3>Current Weather</h3>
            <p>Real-time temperature, humidity & wind</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Hourly Forecast</h3>
            <p>Check weather for the next 24 hours</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Weekly Forecast</h3>
            <p>Plan ahead with 7-day predictions</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚠️</div>
            <h3>Weather Alerts</h3>
            <p>Stay safe with real-time alerts</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <Link to="/weather" className="btn btn-primary">
            <span>Check Weather Now</span>
            <span className="arrow">→</span>
          </Link>
          <Link to="/weekly-forecast" className="btn btn-secondary">
            <span>View Weekly Forecast</span>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">195+</div>
          <div className="stat-label">Countries Supported</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">99%</div>
          <div className="stat-label">Accuracy Rate</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">5M+</div>
          <div className="stat-label">Active Users</div>
        </div>
      </div>
    </div>
  );
};

export default Home;