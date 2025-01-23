import ServicesSection from "@/components/ServicesSection";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="flex flex-col items-center justify-center w-full h-auto ">
      <div className="flex flex-col gap-[56px] max-w-[1280px] w-11/12 h-auto items-center justify-between">
        <div className=" w-full h-auto ">
          <div className="flex flex-col gap-[30px] items-start md:items-center justify-center">
            <div className="flex flex-col gap-3 items-start justify-start md:items-center md:justify-center">
              <div className="flex text-[16px] text-primary tracking-[2%] font-saira font-medium flex-col text gap-4 items-start text-start justify-start">
                OUR SERVICES
              </div>
              <div className=" text-HeadingText w-full text-[40px] font-saira font-semibold text-headingText">
               Sure, we construct impressive structures
              </div>
            </div>
            <div className="h-2 w-[138px] bg-primary"></div>
          </div>
        </div>
        <ServicesSection/>
      </div>
    </section>
  );
};

export default Services;
