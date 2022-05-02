import React from "react";
import "./wrapper.css";
function Wrapper() {
  const data = [
    {
      id: 1,
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 2,
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 3,
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      id: 4,
      cover: <i class="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="background wrapper">
        <div className="container grid2">
          {data.map((item) => {
            return (
              <>
                <div className="product" key={item.id}>
                  <div className="img icon_circle">{item.cover}</div>
                  <h3>{item.title}</h3>
                  <p>{item.decs}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Wrapper;
