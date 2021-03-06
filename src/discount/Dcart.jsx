import React from "react";
import Ddata from "./Ddata";
import Slider from "react-slick";
function Dcart() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {Ddata.map((item) => {
          return (
            <div key={item.id}>
              <>
                <div className="product">
                  <div className="box">
                    <div className="img discount_img">
                      <img src={item.cover} alt="img" />
                    </div>
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                  </div>
                </div>
              </>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Dcart;
