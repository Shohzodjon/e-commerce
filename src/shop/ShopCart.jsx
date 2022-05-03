import React from "react";

function ShopCart({ shopItems, addToCart }) {
  return (
    <>
      {shopItems?.map((item) => {
        return (
          <div className="box" key={item.id}>
            <div className="product mtop">
              <div className="img shop_img">
                <span className="discount">{item.discount}% Off</span>
                <img src={item.cover} alt="img" />
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{item.price}</h4>
                  <button onClick={() => addToCart(item)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShopCart;
