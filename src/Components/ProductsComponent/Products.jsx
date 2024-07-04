import React, { useState } from 'react'
import ProductCard from '../ProductCardComponent/ProductCard'
import Products from '../../Cards'
export default function ({ children }) {
    let [isDark, setDark] = useState(true)
    let [theme, setTheme] = useState('bg-light')
    function handleTheme() {
        if (isDark) {
            setTheme('bg-black')
            setDark(false)
            console.log(isDark);
        } else {
            setTheme('bg-light')
            setDark(true)
            console.log(isDark);

        }
    }
    return (
        <div className={theme}>
            {/* {children} */}
            <button type="button" className='btn btn-warning' onClick={handleTheme}>theme</button>
                <div className='d-flex justify-content-around m-5 flex-wrap' >
                    {
                        Products.map((ProductData) => {
                            return (      
                               
                                
                                <ProductCard data={ProductData} 
                                    >
                                    {/* <button type="button" className='btn btn-success'>Click</button> */}
    
                                </ProductCard>
    
    
                              
                              )
                   
                        })

                    }

            </div>
        </div>
    )

}
