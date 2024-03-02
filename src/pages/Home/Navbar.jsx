import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div  style={{display: 'flex', flexDirection: 'row' , width: '100%', justifyContent: 'space-evenly', border: 'solid 2px red'}} className='navbar-container'>
                    <div style={{border: 'solid 2px red'}} className='logo'>Logo</div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '10px', border: 'solid 2px red'}} className='userContainer'>
                        <div id="user">
                            User
                        </div>
                        <div className='search-container'>
                            Search
                        </div>
                        <div className="whislist">
                            Whislist
                        </div>
                        <div className="cart">
                            Cart
                        </div>
                    </div>
                </div>
            </nav>
            <Navigation />
        </>
    );
};

export default Navbar;