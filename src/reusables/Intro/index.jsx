import React from "react";
import { data } from "./data/index";

const Intro = () => {
  return (
    <>
      {data.map((item, index) => (
        <section className="flex flex-col gap-[15px]  " key={index}>
          <div className="relative h-[10rem] w-[10rem] rounded-[100rem] bg-white flex items-center justify-center ml-[3rem]">
            <img
              src={item.icon}
              alt=""
              className="h-[8rem] w-[8rem] rounded-full"
            />
            <span className="absolute font-700 h-[30px] w-[30px] top-0 left-[-8px] rounded-full flex items-center justify-center bg-black text-white">
              {item.id}
            </span>
          </div>
          <div className="w-[15rem] ml-10">
            <h2 className="text-large text-black mb-3 font-700">{item.head}</h2>
            <p className="text-small text-gray font-400">{item.info}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default Intro;
