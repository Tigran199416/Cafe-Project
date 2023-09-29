import React from "react";
import "./chef.css"
import chef1 from "../images/chef1.png"
import chef2 from "../images/chef2.png"
import chef3 from "../images/chef3.png"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Chef(){
    const cooker = [
        {
            id:1,
            name:"Greg",
            surname:"Been ",
            insta:"instagram.com",
            fb:"facebook.com",
            ld:"linkdin.com",
            image:chef1
        },
        {
            id:2,
            name:"Jack",
            surname:"Whilson",
            insta:"instagram.com",
            fb:"facebook.com",
            ld:"linkdin.com",
            image:chef2
        },
        {
            id:3,
            name:"Brian",
            surname:"Li",
            insta:"instagram.com",
            fb:"facebook.com",
            ld:"linkdin.com",
            image:chef3
        },

    ]
    return(
        <div className="chef_header" id ="chef">
            <div className="chef_text">
                <p className="text_title">Barista<p className="t_c"></p></p>
                <h1 className="h1_text">  Crafting Happiness One Cup At A Time</h1>
            </div>
            <div className="chef_pic">
                {
                  cooker.map((item)=>{
                    return(
                    <div className = "cooker" key = {item.id} >
                        <img className="chef_image" alt = "cooker" src = {item.image}/>
                        <div className="middle">
                            <p style={{fontSize:"40px"}}>{item.name +" "}{item.surname}</p>
                            <div className="icons" >
                           <a href = {item.insta}><InstagramIcon style={{ color:"rgba(143, 98, 50, 1)",fontSize:"30px",margin:"10px"}}/></a>
                          <a href = {item.fb} > <FacebookIcon style={{color:"rgba(143, 98, 50, 1)",fontSize:"30px",margin:"10px"}}/> </a>
                           <a href ={item.ld}> <LinkedInIcon style={{color:"rgba(143, 98, 50, 1)",fontSize:"30px",margin:"10px"}}/></a>
                            </div>
                        </div>
                    </div>)
                  })  
                }
            </div>
            
        </div>
    )
}


export default Chef;