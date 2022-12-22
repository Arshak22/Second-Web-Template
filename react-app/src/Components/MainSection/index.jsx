import React from "react";
import './style.css';
import HoverPicture from "../HoverPicture";
import Slider from "../Slider";
import { useState } from "react";
import Offer1 from "../../assets/images/offer-1.jpg";
import Offer2 from "../../assets/images/offer-2.jpg";
import Carousel1 from "../../assets/images/carousel-1.jpg";
import Carousel2 from "../../assets/images/carousel-2.jpg";
import Carousel3 from "../../assets/images/carousel-3.jpg";

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
        </div>
    );
}