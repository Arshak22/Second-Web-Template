import React from "react";
import './style.css';
import { useState } from "react";

export default function Slider({slides}) {
    const[currentIndex, setCurrentIndex] = useState(0);

    const show = (e, index) => {
        let a = document.querySelectorAll(".carouselDots>li");
        a.forEach((elem) => {
            elem.classList.remove('activeDots');
        })
        setCurrentIndex(index);
        e.target.classList.add('activeDots');
    }
    const dotList = [];
    const innerPart = [];

    for (let i = 0; i < slides.length; i++) {
        if(i === 0) {
            dotList.push(<li key={i} className="activeDots" onClick={(e) => show(e, i)}></li>); 
        } else {
            dotList.push(<li key={i} onClick={(e) => show(e, i)}></li>); 
        }      
        if(currentIndex === i) {
            innerPart.push(
                <div key={i} className="carouselItem">
                    {slides[i].img ? <img src={slides[i].img} alt="slideImage" className="slideImage" />: null}
                    <div className="carouselCaption">
                        <div>
                            <h1>{slides[i].title}</h1>
                            <p>{slides[i].text}</p>
                            <button>{slides[i].btnText}</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    return (
        <div className="carousel">
            <ol className="carouselDots">
                {dotList}
            </ol>
            <div className="carouselInner">
                {innerPart}
            </div>
        </div>
    );
}