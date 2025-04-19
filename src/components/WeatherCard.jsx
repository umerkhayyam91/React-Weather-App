import React from 'react';

const WeatherCard = ({ weather }) => {
    console.log("weather.name", weather)
  return (
    <div className="card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>{Math.round(weather.main.temp)}°C - {weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>Min: {weather.main.temp_min}°C | Max: {weather.main.temp_max}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
