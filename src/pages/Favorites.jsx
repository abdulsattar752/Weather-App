import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [newCity, setNewCity] = useState("");
  const navigate = useNavigate();

  // Load favorites from localStorage on page load
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favoriteCities")) || [];
    setFavorites(stored);
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favoriteCities", JSON.stringify(favorites));
  }, [favorites]);

  const handleAdd = () => {
    if (!newCity) return alert("Enter a city");
    if (favorites.includes(newCity)) return alert("City already added");
    setFavorites([...favorites, newCity]);
    setNewCity("");
  };

  const handleRemove = (city) => {
    setFavorites(favorites.filter((c) => c !== city));
  };

  const handleGoWeather = (city) => {
    navigate(`/current?city=${city}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Favorite Cities</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Add new city"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {favorites.length === 0 ? (
        <p>No favorite cities added yet.</p>
      ) : (
        <ul>
          {favorites.map((city) => (
            <li key={city} style={{ marginBottom: "5px" }}>
              {city}{" "}
              <button onClick={() => handleGoWeather(city)}>View Weather</button>{" "}
              <button onClick={() => handleRemove(city)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;