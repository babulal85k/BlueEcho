import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import LoginForm from '../Login/Login';
import RegisterForm from '../Register/Register';

const Dashboard = () => {
  const { isLoggedin, setIsLoggedin } = useAuth();

  const login = (e) => {
    e.preventDefault();
    setIsLoggedin(true);
  };

  const logout = (e) => {
    e.preventDefault();
    setIsLoggedin(false);
  };

  const style = { color: 'white', backgroundColor: 'blue', padding: '10px 5px', borderRadius: '10%', fontSize: '16px' };

  return (
    <div>
      {isLoggedin ? (
        <div>
          <h2>Welcome to the Dashboard</h2>
          <button style={style} onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login or Register</h2>
          <div>
            <LoginForm />
            <RegisterForm />
          </div>
          <button style={style} onClick={login}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
