import React from "react";
import "./eat.css"
import eat1 from "../images/eat1.png";
import eat2 from "../images/eat2.png";
import eat3 from "../images/eat3.png";
import eat4 from "../images/eat4.png";
import eat5 from "../images/eat5.png";
import eat6 from "../images/eat6.png";


function Eat(){

        const menu = [
            {
                id:1,
                image:eat1,
                title:"Chamomile Serenity Tea",
                desc:"A soothing herbal blend of dried chamomile flowers that gently calms your senses and helps you unwind.",
                price:"$3.50 / per cup"
            },
            {
                id:2,
                image:eat2,
                title:"Earl Grey Elegance Tea",
                desc:" A classic black tea infused with the fragrance of bergamot oranges, resulting in a delightful citrusy aroma and a sophisticated, bold flavor.",
                price:"$4.00 / per cup"
            },
            {
                id:3,
                image:eat3,
                title:"Matcha Zen Green Tea",
                desc:"A vibrant green tea powder, rich in antioxidants and a natural energy booster.",
                price:"$4.50 / per cup"
            },
            {
                id:4,
                image:eat4,
                title:"Velvet Dream Cake",
                desc:"Its decadent taste and deep crimson color make it an irresistible treat for any celebration.",
                price:"$5.50 / per slice"
            },
            {
                id:5,
                image:eat5,
                title:"Lemon Zest Delight Cake",
                desc:"A zesty lemon-infused cake with layers of tangy lemon curd and a fluffy meringue frosting.",
                price:"$6.00 / per slice"
            },
            {
                id:6,
                image:eat6,
                title:"Chocolate Truffle Temptation Cake",
                desc:"A sinfully indulgent chocolate cake featuring layers of rich chocolate ganache and velvety chocolate mousse.",
                price:"$6.50 / per slice"
            },
        ]

    return(
        <div className="eat_header">
            <div className="eat_text" >
                <p className="eat_p" >Also Find<p className="e_p"></p></p>
                <h1 className="eat_h1">A Symphony of Flavors</h1>
            </div>
            <div className="eat_desc">
                {
                    menu.map((item)=>{
                        return(
                            <div className="eat_pic" key ={item.id} >
                                <img alt = "pic" src={item.image}/>
                                <div className="eat_t">
                                    <h6 className="eat_h6">{item.title}</h6>
                                    <p className="eat_pt">{item.desc}</p>
                                    <p className="eat_pp">{item.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Eat