import { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";

function Forecast() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_API_KEY";

  const getForecast = async () => {
    if (!city) return;

    setLoading(true);

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await res.json();
    setForecast(data);
    setLoading(false);
  };

  return (
    <div className="page">
      <div className="glass-card large">
        <h2>5-Day Forecast</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getForecast}>Search</button>
        </div>

        {loading && <Loader />}

        <div className="forecast-grid">
          {forecast &&
            forecast.list.slice(0, 8).map((item, index) => (
              <WeatherCard
                key={index}
                date={new Date(item.dt_txt).toLocaleDateString()}
                temp={item.main.temp}
                description={item.weather[0].description}
                icon={item.weather[0].icon}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
