import React from "react";

function Button({ style }) {
  return (
    <button
      type="button"
      className={` w-[150px] py-3 px-6 font-montserrat text-white text-[18px]  button__gradient  rounded-[10px] outline-none ${style}`}
    >
      Boshlash
    </button>
  );
}

export default Button;
