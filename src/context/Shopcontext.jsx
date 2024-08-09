
import React, { createContext } from "react";

import all_product from '../component/assets/photos/all_product'


  export   let Shopcontext= createContext(null);



  
export const Shopcontextprovider = (props) => {

        let contextValue={all_product}

    return (
      <div>
          <Shopcontext.Provider   value={contextValue}>
            {props.children}
          </Shopcontext.Provider>
      </div>
    )
  }