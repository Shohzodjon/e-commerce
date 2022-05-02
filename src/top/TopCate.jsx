import React from "react";
import TopCart from "./TopCart";

function TopCate() {
  return (
    <section className="topCat background">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left f_flex row">
            <i className="fa fa-border-all"></i>
            <h2>Top Categories</h2>
          </div>
          <div className="heading-right row">
            <span>View all</span>
            <i className="fa fa-cater-right"></i>
          </div>
        </div>
        <TopCart />
      </div>
    </section>
  );
}

export default TopCate;
