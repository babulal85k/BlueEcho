import React, { useState } from 'react';
import AuthService from '../../services/AuthService'; // Assuming AuthService is in a file named 'AuthService.js'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Logout = () => {
    const handleLogout = () => {
      AuthService.logout();
      // Redirect to login page
      window.location.href = '/login';
    };
  
    return (
      <>
        <div>
          <h2>Logout</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </>
    );
  };

  export default Logout;