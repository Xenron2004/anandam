import React from "react";
import WhyCard from "./WhyCard";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row  max-w-[1280px] w-full items-start justify-start gap-y-[48px] gap-x-[94px] h-auto">
      {/* left section */}
      <div className="max-w-[550px] w-full h-auto ">
        <div className="flex flex-col gap-[30px] items-start justify-start">
          <div className="flex flex-col gap-3 items-start justify-start">
            <div className="flex text-[16px] uppercase text-primary tracking-[2%] font-saira font-medium flex-col text gap-4 items-start justify-start">
               WHY CHOOSE US
            </div>
            <div className="max-w-[530px] text-white w-full text-[40px] font-saira font-semibold text-headingText">
              Trust us to deliver excellence-our reputation is built on every
              project.
            </div>
          </div>
          <div className="h-2 w-[138px] bg-primary"></div>
        </div>
      </div>
      {/* right section */}
      <div className="max-w-[630px] flex flex-col py-10 gap-[40px] w-full h-auto">
        <p className="font-manrope text-[17px] text-white font-regular ">
          We specialize in creating buildings that reflect your unique vision.
          By blending innovation, sustainability, and quality, we deliver spaces
          tailored to your specific needs and requirements.
        </p>
        {/* <button className="mt-6 px-6 py-3 w-full md:max-w-[180px] bg-primary text-white  shadow hover:bg-HeadingText ">
          GET IN TOUCH
        </button> */}
        <div className="relative group w-full md:max-w-[180px]">
          <Link href="#contact">
          <button className="mt-6 px-6 py-3 w-full bg-primary text-white shadow relative overflow-hidden">
            <span className="relative z-10">GET IN TOUCH</span>
            <span className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
