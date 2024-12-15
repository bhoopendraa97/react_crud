
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import {message} from 'antd';


const Insert=()=>{
    const [input, setInput] =useState({});



    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }


    const handleSubmit=()=>{
        let api="http://localhost:3000/bikes";
        axios.post(api,input).then((res)=>{
            message.success("Bike Inserted Successfully");
        });
    }


    return(
        <>
         <h1 style={{color:"white",paddingLeft:"30px",paddingTop:"10px",paddingBottom:"10px",border:"3px solid gold",
            fontWeight:"bold",fontSize:"40px",backgroundColor:"black"}}> Insert Bike</h1>


         <Form style={{width:"90%",backgroundColor:"goldenrod",padding:"60px 50px "}}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"20px",fontWeight:"bold",marginLeft:"30px"}}>Enter Bike name</Form.Label>
        <Form.Control type="text" name="name" value={input.name}  onChange={handleInput}
         style={{border:"2px solid black",marginLeft:"30px",padding:"6px 6px",marginBottom:"15px"}}  />
         
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"20px",fontWeight:"bold",marginLeft:"30px"}}>Enter Bike price</Form.Label>
        <Form.Control type="text" name="price" value={input.price} onChange={handleInput} 
         style={{border:"2px solid black",marginLeft:"33px",padding:"6px 6px",marginBottom:"15px"}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"20px",fontWeight:"bold",marginLeft:"30px"}}>Enter RTO number</Form.Label>
        <Form.Control type="text" name="rto_number" value={input.rto_number}   onChange={handleInput}
         style={{border:"2px solid black",marginLeft:"6px",padding:"6px 6px",marginBottom:"15px"}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"20px",fontWeight:"bold",marginLeft:"30px"}}>Enter Launch year</Form.Label>
        <Form.Control type="text"  name='launch_year' value={input.launch_year}  onChange={handleInput} 
         style={{border:"2px solid black",marginLeft:"12px",padding:"6px 6px",marginBottom:"15px"}} />
      </Form.Group>
      <Button style={{padding:"10px 15px",border:"2px solid gold",color:"white",backgroundColor:"black",marginLeft:"30px"
      ,borderRadius:"10px"}} 
       type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

        
        </>
    )
}

export default Insert;