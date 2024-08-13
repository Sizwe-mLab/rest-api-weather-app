import React from 'react';


const Dailyforecast = ({ forecastData }) => {
  
  if (!forecastData || !forecastData.list) {
    return <p>No forecast data available.</p>;
  }
  const slicedForecast = forecastData.list.slice(0, 5);

  return (
    <div className='dailyforecast'>
      <h2>Daily Forecast</h2>
      {slicedForecast.map((item, index) => (
        <div key={index}>
          <h2>{new Date(item.dt * 1000).toLocaleDateString()}</h2>
          <p>Temperature: {item.main.temp}°C</p>
          
        </div>
      ))}
    </div>
  );
};

export default Dailyforecast;