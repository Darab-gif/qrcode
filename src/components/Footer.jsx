import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex lg:h-[50px] h-[30px] w-full justify-center items-center bg-primary   font-600 text-white text-normal">
      <div className="mr-[3rem]">
        <span>{year}</span>{" "}
        <span>
          &copy;{" "}
          <a
            href="https://www.linkedin.com/in/ahmid-raji-266592203"
            className="font-700 cursor-pointer"
          >
            Darab
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
