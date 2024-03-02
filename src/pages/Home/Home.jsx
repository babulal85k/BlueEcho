import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='logo'>
        <Link>
          <img src="//www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141" alt="" />
        </Link>
      </div>
      <Navbar />
      {/* Add your home page content here */}
    </div>
  );
};

export default Home; // Make sure to export the component as default
