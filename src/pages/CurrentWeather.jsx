import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // 🔑 Get free API key from openweathermap.org

function CurrentWeather() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    setError("");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  if (!city) return <p style={{ padding: "20px" }}>Please enter a city from Home page.</p>;
  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;