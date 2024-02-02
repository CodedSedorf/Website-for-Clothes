import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./MyNav.css";
import logo from "../Asset/logo_e-commerce-no-bg.png"
import cartIcon from "../Asset/cart-icon.png"


const MyNav = () => {

    //Create a User state variable to always underline what is clicked
    const [menu, setmenu] = useState("")
  return (
    <div>
        <Navbar expand="lg" className="bg-body-primary">
            <Container>
                <Navbar.Brand href="#home" className='w-25'>
                    <img src={logo} alt="devsedorf" className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-50">
                    <Nav.Link href='/'  onClick={()=>{setmenu("shop")}}> Shop{menu==="shop"?<hr className='hr'/>:<></>} </Nav.Link>
                    <Nav.Link href='/men' onClick={()=>{setmenu("men")}} to="/men">Men {menu==="men"?<hr className='hr'/>:<></>}</Nav.Link>
                    <Nav.Link href='/women' onClick={()=>{setmenu("women")}}>Women{menu==="women"?<hr className='hr'/>:<></>}</Nav.Link>
                    <Nav.Link href='/kids' onClick={()=>{setmenu("kids")}}>Kids{menu==="kids"?<hr className='hr'/>:<></>}</Nav.Link>
                </Nav>
                <Nav className="flex w-25">
                    <Nav.Link href='/login'>
                        <Button variant="light mx-2 my-2">Login</Button>
                    </Nav.Link>
                    <Nav.Link href='/cart'>
                        <img className='cart-icon' src={cartIcon} alt="" />
                    </Nav.Link>
                    <div className="nav-cart-count">0</div>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default MyNav