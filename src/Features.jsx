import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Features = () => {
    return (
        <Row style={{height:'400px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <Col className='text-center p-5'>
                <img width="50" height="50" src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/custom-icon-1.png" className="attachment-full size-full " alt="a" loading="lazy" />
                <h4 className='my-3' style={{ fontFamily: '"Lora", serif' }}>Ready To Be Impressed</h4>
                <p style={{color:'GrayText',fontWeight:'400'}}>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
            </Col>
            <Col className='text-center'>
            <img width="50" height="50" src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/custom-icon-3.png" className="attachment-full size-full" alt="a" loading="lazy" />
                <h4 className='my-3' style={{ fontFamily: '"Lora", serif' }}>Powerful Solutions</h4>
                <p style={{color:'GrayText',fontWeight:'400'}}>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
            </Col>
            <Col className='text-center'>
            <img width="50" height="50" src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/custom-icon-2.png" className="attachment-full size-full" alt="a" loading="lazy" />
                <h4 className='my-3' style={{ fontFamily: '"Lora", serif' }}>Leaders Of Tomorrow</h4>
                <p style={{color:'GrayText',fontWeight:'400'}}>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
            </Col>
        </Row>
    )
}

export default Features