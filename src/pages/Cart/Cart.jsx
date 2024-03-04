import React, { useState } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <>
            <Navbar />
            <div>
                <h2>Cart</h2>
                <div>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart;