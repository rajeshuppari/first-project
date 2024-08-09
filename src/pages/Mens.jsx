import React from "react";

import men_collection from "../component/assets/photos/mencollection";

import Items from "../popularwomen/Items";

import "./mens.css";

const Mens = (props) => {
  return (
    <div className="mens">
      {/* <div    className='banner'>
      <img src={props.image} alt="" />
      </div> */}
      {/* {
    props.boolean?<h2 className='item-exist'>this item is already exist</h2>:<div></div>
      } */}

      <div className="productlist">
        {men_collection.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldprice={item.old_price}
            ></Items>
          );
        })}
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Mens;
