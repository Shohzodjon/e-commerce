import React from "react";
import { Link } from "react-router-dom";

function Search({ cartItem }) {
  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <img
            src="https://www.pngkey.com/png/detail/382-3823846_aliexpress-products-review-ali-express-logo-png.png"
            alt="logo"
          />
        </div>
        <div className="search-box f_flex">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search here ... " />
          <span>All Categories</span>
        </div>
        <div className="icon f_flex width">
          <i className="fa fa-user icon_circle"></i>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon_circle"></i>
              <span>{cartItem.length === 0 ? 0 : cartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
