import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css'; // You can also use Tailwind

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '5e06aeb81d99c24fbfdffaceb4f2a0fd'; // replace this

  const fetchWeather = async () => {
    try {
      setError('');
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      setError('City not found!');
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
