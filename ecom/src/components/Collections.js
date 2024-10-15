import React from 'react'
import { Col,Table,Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Collections = () => {
    const nav=useNavigate()
    const type=(e)=>{
        sessionStorage.setItem('newproid',e)
        nav('/products')
    }
    return (
        <>
            
                <Row>
                <Table border="1px" className=''>
                    <tr className='tbl-head'>
                        <th className='ps-3 pt-2 pb-2 tbl-head-text'>COLLECTIONS</th>
                    </tr>
                    <tr><td className='collection-items ps-3 pt-2 pb-2' onClick={()=>type("grocery")}>Grocery</td></tr>
                    <tr><td className='collection-items ps-3 pt-2 pb-2' onClick={()=>type("electronics")}>Electronics</td></tr>
                    <tr><td className='collection-items ps-3 pt-2 pb-2' onClick={()=>type("fashion")}>Fashion</td></tr>
                    <tr><td className='collection-items ps-3 pt-2 pb-2' onClick={()=>type("kitchen accessory")}>Kitchen Accessory</td></tr>
                    <tr><td className='collection-items ps-3 pt-2 pb-2' onClick={()=>type("toys")}>Toys</td></tr>
                    <tr><td className='collection-items ps-3 pt-2 pb-2' onClick={()=>type("footwear")}>Footwears</td></tr>
                    <tr><td className='collection-items ps-3 pt-2 pb-2' onClick={()=>type("home appliances")}>Home Appliances</td></tr>
                </Table>
                </Row>
           
        </>
    )
}

export default Collections