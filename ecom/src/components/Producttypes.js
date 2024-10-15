import React from 'react'
import { Table, Row, Col, Container } from 'react-bootstrap'
import Offers from './Offers'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Producttypes = () => {
    const [shop, shopres] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8090/user/userhome').then(response => {
            console.log(response.data.data);
            shopres(response.data.data)
        })
    }, [])

    return (
        <>
            
                <Table border="1px" className=''>
                    <tr className='tbl-head'>
                        <th className='ps-3 pt-2 pb-2 tbl-head-text'>SHOPS</th>
                    </tr>
                    {shop.map((i) => (
                        <>
                        <tr><td className='collection-items ps-3 pt-2 pb-2'><Link to={`/shopsproduct/${i._id}`} className='link-items'>{i.shopname}</Link></td></tr>
                        </>
                    ))}
                </Table>
            
        </>
    )
}

export default Producttypes