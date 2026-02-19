// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Weather Pro, Abdul!</h1>
      <p>Your go-to app for accurate weather updates and forecasts in Lahore and beyond.</p>
      <Link to="/weather" className="btn">Check Weather Now</Link>
    </div>
  );
};

export default Home;