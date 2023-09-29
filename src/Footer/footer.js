import React from "react";
import "./footer.css"
import logo from "../images/Group 385.png"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer(){
    return(
        <div className="footer">
            <div className="icons">
                   <a><InstagramIcon style = {{color:"rgba(216, 131, 3, 1)",cursor:"pointer",fontSize:" 35px",marginLeft: "20px"}}/></a> 
                   <a><FacebookIcon style = {{color:"rgba(216, 131, 3, 1)",cursor:"pointer",fontSize:" 35px",marginLeft: "20px"}}/></a> 
                   <a><LinkedInIcon style = {{color:"rgba(216, 131, 3, 1)",cursor:"pointer",fontSize:" 35px",marginLeft: "20px"}}/></a> 
            </div>
            <div className="logo1" >
                <img alt= "logo" src = {logo} />
            </div>
            <div className="footer_text">
                <h6>Copyright 2023 The Codext  All Rights Reserved.</h6>
            </div>

        </div>
    )
}


export default Footer;