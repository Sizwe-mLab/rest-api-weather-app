import React, { useState, useEffect } from 'react';
import './login.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            alert('You are already logged in');
            window.location.href = '/home'; 
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            const hashedPassword = btoa(password); 
            const user = storedUsers.find(
                (user) => user.username === username && user.password === hashedPassword
            );

            if (user) {
                localStorage.setItem('loggedInUser', username);
                alert('Login Successful');
                setError('');
                window.location.href = '/home'; 
            } else {
                setError('Invalid username or password');
            }
        } else {
            setError('Please enter both username and password');
        }
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}  
                />
                <br />
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                {error && <p className='error'>{error}</p>}
                <div className="login-btnn">
                    <button className="login-btn" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;