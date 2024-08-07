import { useEffect,useState } from 'react'
import React from 'react'
import './Weather.css'
import search_icon from '../assests/search.png'
import sunny from '../assests/sunny-weather.jpg'
import humidity from '../assests/humidity.png'
import wind from '../assests/wind.png'

const WeatherScr = () =>{

  const [weatherData, setWeatherData] = useState(false);

  const search = async (city)=>{
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

    } catch (error){

    }
  }

  useEffect(()=>{
    search("Pretoria");
  },[])



  return(
    <div className="weather">
      <h1>Weather Application</h1>
      <div className="search-bar">
        <input type="text" placeholder="search"/>
        {/* <img src ={search_icon} /> */}
      </div>
      <img src={sunny}alt="" className='weather-icon'/>
      <p className='temperature'>16*c</p>
      <p className='location' >Pretoria</p>
      <div className='weather-data'>
        <div className='col'>
          <img src={humidity} alt=""/>
          <div>
            <p>91%</p>
            <span>humidity</span>
          </div>
        </div>

        <div className='col'>
          <img src={wind} alt=""/>
          <div>
            <p>5.2km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>

      </div>

    </div>

  )
}
export default WeatherScr