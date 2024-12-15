import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const Update=()=>{
const [mydata, setMydata]=useState([]);
const navigate= useNavigate();
const loadData=()=>{
    let api="http://localhost:3000/bikes";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
}
useEffect(()=>{
    loadData();
}, []);
const myDel=(id)=>{
    let api=`http://localhost:3000/bikes/${id}`;
    axios.delete(api).then((res)=>{
        message.error("Record Sjuccesfully deleted!");
        loadData();
    })   
    
}

const myEdit=(id)=>{
    navigate(`/edit/${id}`);
}

const ans=mydata.map((key)=>{
    return(
        <>
          <tr>
            <td> {key.name}</td>
            <td> {key.price}</td>
            <td> {key.rto_number}</td>
            <td> {key.launch_year}</td>
            <td>
          <a style={{color:"white"}}  href="#" onClick={()=>{myEdit(key.id)}}>
          < FaEdit />
          </a>
        </td>
        <td>
            <a style={{color:"white"}} href="#" onClick={()=>{myDel(key.id)}}>
            <MdDelete />
            </a>
            </td>
          </tr>
        </>
    )
})
    return(
        <>
         <h1 style={{color:"white",paddingLeft:"30px",paddingTop:"10px",paddingBottom:"10px",border:"3px solid gold",
            fontWeight:"bold",fontSize:"40px",backgroundColor:"black"}}> Update Bike</h1>

         <Table border="3"  style={{width:"50%",marginLeft:"20%"}}>
      <thead>
        <tr>
          <th  style={{backgroundColor:"goldenrod"}}>Bike Name</th>
          <th  style={{backgroundColor:"goldenrod"}}>Bike Price</th>
          <th  style={{backgroundColor:"goldenrod"}}>RTO Number</th>
          <th  style={{backgroundColor:"goldenrod"}}>Launch Year</th>
          <th  style={{backgroundColor:"goldenrod"}}>Edit</th>
          <th  style={{backgroundColor:"goldenrod"}}>Delete</th>
        </tr>
      </thead>
      <tbody style={{backgroundColor:"green",color:"white"}}>
         {ans}
        </tbody>
        </Table>
        </>
    )
}
export default Update;