import React, {useState} from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Hourlyforecast from '../components/Hourlyforecast';
import Dailyforecast from '../components/Dailyforecast';
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

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
          .then((response) => response.json())
          .then((data) => setWeatherData(data));

        fetch(`${api.base}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
          .then((response) => response.json())
          .then((data) => setForecastData(data));
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

    
  return (
    
      <div className="Home-container" >
        <h1>Weather Forecast</h1>
      <div className='weather'>
        <input
          type="text"
          
          onChange={handleLocationChange}
          placeholder="Enter your location"
        />
        
        <button className='search-btn' onClick={handleSearch}>Search</button>
        <button className="detect-btn" onClick={handleDetectLocation}> Detect My Location</button>
        {weatherData && (
          <div className='data'>
            <div className='table-t'>
   
    <div className='table-data'>
        <div><CurrentWeather weatherData={weatherData} /></div>

        <div><Hourlyforecast forecastData={ForecastData} /> </div>

        <div><Dailyforecast forecastData={ForecastData} /> </div>
            
            
    </div>
</div>
           
          </div>
          
        )}
      </div>
        
      </div>
    );
  }

  export default Home;

























