import React from "react";
import Button from "../reusables/Button";
import { FaArrowRight } from "react-icons/fa";
import hero from "../assets/hero.png";
import Guidelines from "./Guidelines";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <Header />
      <div className="flex flex-col lg:flex-row gap-14 lg:w-[90%] w-[100%] mb-[14rem] mt-[30px]">
        <div className="ml-[2rem] lg:ml-[8rem] lg:mt-[3rem] ">
          <h1 className="font-700 text-24 lg:text-xl lg:leading-[60px]  text-black mb-[20px] ">
            Create your own QR codes and boost your idea.
          </h1>
          <h2 className="text-normal text-black font-500 mb-[2rem]">
            Easily generate your QR codes.
          </h2>
          <Link to="/qr">
            <Button title="Create QR Code" sign={<FaArrowRight />} />
          </Link>
        </div>
        <figure>
          <img
            src={hero}
            alt="Hero"
            className="lg:h-[30rem] h-[20rem] lg:w-[60rem] w-[25rem]"
          />
        </figure>
      </div>
      <Guidelines />
      <Footer />
    </section>
  );
};

export default Hero;
