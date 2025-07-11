import React, { useState } from 'react';
import axios from 'axios';

function Signup2() {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/signup', {
        username,
       password        
      });
      alert('User signed up successfully.');
      setUsername('');
     setpassword('');
    } 
    catch (error) {
        alert('An error occurred.');
    }
  };

  return (
    <div >
<h1>Sign Up</h1>
      <form onSubmit={handleSignup} method='post'>
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

<button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup2;
