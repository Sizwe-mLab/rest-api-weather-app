import React  from 'react';
import {link} from 'react-router-dom';
import './Landing.css';

 const Landingpage =  () =>  {
     
    return (
        <div className='Landingpage-container'>
            <h1>Welcome to Weather Focarest App</h1>
            <p>Get the most fun weather app</p>
            <link to='/Signup'>
            <button className='Signup-btn'>Signup</button>
            </link>
            <link to='/Login'>
            <button className='login-btn'></button>

            </link>

        </div>
    )
 }

 export default Landingpage;