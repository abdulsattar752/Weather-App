// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Weather Pro</Link>
        <ul className="navbar-menu">
          <li><Link to="/weather">Current</Link></li>
          <li><Link to="/forecast">Forecast</Link></li>
          <li><Link to="/weekly-forecast">Weekly</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;