import React, { useState } from 'react';
import AuthService from '../../services/AuthService'; // Assuming AuthService is in a file named 'AuthService.js'

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
    </div>
  );
};

const Logout = () => {
  const handleLogout = () => {
    AuthService.logout();
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export { Login, Logout };
