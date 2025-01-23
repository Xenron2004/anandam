import React from "react";
import HeroImg from "./assets/HeroImg.png";
import Navbar from "@/components/Navbar";
import WhyUs from "./components/WhyUs";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Link from "next/link";
export default function HomeSection() {
  return (
    //   <div className="relative">
    //     {/* Background Image */}
    //     <div
    //       className="absolute inset-0 bg-cover bg-[url('/assets/HeroImg.png')] bg-no-repeat z-[-1]"
    //     //   style={{
    //     //     backgroundImage: "./assets/HeroImg.png", // Replace with your image path
    //     //   }}
    //     ></div>

    //     {/* Navbar */}
    //     <nav className="relative z-10 bg-transparent">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="flex items-center justify-between h-16">
    //           <div className="flex items-center">
    //             <div className="text-white font-bold text-lg">Your Logo</div>
    //           </div>
    //           <div className="hidden md:flex space-x-4">
    //             <a href="#" className="text-white hover:text-gray-300">
    //               Home
    //             </a>
    //             <a href="#" className="text-white hover:text-gray-300">
    //               About
    //             </a>
    //             <a href="#" className="text-white hover:text-gray-300">
    //               Contact
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>

    //     {/* Hero Section */}
    //     <div className="relative z-10 flex items-center justify-center h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center">
    //         <h1 className="text-4xl sm:text-6xl font-bold text-white">
    //           Welcome to NxtZen
    //         </h1>
    //         <p className="mt-4 text-lg text-gray-200">
    //           Innovative solutions for a better tomorrow.
    //         </p>
    //         <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
    //           Get Started
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    <section className="flex flex-col gap-[100px] items-center w-full justify-center ">
      <div className="flex flex-col relative w-full gap-[100px] items-center justify-center bg-cover bg-[url('/assets/HeroImage.png')] object-fit  h-auto ">
        <div className="flex flex-col  items-center justify-center w-full h-auto">
          <Navbar />
          <div className="max-w-[1280px]  md:mt-12 w-11/12 flex  gap-6 leading-[25.5px] h-[800px] flex-col items-start justify-center">
            <div className="text-white font-saira font-bold max-w-[900px] tracking-[0%] w-full md:text-[52px] text-[36px] leading-[48px] md:leading-[80px] mt-9 relative text-start">
              {/* Animated Welcome Text with Shine inside */}
              <span className="relative inline-block text-[32px] font-manrope font-semibold bg-clip-text text-[] animate-colorFlow">
                {/* Shine Effect inside text */}
              </span>
              <br />
              Building Strong Foundations for better tomorrow
            </div>
            <div className="max-w-[700px] text-white font-medium  w-full font-manrope text-[17px] ">
              Building a brighter future through innovative and sustainable
              solutions. With a strong commitment to quality, excellence, and
              reliability, we lay the foundation for success, ensuring lasting
              partnerships and impactful results.
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
      </div>
      <WhyUs />
      <WhoWeAre />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
    </section>
  );
}
