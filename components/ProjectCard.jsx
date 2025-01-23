"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1577587230708-187fdbef4d91?q=80&w=1200&h=800",
    ],
    title: "Modern Office Complex",
    type: "Commercial Building",
    description:
      "A state-of-the-art office complex featuring sustainable design and smart building technology",
    location: "Downtown Business District",
    area: "45,000 sq ft",
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&h=800",
    ],
    title: "Urban Residential Tower",
    type: "Residential Project",
    description:
      "Luxury residential tower with panoramic city views and premium amenities",
    location: "Metropolitan Center",
    area: "65,000 sq ft",
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&h=800",
    ],
    title: "Sustainable Campus",
    type: "Educational Institution",
    description:
      "Eco-friendly campus design integrating modern learning spaces with natural surroundings",
    location: "University District",
    area: "120,000 sq ft",
  },
];

export default function ProjectCard() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !autoplayEnabled) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [emblaApi, autoplayEnabled]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col max-w-[1280px] w-11/12 h-auto items-center justify-center">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={() => setAutoplayEnabled(false)}
        onMouseLeave={() => setAutoplayEnabled(true)}
      >
        <div className="flex max-w-1280px] items-center justify-center w-full h-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-2 gap-4  max-w-[630px] w-full h-[500px]">
                {project.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative overflow-hidden group"
                    onMouseEnter={() =>
                      setHoveredProject(index * 2 + imageIndex)
                    }
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white
                        transition-all duration-500 ${
                          hoveredProject === index * 2 + imageIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                    >
                      <div className="transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="text-3xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-lg mb-2">{project.type}</p>
                        <p className="text-sm mb-2 opacity-90">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-center gap-4 text-sm mb-4">
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.area}</span>
                        </div>
                        <div className="relative group w-full md:max-w-[180px]">
                          <button className="mt-6 px-6 py-3 w-full bg-primary text-white shadow relative overflow-hidden">
                            <span className="relative z-10">VIEW PROJECTS</span>
                            <span className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              selectedIndex === index
                ? "bg-primary w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
