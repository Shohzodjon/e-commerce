import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [MobileMenu, setMobileMenu] = useState(false);

  const setMobile = () => {
    setMobileMenu(true);
  };
  return (
    <header className="header">
      <div className="container d_flex">
        <div className="categrories d_flex">
          <h4>Categrories</h4>
        </div>

        <div className="navlink">
          <ul
            className={
              MobileMenu ? "nav-link-MobileMenu" : "link f_flex capitalize"
            }
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/user">user account</Link>
            </li>
            <li>
              <Link to="/vendor">vendor account</Link>
            </li>
            <li>
              <Link to="/track">track my order</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          <button className="toggle" onClick={() => setMobile(!MobileMenu)}>
            {MobileMenu ? (
              <i className="fas fa-times close home-bth"></i>
            ) : (
              <i className="fas fa-bars open "></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
