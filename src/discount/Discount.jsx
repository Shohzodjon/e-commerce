import React from "react";
import Dcart from "./Dcart";

function Discount() {
  return (
    <section className="discount background newarrivals">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left f_flex row">
            <img src="https://img.icons8.com/windows/32/fa314a/gift.png" alt="img-discount"/>
            <h2>Big Discount</h2>
          </div>
          <div className="heading-right row">
            <span>View all</span>
            <i className="fa fa-cater-right"></i>
          </div>
        </div>
        <Dcart />
      </div>
    </section>
  );
}

export default Discount;
