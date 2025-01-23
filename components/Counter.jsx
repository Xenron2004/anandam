"use client";
import CountUp from "react-countup";
import { useState, useEffect, useRef } from "react";

const Counter = ({ end, duration }) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={counterRef}
      className="text-[60px] font-saira font-bold text-primary"
    >
      {isVisible && <CountUp start={0} end={end} duration={duration} />}
    </div>
  );
};

export default Counter;
