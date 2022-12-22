import React from "react";
import { useState } from "react";
import './style.css';

export default function FirstSubHeader(props) {
    
    const handleActiveDropdown = (e) => {
        if(e.target.nextSibling.classList.contains('show')) {
            e.target.nextSibling.classList.remove('show');
            return;
        }
        const a = document.querySelectorAll("div.rightDropdownMenu");
        a.forEach((elem) => {
            elem.classList.remove('show');
        })
        e.target.nextSibling.classList.add('show');
    }

    return (
        <div>
            <button className="dropdownBtn" onClick={handleActiveDropdown}>{props.title}</button>
            <div className="rightDropdownMenu">
                { props.content.map((elem, index) => {
                    return <button key={index} className="dropdownItem">{elem}</button>
                })}
            </div>
        </div>
    );
}