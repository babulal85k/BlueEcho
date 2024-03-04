import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { Login, Logout } from './Login/Login';
import Register from './Register/Register';
import Cart from './Cart/Cart';
import Home from './Home/Home';

const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Outlet />}> {/* Parent route */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
  );
};

export default AllRoutes;
