import React from "react";
import { style } from "../util/style";
const ClientCard = ({ logo }) => {
  return (
    <div
      className={`${style.flexcenter} flex sm:min-w-[192px] min-w-[120px] m-5 cursor-pointer`}
    >
      <img
        src={logo}
        alt="logo"
        className="sm:w-[192px] w-[100px] object-contain"
      />
      aaaaaaa
    </div>
  );
};

export default ClientCard;
