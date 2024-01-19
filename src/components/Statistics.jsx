import React from "react";
import { style } from "../util/style";
import { stistics } from "../util/constants";

function Statistics() {
  return (
    <div className={`${style.flexstart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stistics.map((stat) => {
        return (
          <div
            className="flex-1 flex justify-start items-center flex-row m-3"
            key={stat.id}
          >
            <h4 className="text-white fonst-montserrat font-semibold sx:text-[41px] text-[30px] xs:leading-[53px] leading-[43px]">
              {stat.value}
            </h4>
            <p className="fonst-montserrat font-semibold sx:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Statistics;
