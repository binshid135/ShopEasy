import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProModal = ({ show, handleClose }) => {
    const nav=useNavigate()
    const [name,nres]=useState("")
    const [type,catres]=useState("")
    const [description,descres]=useState("")
    const [price,prires]=useState()
    const [fl,flres]=useState("")


    const sid=sessionStorage.getItem('sid')

    const sub=async(e)=>{
        e.preventDefault()
        const response=await axios.post(`http://localhost:8090/product/addpropost/${sid}`,{name,type,description,price,fl},{headers:{'Content-Type':'multipart/form-data'}})
        console.log(name,type,description,price,fl); 
        console.log(response.data.data);
        nav('/shoproducts')
    }



    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{ backgroundColor: "rgb(248, 243, 240)" }}>
                    <Modal.Title className='bokor-regular justify-content-center'>Add Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "rgb(248, 243, 240)" }}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <form onSubmit={sub}>
                                    <input type='text' required placeholder='product name' className='add-inputs' onChange={(e)=>nres(e.target.value)}></input><br></br>
                                    <input type='text' required placeholder='product category' className='add-inputs mt-3' onChange={(e)=>catres(e.target.value)}></input><br></br>
                                    <textarea  required placeholder='description' maxLength="60" className='add-inputs mt-3' onChange={(e)=>descres(e.target.value)}></textarea>
                                    <input type="number" required placeholder='enter price' className='add-inputs mt-3' min="1" onChange={(e)=>prires(e.target.value)}></input><br></br>
                                    <input type="file" required className='add-inputs mt-3 form-control' style={{backgroundColor:"white"}} onChange={(e)=>flres(e.target.files[0])}></input><br></br>
                                    <center><button className='add-pro-btn lilita-one-regular'>ADD</button></center>
                                </form>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "rgb(248, 243, 240)" }}>
                    <button className='add-pro-btn akshar-font' style={{paddingTop:"7px",paddingBottom:"7px",paddingLeft:"12px",paddingRight:"12px",color:"white"}} onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProModal