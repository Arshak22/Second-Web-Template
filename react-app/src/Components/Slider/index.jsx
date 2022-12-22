import React from "react";
import './style.css';
import { useState } from "react";
import { useEffect } from "react";

export default function Slider({slides}) {
    const[currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = React.useRef(null);

    const show = (index) => {
        setCurrentIndex(index);
    }
    const dotList = [];
    const innerPart = [];


    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrentIndex((currentIndex) => currentIndex === slides.length ? 0: currentIndex + 1),
        2000);

        for (let i = 0; i < slides.length; i++) {
            dotList.push(<li onClick={() => show(i)}></li>);
            if(currentIndex == i) {
                innerPart.push(
                    <div className="carouselItem">
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

        return () => {
            resetTimeout();
          };
    }, [currentIndex])

    
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