import React from "react";
import "./style.css";

export const SectionTitle = (props) => {
    return (
        <div className="sectionTitle">
            <h2>{props.title}</h2>
            <div className="line"></div>
        </div>
    );
}