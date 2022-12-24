import React from "react";
import "./style.css";

export const Categories = (props) => {


    return (
        <article className='myArticle'>
            <figure className="myFigure">
                <div className="figurePic">
                    {props.img ? <img src={props.img} alt="articlePic" className='articlePic' /> : null}
                </div>
                <figcaption className="myFigureCaption">
                    <h6 className='figureTitle'>{props.title}</h6>
                    <small className='figureDesc'>{props.text}</small>
                </figcaption>
            </figure>
        </article>
    );
}