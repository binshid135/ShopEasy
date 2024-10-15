import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Landing from './Landing'
import Userreg from './Userreg'
import Home from './Home'
import Products from './Products'
import ContactUs from './ContactUs'
import Cart from './Cart'
import SpecificShopPro from './SpecificShopPro'
import Orders from './Orders'


const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/shopregister" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/userregister" element={<Userreg />}/>
        <Route path="/userhome" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/shopsproduct/:sid" element={<SpecificShopPro />} />
        <Route path="/orders" element={<Orders />} />
    </Routes>
    </>
  )
}

export default Routing