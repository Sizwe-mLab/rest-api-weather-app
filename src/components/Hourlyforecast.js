import React from 'react';


const Hourlyforecast = ({ forecastData }) => {

  if (!forecastData || !forecastData.list) {
    return <p>No forecast data available.</p>;
  }

  return (
    <div>
      <h2>Hourly Forecast</h2>
      <ul>
        {forecastData.list.slice(0, 4).map((item) => (
          <p key={item.dt}>
            <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
            <p>Temperature: {item.main.temp}°C</p>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Hourlyforecast;