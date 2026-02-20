import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ForecastCard from "../components/ForecastCard";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your key

function Forecast() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    setError("");

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => {
        // OpenWeatherMap returns 3-hour interval data, we'll take one per day (12:00)
        const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
        setForecast(daily);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  if (!city) return <p style={{ padding: "20px" }}>Please enter a city from Home page.</p>;
  if (loading) return <p style={{ padding: "20px" }}>Loading forecast...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>5-Day Forecast for {city}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {forecast.map((day) => (
          <ForecastCard
            key={day.dt}
            day={new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}
            temp={day.main.temp}
            description={day.weather[0].description}
            icon={day.weather[0].icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Forecast;