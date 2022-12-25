import React from "react";
import './style.css';
import HoverPicture from "../HoverPicture";
import Slider from "../Slider";
import { Categories } from "../Categories";
import { SectionTitle } from "../SectionTitle";
import { Products } from "../Products";
import { VendorCarousel } from "../VendorCarousel";

import Offer1 from "../../assets/images/offer-1.jpg";
import Offer2 from "../../assets/images/offer-2.jpg";

import Carousel1 from "../../assets/images/carousel-1.jpg";
import Carousel2 from "../../assets/images/carousel-2.jpg";
import Carousel3 from "../../assets/images/carousel-3.jpg";

import Category1 from "../../assets/images/category-1.jpg";
import Category2 from "../../assets/images/category-2.jpg";
import Category3 from "../../assets/images/category-3.jpg";
import Category4 from "../../assets/images/category-4.jpg";

import Product1 from "../../assets/images/product-1.jpg";
import Product2 from "../../assets/images/product-2.jpg";
import Product3 from "../../assets/images/product-3.jpg";
import Product4 from "../../assets/images/product-4.jpg";
import Product5 from "../../assets/images/product-5.jpg";
import Product6 from "../../assets/images/product-6.jpg";
import Product7 from "../../assets/images/product-7.jpg";
import Product8 from "../../assets/images/product-8.jpg";

import Vendor1 from "../../assets/images/vendor-1.jpg";
import Vendor2 from "../../assets/images/vendor-2.jpg";
import Vendor3 from "../../assets/images/vendor-3.jpg";
import Vendor4 from "../../assets/images/vendor-4.jpg";
import Vendor5 from "../../assets/images/vendor-5.jpg";
import Vendor6 from "../../assets/images/vendor-6.jpg";
import Vendor7 from "../../assets/images/vendor-7.jpg";
import Vendor8 from "../../assets/images/vendor-8.jpg";

import {FaCheck} from "react-icons/fa";
import {FaShippingFast} from "react-icons/fa";
import {FaExchangeAlt} from "react-icons/fa";
import {FaPhoneVolume} from "react-icons/fa";

export default function MainSection() {

    const slides = [
        {
            img: Carousel1,
            title: "Men Fashion",
            text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
            btnText: "Shop Now"
        },
        {
            img: Carousel2,
            title: "Women Fashion",
            text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
            btnText: "Shop Now"
        },
        {
            img: Carousel3,
            title: "Kids Fashion",
            text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
            btnText: "Shop Now"
        }
    ]


    const categories = [
        {
            img: Category1,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category2,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category3,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category4,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category4,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category3,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category2,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category1,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category2,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category1,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category4,
            name: "Category Name",
            description: "1000 Products"
        },
        {
            img: Category3,
            name: "Category Name",
            description: "1000 Products"
        },
    ]

    const products = [
        {
            img: Product1,
            name: "Product Name Goes Here",
            newPrice: "$123.00",
            oldPrice: "$125.00",
            starRating: 5,
            number: 99
        },
        {
            img: Product2,
            name: "Product Name Goes Here",
            newPrice: "$123.00",
            oldPrice: "$125.00",
            starRating: 4.5,
            number: 99
        },
        {
            img: Product3,
            name: "Product Name Goes Here",
            newPrice: "$123.00",
            oldPrice: "$125.00",
            starRating: 3.5,
            number: 99
        },
        {
            img: Product4,
            name: "Product Name Goes Here",
            newPrice: "$123.00",
            oldPrice: "$125.00",
            starRating: 3,
            number: 99
        },
        {
            img: Product5,
            name: "Product Name Goes Here",
            newPrice: "$123.00",
            oldPrice: "$125.00",
            starRating: 5,
            number: 99
        },
        {
            img: Product6,
            name: "Product Name Goes Here",
            newPrice: "$123.00",
            oldPrice: "$125.00",
            starRating: 4.5,
            number: 99
        },
        {
            img: Product7,
            name: "Product Name Goes Here",
            newPrice: "$123.00",
            oldPrice: "$125.00",
            starRating: 3.5,
            number: 99
        },
        {
            img: Product8,
            name: "Product Name Goes Here",
            newPrice: "$123.00",
            oldPrice: "$125.00",
            starRating: 3,
            number: 99
        }
    ]

    const vendors = [Vendor1, Vendor2, Vendor3, Vendor4, Vendor5, Vendor6, Vendor7, Vendor8];

    return (
        <div className="main">
            <div className="row">
                <div className="col col3">
                    <Slider slides={slides}/>
                </div>
                <div className="col col4">
                    <div className="col col5">
                        <HoverPicture img={Offer1}  subheading="Save 20%" heading="Special Offer" btnName="Shop Now" />
                    </div>
                    <div className="col col5">
                    <HoverPicture img={Offer2}  subheading="Save 20%" heading="Special Offer" btnName="Shop Now" />
                    </div>
                </div>
            </div>
            <div className="row center">
                <div className="col col6">
                    <FaCheck className="serviceIcon"/>
                    <h5>Quality Product</h5>
                </div>
                <div className="col col6">
                    <FaShippingFast className="serviceIcon"/>
                    <h5>Quality Product</h5>
                </div>
                <div className="col col6">
                    <FaExchangeAlt className="serviceIcon"/>
                    <h5>Quality Product</h5>
                </div>
                <div className="col col6">
                    <FaPhoneVolume className="serviceIcon"/>
                    <h5>Quality Product</h5>
                </div>
            </div>
            <SectionTitle title="Categories"/>
            <div className="Gallery">
                {categories.map((elem, index) => {
                    return <Categories key={index} img={elem.img} title={elem.name} text={elem.description} />
                })}
            </div>
            <SectionTitle title="Featured Products"/>
            <div className="Gallery">
                {products.map((elem, index) => {
                    return <Products key={index} img={elem.img} name={elem.name} newPrice={elem.newPrice} oldPrice={elem.oldPrice} starRating={elem.starRating} number={elem.number}  />
                })}
            </div>
            <div className="row row2">
                <div className="col col1">
                    <HoverPicture img={Offer1}  subheading="Save 20%" heading="Special Offer" btnName="Shop Now" big="big"/>
                </div>
                <div className="col col1">
                    <HoverPicture img={Offer2}  subheading="Save 20%" heading="Special Offer" btnName="Shop Now" big="big"/>
                </div>
            </div>
            <SectionTitle title="Recent Products"/>
            <div className="Gallery">
                {products.map((elem, index) => {
                    return <Products key={index} img={elem.img} name={elem.name} newPrice={elem.newPrice} oldPrice={elem.oldPrice} starRating={elem.starRating} number={elem.number}  />
                })}
            </div>
            <div className="center2">
                <VendorCarousel vendors={vendors}/>
            </div>
        </div>
    );
}