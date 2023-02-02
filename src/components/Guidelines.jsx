import React from "react";
import Intro from "../reusables/Intro";

const Guidelines = () => {
  return (
    <section className="bg-lightGray ">
      <h1 className="text-24 lg:flex lg:items-center lg:justify-center lg:text-extralarge text-black font-600 text-center mb-14">
        Create your own QR code in a matter of minutes{" "}
      </h1>
      <div className="flex lg:flex-row flex-col lg:ml-[20rem] ml-[2rem] gap-[4rem] pb-[3rem]">
        <Intro />
      </div>
    </section>
  );
};

export default Guidelines;
