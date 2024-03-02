import React, { cloneElement } from 'react';

const Navigation = ({children}) => {
    return (
        <>
            <div style={{display: 'flex', gap: '2%', justifyContent: 'space-around', margin: '1% 0 1%'}} className='navigation-container'>
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
            <div style={{display: 'flex', width: '100%', justifyContent: 'center', marginTop: '1%'}} className="clearance">
                <button className="clear">CLEARANCE</button>
            </div>
            <div style={{width:'100%', backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', padding: '1px', marginTop: '1%'}} className="adv">
                <p>Free</p>
            </div>
        </>
    )
}

export default Navigation;