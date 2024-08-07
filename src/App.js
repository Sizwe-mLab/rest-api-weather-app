
import './App.css';
import React, {useState} from 'react';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/Hourlyforecast';
import DailyForecast from './components/Dailyforecast';
//import Login from './components/Login.js';
//import Signup from './components/Sign.js';


  const api = {
   key: 'b1e1d660348fd1a49f685e5d062e6269',
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  

  const [Location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState(null);
  const [ForecastData, setForecastData] =useState(null);

  const handleLocationChange = (event) =>{
    setLocation(event.target.value);
  };
  const handleSearch = () => {
    // Call the weather API with the user's location
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=metric&appid=b1e1d660348fd1a49f685e5d062e6269`)
      .then(response => response.json())
      .then(data => setWeatherData(data));

    // Call the forecast API with the user's location
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Location}&units=metric&appid=b1e1d660348fd1a49f685e5d062e6269`)
      .then(response => response.json())
      .then(data => setForecastData(data));
  };
  //const searchPressed = () =>{
   //fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=b1e1d660348fd1a49f685e5d062e6269')
    //.then((response)=>response.json())
    //.then((result) => {
     //setWeather(result);
    //}
   //)

    
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
export default App;
