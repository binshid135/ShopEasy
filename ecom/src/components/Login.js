import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import '../login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";





const Login = () => {
  const nav = useNavigate()
  const [u, uname] = useState("")
  const [ps, upass] = useState("")


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const sublog = async (e) => {
    if (e) {
      e.preventDefault()
    }
    const response = await axios.post('http://localhost:8090/user/loginpost', { u, ps })
    console.log(response.data.sid);
    if (response.data.data == "user") {
      sessionStorage.setItem("uid", response.data.uid)
      nav('/userhome')
    }
    else if (response.data.data == "shop") {
      sessionStorage.setItem("sid", response.data.sid)
      nav("/shophome")
    }
    else {
      alert("wrong username or password")
    }
  }
  return (
    <>
      <div className='login-bg'>
        <Container>
          <Row className='justify-content-center rw'>
            <Col lg={5} className='lg1'>
              <h1 className='sgin mt-5 ms-5'>Sign In</h1>
              <div className='mt-4'>
                <form onSubmit={sublog}>
                  <label className='ms-5 lbl'>EMAIL ID</label><br></br>
                  <div className='text-center mt-1'><input type='text' required placeholder='username' className='fldr' onChange={(e) => uname(e.target.value)}></input><br></br></div>
                  <label className='ms-5 mt-3 lbl'>PASSWORD</label><br></br>
                  <div className='text-center mt-1'><input type="password" required placeholder='password' className='fldr' onChange={(e) => upass(e.target.value)} /><br></br></div>
                  <div className='text-center mt-4'>
                    <button className='lbt' type="submit">Sign in</button></div>
                </form>
              </div>
            </Col>
            <Col lg={5} className='lg2 text-center'>
              <h1 className='wl'>Welcome To Login</h1>
              <p className='wl'>Don't have an account ?</p>
              <Link to="/userregister" style={{ textDecoration: "none" }}> <button className='sbt'>Sign Up</button></Link>
              <Row className='mt-5'>
                <GoogleOAuthProvider clientId="209133417230-pirf3hppuh3s5tjb8d2plaok8t02ch4t.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={async (credentialResponse) => {
                      const details = jwtDecode(credentialResponse.credential);
                      console.log(details);
                      const email = details.email
                      const n = details.name
                      const pic = details.picture
                      const response = await axios.post('http://localhost:8090/user/google', { email, n, pic })
                      if (response.data.data == "ok") {
                        uname(details.email)
                        upass("*****")
                        handleShow()
                      }
                      else if (response.data.data == "exist") {
                        uname(details.email)
                        upass("*****")
                        handleShow()
                      }
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </GoogleOAuthProvider>
              </Row>
            </Col>
          </Row>
        </Container>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>hi</Modal.Title>
          </Modal.Header>
          <Modal.Body>Sign up Succes Go to home page</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <form onSubmit={sublog}>
            <Button variant="primary" type="submit" >
              go to home 
            </Button>
            </form>
            
          </Modal.Footer>
        </Modal>
      </div>
    </>

  )
}

export default Login