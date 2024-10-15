import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import '../home.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Featuredpro = () => {
  const nav=useNavigate()
  const [shop, shopres] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8090/user/userhome').then(response => {
      console.log(response.data.data);
      shopres(response.data.data)
    })
  }, [])
  const img = 'http://localhost:8090/'


  

  return (
    <>
      <Col lg={9} >
        <div className='feature-head'>
          FEATURED SHOPS
        </div>
        <Row>
          {shop.map((i)=>(
          <Col lg={4} className='ps-4 mt-4 text-center'>
            <Card style={{ width: '15rem' }} className='card-style ms-3'>
              <Card.Img variant="top" src={`${img}${i.licence}`} height="150px" width="100px" />

            </Card>
            <div className='mt-4 ms-4'>
              <h5 className='pro-name'>{i.shopname}</h5>
              <h6 className='pro-desc'>{i.shopemail}</h6>
              {/* <h2 style={{color:"rgb(255, 144, 140)"}}> ₹66.00</h2> */}
              <Link to={`/shopsproduct/${i._id}`} style={{textDecoration:"none"}}><button className='cart-btn'>VIEW PRODUCTS</button></Link>
            </div>
          </Col>
          ))}
        </Row>
      </Col>
    </>
  )
}

export default Featuredpro