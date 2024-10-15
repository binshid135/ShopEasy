import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../custom-carousel.css'
import EditProModal from './EditProModal';

const ProCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pro,prores]=useState([])

  const sid=sessionStorage.getItem("sid")

  useEffect(() => {
    axios.get(`http://localhost:8090/product/products/${sid}`).then(response => {
      console.log(response.data.data);
      prores(response.data.data)
    })
  }, [])
  const img = 'http://localhost:8090/'

  const change=async(e)=>{
    sessionStorage.setItem('proid',e)
    handleShow()
  }
   
  


  return (
    <>
      <ReactOwlCarousel
        className='owl-theme ms-5'
        items="3"
        autoplay
        nav={true}
        loop
      >
        {pro.map((i)=>(
        <Col lg={3}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${img}${i.image}`} height="200px" />
            <Card.Body className='text-center'>
              <Card.Title className='bokor-regular mt-3'>{i.name}</Card.Title>
              <Card.Text className='edu-au-vic-wa-nt-hand-sub mt-3'>
               {i.desc}
              </Card.Text>
              <button className='add-pro-btn lilita-one-regular' onClick={()=>change(i._id)}>Edit Details</button>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </ReactOwlCarousel>
      <EditProModal handleClose={handleClose} show={show}/>
    </>
  )
}

export default ProCard