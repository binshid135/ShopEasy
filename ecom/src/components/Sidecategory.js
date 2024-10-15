import React from 'react'
import { Table, Row, Col, Container } from 'react-bootstrap'
import Homecarousel from './Homecarousel'
import Collections from './Collections'
import Producttypes from './Producttypes'

const Sidecategory = () => {
    return (
        <>
            <Container fluid>
                <Row>
                <Col lg={3} className='ps-4 mt-4'>
                    <Collections />
                </Col>
                    <Homecarousel />
                </Row>
            </Container>
        </>
    )
}

export default Sidecategory