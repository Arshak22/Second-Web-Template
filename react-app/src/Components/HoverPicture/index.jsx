import React from "react";
import './style.css';

export default function HoverPicture(props) {

    return (
        <div className={`productOffer ${props.big}`}>
            {props.img ? <img className="mainPic" src={props.img} alt="mainPic" />: null}
            <div className="offerText">
                <h6>{props.subheading}</h6>
                <h3>{props.heading}</h3>
                <button>{props.btnName}</button>
            </div>
        </div>
    );
}