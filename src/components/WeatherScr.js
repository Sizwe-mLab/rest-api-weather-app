import { useEffect, useState,} from 'react';
import { useNavigate } from "react-router-dom";

import './Weather.css';
import search_icon from '../assests/search.png';
import sunny from '../assests/sunny-weather.jpg';
import humidity from '../assests/humidity.png';
import wind from '../assests/wind.png';

const WeatherScr = () => {
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Pretoria');

  const search = async (location) => {
    const appId = "a0580ecd47ebbb66a743ce57ba2ee19f";

    if (!appId) {
      console.error('VITE_APP_ID is not defined');
      return;
    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appId}&units=metric`);

      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
        console.log('API response:', data);
      } else {
        console.error('API error:', data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    search(city);
  }, [city]);

  const handleSubmit = () =>{
    navigate ("/Weekly")
  }

  return (
    <div className="weather">
      <h1>Weather Application</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <img className='search' src={search_icon} alt="search icon" onClick={() => search(city)} />
      </div>
      <img src={sunny} alt="sunny weather" className='weather-icon' />
      <p className='temperature'>{weatherData ? `${weatherData.main.temp}°C` : 'N/A'}</p>
      <p className='location'>{city}</p>
      <div className='weather-data'>
        <div className='col'>
          <img src={humidity} alt="humidity" />
          <div>
            <p>{weatherData ? `${weatherData.main.humidity}%` : 'N/A'}</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className='col'>
          <img src={wind} alt="wind speed" />
          <div>
            <p>{weatherData ? `${weatherData.wind.speed} km/h` : 'N/A'}</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>



    <div>

      <button className='btn' onClick={handleSubmit}>Weekly Data</button>
    </div>

    </div>
  );
};

export default WeatherScr;
