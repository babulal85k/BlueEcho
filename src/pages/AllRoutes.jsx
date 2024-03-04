import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Login from './Login/Login';
import Logout from './Login/Logout';
import Cart from './Cart/Cart';
import Home from './Home/Home';
import Register from './Register/Register';
import Whislist from './Whislist/Whislist';

const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Outlet />}> {/* Parent route */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/whislist' element={<Whislist />} />
        </Route>
      </Routes>
  );
};

export default AllRoutes;
