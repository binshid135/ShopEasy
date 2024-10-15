import React from 'react'
import { useState,useEffect } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap'
import '../home.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Head = ({newtotal,newlen}) => {

    const [total,totres]=useState()
    const [len,lengthres]=useState()
    const uid = sessionStorage.getItem("uid")
    const nav=useNavigate()

    const [srch,sres]=useState("")

    useEffect(() => {
        axios.get(`http://localhost:8090/user/cart/${uid}`).then(response => {
            totres(response.data.total)
            lengthres(response.data.length)
        })
    }, [])

    const searchsub=async()=>{
        sessionStorage.setItem('srch',srch)
        nav('/products')
    }
    

    return (
        <>
            <Container>
                <Row>
                    <Col lg={2}>
                        <div className='d-flex mt-5 logo' >
                            <img src="https://tm-shopify054-gifts.myshopify.com/cdn/shop/t/2/assets/logo.png?v=162403834116170981771402388195" height="50px" width="50px" className='me-2'></img>
                            <h5 className='head-name'>ShopEasy</h5>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='ad-div ms-5'>
                            <h6 className='ad ms-3'>THE BIGGEST<br></br></h6>
                            <h6 className='ad ms-3'>CHOICE ON THE WEB</h6>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='text-end crt-item'>
                            <Link to="/cart" className='link-new'><FaShoppingCart style={{ color: "rgb(255, 144, 140)", marginTop: "-3px" }} className='me-3' />
                            MY CART:{len} ITEM(S)-${total}</Link>
                        </div>
                    </Col>
                    <Col lg={3} className='text-end'>
                        <div className='search-div'>
                            <form onSubmit={searchsub}>
                                <div><input type='text' placeholder='search store...' className='search' onChange={(e)=>sres(e.target.value)} ></input></div>
                                {/* <button type='submit'>O</button> */}
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </> 
    )
}

export default Head