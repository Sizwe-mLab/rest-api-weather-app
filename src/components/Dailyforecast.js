import React from 'react';


const Dailyforecast = ({ forecast }) => {
  
  if (!forecast || !forecast.list) {
    return <p>No forecast data available.</p>;
  }
  const slicedForecast = forecast.list.slice(0, 5);

  return (
    <div>
      {slicedForecast.map((item, index) => (
        <div key={index}>
          <h2>{new Date(item.dt * 1000).toLocaleDateString()}</h2>
          <p>Temperature: {item.main.temp}°C</p>
          <p>Humidity: {item.main.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default Dailyforecast;