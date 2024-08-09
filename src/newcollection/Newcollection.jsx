import React from 'react'
import new_collection  from '../component/assets/photos/new_collections'
import Items from '../popularwomen/Items'
import './newcollection.css'

const Newcollection = () => {
  return (

    <div>
     <h1 className='head-new'>New Collections</h1>
     <div className='collection'>
         {
             new_collection.map((item,i)=>{

              return<Items  key={i}  id={item.id}    name={item.name}   image={item.image}   newprice={item.new_price} oldprice={item.old_price}></Items>

             })
         }
     </div>


      </div>
  )
}

export default Newcollection