import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') || '');

  const login = (username) => {
    setLoggedInUser(username);
    localStorage.setItem('loggedInUser', username);
  };

  const logout = () => {
    setLoggedInUser('');
    localStorage.removeItem('loggedInUser');
  };

  const isAuthenticated = () => !!loggedInUser;

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
