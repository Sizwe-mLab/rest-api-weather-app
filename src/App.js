
import './App.css';
import React, {useState} from 'react';

const api = {
    key: 'b1e1d660348fd1a49f685e5d062e6269',
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {

  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({});
  const searchPressed = () =>{
  // fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=b1e1d660348fd1a49f685e5d062e6269')
    //.then((response)=>response.json())
    //.then((result) => {
     //console.log(result);
    //}
   //)

    
  return (
    <div className="App">
      <header className='heading'>
      <h1>Weather Forecast</h1>
     {/*Search */}
     <div>

     <input type="text" placeholder='Enter City/Town'  onChange={(e) => setSearch(e.target.value)}/> 
     <button onClick={searchPressed}> Search</button>


     </div>
     <div className="list-items">
     

     </div>
     
     
    
      {/*Location*/}
     <p>{weather.name}</p>

     {/*Temperature*/}
     <p>{weather.main.temp}</p>

      {/*Conditon*/}
      <p>{weather.main[0].main}</p>

      </header>
      </div>
  );
}
}

export default App;
