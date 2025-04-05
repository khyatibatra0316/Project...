import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginForm.css';

function Login() {
 

  function handleClick(e) {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }
    navigate('/home');
  }

  return (
    <div className='wrapper'>
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input 
            type='text' 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-box">
          <input 
            type='password' 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <button onClick={handleClick}>Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;