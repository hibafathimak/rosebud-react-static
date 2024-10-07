import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css'

const Header = () => {
  return (
    <>
      <div className='position-relative' style={{ height: '90vh' }}>
        <Navbar className='navbar border-0 position-absolute'>
          <Container>
            <Navbar.Brand className='text-light fs-1 brandName' href="#home">RoseBud</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link className='text-light' href="#home">Home</Nav.Link>
              <Nav.Link className='text-light ms-5'>Pages</Nav.Link>
              <Nav.Link className='text-light ms-5'>Portfolio</Nav.Link>
              <Nav.Link className='text-light ms-5'>Blog</Nav.Link>
              <Nav.Link className='text-light ms-5'>Shop</Nav.Link>
              <Nav.Link className='text-light ms-5'><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
              <Nav.Link className='text-light ms-5'><i class="fa-solid fa-lg fa-bars"></i></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Carousel autoPlay={true} indicators={false} style={{ height: '90vh' }} data-bs-theme="light">
          <Carousel.Item className='carousel-item'   >
            <img
              className="d-block w-100"
              src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-slide-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className='carousel-caption' >
              <h2>Welcome to RoseBud</h2>
              <h1>PERFECT BOUQUET</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Laborum aspernatur ipsam dolorum natus recusandae sed nemo in, doloremque, iusto labore omnis temporibus. </p>
              <div className='d-flex justify-content-center align-items-center'>
                <button className="me-3 btn btn-light ">Read More</button>
                <button type="button" className="btn btn-outline-light ms-3">Shop Now</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item' >
            <img
              className="d-block w-100"
              src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-slide-2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className='carousel-caption'>
              <h2>Welcome to RoseBud</h2>
              <h1>FLORIST’S DREAM</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pariatur omnis nisi officiis obcaecati perspiciatis cumque beatae libero magnam nihil maxime quas quo .</p>
              <div className='d-flex justify-content-center align-items-center'>
                <button className="me-3 btn btn-light">Read More</button>
                <button type="button" className="btn btn-outline-light ms-3">Shop Now</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item' >
            <img
              className="d-block w-100"
              src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-slide-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className='carousel-caption' >
              <h2>Welcome to RoseBud</h2>
              <h1>TIME TO BLOSSOM</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.Eius voluptatum impedit quia provident inventore ut distinctio ullam iusto suscipit fugiat quas.</p>
              <div className='d-flex justify-content-center align-items-center'>
                <button className="me-3 btn btn-light">Read More</button>
                <button type="button" className="btn btn-outline-light ms-3">Shop Now</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Header