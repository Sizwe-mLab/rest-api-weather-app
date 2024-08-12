
  import React, { useState } from 'react';
  import './Weekly.css';
  import { useLocation } from 'react-router-dom';

  const Weekly = () => {
  const location = useLocation();
  const forecastData = location.state?.forecastData;

  console.log("Forecast data received:", forecastData);

  if (!forecastData) {
      return <p>Loading weekly forecast...</p>;
  }

  const cityName = forecastData.city.name;

  const groupByDay = (list) => {
    const days = {};

    list.forEach(item => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });


      if (!days[day]) {
        days[day] = [];
      }
      days[day].push(item);
    });
    return(days);
};

const days = groupByDay (forecastData.list);
const dayNames = Object.keys(days);

const [selectedDay, setSelectedDay] = useState(null);

const handleDayClick = (day) =>{
  setSelectedDay (day) 
  };
 
  const getHourlyData = (day) =>{
    return days[day] || [];
  };

      return (

          <div className="Forecast">

              <h1>Weekly Weather Forecast for {cityName}</h1>

              <table>
    <thead>
      <tr>
        <th>Day</th>
        <th></th>
        <th>Temperature</th>
      </tr>
    </thead>
    <tbody>
      {dayNames.map((item, index) => (  
         <tr key={index} onClick={() => handleDayClick(item)} style={{ cursor: 'pointer' }}>
         <td>{item}</td>
         <td className="expand">
           <img src={`http://openweathermap.org/img/wn/${days[item][0].weather[0].icon}@2x.png`} alt="weather icon" />
         </td>
         <td>{days[item][0].main.temp}°C</td>
        </tr>
      ))}
    </tbody>
  </table>

  {selectedDay && (
        <div className="HourlyForecast">
          <h2>Hourly Weather for {selectedDay}</h2>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Icon</th>
                <th>Temperature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {getHourlyData(selectedDay).map((item, index) => (
                <tr key={index}>
                  <td>{new Date(item.dt_txt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</td>
                  <td className="expand">
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" />
                  </td>
                  <td>{item.main.temp}°C</td>
                  <td>{item.weather[0].description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

          </div>

      );
  };

  export default Weekly;


