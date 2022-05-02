import React from "react";

function Head() {
  return (
    <section className="head">
      <div className="container d_flex">
        <div className="left row">
          <i className="fa fa-phone"></i>
          <label htmlFor="">+99893 - 333 - 03 - 93</label>
          <i className="fa fa-envelope"></i>
          <label htmlFor="">DeadPool@gmail.com</label>
        </div>
        <div className="right row RText">
          <label>Theme FAQ's</label>
          <label>Need Helps</label>

          <label htmlFor="">ENG</label>

          <label htmlFor="">UZB</label>
        </div>
      </div>
    </section>
  );
}

export default Head;
