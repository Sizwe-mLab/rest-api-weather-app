
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route ,Link, Navigate} from 'react-router-dom';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/Hourlyforecast';
import DailyForecast from './components/Dailyforecast';
import Landingpage from './pages/Landingpage.js';
import Home from './pages/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';


 

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsAuthenticated(true);
      console.log(loggedInUser)
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="App">
      
      {isAuthenticated && (
        <nav>
          <ul className='nav-menu'>
            <li><Link  className='home'to="/Home">Home</Link></li>
            <li><button className= 'Logout-btn'onClick={handleLogout}>Logout</button></li>
            
          </ul>
        </nav>
      )}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/Home" /> : <Landingpage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />

          
          
        </Routes>
      </div>
    </Router>
  );
}

    


  
export default App;
