import React from "react";

const Footer = () => {

    return (
        <>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#E6E6E6'}} className="footer-container">
                <div className="footerCard">
                    <div className="footer-faq">
                        <div className="title">
                            <button className="aboutus">ABOUT US</button>
                        </div>
                        <div className="menu">
                            <p>Contact Us</p>
                            <p>Frequently Asked Questions</p>
                            <p>Shipping & Returns</p>
                            <p>Pre-Owned Guide</p>
                            <p>Sell on Bluefly</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Do not sell my personal information</p>
                            <p>Shop Pay Installments</p>
                        </div>
                    </div>
                    <div className="signUp">
                        <button className="signupButton">SIGN UP AND SAVE</button>
                    </div>
                    <div className="menu">
                        <form action="submit">
                            <label htmlFor="email">Subscribe to get exclusive offers on designer brands</label>
                            <br />
                            <input type="email" name="" id="email" placeholder="Enter your email" />
                            <br />
                            <input type="button" value="Subscribe" />
                        </form>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="copywrite">
                    <img style={{width: '220px'}} src="https://www.bluefly.com/cdn/shop/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" alt="" />
                    <p>
        © 2024 Bluefly
        
          BLUEFLY.COM OR ITS AFFILIATES  ALL RIGHTS RESERVED.
        
      </p>
                </div>
            </div>
        </>
    )
}

export default Footer;