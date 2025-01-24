"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Manone from "../../../public/assets/manone.png"
import Mantwo from "../../../public/assets/mantwo.png"
import Manthree from "../../../public/assets/manthree.png"
import Manfour from "../../../public/assets/manfour.png"
import Manfive from "../../../public/assets/manfive.png"
import Womanone from "../../../public/assets/womanone.png"
import Womantwo from "../../../public/assets/womantwo.png"
import Womanthree from "../../../public/assets/womanthree.png"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Interior Designer",
    image:
    Manone,

    content:
      "Anandam Construction ka kaam bilkul top-notch hai! Unhone mere dream home ko reality banaya, aur quality kaafi impressive thi. Patna mein aisi construction company dhoondhna mushkil hai jo trust aur professionalism dono maintain kare!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Property Developer",
    image:
      Womanone,
    content:
      "Affordable rates aur premium quality – Anandam Construction ka kaam dekh kar sab log impress ho gaye! Har step pe transparency thi, aur unka team har detail ka dhyan rakhta hai. Highly recommend karta hoon!",
    rating: 5,
  },
  {
    id: 3,
    name: "Anil Singh",
    role: "Anil Singh",
    image:
      Mantwo,
    content:
      "Mujhe apne ghar ke liye ek reliable builder chahiye tha, aur Anandam Construction ne meri umeedon se zyada deliver kiya. Unka design aur execution dono flawless tha. Thank you for making my dream home possible!",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Jha",
    role: "Architect",
    image:
     Womantwo,
    content:
      "Jo bhi Anandam Construction ke saath kaam karega, unhe kabhi disappoint nahi hoga. Unki commitment aur quality work dekh kar aisa lagta hai ki aapka investment safe hands mein hai. Best construction company in Patna!",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikash Sharma",
    role: "Commercial Client",
    image:
     Manfour,
    content:
      "Mere naye ghar ka design aur finishing Anandam Construction ke wajah se itna acha hai ki sab log tareef karte hain. Yeh team aapke sapno ko samajh kar unka pura khayal rakhti hai!",
    rating: 5,
  },
  {
    id: 6,
    name: "Renu Devi",
    role: "Commercial Client",
    image:
     Womanthree,
    content:
      "Mere naye ghar ka design aur finishing Anandam Construction ke wajah se itna acha hai ki sab log tareef karte hain. Yeh team aapke sapno ko samajh kar unka pura khayal rakhti hai!",
    rating: 5,
  },
  {
    id: 7,
    name: "Rohit Kumar",
    role: "Commercial Client",
    image:
      Manfive,
    content:
      "Mere naye ghar ka design aur finishing Anandam Construction ke wajah se itna acha hai ki sab log tareef karte hain. Yeh team aapke sapno ko samajh kar unka pura khayal rakhti hai!",
    rating: 5,
  },
  {
    id: 8,
    name: "Alok Tiwari",
    role: "Commercial Client",
    image:
      Manthree,
    content:
      "Mere naye ghar ka design aur finishing Anandam Construction ke wajah se itna acha hai ki sab log tareef karte hain. Yeh team aapke sapno ko samajh kar unka pura khayal rakhti hai!",
    rating: 5,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex items-center justify-center w-full h-auto  bg-[#F7F7F7]">
      <div className="max-w-7xl w-11/12 py-10">
        <div className="text-center mb-12">
          <h4 className="text-[16px] font-montserrat font-semibold text-secondary mb-2">
            TESTIMONIALS
          </h4>
          <h2 className="text-[30px] md:text-[40px] font-montserrat text-headingText font-normal">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-orange-50 transition-colors duration-300 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-orange-500" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-orange-50 transition-colors duration-300 hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-orange-500" />
          </button> */}

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 md:px-12"
                >
                  <div className=" p-6 md:p-8">
                    <div className="flex flex-col justify-center gap-6 items-center">
                      <p className="text-[16px] text-[#212B36] font-montserrat font-normal text-center">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center justify-center gap-[18px] ">
                        <div className="relative w-[50px] h-[50px] mb-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-[#6C6F84] text-[16px] font-montserrat font-medium mb-1">
                            {testimonial.name}
                          </h3>

                          <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* <p className="text-[16px] text-[#212B36] font-montserrat font-normal text-center">{testimonial.content}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary w-8 h-3" : "bg-[#EAEAEA]"
                }`}
              />
            ))}
          </div>
          <div className="items-center mt-5 justify-center flex">
            <Link href="/testimonials">
              <div className="relative group w-full md:max-w-[180px]">
                <button className="mt-6 px-6 py-3 w-full bg-primary text-white shadow relative overflow-hidden">
                  <span className="relative z-10">View All</span>
                  <span className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
