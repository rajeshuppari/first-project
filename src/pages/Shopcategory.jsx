import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";

const Shopcategory = (props) => {
  let data = useContext(Shopcontext);
  console.log(data);
  let { all_product } = data;
  console.log(all_product[0]);

  return (
    <div>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Shopcategory;
