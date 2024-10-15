import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../shopproducts.css'
import ShopNav from './ShopNav'
import ProCard from './ProCard'

const ShopProducts = () => {
  return (
   <>
   <div className='pro-bg'>
    <ShopNav />
    <center><h1 className='bokor-regular mt-4'>Your Products</h1></center>
    <Container className='mt-3'>
        <Row>
            <ProCard />
        </Row>
    </Container>
   </div>
   </>
  )
}

export default ShopProducts