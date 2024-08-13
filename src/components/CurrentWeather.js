import React from 'react';

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return <div className='loading'>Loading...</div>;
  }
  return (
    <div>
      <h2>Current Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.weather[0].description}</p>
      <p>Wind Speed: {weatherData.main.humidity} km/h</p>
    </div>
  );
};

export default CurrentWeather;