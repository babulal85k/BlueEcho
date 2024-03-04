import React from 'react';
// import Dashboard from './pages/Dashboard/Dashboard'
import { AuthContextProvider } from './Context/AuthContext';
// import AllRoutes from './pages/AllRoutes';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <AuthContextProvider>
      <Home />
    </AuthContextProvider>
  );
};

export default App;