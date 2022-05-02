import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>Bonik</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nihil labore reprehenderit ipsam odit excepturi cum. Iste omnis,
              recusandae neque nihil sit pariatur. Dolorum nulla in cum
              assumenda et at!
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store </span>
              </div>
            </div>
          </div>
          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our stories</li>
              <li>Our cares</li>
              <li>Term & Conditions</li>
              <li>Privace policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Blank Purchasing</li>
              <li>Return & Refunds</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact</h2>
            <ul>
              <li>
                70 Washington Square South, New York , NY 10012 , United State{" "}
              </li>
              <li>Email : uilib.help@gmail.com </li>
              <li>Phone : +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
