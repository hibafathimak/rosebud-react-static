import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Grid = () => {
  return (
    <>
<Row className=' ms-2 w-100'>
<Col  lg-6 className='w-50 position-relative'>
<div className='h-100  p-5 d-flex flex-column justify-content-center position-absolute'>
    <p style={{color:"black", fontFamily: '"Mr De Haviland", cursive',fontSize:"50px"}}>
        Wonderful gift
        
    </p>
    <p style={{marginTop:'-20px',color:"black", fontFamily:'"Lora", serif',textTransform:'uppercase',fontSize:"40px" }}>
        A perfect spot
    </p>
    <p style={{color:'GrayText',fontWeight:'400'}}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibe ndum auctor, nisi elit conse quat ipsu. Proin gravida nibh vel velit auctor ali quet. Aen ean sol lici tudin, lorem quis biben dum.</p>
    <button style={{width:'150px'}} className="btn btn-outline-primary">Shop Now</button>
</div>

    <img className='pt-5' style={{float:'right'}} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-2.png" alt="" />
</Col>
<Col className='m-5'>
<img style={{width:'650px'}}  src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-1.jpg" alt="" />
</Col>
</Row>
    </>
  )
}

export default Grid