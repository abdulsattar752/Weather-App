import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return alert("Please enter a city");
    navigate(`/current?city=${city}`);
  };

  return (
    <div style={{padding: "20px", textAlign: "center"}}>
      <h1>Weather & City Explorer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;