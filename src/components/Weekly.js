
import React from 'react';
import './Weekly.css';
import { useLocation } from 'react-router-dom';

const Weekly = () => {
 const location = useLocation();
 const forecastData = location.state?.forecastData;

console.log("Forecast data received:", forecastData);

 if (!forecastData) {
    return <p>Loading weekly forecast...</p>;
}

    return (

        <div className="Forecast">

            <h1>Weekly Weather Forecast</h1>

            <table>
  <thead>
    <tr>
      <th>Day</th>
      <th>Icon</th>
      <th>Temperature</th>
    </tr>
  </thead>
  <tbody>
    {forecastData.list.slice(0, 5).map((item, index) => (
      <tr key={index}>
        <td>{new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</td>
        <td className="expand">
          <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" />
        </td>
        <td>{item.main.temp}°C</td>
      </tr>
    ))}
  </tbody>
</table>
        </div>

    );
}

export default Weekly;


