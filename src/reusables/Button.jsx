import React from "react";

const Button = ({ title, sign, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex flex-row items-center font-700 lg:text-normal text-small text-white gap-4 bg-primary lg:px-[42px] px-[12px] lg:py-[14px] py-[6px] rounded-[35px]"
    >
      {title}
      <span>{sign}</span>
    </button>
  );
};

export default Button;
