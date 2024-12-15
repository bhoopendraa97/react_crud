import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata] = useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/bikes";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, [])

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
    })

    return(
        <>
         <h1  style={{color:"white",paddingLeft:"30px",paddingTop:"10px",paddingBottom:"10px",border:"3px solid gold",
            fontWeight:"bold",fontSize:"40px",backgroundColor:"black"}}> Display Bike</h1>

<table border="3" style={{marginLeft:"90px",width:"50%",height:"30%",marginTop:"-20px",marginBottom:"20px"}}>
        <tr>
          <th style={{backgroundColor:"goldenrod"}}>Bike name</th>
          <th style={{backgroundColor:"goldenrod"}}>Price</th>
          <th style={{backgroundColor:"goldenrod"}}>RTO Number</th>
          <th style={{backgroundColor:"goldenrod"}}>Launch Year</th>
          </tr>
        <tbody style={{backgroundColor:"green",color:"white"}}>
          {ans}
        </tbody>
      </table>
         </>
    )
}
export default Display;