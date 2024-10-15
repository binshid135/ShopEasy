import React from 'react'
import { Carousel, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../customcarousel.css'
import { useNavigate } from 'react-router-dom';

const Homecarousel = () => {
    const nav=useNavigate()
    const goto=()=>{
        nav('/products')
    }
    return (
        <>
            <Col lg={9} className='mt-4'>
                <Carousel className='ms-4'>
                    <Carousel.Item>
                        <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651" width="950px" height="350px" text="First slide" onClick={goto}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://www.founderjar.com/wp-content/uploads/2022/05/Trending-Products-to-Sell-Online.jpg" width="950px" height="350px" text="Second slide" onClick={goto}/>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-grocery-store-ad-template-design-9c346c53f0334384ccdb7ab5c76e4f96_screen.jpg?ts=1698450776" width="950px" height="350px" text="Third slide" onClick={goto} />
                        
                    </Carousel.Item>
                </Carousel>
            </Col>
        </>
    )
}

export default Homecarousel