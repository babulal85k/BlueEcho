import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const isSignedUp = AuthService.signup(username, password);
    if (isSignedUp) {
      // Redirect to login page or any other page
      window.location.href = '/login';
    } else {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignup}>Sign Up</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Register;
