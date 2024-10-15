
import React, { useState, useEffect } from 'react'
import MainNavbar from './Navbar'
import Head from './Head'
import Collections from './Collections'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../product.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Producttypes from './Producttypes'
import FooterAll from './FooterAll'
import Bestsellers from './Bestsellers'






const SpecificShopPro = () => {
  const nav = useNavigate()
  const { sid } = useParams()
  const [product, prores] = useState([])


  const [sho, shores] = useState("")





  useEffect(() => {
    axios.get(`http://localhost:8090/user/shopspro/${sid}`).then(response => {
      prores(response.data.data)
      shores(response.data.shop)
    })
  }, [])
  const img = 'http://localhost:8090/'

  const typeshow = (e) => {
    shores("ALL SHOPS")
    axios.get(`http://localhost:8090/user/type/${e}`).then(response => {
        prores(response.data.data)
    })
}

  const sub = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const proid = formData.get('id')
    const pic = formData.get('image')
    const price = formData.get('price')
    const userid = sessionStorage.getItem("uid")
    // idres(id);
    // imgres(image);
    // prires(price);


    const response = await axios.post(`http://localhost:8090/user/cartpost`, {
      proid,
      price,
      userid,
    })
    if (response.data.data == "ok") {
      nav('/cart')
    }
  }
  const newtype = sessionStorage.getItem('newproid')
  if (newtype) {
    axios.get(`http://localhost:8090/user/type/${newtype}`).then(response => {
      prores(response.data.data)
      sessionStorage.setItem('newproid', "")
    })

  }

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
              <Producttypes ></Producttypes>
            </Row>
          </Col>
          <Col lg={9} >
            <div className='feature-head'>
              PRODUCTS FROM {sho}
            </div>
            <Row>
              <Col lg={5}>
                <ul className='pro-nav mt-2'>
                  <li className='nav-items ps-2 pe-2'><div className='nav-text' onClick={() => typeshow("all")}>All</div></li>
                  <li className='nav-items ps-2 pe-2'><div className='nav-text' onClick={() => typeshow("grocery")}>Grocery</div></li>
                  <li className='nav-items ps-2 pe-2'><div className='nav-text' onClick={() => typeshow("electronics")}>Electronics</div></li>
                  <li className='nav-items ps-2 pe-2'><div className='nav-text' onClick={() => typeshow("fashion")}>Fashion</div></li>
                </ul>
              </Col>
            </Row>
            <Row>
              {product.map((i) => (
                <Col lg={4} xs={12} className='ps-4 mt-4'>
                  <Card style={{ width: '15rem' }} className='card-style ms-4'>
                    <Card.Img variant="top" src={`${img}${i.image}`} height="150px" width="100px" />
                  </Card>
                  <div className='text-center mt-4 ms-4 pro-text'>
                    <h5 className='pro-name'>{i.name}</h5>
                    <h6 className='pro-desc'>{i.desc}</h6>
                    <h2 style={{ color: "rgb(255, 144, 140)" }}> ₹{i.price}</h2>
                    <form onSubmit={sub}>
                      <input type="hidden" value={i._id} name="id"></input>
                      <input type="hidden" value={i.image} name="image"></input>
                      <input type="hidden" value={i.price} name="price"></input>
                      <button className='cart-btn' type="submit">ADD TO CART</button>
                    </form>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterAll />
    </>
  )
}
export default SpecificShopPro