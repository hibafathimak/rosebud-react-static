import React from 'react'
import Form from 'react-bootstrap/Form';



const Subscribe = () => {
  return (
    <div className='mt-4 mx-3'>
            <div className=' w-100' style={{width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
                <img className=' p-0 m-0' width={'100%'} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-1.jpg" alt="" />
                <img className='p-0 m-0'width={'100%'}src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-3.jpg" alt="" />
                <img className=' p-0 m-0'width={'100%'} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-2.jpg" alt="" />
                <img className='p-0 m-0'width={'100%'} src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/gallery-img-4.jpg" alt="" />
            </div>
            <div style={{height:'300px',backgroundColor:'#fff0e9',textAlign:'center',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
            <h3 className='my-5' style={{fontWeight:'400',fontFamily:'"Lora", serif'}}>Subscribe to our weekly newsletter</h3>
            <Form.Control className='w-50 my-4' type="text" placeholder="Enter Email" />
            <button className="me-3 btn btn-primary ">Subscribe</button>
            </div>
    </div>
  )
}

export default Subscribe