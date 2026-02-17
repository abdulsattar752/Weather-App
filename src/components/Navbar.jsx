import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🌦 Weather App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/weather">Current</Link>
        <Link to="/forecast">Forecast</Link>
        <Link to="/weekly">Weekly Forecast</Link>
      </div>
    </nav>
  );
}

export default Navbar;
