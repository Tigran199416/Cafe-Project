import React from "react";
import "./menu.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import menu1 from "../images/menu1.png";
import menu2 from "../images/menu2.png";
import menu3 from "../images/menu3.png";
import menu4 from "../images/menu4.png";
import menu5 from "../images/menu5.png";
import menu6 from "../images/menu6.png"


function Menu(){
    const menu = [
        {
            id:1,
            title:"Espresso",
            descrip:'is a concentrated coffee brewed by forcing hot water through finely-ground coffee beans.',
            image:menu1
        },
        {
            id:2,
            title:"Cappuccino",
            descrip:'is a popular Italian coffee drink consisting of equal parts espresso, steamed milk, and milk foam. ',
            image:menu2
        },
        {
            id:3,
            title:"Latte",
            descrip:'is made with a shot of espresso and a larger amount of steamed milk. ',
            image:menu3
        },
        {
            id:4,
            title:"Macchiato",
            descrip:'means "stained" or "spotted" in Italian  amount of frothy milk or milk foam.',
            image:menu4
        },
        {
            id:5,
            title:"Americano",
            descrip:'is a simple coffee made by diluting a shot of espresso with hot water. ',
            image:menu5
        },
        {
            id:6,
            title:"Mocha",
            descrip:"short for Mocha Java, combines espresso with steamed milk and chocolate.",
            image:menu6
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
      };

    return(
        <div className="menu_header" id ="menu" >
            <p className="menu_p_text"> Menu <p className="p_g"></p></p>
            <h1 className="menu_h1_text" >At Cozy Cup Cafe</h1>
            <div className="menu_slider">
            <Slider {...settings}>
                {menu.map((item)=>
                <div className="contenier" key = {item.id}>
                    <img className="image_menu" alt = "pic" src = {item.image} />
                    <div className="overlay">
                        <h2 className = "title_text">{item.title}</h2>
                        <p className="desc_text">{item.descrip}</p>
                    </div>
                </div>
                )}
            </Slider>
            </div>
        </div>
    )
}


export default Menu;