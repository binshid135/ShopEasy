import React from 'react'
import MainNavbar from './Navbar'
import Head from './Head'
import Collections from './Collections'
import Complaint from './Complaint'
import { Container, Row, Col } from 'react-bootstrap'
import '../product.css'
import FooterAll from './FooterAll'
import Producttypes from './Producttypes'

const ContactUs = () => {
    return (
        <>
            <MainNavbar />
            <Head />
            <Container>
                <Row>
                    <Col lg={12} className='info-bar'>
                        Home / Contact Us
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={3} className='ps-4 mt-4'>
                        <Collections />
                        {/* <Row className='mt-5'>
                            <Producttypes />
                        </Row> */}
                    </Col>
                    <Complaint />
                </Row>
            </Container>
            <FooterAll />
        </>
    )
}

export default ContactUs