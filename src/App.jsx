import React from 'react';
// import Dashboard from './pages/Dashboard/Dashboard'
import { AuthContextProvider } from './context/AuthContext';
import AllRoutes from './pages/AllRoutes';

const App = () => {
  return (
    <AuthContextProvider>
      <AllRoutes />
    </AuthContextProvider>
  );
};

export default App;