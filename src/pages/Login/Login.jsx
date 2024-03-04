 import React, { useState } from 'react';
import AuthService from '../../services/AuthService'; // Assuming AuthService is in a file named 'AuthService.js'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const isAuthenticated = AuthService.login(username, password);
    if (isAuthenticated) {
      // Redirect to dashboard or any other page
      window.location.href = '/home/home';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Navbar />
      <div className='login-container'>
        <h1 className='login-title'>Login</h1>
        <label className='label-user' htmlFor="login-user">EMAIL</label>
        <input
          id='login-user'
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label className='label-pass' htmlFor="login-pass">PASSWORD <span className='login-span'>Forgot Password?</span></label>
        <input
          id='login-pass'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button id='login-btn' onClick={handleLogin}>SIGN IN</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <div className="login-link">
        <Link to='/register' ><p className='register'>Create account</p></Link>
      </div>
      <Footer />
    </>
  );
};


export default Login;