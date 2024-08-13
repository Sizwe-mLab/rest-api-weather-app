import React, { useState, useEffect } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Hourlyforecast from '../components/Hourlyforecast';
import Dailyforecast from '../components/Dailyforecast';
import './Home.css';

const Home = () => {
  const api = {
    key: 'b1e1d660348fd1a49f685e5d062e6269',
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [Location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [ForecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric');

  useEffect(() => {
    
    const savedWeatherData = localStorage.getItem('weatherData');
    const savedForecastData = localStorage.getItem('forecastData');
    const savedUnit = localStorage.getItem('unit');
    
    if (savedWeatherData) {
      setWeatherData(JSON.parse(savedWeatherData));
    }
    if (savedForecastData) {
      setForecastData(JSON.parse(savedForecastData));
    }
    if (savedUnit) {
      setUnit(savedUnit);
    }
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=${unit}&appid=${api.key}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        localStorage.setItem('weatherData', JSON.stringify(data)); 
      });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Location}&units=${unit}&appid=${api.key}`)
      .then(response => response.json())
      .then(data => {
        setForecastData(data);
        localStorage.setItem('forecastData', JSON.stringify(data)); 
      });
  };

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${api.key}`)
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data);
            localStorage.setItem('weatherData', JSON.stringify(data)); 
          });

        fetch(`${api.base}forecast?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${api.key}`)
          .then((response) => response.json())
          .then((data) => {
            setForecastData(data);
            localStorage.setItem('forecastData', JSON.stringify(data));
          });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  const handleUnitChange = (event) => {
    const newUnit = event.target.value;
    setUnit(newUnit);
    localStorage.setItem('unit', newUnit);
    if (Location) {
      handleSearch();
    } else {
      handleDetectLocation();
    }
  };


  return (
    <div className="Home-container">
      <h1>Weather Forecast</h1>
      <div className='weather'>
        <input
          type="text"
          onChange={handleLocationChange}
          placeholder="Enter your location"
        />
        <button className='search-btn' onClick={handleSearch}>Search</button>
        <button className="detect-btn" onClick={handleDetectLocation}> Detect My Location</button>

        <select value={unit} onChange={handleUnitChange} className="unit-selector">
          <option value="metric">Celsius (°C)</option>
          <option value="imperial">Fahrenheit (°F)</option>
        </select>

        {weatherData && (
          <div className='data'>
            <div className='table-t'>
              <div className='table-data'>
                <div><CurrentWeather weatherData={weatherData} /></div>
                <div><Hourlyforecast forecastData={ForecastData} /></div>
                <div><Dailyforecast forecastData={ForecastData} /></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

























