import React from "react";
import './style.css';
import { useState } from "react";
import FirstSubHeader from "../FirstSubHeader/indes";
import MultiShop from "../../assets/images/MultiShop.jpg";
import {FiSearch} from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {FaAngleRight} from "react-icons/fa";

export default function Header() {

    const[active1, setActive1] = useState(false);
    const[active3, setActive3] = useState(false);

    const [dropdownElement] = useState([
        {
            title: "My Account",
            content: ["Sign in", "Sign up"]
        },
        {
            title: "USD",
            content: ["EUR", "GBP", "CAD"]
        },
        {
            title: "EN",
            content: ["FR", "AR", "RU"]
        }
    ]);


    const handleActive = () => {
        setActive1(!active1);
    }

    const handleActive2 = () => {
        setActive3(!active3);
    }

    return (
        <div className="Header">
            <div className="row subHeader1">
                <div className="col col1">
                    <nav>
                        <ul className="nav1">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Help</li>
                            <li>FAQs</li>
                        </ul>
                    </nav>
                </div>
                <div className="col col1 rightCol">
                    {dropdownElement.map((elem, index) => {
                        return <FirstSubHeader key={index} title={elem.title} content={elem.content}/>
                    })}
                </div>
            </div>
            <div className="row subHeader2">
                <div className="col col2">
                    <img src={MultiShop} alt="mainLogo" className="mainLogo" ></img>
                </div>
                <div className="col col2">
                    <div className="search">
                        <input type="text" placeholder="Search for products" />
                        <button><FiSearch /></button>
                    </div>
                </div>
                <div className="col col2 rightCol info">
                    <p>Customer Service</p>
                    <h5>+012 345 6789</h5>
                </div>
            </div>
            <div className="row subHeader3">
                <div className="col col2 small">
                    <div className="yellow" onClick={handleActive}>
                        <FaBars />
                        <h3>Categories</h3>
                        <FaAngleDown className="rightIcon" />
                    </div>
                    {active1 ? <div className="drowdownCategories">
                        <button className="dropdownItem subMenu">Dresses <FaAngleRight className="rightIcon2"/></button>
                        <div className="dropdown subMenu">
                            <button className="dropdownItem">Men's Dresses</button>
                            <button className="dropdownItem">Women's Dresses</button>
                            <button className="dropdownItem">Baby's Dresses</button>
                        </div>
                        <button className="dropdownItem">Shirts</button>
                        <button className="dropdownItem">Jeans</button>
                        <button className="dropdownItem">Swimwear</button>
                        <button className="dropdownItem">Sleapwear</button>
                        <button className="dropdownItem">Sportswear</button>
                        <button className="dropdownItem">Jumpsuits</button>
                        <button className="dropdownItem">Blazers</button>
                        <button className="dropdownItem">Jackets</button>
                        <button className="dropdownItem">Shoes</button>
                    </div>: null}
                </div>
                <div className="col col2">
                    <nav>
                        <ul className="nav2">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Shope Detail</li>
                            <li onClick={handleActive2}>Pages <FaAngleDown /> </li>
                            {active3 ? <div className="dropdown2">
                                <button className="dropdownItem">Shopping Cart</button>
                                <button className="dropdownItem">Checkout</button>
                            </div>: null}
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
                <div className="col col2 rightCol">
                    <div className="personalBox">
                        <FaHeart className="personalIcon"/>
                        <span>0</span>
                    </div>
                    <div className="personalBox">
                        <FaShoppingCart className="personalIcon"/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}