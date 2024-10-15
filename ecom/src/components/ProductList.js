import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import '../product.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Pagination from 'react-bootstrap/Pagination';
import '../custom-pagination.css'


const ProductList = () => {

    

    const nav = useNavigate()
    const [product, prores] = useState([])
    const [proid, idres] = useState("")
    const [image, imgres] = useState("")
    const [price, prires] = useState("")

    const newtype = sessionStorage.getItem('newproid')

    // pagination

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;
    const numPages = Math.ceil(product.length / itemsPerPage);
    const pageNumbers = Array.from({ length: numPages }, (_, i) => i + 1);

    //pagination end

    useEffect(() => {

        const srch = sessionStorage.getItem('srch')
        if (srch) {
            axios.get(`http://localhost:8090/user/searchpost/${srch}`).then(response => {
                prores(response.data.data)
                console.log(response.data.data);
                sessionStorage.setItem('srch', "")
            })
        }
        else if (newtype) {
            axios.get(`http://localhost:8090/user/type/${newtype}`).then(response => {
                prores(response.data.data)
                sessionStorage.setItem('newproid', "")
            })
        }
        else {
            axios.get('http://localhost:8090/user/userproducts').then(response => {
                prores(response.data.data)
            })
        }
    }, [])

    const typeshow = (e) => {
        axios.get(`http://localhost:8090/user/type/${e}`).then(response => {
            prores(response.data.data)
        })
        setCurrentPage(1)
    }

    if (newtype){
        axios.get(`http://localhost:8090/user/type/${newtype}`).then(response => {
            prores(response.data.data)
            setCurrentPage(1)
            sessionStorage.setItem('newproid', "")
        })
        
    }

    const img = 'http://localhost:8090/'


    const sub = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const proid = formData.get('id')
        const pic = formData.get('image')
        const price = formData.get('price')
        const userid = sessionStorage.getItem("uid")
        // idres(id);
        // imgres(image);
        // prires(price);


        const response = await axios.post(`http://localhost:8090/user/cartpost`, {
            proid,
            price,
            userid,
        })
        console.log(proid);

        console.log(response.data.data);
        if (response.data.data == "ok") {
            nav('/cart')
        }
    }

    

    return (
        <>
            <Col lg={9} >
                <div className='feature-head'>
                    PRODUCTS
                </div>
                <Row>
                    <Col lg={5}>
                        <ul className='pro-nav mt-2'>
                            <li className='nav-items ps-2 pe-2'><div className='nav-text' onClick={() => typeshow("all")}>All</div></li>
                            <li className='nav-items ps-2 pe-2'><div className='nav-text' onClick={() => typeshow("grocery")}>Grocery</div></li>
                            <li className='nav-items ps-2 pe-2'><div className='nav-text' onClick={() => typeshow("electronics")}>Electronics</div></li>
                            <li className='nav-items ps-2 pe-2'><div className='nav-text' onClick={() => typeshow("fashion")}>Fashion</div></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    {product
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((i) => (
                            <Col lg={4} xs={12} className='ps-4 mt-4'>
                                <Card style={{ width: '15rem' }} className='card-style ms-4'>
                                    <Card.Img variant="top" src={`${img}${i.image}`} height="150px" width="100px" />
                                </Card>
                                <div className='text-center mt-4 ms-4 pro-text'>
                                    <h5 className='pro-name'>{i.name}</h5>
                                    <h6 className='pro-desc'>{i.desc}</h6>
                                    <h2 style={{ color: "rgb(255, 144, 140)" }}> ₹{i.price}</h2>
                                    <form onSubmit={sub} method='post'>
                                        <input type="hidden" value={i._id} onChange={(e) => { idres(e.target.value) }} name="id"></input>
                                        <input type="hidden" value={i.image} name="image"></input>
                                        <input type="hidden" value={i.price} name="price"></input>
                                        <button className='cart-btn' type="submit">ADD TO CART</button>
                                    </form>
                                </div>
                            </Col>
                        ))}
                </Row>
                <Pagination className='custom-pagination'>
                    {pageNumbers.map((number) => (
                        <Pagination.Item
                            key={number}
                            active={number === currentPage}
                            onClick={() => setCurrentPage(number)}
                           
                        >
                        {number}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </Col>
        </>
    )
}

export default ProductList