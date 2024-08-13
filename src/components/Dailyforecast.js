import React from 'react';

const Dailyforecast = ({ forecastData }) => {

  if (!forecastData || !forecastData.list) {
    return <p>No forecast data available.</p>;
  }

  const getDayOfWeek = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  return (
    <div>
      <h2>Daily Forecast</h2>
      <ul>
        {forecastData.list.slice(0, 5).map((item, index) => (
          <li key={index}>
            <p>{getDayOfWeek(item.dt)}</p>
            <p>Temperature: {item.main.temp}°C</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dailyforecast;