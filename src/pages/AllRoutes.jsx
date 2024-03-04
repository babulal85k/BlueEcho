import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Login from './Login/Login';
import Logout from './Login/Logout';
import Cart from './Cart/Cart';
import Home from './Home/Home';
import Whislist from './Whislist/Whislist';
import ProductPage from './Product/Product';
import Search from '../components/Search/Search';

const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Outlet />}> {/* Parent route */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path='/whislist' element={<Whislist />} />
          <Route path="/products/:category" element={<ProductPage />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
  );
};

export default AllRoutes;
