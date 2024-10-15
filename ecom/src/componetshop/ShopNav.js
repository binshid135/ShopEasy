import React from 'react'
import { Container,Nav,NavDropdown,Navbar,Dropdown } from 'react-bootstrap'
import '../shophome.css'
import { LuMenu } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ShopNav = () => {

  const [profile,profileres]=useState([])
  const shopname=sessionStorage.getItem("sid")

  useEffect(() => {
    axios.get(`http://localhost:8090/product/profile/${shopname}`).then(response => {
      console.log(response.data.data);
      profileres(response.data.data)
    })
  }, [])

  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className='matemasie-regular'><Link to='/shophome' style={{textDecoration:"none",color:"black"}}>{profile.shopname}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='akshar-font'><LuMenu className='me-2 mb-1'/>MENU</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='akshar-font'><IoSearch className='mb-1 me-1'/> SEARCH</Nav.Link>
            <Nav.Link href="#pricing" className='akshar-font'><VscAccount className='mb-1 me-1' /> ACCOUNT</Nav.Link>
            <Nav.Link href="#pricing" className='akshar-font'><MdOutlineMoveToInbox className='mb-1 me-1'/> ORDERS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default ShopNav