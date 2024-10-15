import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { IoMdAppstore } from "react-icons/io";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoBagAdd } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { useState } from 'react';
import AddProModal from './AddProModal';
import { Link } from 'react-router-dom';


const DownNav = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            <Container className='down-nav-row'>
                <Row className='text-center'>
                    <Col lg={3} md={2} sm={2} xs={12}>
                        <Link to="/shoproducts" style={{textDecoration:"none"}}><h6 className='akshar-font down-nav-items' style={{cursor:"pointer"}}><IoMdAppstore className='me-1 mb-1'/>PRODUCTS</h6></Link>
                    </Col>
                    <Col lg={3} md={4} sm={4} xs={12}>
                        <h6 className='akshar-font down-nav-items' style={{cursor:"pointer"}}><RiAccountPinCircleFill className='me-1 mb-1'/> VIEW PROFILE</h6>
                    </Col>
                    <Col lg={3} md={4} sm={4} xs={12}>
                        <h6 className='akshar-font down-nav-items' style={{cursor:"pointer"}} onClick={handleShow}><IoBagAdd className='me-1 mb-1'/> ADD PRODUCTS</h6>
                    </Col>
                    <Col lg={3} md={2} sm={2} xs={12}>
                        <h6 className='akshar-font down-nav-items' style={{cursor:"pointer"}}><MdMessage className='me-1'/>COMPLAINTS</h6>
                    </Col>
                </Row>
            </Container>
            <AddProModal handleClose={handleClose} show={show}/>
        </>
    )
}

export default DownNav