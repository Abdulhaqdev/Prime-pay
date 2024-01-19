import React from "react";
import { style } from "../util/style";
import { discount, home } from "../assets";
import Button from "./Button";

function Home() {
  return (
    <div>
      <section
        id="home"
        className={`flex md:flex-row flex-col overflow-hidden items-center ${style.paddingY}`}
      >
        {/* Animetion image */}
        <div className={`flex-1 ${style.flexstart} md:my-0 my-10 `}>
          <img
            src={home}
            alt="robot"
            className="w-[100%] h-[100%] relative z-10 rounded-lg "
          />
        </div>
        {/* information */}
        <div
          className={`flex-1 ${style.flexstart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          {/* dicount infarmation */}
          <div className="flex  max-w-[500px] flex-row items-center py-[6px] px-4 rounded-[10px]  mb-2 bg-slate-600 bg-discount-gradient ">
            <img src={discount} className="w-[32] h-[32]" alt="" />
            <p className={`style.paragraph ml-2`}>
              {" "}
              <span className="text-white">20%</span> Chegirma{" "}
              <span className="text-white">1 oylik</span> xisob uchin
            </p>
          </div>
          {/* title */}
          <div className="w-full">
            <h1 className={`${style.heding1}`}>
              Yangi Avlod <br />
              <span className="text-gradient">To'lov Usuli</span>
            </h1>
          </div>
          {/* description */}
          <p className={`${style.paragraph} mt-5 max-w-[550px]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            exercitationem repellat architecto corrupti necessitatibus aut Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            aspernatur porro nemo!
          </p>
          <Button style={"mt-4"} />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
          <div className="absolute z-[1] w-[50%] h-[60%] rounded-full buttom-40 blue__gradeint"></div>
          <div className="absolute z-[0] w-[50%] h-[55%] right-20 buttom-20 white__gradient"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
