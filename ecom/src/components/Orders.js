import React from 'react'
import MainNavbar from './Navbar'
import Head from './Head'
import Collections from './Collections'
import Producttypes from './Producttypes'
import Sidecategory from './Sidecategory'
import { Container, Row, Col } from 'react-bootstrap'
import Bestsellers from './Bestsellers'
import FooterAll from './FooterAll'
import OrderDesign from './OrderDesign'

const Orders = () => {
    return (
        <>
            <MainNavbar />
            <Head />
            <Container>
                <Row>
                    <Col lg={12} className='info-bar'>
                        Home / Orders
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={3} className='ps-4 mt-4'>
                        <Collections />
                        <Row className='mt-4'>
                            <Producttypes />
                        </Row>
                    </Col>
                    <OrderDesign />
                </Row>
            </Container>
            <FooterAll />
        </>
    )
}

export default Orders