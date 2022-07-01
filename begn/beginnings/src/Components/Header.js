import React from 'react';
import { Link, Route, Router, useNavigate } from "react-router-dom";
import Nav from './Nav';
import "../styles/header.css";


const Header = () => {

    return (
        <header>
            <div className="wrapper">
                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height="60" width="320" />
                    <text className="text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                        <tspan >The Bright Shop</tspan>
                    </text>
                </svg>
            </div>
            <Nav />
        </header >
    );
}



export default Header;