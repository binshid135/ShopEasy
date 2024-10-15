import React from 'react'
import { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col, Nav, NavDropdown, Modal, Button,Table } from 'react-bootstrap'
import '../home.css'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainNavbar = () => {
    const nav = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, ures] = useState([])

    const logout = () => {
        sessionStorage.setItem('uid',"")
        nav('/login')
    }

    const uid = sessionStorage.getItem('uid')

    useEffect(() => {
        axios.get(`http://localhost:8090/user/userview/${uid}`).then(response => {
            ures(response.data.data)
        })
    }, [])
    const img = 'http://localhost:8090/'

    
    const type=(e)=>{
        sessionStorage.setItem('newproid',e)
        nav('/products')
    }
    return (
        <>
            <div>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Navbar collapseOnSelect expand="lg" className="nav-main">
                                <Container>
                                    <Nav>
                                        <Nav.Link className='nav-item-text'><Link to="/userhome" className='nav-item-links'>HOME</Link></Nav.Link>
                                    </Nav>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link className='nav-item-text'>
                                                <div className='dropdown'><Link to="/products" className='nav-item-links'>PRODUCTS</Link>
                                                    <div class="dropdown-content">
                                                        <a onClick={()=>type("grocery")} className='nav-items-links'>grocery</a>
                                                        <a onClick={()=>type("electronics")} className='nav-items-links'>electronics</a>
                                                        <a onClick={()=>type("fashion")} className='nav-items-links'>fashion</a>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                            <Nav.Link className='nav-item-text'><Link to="/contactus" className='nav-item-links'>CONTACT US</Link></Nav.Link>
                                            <Nav.Link className='nav-item-text'><Link to="/orders" className='nav-item-links'>ORDERS</Link></Nav.Link>
                                            <Nav.Link className='nav-item-text'>ABOUT US</Nav.Link>
                                        </Nav>
                                        <Nav>
                                            <Nav.Link className='user-icon' onClick={handleShow}><FaUser className='ms-1 me-1' /></Nav.Link>
                                            {/* <Nav.Link eventKey={2}>Dank memes</Nav.Link> */}
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton className='modal-head'>
                        <Modal.Title>My Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col lg={5}>
                                <img src={user.image} className='profile-img' height="150px" width="150px"></img>
                            </Col>
                            <Col lg={7}>
                                <Table border="1px" className=''>
                                    <tr className='tbl-head'>
                                        <th className='ps-3 pt-2 pb-2 tbl-head-text'>{user.name}</th>
                                    </tr>
                                    <tr><td className='collection-items ps-3 pt-2 pb-2'>{user.age} years old</td></tr>
                                    <tr><td className='collection-items ps-3 pt-2 pb-2'>{user.gender}</td></tr>
                                    <tr><td className='collection-items ps-3 pt-2 pb-2'>{user.mobile}</td></tr>
                                </Table>
                            </Col>

                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="cart-btn" onClick={handleClose}>
                            Close
                        </button>
                        <button className='cart-btn' onClick={logout}>
                            Log Out
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default MainNavbar