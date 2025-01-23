"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ServiceCard from "./ServiceCard";
import interior from "../app/home/assets/interior design.webp";
import Construction from "../public/assets/construction.webp";

const services = [
  {
    title: "Construction",
    description: "Building durable and innovative structures with precision and excellence.",
    imageUrl: "/assets/construction.webp",
    linkUrl: "https://www.worldgbc.org",
  },
  {
    title: "Renovation",
    description: "Building durable and innovative structures with precision and excellence.",
    imageUrl: "/assets/renovation.webp",
    linkUrl: "https://www.archdaily.com",
  },
  {
    title: "Interior Design",
    description: "Building durable and innovative structures with precision and excellence.",
    imageUrl: "/assets/interior design.webp",
    linkUrl: "https://www.houzz.com",
    linkUrl: "https://www.archdaily.com",
  },
  {
    title: "Architecture",
    description: "Building durable and innovative structures with precision and excellence.",
    imageUrl: "/assets/architecture.webp",
    linkUrl: "https://www.archdaily.com",
  },
  {
    title: "Special Project",
    description: "Building durable and innovative structures with precision and excellence.",
    imageUrl: "/assets/projectspec.webp",
    linkUrl: "https://www.archdaily.com",
  },
  {
    title: "Consulting",
    description: "Building durable and innovative structures with precision and excellence.",
    imageUrl: "/assets/consult.webp",
    linkUrl: "https://www.archdaily.com",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className=" ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.2}
              isInView={isInView}
              linkUrl={service.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;