import React from "react";
import { layout, style } from "../util/style";
import Button from "./Button";
import { features } from "../util/constants";
import FeaturesCard from "./FeaturesCard";

function Business() {
  return (
    <section id="featurs" className={layout.section}>
      <div className={layout.sectionIfo}>
        <h2 className={`${style.heding2}`}>
          Biznes rivojlantirish <br className="sm:block hidden " /> pulni hal
          qilamiz
        </h2>
        <p className={`${style.paragraph} max-w-[550px] mt-5`}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
          exercitationem beatae culpa commodi dolorum reiciendis blanditiis
        </p>
        <Button style={"mt-10"}></Button>
      </div>
      <div className={layout.sectionIfo}>
        {features.map((feature, index) => {
          return <FeaturesCard key={feature.id} {...feature} index={index} />;
        })}
      </div>
    </section>
  );
}

export default Business;
