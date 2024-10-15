import React from 'react'
import '../shophome.css'
import { Container, Row, Col,Button,Modal } from 'react-bootstrap'
import { useState } from 'react'
import AddProModal from './AddProModal'

const Intro = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Col lg={4} xs={12} className='ps-5 new-back'>
        <h6 className='lilita-one-regular'> EASY AS YOU LIKE</h6>
        <h1 className='bokor-regular'>Sell Your Products</h1>
        <p className='edu-au-vic-wa-nt-hand-sub mt-3'>
          Are you ready to take your business to the next level? Join our dynamic marketplace and reach a broader audience by listing your products on our website.
        </p>
        <button className='add-pro-btn lilita-one-regular mt-3' onClick={handleShow}>ADD YOUR PRODUCTS</button>
      </Col>
      <Col lg={6} className='side-image'>
        <img src="../sideimgnobg.png" width="800px" height="460px" className='sd-img'></img>
      </Col>
      <AddProModal handleClose={handleClose} show={show}/>
    </>
  )
}

export default Intro