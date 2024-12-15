

import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
const Layout = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                {/* Side Navbar */}
                <div style={{
                    width: '250px',
                    height: '100vh',
      
                    backgroundColor: 'green',
                    color: 'black',
                    paddingTop: '20px',
                    position: 'fixed',
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img src="src/img/remover.png" alt="" style={{ width: "120px", height: "120px" }} />
                    </div>
                       <Nav style={{marginLeft:"15px"}}>
                        <Nav.Link as={Link} to="home" style={{textDecoration:"none"
                        ,border:"3px solid gold",width:"170px", paddingLeft:"50px",backgroundColor:"black",
                        display:"flex",color:"white",fontSize:"30px",fontWeight:"bold",marginBottom:"25px"} }
                        >Home</Nav.Link>
                        <Nav.Link as={Link} to="insert" style={{textDecoration:"none"
                        ,border:"3px solid gold",width:"170px", paddingLeft:"50px",backgroundColor:"black",
                        display:"flex",color:"white",fontSize:"30px",fontWeight:"bold",marginBottom:"25px"}}>
                          Insert</Nav.Link>
                        <Nav.Link as={Link} to="display" style={{textDecoration:"none"
                        ,border:"3px solid gold",width:"170px", paddingLeft:"50px",backgroundColor:"black",
                        display:"flex",color:"white",fontSize:"30px",fontWeight:"bold",marginBottom:"25px"}}
                        >Display</Nav.Link>
                        <Nav.Link as={Link} to="search" style={{textDecoration:"none"
                        ,border:"3px solid gold",width:"170px", paddingLeft:"50px",backgroundColor:"black",
                        display:"flex",color:"white",fontSize:"30px",fontWeight:"bold",marginBottom:"25px"}}
                        >Search</Nav.Link>
                        <Nav.Link as={Link} to="update" style={{textDecoration:"none"
                        ,border:"3px solid gold",width:"170px", paddingLeft:"50px",backgroundColor:"black",
                        display:"flex",color:"white",fontSize:"30px",fontWeight:"bold",marginBottom:"25px"}}
                        >Update</Nav.Link>
                      </Nav>
              
                </div>

                {/* Main Content Area */}
                <div style={{ marginLeft: '250px', width: '100%' }}>
                    <Outlet />
                </div>
            </div>

            <hr size="4" color="black" />
            <div style={{ color: "green", marginLeft: "300px", fontSize: "35px", fontWeight: "500", marginTop: "20px" }}>
                  <img src="src/img/splender.png" alt="" style={{width:"100%",height:"380px"}} />
              
              <h5 style={{color:"green",marginTop:"-10px"}}> www.myheroShowroom.com</h5> 
            </div>
           
        </>
    );
}
export default Layout;