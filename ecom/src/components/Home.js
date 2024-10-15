import React from 'react'
import MainNavbar from './Navbar'
import Head from './Head'
import Sidecategory from './Sidecategory'
import Producttypes from './Producttypes'
import Bestsellers from './Bestsellers'
import FooterAll from './FooterAll'
import { Container, Row, Col } from 'react-bootstrap'
import Offers from './Offers'
import Featuredpro from './Featuredpro'

const Home = () => {
  return (
    <>
      <div>
        <MainNavbar />
        <Head />
        <Sidecategory />
        <Container fluid>
          <Row>
            <Col lg={3} className='ps-4 mt-3'>
              <Producttypes />
            </Col>
            <Offers />
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col lg={3} className='ps-4 mt-3'>
              <Bestsellers />
            </Col>
            <Featuredpro />
          </Row>
        </Container>
        <FooterAll />
      </div >
    </>
  )
}

export default Home