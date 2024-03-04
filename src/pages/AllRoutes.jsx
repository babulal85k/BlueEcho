import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Logout } from './Login/Login';
import Register from './Register/Register'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/" component={Register} />
    </Routes>
  );
};

export default AllRoutes;
