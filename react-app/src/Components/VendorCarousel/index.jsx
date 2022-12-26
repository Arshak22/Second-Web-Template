import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export const VendorCarousel = ({vendors}) => {
    const settings = {
        dots: false,
        draggable: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              speed: 2000,
              pauseOnHover: true,
              autoplaySpeed: 2000,
              cssEase: "linear"
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <Slider {...settings} className="Slider">
          {vendors.map((elem, index) => {
                return (
                    <div key={index} className="sliderImage">
                        <img src={elem} alt={elem} />
                    </div>
                )
          })}
        </Slider>
    );
}