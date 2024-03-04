import React from 'react';
import './Navigation.css';

const Navigation = ({children}) => {
    return (
        <>
            <div className='navigation-container'>
                <div>
                    <button className="clothing">CLOTHING</button>
                </div>
                <div>
                    <button className='shoes'>SHOES</button>
                </div>
                <div>
                    <button className="handbags">HANDBAGS</button>
                </div>
                <div>
                    <button className="designer">DESIGNER</button>
                </div>
                <div>
                    <button className="sunglasses">SUNGLASSES</button>
                </div>
                <div>
                    <button className="jewelry">JWELERY & WATCHES</button>
                </div>
                <div>
                    <button className="accessories">ACCESSORIES</button>
                </div>
                <div>
                    <button className="home">HOME</button>
                </div>
                <div>
                    <button className='under'>UNDER $ 50</button>
                </div>
            </div>
            <div className="clearance">
                <button className="clear">CLEARANCE</button>
            </div>
            <div className="adv">
                <p>Free</p>
            </div>
        </>
    )
}

export default Navigation;