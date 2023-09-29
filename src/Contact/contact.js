import React, {  useState } from "react";
import "./contact.css"
import { Button, Form, Input, Modal,InputNumber } from 'antd';
import hall from "../images/hall/hall.png";
import pic1 from "../images/hall/1.png";
import pic2 from "../images/hall/2.png";
import pic3 from "../images/hall/3.png";
import pic4 from "../images/hall/4.png";
import pic5 from "../images/hall/5.png";
import pic6 from "../images/hall/6.png";
import pic7 from "../images/hall/7.png";
import pic8 from "../images/hall/8.png";
import pic_1 from "../images/hall/1-1.png";
import pic_2 from "../images/hall/2-2.png";
import pic_3 from "../images/hall/3-3.png";
import pic_4 from "../images/hall/4-4.png";
import pic_5 from "../images/hall/5-5.png";
import pic_6 from "../images/hall/6-6.png";
import pic_7 from "../images/hall/7-7.png";
import pic_8 from "../images/hall/8-8.png";



const tablesDate=[
  {
    table:1,
    reserved:false
  },
  {
    table:2,
    reserved:false
  },
  {
    table:3,
    reserved:false
  },
  {
    table:4,
    reserved:false
  },
  {
    table:5,
    reserved:false
  },
  {
    table:6,
    reserved:false
  },
  {
    table:7,
    reserved:false
  },
  {
    table:8,
    reserved:false
  }
]

const layout = {
	labelCol: {
	  span: 8,
	},
	wrapperCol: {
	  span: 16,
	},
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
	required: '${label} is required!',
	types: {
	  email: '${label} is not a valid email!',
	  number: '${Count} is not a valid number!',
	},
	number: {
	  range: '${label} must be between ${min} and ${max}',
	},
  };
  /* eslint-enable no-template-curly-in-string */
  
  const onFinish = (values) => {
	console.log(values);
  };
function Contact(){
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [table,setTable] = useState(tablesDate) 
  const [value,setValue] =useState(null)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setValue(null)
  };

	const handelChange =(e)=>{
 const id_t = e.target.id
 const newDate = table.map((item)=>{
  if(item.table == id_t){
    item.reserved = !item.reserved
    return item
  }
  return item
 })
 setValue(Number(id_t))
 setTable(newDate)
 console.log(value)
  }



    return(

        <div className="cont_header" id ="contact">
            <div>
            <div className="cont_text" >
                <p className="cont_us"> Contact Us<p className="c_g"></p></p>
                <h1 className="cont_h1">Here You Can Make A Reservation Or Just walkin to our cafe</h1>
                <p className="cont_us"> Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.</p>
               </div>
               <div className = "cont_t">
                <div className="cont_cont">
                    <div className="cont_ta">
                        <h4 className="cont_h5">Phone Numbers</h4>    
                        <p>000-000-000</p>
                        <p>111-111-111</p>
                     </div>
                     <div className="cont_em" >
                    <h4 className="cont_h5" >Emails</h4>
                    <p>exempl@gmail.com</p>
                    </div>    
                </div>        
                </div>

            </div>
			<div className="cont_form">
      
			<Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'surname']} label="Surname">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'table']} label="Table" rules={[{ type: 'number', min: 0, max: 8 }]}  >
      <InputNumber defaultValue={value} />
    </Form.Item>
    <Form.Item name={['user', 'count']} label="Count" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
    </Form.Item>
    
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    <Button className="btn2" type="primary" onClick={showModal}>
        Reservation
      </Button>
      <Button className= "btn1" type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

      <Modal className = "cont_modal" oktype = "primary" width={"100%"}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className="modal_header">
        <h1 className="cont_modal_h1">Make Your Reservation Here</h1>
        <div >
        <img alt="pic" className="modal_img"   src ={hall}/>
        </div> 
        <div onClick={handelChange}>
          {
            !table[0].reserved?
        <img  alt= "pic1" id= "1" className = "pic1" src ={pic1}/>: <img alt= "pic1" id= "1" className = "pic1" src ={pic_1}/>
       

          }
        </div> 
        <div onClick={handelChange}  >
          {!table[1].reserved? 
          <img alt= "pic2" id= "2" className = "pic2"  src ={pic2}/>: <img alt= "pic2" id= "2" className = "pic2"  src ={pic_2}/>  
        }
        
        </div> 
        <div  onClick={handelChange} >
        {!table[2].reserved? 
          <img alt= "pic3" id= "3" className = "pic3"  src ={pic3}/>: <img alt= "pic3"id= "3" className = "pic3"  src ={pic_3}/>  
        }
        </div> 
        <div onClick={handelChange} >
        {!table[3].reserved? 
          <img alt= "pic4" id= "4" className = "pic4"  src ={pic4}/>: <img alt= "pic4" id= "4" className = "pic4"  src ={pic_4}/>  
        }
        </div>  
        <div onClick={handelChange} >
        {!table[4].reserved? 
          <img alt= "pic5" id= "5" className = "pic5"  src ={pic5}/>: <img alt= "pic5" id= "5" className = "pic5"  src ={pic_5}/>  
        }
        </div> 
        <div onClick={handelChange}  >
        {!table[5].reserved? 
          <img alt= "pic6" id= "6" className = "pic6"  src ={pic6}/>: <img alt= "pic6" id= "6" className = "pic6"  src ={pic_6}/>  
        }
        </div> 
        <div  onClick={handelChange}   >
        {!table[6].reserved? 
          <img alt= "pic7" id= "7" className = "pic7"  src ={pic7}/>: <img alt= "pic7" id= "7" className = "pic7"  src ={pic_7}/>  
        }
        </div> 
        <div onClick={handelChange}  >
        {!table[7].reserved? 
          <img alt= "pic8" id= "8" className = "pic8"  src ={pic8}/>: <img alt= "pic8" id= "8" className = "pic8"  src ={pic_8}/>  
        }
        </div> 
        </div>
      </Modal>
 </div>
 </div>
    )
}


export default Contact;