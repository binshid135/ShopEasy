import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EditProModal = ({ handleClose, show }) => {
    const nav = useNavigate()
    const [name, nres] = useState("")
    const [type, catres] = useState("")
    const [description, descres] = useState("")
    const [price, prires] = useState()
    const [fl, flres] = useState("")
    const[id,idres]=useState("")


    const proid = sessionStorage.getItem('proid')

    

   
        if(proid){
        axios.get(`http://localhost:8090/product/edit/${proid}`).then(response=>{
            nres(response.data.data.name)
            catres(response.data.data.type)
            descres(response.data.data.desc)
            prires(response.data.data.price)
            idres(response.data.data._id)
            sessionStorage.setItem('proid',"")
        })
        
    }
    



    const sub = async(e) => {
        e.preventDefault()
        const response=await axios.post(`http://localhost:8090/product/editpost`,{name,type,description,price,fl,id},{headers:{'Content-Type':'multipart/form-data'}})
        console.log(name,type,description,price,fl); 
        console.log(response.data.data);
        window.location.reload()

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
                    <Modal.Title className='bokor-regular justify-content-center'>Edit Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "rgb(248, 243, 240)" }}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <form onSubmit={sub}>
                                    <input type='text' required placeholder='product name' className='add-inputs' value={name} onChange={(e) => nres(e.target.value)}></input><br></br>
                                    <input type='text' required placeholder='product category' className='add-inputs mt-3' value={type} onChange={(e) => catres(e.target.value)}></input><br></br>
                                    <textarea required placeholder='description' maxLength="60" className='add-inputs mt-3' value={description} onChange={(e) => descres(e.target.value)}></textarea>
                                    <input type="number" required placeholder='enter price' className='add-inputs mt-3' min="1" value={price} onChange={(e) => prires(e.target.value)}></input><br></br>
                                    <input type="file" className='add-inputs mt-3 form-control' style={{ backgroundColor: "white" }} onChange={(e) => flres(e.target.files[0])}></input><br></br>
                                    <center><button className='add-pro-btn lilita-one-regular'>SUBMIT CHANGES</button></center>
                                </form>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "rgb(248, 243, 240)" }}>
                    <button className='add-pro-btn akshar-font' style={{ paddingTop: "7px", paddingBottom: "7px", paddingLeft: "12px", paddingRight: "12px", color: "white" }} onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditProModal