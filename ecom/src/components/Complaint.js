import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../product.css'
import { useNavigate } from 'react-router-dom'

const Complaint = () => {
    const nav=useNavigate()
    const [name,nres]=useState("")
    const [shop,sres]=useState("")
    const [phone,pres]=useState()
    const [msg,msgres]=useState("")

    // const sub=async(e)=>{
    //     e.preventDefault();
    //     const id=sessionStorage.getItem("uid");
    //     const response=await axios.post(`http://localhost:8090/user/complaintpost/${name}/${phone}/${msg}/${id}/${shop}`)
    //     console.log(response.data.data);
    //     console.log(name,shop,phone,msg,id);
        
    //     if(response.data.data=="no shop"){
    //         alert("the shop is not registered")
    //     }
    //     else{
    //     alert("message successfully sent")
    //     }
    // }


    const sub=async(e)=>{
        e.preventDefault();
        const id=sessionStorage.getItem("uid");
        const response=await axios.post('http://localhost:8090/user/complaintpost',{name,shop,phone,msg,id})

        console.log(response.data.data);
        console.log(name,shop,phone,msg,id);
        
        if(response.data.data=="no shop"){
            alert("the shop is not registered")
        }
        else{
        alert("message successfully sent")
        }
    }

    
    const clear=(e)=>{
        e.preventDefault()
        nres("")
        sres("")
        pres("")
        msgres("")
    }

    return (
        <>
            <Col lg={9} >
                <div className='feature-head'>
                    CONTACT US
                </div>
                <form onSubmit={sub}>
                <Container fluid>
                    
                <Row className='mt-4 ms-1'>
                    <Col lg={4}>
                        <input type='text' placeholder="Your name..." className='complaint-inputs mt-1' value={name} onChange={(e)=>nres(e.target.value)}></input>
                    </Col>
                    <Col lg={4}>
                        <input type='text' placeholder="enter shop name..." className='complaint-inputs mt-1' value={shop} onChange={(e)=>sres(e.target.value)}></input>
                    </Col>
                    <Col lg={4}>
                        <input type='text' placeholder="Your phone number..." className='complaint-inputs mt-1' value={phone} onChange={(e)=>pres(e.target.value)}></input>
                    </Col>
                </Row>
                </Container>
                <Container fluid>
                <Row className='mt-3 ms-3 me-3'>
                    <textarea placeholder='your message' style={{height:"150px"}} className='complaint-inputs mt-1' value={msg} onChange={(e)=>msgres(e.target.value)}></textarea>
                </Row>
                <Row className='ms-1 mt-3'>
                    <Col lg={1}>
                    <button className='cart-btn mt-1' type="submit">SENT</button>
                    </Col>
                    <Col lg={1}>
                    <form onSubmit={clear}>
                    <button className='cart-btn mt-1' type="submit">CLEAR</button>
                    </form>
                    </Col>
                </Row>
                </Container>
                </form>
            </Col>
        </>
    )
}

export default Complaint