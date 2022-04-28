import React from "react";
import Home from "../common/Home";
import FlashDeals from "../flashDeals/FlashDeals";

const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <div>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </div>
  );
};

export default Pages;
