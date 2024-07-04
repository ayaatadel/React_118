import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'


// hooks => use state

export default function ProductCard({data,children,theme}) {
  let [count,setCount]=useState(0);
  
  return (
    <div > 
        <div className='d-flex justify-content-around flex-wrap'>
              <Card style={{ width: '18rem' }} >
              {/* {children} */}
                  <Card.Img variant="top" src={data.productImg} />
                  <Card.Body>
                      <Card.Title>{data.productName}</Card.Title>
                      {children}
                      <Card.Text>
                      {data.productPrice>0 && data.productPrice} 
                      {/* {data.productPrice >0 ?data.productPrice:"free"}  */}
                      </Card.Text>
                      {/* <Button variant="primary" onClick={sayHello}>Add To Cart</Button> */}
                      <Button variant="primary" onClick={(event)=>{
                        addTOCart(event,data)
                      }}>Add To Cart</Button>
                  </Card.Body>

                  <button type="button" onClick={()=>{
                    setCount(++count);
                    console.log(count);
                  }}>Incrase</button>
                  <span>count : {count}</span>
              </Card>
          </div>

   
    
  </div>
  )


}
// function sayHello()
// {
// console.log("Hello");
// }

function addTOCart(event,data)
{
  
  console.log(data)
  let cards=JSON.parse(localStorage.getItem('cards'))??[];
  // console.log(cards+"before push");
   cards.push(data??[]);//object
  //  console.log(cards+" after push");
   localStorage.setItem('cards',JSON.stringify(cards));
  //  console.log(cards+"stringfy");
   console.log(`product+${data.id}+'added'`);
  // console.log(cards);
}

















//    {/* <button href="#" className="btn btn-primary"
//      onClick={sayHello}>Add To Cart</button> */}
//      <button href="#" className="btn btn-primary" 
//      onClick={(event)=>{
//        addTOCart(event,props.data)
//      }}>Add To Cart</button>
//    </div>
//  </div>
//      </div>
//    )
//  }
 
//  function addTOCart(event,data) {
//    // console.log(event.target);
//    console.log(data);
//    // let cards=[];
//    let cards=JSON.parse(localStorage.getItem('cards'))??[]
//    cards.push(data??[]);
//    localStorage.setItem('cards',JSON.stringify(cards));
//    console.log(`product+${data.id}+added`);
 
//   }