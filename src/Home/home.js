import React from "react";
import "./home.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/Mask group.png"
import img2 from "../images/Mask group1.png"
import { HashLink } from "react-router-hash-link";
function  Home(){
  

        const settings = {
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 2500,
          };

    return(
        <>
         <div className="home_header" id ="home"> 
         <div className="image">
                <h1 className="text_h1">Cozy cup cafe</h1>
                <p className="text_p">"Cozy Cup Cafe" is a charming and inviting coffee shop located in the heart of a bustling neighborhood. Known for its warm and welcoming atmosphere, this cafe has become a beloved gathering place for locals and visitors alike.</p>
                <HashLink to ="#contact" smooth className="btn" >BOOK</HashLink>
            </div>
            <div className="carusel">
            <Slider {...settings}>
            <div>
            <img className = "home_pic" alt = "pic" src={img1} />
          </div>
          <div>
            <img className = "home_pic" alt="pic" src={img2} />
          </div>
            </Slider>
             </div> 
        </div>
        </>
    )
}



export default Home;