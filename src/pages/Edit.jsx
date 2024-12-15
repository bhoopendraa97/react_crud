import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
const Edit=()=>{
const [mydata, setMydata]=useState({});
const {id} =useParams();
const loadData=()=>{
    let api=`http://localhost:3000/bikes/${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    })
}
useEffect(()=>{
    loadData();
}, []);

const handleInput=(e)=>
{ 
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}))
      console.log(mydata);
}


const handleSubmit=()=>{
    let api=`http://localhost:3000/bikes/${id}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesflly updated!!!");
    })
}

   

    return(
        <>
        <h1  style={{color:"white",paddingLeft:"30px",paddingTop:"10px",paddingBottom:"10px",border:"3px solid gold",
            fontWeight:"bold",fontSize:"40px",backgroundColor:"black"}}> Update your Record : {id} </h1>

          <form style={{fontWeight:"bold",backgroundColor:"goldenrod",padding:"30px 0px"}}>   Edit Name  :
       <input  style={{marginLeft:"55px", padding:"5px 10px"}}    
          type="text" name="name" value={mydata.name} onChange={handleInput} />
         <br/><br />
         Edit Price  : <input  style={{marginLeft:"60px", padding:"5px 10px"}} type="text" name="price"  value={mydata.price}
         onChange={handleInput} />
         <br/><br />
         Edit RTO Name  : <input  style={{marginLeft:"20px", padding:"5px 10px"}}  type="text" name="rto_number" value={mydata.rto_number}
         onChange={handleInput} />
         <br/><br />
         Edit Launch Year   : <input  style={{marginLeft:"10px", padding:"5px 10px"}} type="text" name="launch_year"  value={mydata.launch_year}
         onChange={handleInput} />
         <br/><br />

         <button style={{padding:"10px 10px"}}  onClick={handleSubmit}> Update save!</button>
         </form>
        </>
    )
}

export default Edit;