import React from "react";
import "../styles/nav.css";

import { Link, Route, Router, Routes } from "react-router-dom";



const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="list">Home</Link>
                </li>
                <li>
                    <Link to="/aboutus" className="list">About Us</Link>
                </li>
                <li>
                    <Link to="/shop" className="list">Shop</Link>
                </li>
                <li>
                    <Link to="/contact" className="list">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;