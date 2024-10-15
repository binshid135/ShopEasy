import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../style.css'
import { useNavigate } from 'react-router-dom'


const Userreg = () => {
    const nav = useNavigate()

    const [n, nes] = useState("")
    const [p, pes] = useState("")
    const [m, mes] = useState()
    const [fl, fles] = useState("")
    const [ag, ages] = useState()
    const [ge,ges]= useState()
    const [em,mailres]=useState("")

    const sub = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:8090/user/userpost', { n, p, m, fl, ag ,ge,em}, { headers: { 'content-type': 'multipart/form-data' } })
        console.log(n);
        if (response.data.data == "ok") {
            nav('/login')
        }
        else if(response.data.data == "exist"){
            alert("email id already registered")
        }
    }
    
    return (
        <>
            <div className='bd'>
                <Container>

                    <Row>
                        <Col lg={7} md={8} sm={10} xs={12} className='ms-1 mt-5'><h1 className='anim-text'>Register Now !.</h1></Col>
                        <Col lg={5} md={4} sm={10} xs={10} className='col' style={{ marginBottom: "95px" }}>
                            <center>
                                <form className='mt-5 mb-5' onSubmit={sub}>
                                    <input type="text" required placeholder='email id' className='fld mb-3 ps-4 form-control' value={em} onChange={(e) => mailres(e.target.value)}></input>
                                    <input type="text" required placeholder='enter your username' className='fld mb-3 ps-4 form-control' value={n} onChange={(e) => nes(e.target.value)}></input>
                                    <input type="password" required placeholder='enter your new password' className='fld mb-3 ps-4 form-control' value={p} onChange={(e) => pes(e.target.value)}></input>
                                    <input type="number" required placeholder='enter contact number' className='fld mb-3 ps-4 form-control' value={m} onChange={(e) => mes(e.target.value)}></input>
                                    <input type="number" required placeholder='enter your age' className='fld mb-3 ps-4 form-control' value={ag} onChange={(e) => ages(e.target.value)}></input>

                                    <div className='mb-3'>
                                        <label className='me-4'>Gender:</label>
                                        <label className='ms-1'>Male:</label><input type="radio" name="gender" value="male" onChange={(e)=> ges(e.target.value)}/>
                                        <label className='ms-1'>female:</label><input type="radio" name="gender" value="female" onChange={(e)=> ges(e.target.value)}/><br></br>
                                    </div>

                                    <label style={{ color: "black" }}>Upload an image:</label>
                                    <input type="file" required className=' fld mb-2 mt-1 form-control' onChange={(e) => fles(e.target.files[0])}></input>
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

export default Userreg