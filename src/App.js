import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import WeatherScr from './components/WeatherScr';
import Registration from './components/Registration';
import { createContext , useState } from 'react';

export const AuthContext = createContext();


function App() {
    const [auth, setAuth] = useState(localStorage.getItem('auth') || null);

    const PrivateRoute = ({ element }) => {
        return auth ? element : <Navigate to="/login" />;
    };
        
    return (
        <AuthContext.Provider value={{auth,setAuth}}>
           
            <BrowserRouter>
                <Routes>
                <Route index element={<Registration />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/WeatherSrc" element={<PrivateRoute element={<WeatherScr />} />} />
                </Routes>
            </BrowserRouter>
            </AuthContext.Provider>
    );
}

export default App;


