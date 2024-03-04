import React, { useState } from 'react';
import AuthService from '../../services/AuthService'; // Assuming AuthService is in a file named 'AuthService.js'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Logout from './Logout';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const isAuthenticated = AuthService.login(username, password);
    if (isAuthenticated) {
      // Redirect to dashboard or any other page
      window.location.href = '/src/pages/Home/Home.jsx';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Logout />
      </div>
      <Footer />
    </>
  );
};



export default Login;
