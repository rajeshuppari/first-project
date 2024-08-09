import React, {  useContext } from 'react'
import './items.css'
import {cartContext} from '../createcontext/ContextProvider'

const Items = (product) => {
         
         let {dispatch}= useContext(cartContext);
  return (
    <div className='item'>
       <div className='img-div'> <img src={product.image} alt=""  id='img' /><br /></div>
        <p className='desc'>{product.name}</p>

        <div className='prices'>
            <b>{product.newprice} $</b>&nbsp;&nbsp;&nbsp;
            <em>{product.oldprice}$</em><br />
            <button onClick={()=>{dispatch({type:"Add",product:product})}} className='btn'>Add</button>
        </div>
    </div>
  )
}

export default Items