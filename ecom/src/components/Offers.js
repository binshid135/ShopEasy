import React from 'react'
import { Col, Card } from 'react-bootstrap'
import '../home.css'

const Offers = () => {
    return (
        <>
            <Col lg={3} className='ps-4 mt-4'>
                <Card style={{ width: '15rem' }} className='card-style'>
                    <Card.Body className='d-block'>
                        <h1 className='card-heading'>FREE</h1>
                        <h4 className='card-middle'>SHIPPING</h4>
                        <h6 className='card-lower'>ON ORDERS ABOVE 1200</h6>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3} className='ps-4 mt-4'>
                <Card style={{ width: '15rem' }} className='card-style mt-2'>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/022/955/799/small/3d-sale-text-with-discount-tag-on-glossy-grey-background-for-special-weekend-advertising-banner-design-vector.jpg" style={{borderRadius:"0px"}}/>
                    {/* <Card.Body className='d-block'>
                        <h1 className='card-heading'>FREE</h1>
                        <h4 className='card-middle'>SHIPPING</h4>
                        <h6 className='card-lower'>ON ORDERS ABOVE 1200</h6>
                    </Card.Body> */}
                </Card>
            </Col>
            <Col lg={3} className='ps-4 mt-4'>
                <Card style={{ width: '15rem' }} className='card-style'>
                    <Card.Body className='d-block'>
                        <h1 className='card-heading'>FREE</h1>
                        <h4 className='card-middle'>SHIPPING</h4>
                        <h6 className='card-lower'>ON ORDERS ABOVE 1200</h6>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Offers