"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    // Mark that JS is enabled for CSS hooks
    document.documentElement.classList.add("js-enabled");

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

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

    // Observe all scroll-animated elements on the current route
    const elements = document.querySelectorAll(".animate-fade-in-up-on-scroll");
    elements.forEach((el) => observer.observe(el));

    // Clean up when the route changes so we can re-attach on the new page
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

