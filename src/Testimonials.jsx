import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.css'


const Testimonials = () => {
  return (
    <div className='m-3 d-flex flex-column justify-content-center align-items-center' style={{backgroundImage:'url("https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-parallax-img-2.jpg")',backgroundAttachment:'fixed',backgroundPosition:'center',height:'100vh'}}>

<div className='testimonial_carousel' >
    <Carousel style={{height:'500px',width:'1100px'}}>

          <Carousel.Item>
            <Carousel.Caption>
              <h3 className='testimonial'>Testimonials</h3>
              <h6 className="entry-title">Our happy customers</h6>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, necessitatibus sequi! Consequatur molestiae .</p>
              <h5 class="authorName">Opal Fletcher</h5>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
            <h3 className='testimonial'>Testimonials</h3>
            <h6 className="entry-title">The art of fresher flowers</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Officia maxime repudiandae quia aliquam a, cum hic nemo culpa! Rem hic a nesciunt nostrum minus voluptatem non veniam nostrum.</p>
            <h5 class="authorName">Helen Malone</h5>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
            <h3 className='testimonial'>Testimonials</h3>
            <h6 className="entry-title">An experience delivereds</h6>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur. magnam voluptatem voluptate assumenda reprehenderit sit! Omnis maxime, molestias quam ad sapiente error
              </p>
              <h5 class="authorName">Steve Harrington</h5>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
</div>

    </div>
  )
}

export default Testimonials