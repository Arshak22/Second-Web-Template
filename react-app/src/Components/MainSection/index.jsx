import React from "react";
import './style.css';
import HoverPicture from "../HoverPicture";
import Slider from "../Slider";
import { Categories } from "../Categories";
import Offer1 from "../../assets/images/offer-1.jpg";
import Offer2 from "../../assets/images/offer-2.jpg";
import Carousel1 from "../../assets/images/carousel-1.jpg";
import Carousel2 from "../../assets/images/carousel-2.jpg";
import Carousel3 from "../../assets/images/carousel-3.jpg";
import Category1 from "../../assets/images/category-1.jpg";
import Category2 from "../../assets/images/category-2.jpg";
import Category3 from "../../assets/images/category-3.jpg";
import Category4 from "../../assets/images/category-4.jpg";
import {FaCheck} from "react-icons/fa";
import {FaShippingFast} from "react-icons/fa";
import {FaExchangeAlt} from "react-icons/fa";
import {FaPhoneVolume} from "react-icons/fa";
import { SectionTitle } from "../SectionTitle";

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
            <div className="categoriesGallery">
                    {categories.map((elem, index) => {
                        return <Categories key={index} img={elem.img} title={elem.name} text={elem.description} />
                    })}
            </div>
            <SectionTitle title="Featured Products"/>
            <div className="row row2">
                <div className="col col1">
                    <HoverPicture img={Offer1}  subheading="Save 20%" heading="Special Offer" btnName="Shop Now" big="big"/>
                </div>
                <div className="col col1">
                    <HoverPicture img={Offer2}  subheading="Save 20%" heading="Special Offer" btnName="Shop Now" big="big"/>
                </div>
            </div>
            <SectionTitle title="Recent Products"/>
        </div>
    );
}