import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/Login', {
        username,
        password,
      });
      alert('User Login successfully.');
      setUsername('');
      setPassword('');
      navigate('/Home');
      localStorage.setItem("username",username);
      window.location.pathname="/Home"
    }
     catch (error) {
      console.error('Error Login:', error);
      alert('User Not found.');
    }
  };
 

  return (
    <div >
      <h1>Login</h1>
      <form onSubmit={handleLogin} method='post'>
      <label >Name</label>
       <input
          type="text"
          placeholder="Username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
