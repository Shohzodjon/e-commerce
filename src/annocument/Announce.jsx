import React from "react";
import banner1 from "../assets/images/banner-1.png";
import banner2 from "../assets/images/banner-2.png";
function Announce() {
  const myStyle = {
    width: "30%",
    height: "340px",
  };
  const myStyle2 = {
    width: "68%",
    height: "340px",
  };

  return (
    <>
      <section className="annouce background">
        <div className="container d_flex">
          <div className="img" style={myStyle}>
            <img src={banner1} alt="banner" width={"100%"} height={"100%"} />
          </div>
          <div className="img" style={myStyle2}>
            <img src={banner2} alt="banner" width={"100%"} height={"100%"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Announce;
