import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="pattern-diagonal-lines-sm bg-gray-900 text-white p-8">
            <div className="footer">
                <div className="footer-container">
                    {/* القسم العلوي */}
                    <div className="footer-top">
                        <h1 className="logo"><FontAwesomeIcon icon={faFilm} className="icon" />Movflix</h1>
                        <ul className="footer-menu">
                            <li>HOME</li>
                            <li>MOVIE</li>
                            <li>TV SHOW</li>
                            <li>Pepole</li>
                            <li>About</li>
                        </ul>

                    </div>

                    <hr />

                    {/* القسم السفلي */}
                    <div className="footer-bottom">
                        <div className="links">
                            <a href="#">FAQ</a>
                            <a href="#">HELP CENTER</a>
                            <a href="#">TERMS OF USE</a>
                            <a href="#">PRIVACY</a>
                        </div>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                <FaTiktok />
                            </a>

                        </div>
                    </div>

                    <div className="footer-copyright">

                        <p>Copyright © 2024 All Rights Reserved, Share By HTML Template</p>

                        <div className="payment-methods">
                            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
                            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
                            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" />
                            <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" />
                            <img src="https://img.icons8.com/color/48/000000/bitcoin.png" alt="Bitcoin" />

                        </div>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;

