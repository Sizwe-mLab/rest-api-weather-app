import React, {useState, useEffect} from 'react';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './Hourlyforecast';
import DailyForecast from './Dailyforecast';
import './Home.css';


const Home = () =>{
    const api = {
        key: 'b1e1d660348fd1a49f685e5d062e6269',
       base: "https://api.openweathermap.org/data/2.5/",
     }

     const [Location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState(null);
  const [ForecastData, setForecastData] =useState(null);

  const handleLocationChange = (event) =>{
    setLocation(event.target.value);
  };
  const handleSearch = () => {   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=metric&appid=b1e1d660348fd1a49f685e5d062e6269`)
      .then(response => response.json())
      .then(data => setWeatherData(data));

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Location}&units=metric&appid=b1e1d660348fd1a49f685e5d062e6269`)
      .then(response => response.json())
      .then(data => setForecastData(data));
  };

    
  return (
    
      <div className="App">
        
        <h1>Weather Forecast</h1>
        
        <input
          type="text"
          
          onChange={handleLocationChange}
          placeholder="Enter your location"
        />
        <button className='search-btn' onClick={handleSearch}>Search</button>
        {weatherData && (
          <div>
            <CurrentWeather weatherData={weatherData} />
            <HourlyForecast forecastData={ForecastData} />
            <DailyForecast forecastData={ForecastData} />
          </div>
        )}
      </div>
    );
  }

  export default Home;

























