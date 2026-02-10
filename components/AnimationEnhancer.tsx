"use client";

import { useEffect } from "react";

export default function AnimationEnhancer() {
  useEffect(() => {
    // Add js-enabled class to html
    document.documentElement.classList.add("js-enabled");

    // Set up Intersection Observer for scroll animations
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".animate-fade-in-up-on-scroll").forEach((el) => {
        observer.observe(el);
      });
    }
  }, []);

  return null;
}
