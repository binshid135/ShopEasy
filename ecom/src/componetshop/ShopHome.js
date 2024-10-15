import React from 'react'
import '../shophome.css'
import ShopNav from './ShopNav'
import Intro from './Intro'
import DownNav from './DownNav'
import { Container,Row,Col } from 'react-bootstrap'


const ShopHome = () => {
  return (
    <>
    <div className='bdbg'>
    <ShopNav />
    <Container fluid>
        <Row className='mt-5'>
            <Intro />
        </Row>
    </Container>
    <DownNav />

    </div>
    </>
  )
}

export default ShopHome