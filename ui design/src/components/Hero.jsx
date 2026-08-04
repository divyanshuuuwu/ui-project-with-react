import React from "react";
import heroBg from "../assets/hero.png";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="flex justify-center pt-5">
      <div className="bg-zinc-300 h-200 w-450 rounded-[60px] flex overflow-hidden">

        {/* Left Side */}
        <div className="w-1/2 flex flex-col py-20   pl-20">
          <h1 className="text-6xl font-bold leading-tight">
            Cosmetics for
            <br />
            the whole body.
            <br />
            For everybody.
          </h1>
            <div className="mt-50 "> <Card/> </div>
        </div>

       

        {/* Right Side */}
        <div className="w-1/2 flex justify-center items-end">
          <div
            className="w-200 h-250 bg-contain bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;