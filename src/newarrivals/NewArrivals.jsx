import React from "react";
import Cart from "./Cart";
import "./style.css";
function NewArrivals() {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left f_flex row">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>New Arrivals</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-cater-right"></i>
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  );
}

export default NewArrivals;
