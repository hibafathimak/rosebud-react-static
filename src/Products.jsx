import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Products.css'


const Products = () => {
    return (
       <>
           <div className='mx-2'>
                <div className='text-center py-5' style={{backgroundColor:'#fff0e9'}}>
                    <p style={{color:"black", fontFamily: '"Mr De Haviland", cursive',textTransform:'capitalize' ,fontSize:"50px"}}>
                        Wonderful gift
                    </p>
                    <p style={{ color:"black", fontFamily: '"Lora", serif',textTransform:'uppercase',fontSize:"50px" }}>
                        Our wonderful arrangements
                    </p>
                <Row className='px-5'>
                <Col >
                <img width={"100%"} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/shop-img-13.jpg" className="attachment-full size-full " alt="r" />
                <h4 className='mt-2'>Orange Silk</h4>
                <p>
                    $330
                </p>
                </Col>
                <Col className='position-relative'>
                <img width={"100%"} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/shop-img-15.jpg" className="attachment-full size-full " alt="r" />
                <span className="badge p-2 bg-primary ">Sale</span>
        
        
                <h4 className='mt-2' >Dark Forest</h4>
                <p>
                    $250
                </p>
                </Col>
                <Col className='position-relative'>
                <img width={"100%"}src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/shop-img-16.jpg" className="attachment-full size-full " alt="r" />
                <span className="badge p-2 bg-primary ">Sale</span>
                <h4 className='mt-2'>Pearl Roses</h4>
                <p><span style={{textDecoration:'line-through'}}>$150</span>
                    $100
                </p>
                </Col>
                <Col>
                <img width={"100%"} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/shop-img-18.jpg" className="attachment-full size-full " alt="r" />
                <h4 className='mt-2'>Rustic Decor</h4>
                <p>
                    $350
                </p>
                </Col>
                </Row>
                </div>
                <div className='parallax'>
                    <Row  className='d-flex justify-content-center align-items-center text-center h-100 w-100'>
                        <Col>
                        <h2>82</h2>
                        <h4> BLOG POSTS</h4>
                        </Col>
                        <Col><h2>100+</h2><h4> Happy clients</h4></Col>
                        <Col><h2>12</h2><h4> Web awards</h4></Col>
                        <Col><h2>98</h2><h4> Flower sorts</h4></Col>

                    </Row>
                </div>
           </div>
       </>
    )
}

export default Products