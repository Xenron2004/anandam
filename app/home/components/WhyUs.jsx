import React from "react";
import Image from "next/image";
import Who from "../assets/whoImg.webp";
import Counter from "../../../components/Counter";
import Link from "next/link";

const WhyUs = () => {
  return (
    <section id='about' className=" flex items-center justify-center w-11/12 h-auto max-w-7xl ">
      <div className="flex flex-col md:flex-row gap-y-[48px] items-center gap-x-[50px] justify-between w-full h-auto max-w-7xl">
        <div className="max-w-[602px] w-full max-h-[562px] h-full">
          <Image src={Who} alt="Nxtzengroup Logo" />
        </div>
        <div className="flex flex-col items-start gap-x-[50px] gap-y-[46px] justify-start max-w- w-full h-auto">
          <div className=" flex flex-col gap-[28px] items-start justify-start">
            <div className="flex flex-col gap-3 items-start justify-start">
              <div className="flex text-[16px] text-primary tracking-[2%] font-saira font-medium flex-col text gap-4 items-start justify-start">
                WHO WE ARE
              </div>
              <div className="max-w-[501px] w-full text-[40px] font-saira font-semibold text-headingText">
                We create buildings that meet your needs
              </div>
            </div>
            <div className="max-w-[630px] w-full h-auto text-[17px] tracking-[1.2%] leading-[25.5px] text-bodyText font-manrope font-normal">
              We specialize in designing and constructing buildings that are
              tailored to your unique requirements. Our focus is on combining
              innovation, sustainability, and quality to deliver spaces that
              perfectly align with your vision and needs.
            </div>
          </div>

          <div className="flex max-w-[630px]  flex-col md:flex-row  gap-y-[24px] w-full h-auto items-center justify-start">
            <div className="flex flex-col max-w-[200px] w-full gap-2 items-start justify-start">
              <div className="font-saira text-[60px] text-start flex gap-2 font-bold text-primary">
                <Counter end={10} duration={4} />
                <div className="text-[60px] text-primary">+</div>
              </div>
              <div className="text-[20px] font-saira font-normal text-center leading-[2%] text-bodyText">
                Projects Done
              </div>
            </div>

            <div className="flex flex-col max-w-[200px] w-full   gap-2 items-start justify-start">
              <div className="font-saira text-[60px] text-center flex gap-2 font-bold text-primary">
                <Counter end={100} duration={5} />
                <div className="text-[60px] text-primary">%</div>
              </div>
              <div className="text-[20px] font-saira font-normal text-center leading-[2%] text-bodyText">
                Happy Clients
              </div>
            </div>
            <div className="flex flex-col max-w-[200px] w-full gap-2 items-start justify-start">
              <div className="font-saira text-[60px] text-center flex gap-2 font-bold text-primary">
                <Counter end={50} duration={4} />
                <div className="text-[60px] text-primary">+</div>
              </div>
              <div className="text-[20px] font-saira font-normal text-center leading-[2%] text-bodyText">
                Team Members
              </div>
            </div>
          </div>
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
    </section>
  );
};

export default WhyUs;
