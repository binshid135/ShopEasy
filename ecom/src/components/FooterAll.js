import React from 'react'
import { Col,Row,Container } from 'react-bootstrap'
import '../footer.css'

const FooterAll = () => {
  return (
    <>
    <Container fluid className='mt-5 footer-row'>
        <Row className='mt-5'>
            <Col lg={2} className='ps-5'>
            <h6 className='head'>INFORMATION</h6>
            <div className='mt-4 subs'>
            <p className='subs-text'>Home</p>
            <p className='subs-text'>Products</p>
            <p className='subs-text'>About Us</p>
            <p className='subs-text'>Contact Us</p>
            </div>
            </Col>
            <Col lg={2} className='ps-5'>
            <h6 className='head'>PRODUCTS</h6>
            <div className='mt-4 subs'>
            <p className='subs-text'>Grocery</p>
            <p className='subs-text'>Electronics</p>
            <p className='subs-text'>Home Appliances</p>
            <p className='subs-text'>Fashion</p>
            <p className='subs-text'>Toys</p>
            <p className='subs-text'>Kitchen Accessories</p>


            </div>
            </Col>
            <Col lg={2} className='ps-5'>
            <h6 className='head'>MY ACCOUNT</h6>
            <div className='mt-4 subs'>
            <p className='subs-text'>My Account</p>
            <p className='subs-text'>My addresses</p>
            <p className='subs-text'>My Cart</p>
            </div>
            </Col>
            <Col lg={2} className='ps-5'>
            <h6 className='head'>CONTACT US</h6>
            <div className='mt-4 subs'>
            <p className='subs-text'>shopeasy@gmail.com</p>
            <p className='subs-text'>+91 6235548686</p>
            <p className='subs-text'>Sent a Complaint</p>
            </div>
            </Col>
            <Col lg={2} className='ps-5'>
            <h6 className='head'>FOLLOW US</h6>
            <div className='mt-4 subs'>
            <p className='subs-text'>Twitter</p>
            <p className='subs-text'>Facebook</p>
            <p className='subs-text'>Instagram</p>
            </div>
            </Col>
            <Col lg={2} className='ps-5'>
            <h6 className='head'>ONLINE SUPPORT</h6>
            <div className='mt-4 subs'>
            <p className='subs-text'>+91 6235548686</p>
            <p className='subs-text'>+91 9947119756</p>
            </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default FooterAll