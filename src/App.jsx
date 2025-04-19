import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  async function searchWeather() {
    try {
      setError("");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e06aeb81d99c24fbfdffaceb4f2a0fd&units=metric`
      );
      setWeather(res.data);
    } catch (error) {
      setError("City not found!");
      setWeather("");
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <input
          placeholder="search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={searchWeather}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
