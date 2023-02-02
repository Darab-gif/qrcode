import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex lg:h-[60px] h-[30px] w-full justify-center items-center bg-primary   font-600 text-white text-normal">
      <div className="mr-[3rem]">
        <span>{year}</span> <span>&copy; Darab</span>
      </div>
    </div>
  );
};

export default Footer;
