import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Featuredpro from './Featuredpro'

const Bestsellers = () => {
    return (
        <>

            <Table border="1px" className=''>
                <tr className='tbl-head'>
                    <th className='ps-3 pt-2 pb-2 tbl-head-text'>BEST SELLERS</th>
                </tr>
                <tr><td className='collection-items ps-3 pt-2 pb-2'>Daily use</td></tr>
                <tr><td className='collection-items ps-3 pt-2 pb-2'>Long term use</td></tr>
            </Table>

        </>
    )
}

export default Bestsellers