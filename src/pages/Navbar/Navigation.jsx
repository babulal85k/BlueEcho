import React from 'react';
import './Navigation.css';
import FilteredProducts from '../filter/FilteredProducts'

const Navigation = ({children}) => {
    return (
        <>
            <div className='navigation-container'>
                <div className="clothing">
                    <FilteredProducts   category="electronics" buttonText="Electronics" />
                </div>
                <div className='jewelery'>
                    <FilteredProducts category="jewelery" buttonText="Jewelery" />
                </div>
                <div className='men'>
                    <FilteredProducts category="men clothing" buttonText="Men's Clothing" />
                </div>
                <div className='women'>
                    <FilteredProducts category="women clothing" buttonText="Women's Clothing" />
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