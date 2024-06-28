import React from 'react'
import {Card,Button} from 'react-bootstrap'

export default function ProductCard({data,children}) {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
    <div>
        <Card style={{ width: '18rem' }}>
        {children}
            <Card.Img variant="top" src={data.productImg} />
            <Card.Body>
                <Card.Title>{data.productName}</Card.Title>
                {children}
                <Card.Text>
                 {data.productPrice>0 && data.productPrice} 
                 {/* {data.productPrice >0 ?data.productPrice:"free"}  */}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    </div>
   
   
    </div>
  )
}
