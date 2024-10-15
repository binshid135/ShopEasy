import React from 'react'
import MainNavbar from './Navbar'
import Head from './Head'
import Collections from './Collections'
import ProductList from './ProductList'
import FooterAll from './FooterAll'
import { Container, Row, Col } from 'react-bootstrap'
import '../product.css'
import Producttypes from './Producttypes'
import Bestsellers from './Bestsellers'


const Products = () => {
  return (
    <>
      <MainNavbar />
      <Head />
      <Container>
        <Row>
          <Col lg={12} className='info-bar'>
            Home / products
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={3} className='ps-4 mt-4'>
            <Collections />
            <Row className='mt-5'>
              <Producttypes />
            </Row>
            <Row className='mt-5'>
              <Bestsellers />
            </Row>
          </Col>
          <ProductList />
        </Row>
      </Container>
      <FooterAll />
    </>
  )
}

export default Products