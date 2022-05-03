import React from "react";
import img1 from "../assets/images/category/cat1.png";
import img2 from "../assets/images/category/cat2.png";
import img3 from "../assets/images/category/cat3.png";
import img4 from "../assets/images/category/cat4.png";
import img5 from "../assets/images/category/cat5.png";
import img6 from "../assets/images/category/cat6.png";
import img7 from "../assets/images/category/cat7.png";
import img8 from "../assets/images/category/cat8.png";
import img9 from "../assets/images/category/cat9.png";
import img10 from "../assets/images/category/cat10.png";
import img11 from "../assets/images/category/cat11.png";

const data = [
  {
    cateImg: img1,
    cateName: "Fashion",
  },

  {
    cateImg: img2,
    cateName: "Electronic",
  },
  {
    cateImg: img3,
    cateName: "Cars",
  },
  {
    cateImg: img11,
    cateName: "Books",
  },
  {
    cateImg: img5,
    cateName: "Gifts",
  },
  {
    cateImg: img6,
    cateName: "Music",
  },
  {
    cateImg: img7,
    cateName: "Health & Beauty",
  },
  {
    cateImg: img8,
    cateName: "Pets",
  },
  {
    cateImg: img9,
    cateName: "Baby Toys",
  },
  {
    cateImg: img10,
    cateName: "Groceries",
  },
  {
    cateImg: img4,
    cateName: "Home & Garden",
  },
];
function Categories() {
  return (
    <>
      <div className="category">
        {data.map((item, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={item.cateImg} alt="img" />
              <span>{item.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
