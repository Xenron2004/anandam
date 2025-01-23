
"use client";

import React, { useEffect } from "react";

import Lenis from "lenis";

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
    // const lenis = new Lenis({
    //   lerp: 0.1, // Adjust for smoothness
    //   smooth: true,
    // });

    const lenis = new Lenis({
      lerp: 0.08, // Lower lerp for smoother transition
      smooth: true,
      duration: 1.2, // Adjust for a more gradual scroll
      easing: (t) => 1 - Math.pow(1 - t, 4), // Custom easing function
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.stop();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
