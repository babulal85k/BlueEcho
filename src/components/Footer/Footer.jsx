import React, { useState } from "react";
import './Footer.css';


const Footer = () => {
    const [AboutMenuOpen, setAboutMenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [email, setEmail] = useState('');

    const border1 = { border : 'solid 2px red'}
        
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleAboutMenu = () => {
        setAboutMenuOpen(!AboutMenuOpen);
    }

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        
        // Here you can perform any validation or additional logic before submitting the form
        if (email.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        // Submit the form data
        alert('Submitting form with email :- ' + email);

        // You can also reset the form fields after submission if needed
        setEmail('');
    };

    return (
        <>
            <div  className="footer-container">
                <div className="footerCard">
                    <div  className="footer-faq">
                        <div className="title">
                            <button onClick={toggleAboutMenu} className="aboutus">
                                <p className="textAbout">ABOUT US</p>
                            </button>
                            <div  className="menu"  id="menu">
                                <ul className="list" >
                                    <li className="aboutText">Contact Us</li>
                                    <li className="aboutText">Frequently Asked Questions</li>
                                    <li className="aboutText">Shipping & Returns</li>
                                    <li className="aboutText">Pre-Owned Guide</li>
                                    <li className="aboutText">Sell on Bluefly</li>
                                </ul>
                                <ul className="list2" >
                                    <li className="aboutText">Privacy Policy</li>
                                    <li className="aboutText">Terms & Conditions</li>
                                    <li className="aboutText">Do not sell my personal information</li>
                                    <li className="aboutText">Shop Pay Installments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div  className="signUp">
                        <button onClick={toggleMenu} className="signupButton">
                            <p className="textAbout">SIGN UP AND SAVE</p>
                        </button>
                        <div  className="menu1">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Subscribe to get exclusive offers on designer brands</label>
                                <br />
                                <input type="email" name="" id="email" placeholder="Enter your email" value={email} onChange={handleInputChange} required />
                                <br />
                                <input type="submit" value="Subscribe"  id="subscribe"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div  className="copywrite">
                    <img className="logo-footer" src="https://www.bluefly.com/cdn/shop/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" alt="" />
                    <p className="copywrite-text">© 2024 Bluefly BLUEFLY.COM OR ITS AFFILIATES  ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;