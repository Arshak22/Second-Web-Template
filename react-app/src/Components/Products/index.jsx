import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

export const Products = (props) => {

    const stars = [];

    switch(props.starRating) {
        case 0: 
            stars.push(<>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
            </>);
            break;
        case 0.5:
            stars.push(<>
                <small className="star"><FaStarHalfAlt /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
            </>);
            break;
        case 1:
            stars.push(<>
                <small className="star"><FaStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
            </>);
            break;
        case 1.5:
            stars.push(<>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStarHalfAlt /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
            </>);
            break;
        case 2:
            stars.push(<>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
            </>);
            break;
        case 2.5:
            stars.push(<>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStarHalfAlt /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
            </>);
            break;
        case 3:
            stars.push(<>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FiStar /></small>
                <small className="star"><FiStar /></small>
            </>);
            break;
        case 3.5:
            stars.push(<>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStarHalfAlt /></small>
                <small className="star"><FiStar /></small>
            </>);
            break;
        case 4: 
        stars.push(<>
            <small className="star"><FaStar /></small>
            <small className="star"><FaStar /></small>
            <small className="star"><FaStar /></small>
            <small className="star"><FaStar /></small>
            <small className="star"><FiStar /></small>
        </>);
        break;
        case 4.5:
            stars.push(<>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStarHalfAlt /></small>
            </>);
            break;
        case 5:
        default:
            stars.push(<>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
                <small className="star"><FaStar /></small>
            </>);
    }
    

    return (
        <article className='myArticle2'>
            <figure className="myFigure2">
                <div className="figurePic">
                    {props.img ? <img src={props.img} alt="articlePic2" className='articlePic2' /> : null}
                    <div className="figureIcons">
                        <button className="productIcon i1"><FaShoppingCart /></button>
                        <button className="productIcon i2"><FaHeart /></button>
                        <button className="productIcon i3"><FaSyncAlt/></button>
                        <button className="productIcon i4"><FaSearch /></button>
                    </div>
                </div>
                <figcaption className="myFigureCaption2">
                    <h6 className='figureTitle2'>{props.name}</h6>
                    <div className="price">
                        <h5>{props.newPrice}</h5>
                        <h6>{props.oldPrice}</h6>
                    </div>
                    <div className="ratingAndNumber">
                        {stars}
                        <small>({props.number})</small>
                    </div>
                </figcaption>
            </figure>
        </article>
    );
}