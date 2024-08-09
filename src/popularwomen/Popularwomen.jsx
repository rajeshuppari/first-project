import React from 'react'

import data_product  from '../component/assets/photos/data'
import Items from './Items'
import './populerwomen.css'

const Popularwomen = () => {
  return (
    <div>
     <h1 className='head-women'>POPULAR IN WOMEN</h1>
 
           <div className='popular-items'>
       {
             data_product.map((item,i)=>{
              
                return<Items  key={i}  id={item.id}    name={item.name}   image={item.image}   newprice={item.new_price} oldprice={item.old_price}></Items>
            
             })
       }
       </div>
    </div>
  )

}

export default Popularwomen