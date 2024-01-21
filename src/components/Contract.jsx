import React from "react";
import { layout, style } from "../util/style";
import { card } from "../assets";

function Contract() {
  return (
    <section id="products" className={layout.section}>
      <div className={`${layout.sectionIfo} `}>
        <h2 className={style.heding2}>
          {" "}
          Bir necha ason qadamda <br className="sm:block hidden" /> kontrakt
          tuzish
        </h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitat
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, totam!
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-[100%] h-[100%] " />
      </div>
    </section>
  );
}

export default Contract;
