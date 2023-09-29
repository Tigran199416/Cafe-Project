import React from "react";
import "./about.css"
import pic from "../images/little1.png"
import pic2 from "../images/little2.png"
import pic3 from "../images/little3.png"
import video from "../images/video.mp4"
function About(){
    return(
        <div className="about_header" id = "about">
            <div className="video">
            <video  src={video} width="600"  controls  autoPlay loop muted />
             
            </div>
            <div className="about_text">
                <div className = "text">
                    <p className="p_about" > About <p className="p_a"></p> </p>
                    <h1 className="h1_text" >At Cozy Cup Cafe</h1>
                    <p className="p_text">you'll find a wide range of freshly brewed coffees, teas, and delicious pastries to satisfy your cravings. Whether you're in the mood for a perfectly crafted cappuccino, a soothing herbal tea, or a sweet treat to accompany your drink, you're sure to find something delightful on the menu.
The cafe's interior is designed with comfort in mind. Soft, plush seating, warm lighting, and rustic decor create a cozy ambiance that encourages relaxation and conversation. It's the perfect spot to catch up with friends, have a casual business meeting, or simply unwind with a good book.</p>
                </div>
                <div className="image_about">
                    <img alt="pic" src = {pic}/>
                    <img style = {{marginLeft: "35px"}} alt="pic" src = {pic2} />
                    <img style = {{marginLeft: "35px"}} alt="pic" src = {pic3}/>
                </div>
            </div>
        </div>
    )
}


export default About;