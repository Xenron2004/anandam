"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&q=80",
    content:
      "The category boasts of some great products that exemplify innovation, far advanced and with better features than the ones sold in the market. There are multiple colours available within the same price range, and do not demand any premium being paid as compared to UPVC. A special mention about Tostem India, for being agile during installation and delivering high-quality service throughout.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&q=80",
    content:
      "Outstanding service from start to finish. The project was completed ahead of schedule and the results were spectacular.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&q=80",
    content:
      "Their innovative approach to design and commitment to sustainability made them the perfect choice for our eco-friendly home project.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Architect",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&q=80",
    content:
      "The category boasts of some great products that exemplify innovation, far advanced and with better features than the ones sold in the market. There are multiple colours available within the same price range, and do not demand any premium being paid as compared to UPVC. A special mention about Tostem India, for being agile during installation and delivering high-quality service throughout.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Commercial Client",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&q=80",
    content:
      "Their team's ability to handle complex commercial projects while maintaining exceptional quality is remarkable.",
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
    }, 5000);

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
            <Link href='/testimonials'>
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
