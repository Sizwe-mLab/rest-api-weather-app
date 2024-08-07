import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import WeatherScr from './components/WeatherScr';
import './index.css';
import Registration from './components/Registration';
import { createContext,useState } from 'react';
import LogIn from './components/LogIn';

export const AuthContext = createContext();


function App() {
  return (
    

    <BrowserRouter>
    <Routes>
    <Route index element={<Registration />} />
    <Route path="/logIn" element={<LogIn />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/WeatherScr" element={<WeatherScr />} />


    </Routes>


    </BrowserRouter>


  );
}

export default App;
