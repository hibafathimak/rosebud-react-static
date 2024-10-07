import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Team = () => {
    return (
        <div className='mx-3 d-flex flex-column justify-content-center align-items-center' style={{ background: 'url("https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-2.jpg"', height: '100vh' }}>
            <p style={{ color: "black", fontFamily: '"Mr De Haviland", cursive', textTransform: 'capitalize', fontSize: "50px" }}>
                Wonderful gift
            </p>
            <p style={{ color: "black", fontFamily: '"Lora", serif', textTransform: 'uppercase', fontSize: "50px" }}>
            our team of experts
            </p>
            <Row className='w-80'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img width={'285px'} height={'285px'} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/team-1.jpg" alt="" />
                <h5 className='mt-3' style={{ color: "black", fontFamily: '"Lora", serif', textTransform: 'uppercase',fontWeight:'400'}}>mason robinson</h5>
                <p>Florist</p>
                <div className='d-flex'>
                <i class="fa-brands fa-facebook-f" style={{color: "#000000"}}></i>
                <i class="fa-brands fa-x-twitter" style={{color: "#000000"}}></i>
                <i class="fa-brands fa-instagram" style={{color: "#000000"}}></i>
                </div>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img width={'285px'} height={'285px'} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/team-2.jpg" alt="" />
                <h5 className='mt-3' style={{ color: "black", fontFamily: '"Lora", serif', textTransform: 'uppercase',fontWeight:'400'}}>Eloise Pearl</h5>
                <p>Designer</p>
                <div className='d-flex'>
                <i class="fa-brands fa-facebook-f" style={{color: "#000000"}}></i>
                <i class="fa-brands fa-x-twitter" style={{color: "#000000"}}></i>
                <i class="fa-brands fa-instagram" style={{color: "#000000"}}></i>
                </div>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img width={'285px'} height={'285px'} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/team-3.jpg" alt="" />
                <h5 className='mt-3' style={{ color: "black", fontFamily: '"Lora", serif', textTransform: 'uppercase',fontWeight:'400'}}>Amber Green</h5>
                <p>Florist</p>
                <div className='d-flex'>
                <i class="fa-brands fa-facebook-f" style={{color: "#000000"}}></i>
                <i class="fa-brands fa-x-twitter" style={{color: "#000000"}}></i>
                <i class="fa-brands fa-instagram" style={{color: "#000000"}}></i>
                </div>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img width={'285px'} height={'285px'} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/team-4.jpg" alt="" />
                <h5 className='mt-3' style={{ color: "black", fontFamily: '"Lora", serif', textTransform: 'uppercase',fontWeight:'400'}}>Amely Hunter</h5>
                <p>Founder</p>
                <div className='d-flex'>
                <i class="fa-brands fa-facebook-f" style={{color: "#000000"}}></i>
                <i class="fa-brands fa-x-twitter" style={{color: "#000000"}}></i>
                <i class="fa-brands fa-instagram" style={{color: "#000000"}}></i>
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default Team