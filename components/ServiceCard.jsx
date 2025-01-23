"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceCard = ({
  title,
  description,
  imageUrl,
  linkUrl,
  delay,
  isInView,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-white overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
      //   variants={cardVariants}
      //   initial="hidden"
      //   animate={isInView ? "visible" : "hidden"}
      //   transition={{ duration: 0.6, delay }}
    >
      <div className="relative h-64 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col items-center justify-center">
        <h3 className="text-[24px] font-saira font-medium mb-3 text-HeadingText">
          {title}
        </h3>
        <p className="text-gray-600 font-manrope text-[16px] text-center  mb-4">
          {description}
        </p>
        <Link
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group mt-6 px-6 py-3 w-full text-center md:max-w-[150px] border-2 hover:border-none border-primary text-primary hover:text-white overflow-hidden"
        >
          <span className="absolute inset-0 bg-HeadingText transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          <span className="relative z-10">Learn More</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
