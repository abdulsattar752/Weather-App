import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // 🔑 Use same key

function AirQuality() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  const [aqiData, setAqiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Store coordinates
  const [coords, setCoords] = useState({ lat: null, lon: null });

  // Step 1: Get coordinates of city
  useEffect(() => {
    if (!city) return;
    setLoading(true);
    setError("");

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => {
        if (data.length === 0) throw new Error("City not found");
        setCoords({ lat: data[0].lat, lon: data[0].lon });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  // Step 2: Get AQI using coordinates
  useEffect(() => {
    if (!coords.lat || !coords.lon) return;

    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error("Unable to fetch AQI");
        return res.json();
      })
      .then((data) => {
        setAqiData(data.list[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [coords]);

  if (!city) return <p style={{ padding: "20px" }}>Please enter a city from Home page.</p>;
  if (loading) return <p style={{ padding: "20px" }}>Loading Air Quality...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      {aqiData && (
        <div>
          <h2>Air Quality Index for {city}</h2>
          <p>AQI Level: {aqiData.main.aqi} / 5</p>
          <p>
            {/* Simple description based on AQI scale */}
            {aqiData.main.aqi === 1
              ? "Good"
              : aqiData.main.aqi === 2
              ? "Fair"
              : aqiData.main.aqi === 3
              ? "Moderate"
              : aqiData.main.aqi === 4
              ? "Poor"
              : "Very Poor"}
          </p>
          <p>CO: {aqiData.components.co} μg/m³</p>
          <p>NO: {aqiData.components.no} μg/m³</p>
          <p>NO₂: {aqiData.components.no2} μg/m³</p>
          <p>O₃: {aqiData.components.o3} μg/m³</p>
          <p>SO₂: {aqiData.components.so2} μg/m³</p>
          <p>PM2.5: {aqiData.components.pm2_5} μg/m³</p>
          <p>PM10: {aqiData.components.pm10} μg/m³</p>
        </div>
      )}
    </div>
  );
}

export default AirQuality;