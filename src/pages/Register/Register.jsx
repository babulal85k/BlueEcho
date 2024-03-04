import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await AuthService.signup(username, password);
      history.push('/login'); // Redirect using React Router
    } catch (err) {
      setError('Failed to sign up. Please try again.');
    }
  };

  const clearError = () => {
    setError('');
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              clearError(); // Clear error on input change
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearError(); // Clear error on input change
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              clearError(); // Clear error on input change
            }}
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <Footer />
    </>
  );
};

export default Register;
