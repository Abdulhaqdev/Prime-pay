import React from "react";
import { layout, style } from "../util/style";
import { apple, bill, google } from "../assets";

function Billing() {
  return (
    <section id="features" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="" className="w-[100%] h-[100%]" />

        <div className="absolute -left-1/2 z-[3] w-[50%] h-[50%] rounded-full top-0 white__gradient"></div>
        <div className="absolute -left-1/2 z-[0] w-[50%] h-[50%] right-20 buttom-0 rounded-full pink__gradient"></div>
      </div>
      <div className={layout.sectionIfo}>
        <h2 className={`${style.heding2}`}>
          Hisoob-kitob va faturial <br className="sm=flex-block hidden" />{" "}
          osangina boshqaring
        </h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          nulla excepturi accusamus vitae ea, optio, ad laboriosam repudiandae
          eveniet dolore quam esse nemo. Reiciendis, similique! Harum labore
          porro laborum. Ullam?
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
          <img
            src={google}
            alt=""
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={apple}
            alt=""
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
