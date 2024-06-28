import React from 'react'
import ProductCard from '../ProductCardComponent/ProductCard'
import Products from '../../Cards'
export default function ({children}) {
    return (
        <>
        {children}
        <div className='d-flex justify-content-around m-5 flex-wrap'>
        {
            Products.map((ProductData)=>{
                return <ProductCard data={ProductData}>
      <button type="button" className='btn btn-success'>Click</button>
                    
                </ProductCard>
               

            })
            
        }
      
        </div>
        </>
    )
}
