import React from "react";
import Tdata from "./Tdata";
import Slider from "react-slick";
import "./top.css";

function TopCart() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((item) => {
          return (
            <>
              {console.log("id", item.id)}
              <div className="box product" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="img" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}

export default TopCart;
