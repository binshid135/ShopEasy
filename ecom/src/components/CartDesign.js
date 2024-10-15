import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../product.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Head from './Head'
import Collections from './Collections'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import Producttypes from './Producttypes'
import Bestsellers from './Bestsellers'

const CartDesign = () => {
    const nav = useNavigate()
    const [cartpro, res] = useState([])
    const [tot, totres] = useState()
    const uid = sessionStorage.getItem("uid")

    const [qty, qres] = useState()
    const [newlength, lenres] = useState()
    console.log(newlength);

    useEffect(() => {
        axios.get(`http://localhost:8090/user/cart/${uid}`).then(response => {
            res(response.data.data)
            totres(response.data.total)
            lenres(response.data.length)
        })
    }, [])
    const img = 'http://localhost:8090/'

    const del = (delid, prodtot) => {
        axios.post(`http://localhost:8090/user/close/${delid}`).then(response => {
            res(cartpro.filter(item => item._id !== delid))
            totres(tot - prodtot)
            lenres(cartpro.length - 1)
            // window.location.reload()
        })

    }

    // const qtysub=async(e,id)=>{
    //     qres(e)
    //     const response=await axios.post(`http://localhost:8090/user/qty/${e}/${id}`)
    //     console.log(response.data.data);
    //     window.location.reload()  
    // }

    const addqt = async (id, qt) => {

        const newqt = qt + 1
        const response = await axios.post(`http://localhost:8090/user/qty`, { id, newqt })
        console.log(response.data.data);
        window.location.reload()


    }
    const subqt = async (id, qt) => {

        if (qt > 1) {
            const newqt = qt - 1
            const response = await axios.post(`http://localhost:8090/user/qty`, { id, newqt })
            console.log(response.data.data);
            window.location.reload()

        }
        else if (qt = 1) {
            alert("quantity cannot be 0 ! remove if dont want")
        }
        else {
            const newqt = qt
            const response = await axios.post(`http://localhost:8090/user/qty`, { id, newqt })
            console.log(response.data.data);
            window.location.reload()
        }

    }

    const more = () => {
        nav('/products')
    }

    return (
        <>

            {/* new head start */}

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
                                MY CART:{newlength} ITEM(S)-${tot}</Link>
                        </div>
                    </Col>
                    <Col lg={3} className='text-end'>
                        <div className='search-div'>
                            <form>
                                <div><input type='text' placeholder='search store...' className='search'></input></div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12} className='info-bar'>
                        Home / Your Shopping Cart
                    </Col>
                </Row>
            </Container>

            {/* new head end */}

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
                    <Col lg={9} >
                        <div className='feature-head'>
                            SHOPPING CART
                        </div>
                        {cartpro.map((i) => (
                            <Row className='mt-3'>
                                <Col lg={3} className='mt-2 ms-3'>
                                    <form>
                                    </form>
                                    <img src={`${img}${i.image}`} width="200px" height="200px"></img>
                                </Col>
                                <Col lg={8}>
                                    <Row style={{ borderBottom: "1px solid", color: "rgb(229, 229, 229)" }}>
                                        <div className='pro-name mt-3'>{i.name}</div><br></br>
                                        <div className='cart-shop-name mt-1'>{i.shop}</div><br></br>
                                    </Row>
                                    <div className='d-flex mt-3'><h2 style={{ color: "rgb(255, 144, 140)" }}> ₹{i.price}</h2>
                                        <div className='ms-5'>
                                            {/* Qty:<input type='number' style={{ width: "70px", height: "40px" }} className='ms-2 qty-box' value={qty} onChange={(e) => qres(e.target.value)}></input></div></div> */}
                                            Qty:<input type='number' readOnly style={{ width: "70px", height: "40px" }} min="1" max="20" className='ms-2 qty-box' value={i.quantity}></input></div>
                                        <div className='d-flex flex-column ms-4 cng-qt-div'>
                                            <button onClick={() => addqt(i._id, i.quantity)} className='cart-btn add-btn' style={{ padding: "2px 10px 2px 10px" }}>+</button>
                                            <button onClick={() => subqt(i._id, i.quantity)} className='cart-btn sub-btn mt-2' style={{ padding: "2px 2px 2px 2px" }}>-</button>
                                        </div>
                                    </div>

                                    <Col lg={1}>
                                        <button className='cart-btn mt-1' type="submit" onClick={() => del(i._id, i.prodtot)}>remove</button>
                                    </Col>
                                    <Row>
                                        <div className='text-end mt-3' style={{ color: "rgb(255, 144, 140)" }}>TOTAL: ₹{i.prodtot}</div>
                                    </Row>
                                </Col>
                            </Row>
                        ))}
                        <Row className='mt-3'>
                            <Col lg={12}>
                                <div className='ms-3 me-3 sub-total'>
                                    <div className='pt-3  pb-1'>SUBTOTAL : </div><h6 className='text-end pb-2' style={{ marginTop: "-25px" }}>₹{tot}</h6>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-3 ps-4'>
                            <Col lg={12} style={{ color: "rgb(122, 138, 167);" }}>
                                Continue Shoping <button className='cart-btn' onClick={more}>ADD MORE PRODUCTS</button> or <button className='cart-btn'>CHECK OUT</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CartDesign