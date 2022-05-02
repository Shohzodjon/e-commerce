import React from "react";
import Announce from "../annocument/Announce";
import Home from "../common/Home";
import Discount from "../discount/Discount";
import FlashDeals from "../flashDeals/FlashDeals";
import NewArrivals from "../newarrivals/NewArrivals";
import Shop from "../shop/Shop";
import TopCate from "../top/TopCate";
import Wrapper from "../wrapper/Wrapper";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <div>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Announce />
      <Wrapper />
    </div>
  );
};

export default Pages;
