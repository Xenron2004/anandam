"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyCard = () => {
  // Ref and in-view detection for the entire section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={sectionRef} className="w-full  flex justify-center ">
      <div className="max-w-[1280px] w-full">
        {/* Three cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}

          <motion.div
            className="relative flex flex-col items-start bg-cardBg border-b-2 gap-3 border-primary px-6 py-10 overflow-hidden group"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-primary scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"></div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="font-saira font-medium text-[20px] tracking-[1.3%] text-white mb-4">
                1. Eco-Friendly Construction
              </h3>
              <p className="text-[17px] max-w-[370px] w-full font-manrope font-normal text-white leading-relaxed">
                "We use eco-friendly, non-toxic materials to create sustainable
                buildings while improving indoor air quality in homes, offices,
                and recreational spaces."
              </p>
            </div>
          </motion.div>
          {/* Card 2 */}

          <motion.div
            className="relative flex flex-col items-start bg-cardBg border-b-2 gap-3 border-primary px-6 py-10 overflow-hidden group"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-primary scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"></div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="font-saira font-medium text-[20px] tracking-[1.3%] text-white mb-4">
                2. The Newest Technology
              </h3>
              <p className="text-[17px] max-w-[370px] w-full font-manrope font-normal text-white leading-relaxed">
                Virtual reality VR transforms construction by safely simulating
                environments like confined spaces and heights for worker
                training.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            className="relative flex flex-col items-start bg-cardBg border-b-2 gap-3 border-primary px-6 py-10 overflow-hidden group"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-primary scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"></div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="font-saira font-medium text-[20px] tracking-[1.3%] text-white mb-4">
                1. Quality Construction Management
              </h3>
              <p className="text-[17px] max-w-[370px] w-full font-manrope font-normal text-white leading-relaxed">
                Quality management in construction involves policies and
                processes to ensure superior project delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
