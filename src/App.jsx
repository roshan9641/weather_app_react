import { useState } from "react";
import WeatherCard from "./weatherCard.jsx";
import { getCoordinates, getWeather } from "./api.js";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      setError(""); // reset error
      const { name, lat, lon, country } = await getCoordinates(city);
      const weatherData = await getWeather(lat, lon);
      setWeather({ ...weatherData, name, country });
    } catch (err) {
      setWeather(null);
      setError("⚠️ City not found or network issue.");
    }
  };

  return (
    <div className="app">
      <h1 className="title">Weather Now</h1>
      <form className="weather-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
