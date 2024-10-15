import React from 'react'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from 'react-bootstrap'
import '../style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const nav=useNavigate()
    const [n,nes]=useState("")
    const [p,pes]=useState("")
    const [m,mes]=useState()
    const [em,emres]=useState("")
    const [pl,plres]=useState("")
    const [pi,pires]=useState()
    const [fl,fles]=useState(null)
    console.log(fl);


    const sub=async(e)=>{
        e.preventDefault()
        const response=await axios.post('http://localhost:8090/product/shoppost',{n,p,m,em,pl,pi,fl},{headers:{'Content-Type':'multipart/form-data'}})
        
        console.log(response.data.data)
        if(response.data.data=="ok"){
            nav('/login')
        }
    }


  return (
    <>
    <div className='bd'>
    <Container>
        
        <Row>
            <Col lg={7} md={8} sm={10} xs={12} className='ms-1 mt-5'><h1 className='anim-text'>Register your Shop !. <br></br>Now</h1></Col>
            <Col lg={5} md={4} sm={10} xs={10} className='col'>
            <center>
            <form className='mt-5 mb-5' onSubmit={sub}>
            <input type="text" required placeholder='enter shop name' className='fld mb-3 ps-4 form-control' value={n} onChange={(e)=>nes(e.target.value)}></input>
            <input type="password" required placeholder='enter your new password' className='fld mb-3 ps-4 form-control' value={p} onChange={(e)=>pes(e.target.value)}></input>
            <input type="number" required placeholder='enter contact number' className='fld mb-3 ps-4 form-control' value={m} onChange={(e)=>mes(e.target.value)}></input>
            <input type="text" required placeholder='enter mail id' className='fld mb-3 ps-4 form-control' value={em} onChange={(e)=>emres(e.target.value)}></input>
            <input type="text" required placeholder='enter place' className='fld mb-3 ps-4 form-control' value={pl} onChange={(e)=>plres(e.target.value)}></input>
            <input type="number" required placeholder='enter pincode' className='fld mb-3 ps-4 form-control' value={pi} onChange={(e)=>pires(e.target.value)}></input>
            <label style={{color:"black"}}>Upload an image:</label>
            <input type="file" required className=' fld mb-2 mt-1 form-control' onChange={(e)=>fles(e.target.files[0])}></input>
            <center><button className='btn frbt' type="submit">Register</button></center>
            </form>
            </center>
            </Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default Register