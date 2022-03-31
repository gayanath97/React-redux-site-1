
import {Navbar,Nav} from 'react-bootstrap';
import { Container } from "react-bootstrap";
import { Dropdown } from 'react-bootstrap';




const Header = () => {

    return (

        <div>
         

    <Navbar bg="dark" variant="dark" >
    <Container >
    <Navbar.Brand href="https://www.google.com/">Poco Systems Lanka (PVT) LTD</Navbar.Brand>
    <Nav className="me-auto">
    
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/expense">Add Product</Nav.Link>
      <Nav.Link href="/rr">Info</Nav.Link>
      <Nav.Link href="/opd">Contact</Nav.Link>
    </Nav>
    </Container>

    
    
    {/* <button><a style={{color:"red"}}>Persistent</a></button> */}
    <div style={{color:"red"}}>
    <Dropdown >
  <Dropdown.Toggle variant="info" id="dropdown-basic">
  Profile
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="/" onClick={()=>{localStorage.removeItem("accessToken")}}>LOG OUT</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div> 
&nbsp;
&nbsp;
&nbsp;
   
    
    
  </Navbar>
  
  

        </div>

      );
}
 
export default Header;