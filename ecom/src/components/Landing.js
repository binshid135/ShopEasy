import React from 'react'
import '../landing.css'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { GiShop } from "react-icons/gi";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const Landing = () => {


  return (
    <>
      <div className='lb'>
        <Container>
          <Row>
            <Col lg={6} className='im .d-none .d-sm-block'>
              <img src="./landing.png" width="600px" height="400px" ></img>
            </Col>
            <Col lg={6} className='sd'>
              <div className='sr text-end'><Link to="/shopregister" className='lnk'><h6 className='mt-3' style={{ color: "rgb(8,9,63)", alignItems: "baseline" }}><GiShop className='me-3' style={{ width: "30px", height: "30px" }} />Register your shop</h6></Link></div>
              <div className='text-end'>
                <h1 className='txt'>Online Shopping<br></br>Services</h1>
                <p style={{ fontFamily: "serif" }}>Buy and Sell your products on our website<br></br>
                  Register your shop to sell your products<br></br>
                  Or Register as a customer<br></br> to buy products from different Sellers</p>
                <Link to="/login"><button className='lg-button'>Log in</button></Link><Link to="/userregister" style={{ textDecoration: "none" }}><button className='sg-button'>sign up</button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Landing