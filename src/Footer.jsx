import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap'
import './Footer.css'


const Footer = () => {
    return (
        <>
            <div className='mx-3 text-light' style={{ height: '350px', backgroundColor: '#1b1b1b' }}>
                <Row className='w-100 px-3 py-5 '>
                    <Col className='d-flex flex-column justify-content-left align-items-left'>
                        <Navbar.Brand className='text-light fs-1 brandName' href="#home">RoseBud</Navbar.Brand>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quibusdam sunt dolorem amet </p>
                        <div>
                            <i className="fa-brands fa-facebook-f me-2" style={{ color: "#fff" }}></i>
                            <i className="fa-brands fa-x-twitter me-2" style={{ color: "#fff" }}></i>
                            <i className="fa-brands fa-instagram me-2" style={{ color: "#fff" }}></i>
                            <i className="fa-brands fa-whatsapp" style={{ color: "#fff" }}></i>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-left align-items-center'>
                        <h4 className='footer-head'>Working Hours</h4>
                        <p>Monday : 10AM – 9PM<br />
                            Tuesday : 10AM – 9PM<br />
                            Wednesday : 10AM – 9PM<br />
                            Thursday : 10AM – 9PM<br />
                            Friday : 10AM – 9PM<br />
                            Saturday : 10AM – 5PM<br />
                            Sunday : Closed</p>
                    </Col>
                    <Col className='d-flex flex-column justify-content-left '>
                        <h4 className='footer-head'>Where to find us</h4>
                        <p>Adress: Juniper Vally 17, New York <br />
                            Adress 2: 831 Elm St, New York <br />
                            Phone 1: +246/ 167 – 1468 <br />
                            Phone 2: +246/ 569-42696 <br />
                            E-mail : rosebud@qodeinteractive.com</p>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <h4 className='footer-head'>Follow Our Instagram</h4>
                        <div className='grid'>
                            <img src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/27879692_541944106164832_350956213141241856_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=R50kbpGilOEQ7kNvgE00bOu&amp;_nc_ht=scontent-atl3-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYAdufdXFZPHQEuHAtlm3GqnbaHIOP9_3uAbVeM4aP5BCg&amp;oe=670924B5" alt="" />

                            <img src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/27880500_348605445616908_1825125053692379136_n.jpg?_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=woboFGMW22cQ7kNvgE_RnG4&amp;_nc_ht=scontent-atl3-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYD9Eiqrl_09kCBRU0DSKcn_0vcz4rT6_hIvf4jPwaK4Aw&amp;oe=67090A38" alt />

                            <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/27576929_194778564607263_4591337184933445632_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=WLbdcvkZHy8Q7kNvgHIQvd0&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYCh74S5jGAmkcG2pphZWTUKsVv_XrRDZTUXZTVWtm_P8g&amp;oe=670933D1" alt />

                            <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/27880932_2007819639432779_2004905628719382528_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=q9SsEpoVR5EQ7kNvgHoMfEf&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYAS7IP7K4n_4v-DTwih8ya26j_IW1m8EzQu7T65eLC33Q&amp;oe=670930F0" alt />

                            <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/28152664_880777838765990_4675915059610779648_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=ZZjIKhcIBpUQ7kNvgGVkm7O&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYBr3XgdumXShikXnKcPXZEPg7d6ixWSL7qbG6auEoiUMQ&amp;oe=6709160F" alt />

                            <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/27574255_1817276151657613_7676744134492684288_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=M04tXrldOXwQ7kNvgEPtgXf&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AYDB_tBbpUnCy3qB8G8uxslNwuC-LPzfrfAo15LTovH-oQ&amp;oe=67090CCB" alt />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='footer-bottom mx-3 mb-3 text-center pt-2' >
                <p className='text-copyright'>RoseBud © 2024 , All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer