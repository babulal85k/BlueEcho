import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { user } = useAuth(); // Assuming you have a useAuth hook to get the user's authentication status

    // If authenticated, render the child components
    // If not, redirect to the login page
    return user ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;