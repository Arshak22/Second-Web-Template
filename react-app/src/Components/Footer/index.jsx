import React from "react";
import "./style.css";
import Payments from "../../assets/images/payments.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import {FaAngleRight} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="row center">
                <div className="col col7">
                    <h5>Get in Touch</h5>
                    <p className="contactText">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                    <p className="info"><FaMapMarkerAlt className="infoIcon"/>123 Street, New York, USA</p>
                    <p className="info"><FaEnvelope className="infoIcon"/>mail@domain.com</p>
                    <p className="info"><FaPhoneAlt className="infoIcon"/>+012 345 67890</p>
                </div>
                <div className="col col8">
                    <h5>Quick Shop</h5>
                    <ul>
                        <li><FaAngleRight className="listArrow"/>Home</li>
                        <li><FaAngleRight className="listArrow"/>Our Shop</li>
                        <li><FaAngleRight className="listArrow"/>Shop Detail</li>
                        <li><FaAngleRight className="listArrow"/>Shoping Cart</li>
                        <li><FaAngleRight className="listArrow"/>Checkout</li>
                        <li><FaAngleRight className="listArrow"/>Contact Us</li>
                    </ul>
                </div>
                <div className="col col8">
                <h5>My Account</h5>
                    <ul>
                        <li><FaAngleRight className="listArrow"/>Home</li>
                        <li><FaAngleRight className="listArrow"/>Our Shop</li>
                        <li><FaAngleRight className="listArrow"/>Shop Detail</li>
                        <li><FaAngleRight className="listArrow"/>Shoping Cart</li>
                        <li><FaAngleRight className="listArrow"/>Checkout</li>
                        <li><FaAngleRight className="listArrow"/>Contact Us</li>
                    </ul>
                </div>
                <div className="col col8">
                    <h5>NewsLetter</h5>
                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <div className="signUp">
                        <input type="email" name="email" placeholder="Your Email Address"/>
                        <button>Sign Up</button>
                    </div>
                    <h6>Follow Us</h6>
                    <div className="socialIcons">
                        <FaTwitter className="socialIcon"/>
                        <FaFacebookF className="socialIcon"/>
                        <FaLinkedinIn className="socialIcon"/>
                        <FaInstagram className="socialIcon"/>
                    </div>
                </div>
            </div>
            <div className="row topLine">
                <div className="col col1">
                    <p>© <span>Domain</span>. All Rights Reserved. Designed by <span>HTML Codex</span></p>
                </div>
                <div className="col col1 rightCol">
                    <img src={Payments} alt="Payments" />
                </div>
            </div>
        </div>
    );
}