import React  from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

 const Landingpage =  () =>  {
     
    return (
        <div className='Landingpage-container'>
            <h1>Welcome to Weather Forecast App</h1>
            <p>Get the most fun weather app</p>
            <Link to='/Signup'>
            <button className='Landing-btn'>Signup</button>
            </Link>
            <Link to='/Login'>
            <button className='Landing-btn'>Login</button>

            </Link>

        </div>
    )
 }

 export default Landingpage;