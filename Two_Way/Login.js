import React, { useState } from 'react';
import axios from 'axios';


function Login2() {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/login', {
      username,
       password        
      });
      alert('User Log in successfully.');
      setUsername('');
     setpassword('');
    } 
    catch (error) {
        alert('Log in Failed.');
    }
  };

  return (
    <div >
<h1>Login</h1>
      <form onSubmit={handleLogin} method='post'>
      <label >Name</label>
<input
          type="text"
          value={username} 
          required
          onChange={(e) => setUsername(e.target.value)}
        />
<label>Password</label>
<input
          type="password"
          value={password} 
          required
          onChange={(e) => setpassword(e.target.value)}
        />

<button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login2;
