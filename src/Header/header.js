import React from "react";
import "./header.css"
import logo from "../images/Group 385.png"

import {HashLink, HashLink as Link} from "react-router-hash-link"


function Header(){
    return(
        <div className = "header">
            <div className = "logo">
            <HashLink to ="#home" smooth  ><img alt ="logo" src={logo} /></HashLink> 
            </div>
            <div className="cozy">
                <Link to ="#home" smooth className="menu_text">Home</Link>
                <Link to ="#about" smooth className="menu_text">About</Link>
                <Link to ="#chef" smooth className="menu_text">Chefs</Link>    
                <Link to ="#contact" smooth className="menu_text">Contact Us</Link>
                <Link to ="#menu" smooth className="menu_text"> Menu</Link>

            </div>
        </div>
    )
}


export default Header;