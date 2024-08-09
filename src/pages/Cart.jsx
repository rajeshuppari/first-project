import React, { useContext } from "react";
import { cartContext } from "../createcontext/ContextProvider";
import Productcart from "../productcart/Productcart";
import "./cart.css";

const Cart = () => {
  let { cart } = useContext(cartContext);

  return (
    <div className="cart-div">
      
      { cart.length!==0?cart.map((item, i) => {
        return (
          <Productcart
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            newprice={item.newprice}
          ></Productcart>
        );

      }) : <h1 className="empty">cart is empty</h1>}
    </div>
  );
};

export default Cart;
