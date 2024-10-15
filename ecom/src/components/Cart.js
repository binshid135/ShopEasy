import React from 'react'
import MainNavbar from './Navbar'
import Head from './Head'
import Collections from './Collections'
import CartDesign from './CartDesign'
import FooterAll from './FooterAll'
import { Container, Row, Col } from 'react-bootstrap'


const Cart = () => {
    return (
        <>
            <MainNavbar />
            {/* <Head />
            <Container>
                <Row>
                    <Col lg={12} className='info-bar'>
                        Home / Your Shopping Cart
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Collections /> */}
                    <CartDesign />
                {/* </Row>
            </Container> */}
            <FooterAll />
        </>
    )
}

export default Cart