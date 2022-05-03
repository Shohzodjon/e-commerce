import React from "react";
import Ndata from "./Ndata";

function Cart() {
  return (
    <>
      <div className="content grid product">
        {Ndata.map((item) => {
          return (
            <div className="box" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="img" />
              </div>
              <h4>{item.name}</h4>
              <span>{item.price} $</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
