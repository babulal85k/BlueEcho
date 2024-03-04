import React, { createContext, useState } from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  const login = (username, password) => {
    const isAuthenticated = AuthService.login(username, password);
    if (isAuthenticated) {
      const currentUser = AuthService.getCurrentUser();
      setUser(currentUser);
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };


  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
