import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShopHome from './ShopHome'
import ShopProducts from './ShopProducts'

const Routingshop = () => {
    return (
        <>
            <Routes>
                <Route path="/shophome" element={<ShopHome />} />
                <Route path="/shoproducts" element={<ShopProducts />} />
            </Routes>
        </>
    )
}

export default Routingshop