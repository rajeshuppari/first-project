import React, { createContext, useReducer } from 'react'

import CartReducer from './CartReducer';


 export let cartContext=createContext();

const ContextProvider = ({children}) => {
    let[cart,dispatch] =useReducer(CartReducer,[]);
  return (
    <div>
    <cartContext.Provider  value={{cart,dispatch}}>
          {children}
    </cartContext.Provider>
    </div>
  )
}

export default ContextProvider