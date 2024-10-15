import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

const OrderDesign = () => {
    const [orderpro, orderfun] = useState([])
    const uid = sessionStorage.getItem('uid')

    useEffect(() => {
        axios.get(`http://localhost:8090/user/ordered/${uid}`).then(response => {
            orderfun(response.data.data)
        })
    }, [])
    const img = 'http://localhost:8090/'



    return (
        <>
            <Col lg={9} >
                <div className='feature-head'>
                    YOUR ORDERS
                </div>
                {orderpro.map((i) => (
                    <Row className='mt-3'>
                        <Col lg={3} className='mt-2 ms-3'>
                            <img src={`${img}${i.prod.image}`} width="200px" height="200px"></img>
                        </Col>
                        <Col lg={8}>
                            <Row style={{ borderBottom: "1px solid", color: "rgb(229, 229, 229)" }}>
                                <div className='pro-name mt-3'>{i.prod.name}</div><br></br>
                                <div className='cart-shop-name mt-1'>{i.shop.shopname}</div><br></br>
                            </Row>
                            <div className='mt-3'>
                                 Qty:<input type='number' readOnly style={{ width: "70px", height: "40px" }} min="1" max="20" className='ms-2 qty-box' value={i.quantity}></input>
                                 <div className='pro-name text-end'>Status : {i.status}</div> 
                            </div>

                            <Col lg={1}>
                                {/* <button className='cart-btn mt-1' type="submit" onClick={() => del(i._id, i.prodtot)}>remove</button> */}
                            </Col>
                            <Row>
                                <div className='text-end mt-3' style={{ color: "rgb(255, 144, 140)" }}>TOTAL: ₹{i.prodtot}</div>
                            </Row>
                        </Col>
                    </Row>
                ))}
            </Col>
        </>
    )
}

export default OrderDesign