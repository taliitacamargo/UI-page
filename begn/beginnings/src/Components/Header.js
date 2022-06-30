import React from 'react';
import { Link, Route, Router, useNavigate } from "react-router-dom";
import Nav from './Nav';
import "../styles/header.css";


const Header = () => {

    return (
        <header>
            <h1 className='HeaderTitle' >
                Welcome to The Bright Shop
                <Nav/>
            </h1>
        </header>
    );
}



export default Header;