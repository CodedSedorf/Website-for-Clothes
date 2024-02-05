import React from 'react';
import './Footer.css'
import Logo from "../Asset/logo_e-commerce-no-bg.png"
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Logo} alt="" />
            {/* <p>SEDORF E-COMMERCE</p> */}
        </div>
        <div className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </div>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <IoLogoWhatsapp />
            </div>
            <div className="footer-icons-container">
                <FaInstagram />
            </div>
            <div className="footer-icons-container">
                <FaFacebook />
            </div>
            <div className="footer-icons-container">
                <FaLinkedin />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer