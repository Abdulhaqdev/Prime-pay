import React from "react";
import { style } from "../util/style";
import { feedbacks } from "../util/constants";
import FeedbackCard from "./FeedbacksCard";

function Testimonials() {
  return (
    <div className={`${style.paddingY} ${style.flexcenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%]  rounded-full white__gradient bottom-40"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb16 mb-6 relative z-[1]">
        <h2 className={style.heding2}>
          {" "}
          Odamlar biz haqqimizda qnaday fikirda{" "}
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${style.paragraph} text-left max-w-[550px] `}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A mollitia
            cupiditate sapiente voluptatem soluta repudiandae unde nulla,
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-wrap sm:justify-start justify-center m-full relative z-[1] ">
        {feedbacks.map((feedback) => {
          return <FeedbackCard key={feedback.id} {...feedback} />;
        })}
      </div>
    </div>
  );
}

export default Testimonials;
