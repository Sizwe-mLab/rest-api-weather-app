import React, { useState } from 'react';
import './Login.css';
import bcrypt from 'bcryptjs';
import { Link} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
          const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
          const hashedPassword = bcrypt.hashSync(password, 10);
          console.log(password)
          const user = storedUsers.find(
            (user) => user.username === username && bcrypt.compareSync(password, user.password)
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
                <label className='username'>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}  
                />
                <br />
                <label className='password'>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                {error && <p className='error'>{error}</p>}
                <div >
                    <button className="login-btnn" type="submit">Login</button>
                    <p><Link  className='sign-link'to="/signup">Signup</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;