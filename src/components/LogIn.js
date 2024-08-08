import React, { useState } from 'react';
import './LogIn.css';
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../App';
import { useContext } from 'react';




const LogIn = () => {
    const navigate = useNavigate();
    const {setAuth} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {

        let user = JSON.parse(localStorage.getItem('users')) || [];
        let userpassword = user[0].password;
        let userName = user[0].username;
        let errors = {};



        if (!formData.username) {
            errors.username = "Username is required";
        }else if(formData.username !== userName ){
            errors.username="User not found";
        } 

        if (!formData.password) {
            errors.password = "Password is required";
        }else if(formData.password !== userpassword){
            errors.password = "Wrong Password ";
        }
        

        setErrors(errors);
        return( Object.keys(errors).length === 0) 

    };

    const handleSubmit = () => {
        if (validateForm()) {
            let users =JSON.parse(localStorage.getItem('user')) || [];
            users.push(formData);
            console.log("localStorage user:", users);
            const user = users.find(u => u.username === formData.username && u.password);
            console.log("user found,user");
            if(user) {
                setAuth(formData.username);
                localStorage.setItem('auth',formData.username);
                navigate('/WeatherScr');
            }else{
                setErrors({general:"Invalied Username or Password"});
            }
           
        }else{
            console.log("Form did not validate");
        }
    };

 

    return (
        <div className="heading">
            <h1>Hello, Please Log In For Easy Access</h1>
            <br />
            <div>
                <p>UserName</p>
                <input
                    className='input'
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p className="error">{errors.username}</p>}

                <p>PassWord</p>
                <input
                    className='input'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
                {errors.general && <p className='error'>{errors.general}</p>}

                <div className='buttons'>

                    <button className='btn' onClick={handleSubmit}>Log In</button> <hr></hr>
                </div>
                

            </div>
        </div>
    );
}

export default LogIn;
