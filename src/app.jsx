// src/app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Weather from './pages/Weather.jsx';
import Forecast from './pages/Forecast.jsx';
import WeeklyForecast from './pages/WeeklyForecast.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/weekly-forecast" element={<WeeklyForecast />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;