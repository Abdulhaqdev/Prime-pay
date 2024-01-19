import React from "react";
import { style } from "../util/style";
import Button from "./Button";

function Cta() {
  return (
    <div
      className={`${style.flexcenter} sm:p-10 p-6 sm:flex-row flex-col bg-dark-gradient   rounded-[20px]  box-shadow `}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${style.heding2}`}> Xizmatlerni sinab korish!</h2>
        <p className={`${style.paragraph} max-w-[550px] `}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
          asperiores voluptates iure a libero laborum exercitationem quam culpa
        </p>
      </div>
      <div
        className={`${style.flexcenter} w-[150px] h-[50px] sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <Button />
      </div>
    </div>
  );
}

export default Cta;
