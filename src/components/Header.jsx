import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="h-[60px] w-full flex items-center justify-end mb-5">
      <a
        href="https://github.com/Darab-gif/qrcode"
        className="flex text-small font-500 text-black items-center justify-center cursor-pointer gap-2 mr-10"
      >
        Star on Github{" "}
        <span>
          <FaGithub size={25} />
        </span>
      </a>
    </nav>
  );
};

export default Header;
