import { useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { message } from "antd";
const Search=()=>{
    const [year, setYear]=useState("");
    const [mydata, setMyadta]= useState([]);
    const [errrMsg, setErrMsg]= useState("");
    const handleSubmit=()=>{
     let api=`http://localhost:3000/bikes/?launch_year=${year}`;
     axios.get(api).then((res)=>{
        setMyadta(res.data);
          if (res.data.length<=0)
          {
            setErrMsg(message.error("No bike found for this year!"))
          }
          else 
          {
            setErrMsg("");
          }
     })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
             <tr>
                <td> {key.name} </td>
                <td> {key.price} </td>
                <td> {key.rto_number} </td>
                <td> {key.launch_year} </td>
             </tr>            
            </>
        )
    });
    return(
        <>
         <h1  style={{color:"white",paddingLeft:"30px",paddingTop:"10px",paddingBottom:"10px",border:"3px solid gold",
            fontWeight:"bold",fontSize:"40px",backgroundColor:"black"}}> Search Bike</h1>
       <div style={{marginLeft:"100px",fontWeight:"bold", fontSize:"25px"}}>
          Enter Launch Year : <input style={{border:"2px solid black",padding:"10px 30px",marginRight:"20px"}} type="text" name="year" 
         value={year} onChange={(e)=>{setYear(e.target.value)}} />
         <button style={{padding:"10px 10px",border:"2px solid gold",color:"white",backgroundColor:"black",borderRadius:"10px"}}          onClick={handleSubmit}> Search</button></div>
         <hr />
         <Table border="3"  style={{width:"50%",marginLeft:"100px"}}>
      <thead>
        <tr>
          <th  style={{backgroundColor:"goldenrod"}}>Bike name</th>
          <th  style={{backgroundColor:"goldenrod"}}>Price</th>
          <th  style={{backgroundColor:"goldenrod"}}>RTO Number</th>
          <th  style={{backgroundColor:"goldenrod"}}>Launch Year</th>
        </tr>
      </thead>
      <tbody  style={{backgroundColor:"green",color:"white"}}>
      {errrMsg}
      {ans}
    </tbody>
    </Table>       
        </>
    )
}
export default Search;