
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route ,Link, Navigate} from 'react-router-dom';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/Hourlyforecast';
import DailyForecast from './components/Dailyforecast';
import Landingpage from './components/pages/Landingpage';
import Home from './components/pages/Home';
import Login from './components/Login.js';
import Signup from './components/Signup.js';


 

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsAuthenticated(true);
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
            <li><Link to="/Signup">Sign Up</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Home">Home</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
            
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
