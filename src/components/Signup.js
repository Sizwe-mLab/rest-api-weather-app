import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { Link} from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
          const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
          const existingUser = storedUsers.find((user) => user.username === username);
      
          if (existingUser) {
            setError('Username already exists');
          } else {
            bcrypt.hash(password, 10, (err, hashedPassword) => {
              if (err) {
                setError('Error hashing password');
              } else {
                storedUsers.push({ username, password: hashedPassword });
                localStorage.setItem('users', JSON.stringify(storedUsers));
                alert('Registration Successful');
                setError('');
                navigate('/login');
              }
            });
          }
        } else {
          setError('Please enter both username and password');
        }
      };

    return (
        <div className='register-container'>
            <h2>Signup</h2>
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
                <div className="signup-btnn">
                    <button className="signup-btn" type="submit">Signup</button>
                    <p><Link to="/login">Login</Link></p>
                    
                </div>
            </form>
        </div>
    );
};

export default Register;