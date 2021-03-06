import React from "react";
import cat1 from "../assets/images/category/cat-1.png";
import cat2 from "../assets/images/category/cat-2.png";
import cat3 from "../assets/images/category/cat-3.png";
function Catg() {
  const data = [
    { id: 35, cateImg: cat1, cateName: "Apple" },
    { id: 36, cateImg: cat2, cateName: "Samasung" },
    { id: 37, cateImg: cat3, cateName: "Oppo" },
    { id: 38, cateImg: cat2, cateName: "Vivo" },
    { id: 39, cateImg: cat1, cateName: "Redimi" },
    { id: 40, cateImg: cat2, cateName: "Sony" },
  ];

  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {data?.map((item) => {
          return (
            <div className="f_flex box" key={item.id}>
              <img src={item.cateImg} alt="cateImg" />
              <span>{item.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
}

export default Catg;
