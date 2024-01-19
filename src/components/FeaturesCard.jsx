import React from "react";
import { style } from "../util/style";
import { features } from "../util/constants";

function FeaturesCard({ icon, title, content, index }) {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] cursor-pointer mb-6 feturesCard transition-all duration-500 ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      }`}
    >
      <div
        className={`w-[64px ] h-[64px] rounded-full ${style.flexcenter} bg-ligthBlue`}
      >
        <img
          src={icon}
          alt={title}
          className={`w-[50%] h-[100%]  object-contain`}
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-montserrat font-semibold text-white  text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-montserrat font-normal text-lightWhite text-{16px} leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
}

export default FeaturesCard;
