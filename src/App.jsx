import React from 'react';
// import Dashboard from './pages/Dashboard/Dashboard'
import { AuthProvider } from './Context/AuthContext';
import Navbar from './pages/Home/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Footer />
    </AuthProvider>
  );
};

export default App;
