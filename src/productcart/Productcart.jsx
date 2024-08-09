import React, { useState } from 'react'
import './productcart.css'
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { cartContext } from '../createcontext/ContextProvider';

const Productcart = (props) => {
   let[state,setstate] =useState(1);
    console.log(props)
    let {dispatch}= useContext(cartContext);

     function inc_fun(){
      setstate(state+1);
     }
     function dec_fun(){
      if(state>1){
      setstate(state-1);
      }
     }
  return (
    <div>
         {/* <div className='parent-divp'>
           <div className='div1'>
          <span>Item</span>
          <span>Price</span>
          </div>

          <div className='div2'>
          <span>Quantity</span>
          <span>Total</span>
          </div>
          
          </div> */}

      
        <div className='cart_item'>
          
          <img src={props.image}alt=""  height={130} width={100}/>   
        <span>{props.name}</span>
            <b className='price'>$ {props.newprice}</b>
                <button className='btn1' onClick={inc_fun}>+</button>
                <button className='btn2'>{state}</button>
                <button className='btn3' onClick={dec_fun}>-</button>
                <p>Total:{state*props.newprice}</p>
                <MdDelete onClick={()=>{dispatch({type:"Remove",id:props.id})}} className='delete'/>
          </div>

          <hr />
    
    </div>
  )
}

export default Productcart