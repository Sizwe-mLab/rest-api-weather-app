import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import WeatherScr from "./components/WeatherScr";
import Registration from "./components/Registration";
import Weekly from "./components/Weekly";
import Hourly from "./components/Hourly";
import { createContext, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import Navbar from "./components/Navbar";
import background from "./assests/background.jpg";

export const AuthContext = createContext();

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("auth") || null);

  const PrivateRoute = ({ element }) => {
    return auth ? element : <Navigate to="/login" />;
  };

  return (


    <AuthContext.Provider value={{ auth, setAuth }}>
       
      


        <div         
   
        
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", 
          width: "100%",
          position: "absolute", 
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, 
        }}
      ></div>


<div style={{ position: "relative", zIndex: 1 }}>

<Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Registration />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/WeatherScr"
            element={<PrivateRoute element={<WeatherScr />} />}
          />
          <Route path="Weekly" element={<Weekly />} />
          <Route
            path="/hourly/:day"
            element={<PrivateRoute element={<Hourly />} />}
          />

          <Route path="/registration" element={<Registration />} />
          <Route path="/ButtonComponent" element={<ButtonComponent />} />
        </Routes>
      </BrowserRouter>
      </div>
    </AuthContext.Provider>

      
  );
}

export default App;
