import React from "react";
import SlideData from "./SlideData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SlideCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appenDots: (dots) => {
      return <ul style={{ marginTop: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {SlideData.map((item, index) => {
          return (
            <div className="box d_flex top" key={index}>
              <div className="left">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button className="btn-primary">Visit Collection</button>
              </div>
              <div className="right">
                <img src={item.cover} alt="img" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default SlideCard;
