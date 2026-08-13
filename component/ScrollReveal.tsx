"use client";

import { useEffect } from "react";

const selector = [
  "main section h1",
  "main section h2",
  "main section h3",
  "main section p",
  "main section article",
  "main section img",
  "main section video",
  "main section a",
  "main section button",
].join(",");

const directions = ["bottom", "left", "right", "top"] as const;

export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
      (element) => !element.closest("header") && !element.closest("[data-no-reveal]")
    );

    let clinicIndex = 0;

    elements.forEach((element, index) => {
      if (element.dataset.revealReady) return;

      const rect = element.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const viewportCenter = window.innerWidth / 2;
      const direction =
        Math.abs(center - viewportCenter) > window.innerWidth * 0.18
          ? center < viewportCenter
            ? "left"
            : "right"
          : directions[index % directions.length];

      element.dataset.revealReady = "true";
      element.dataset.reveal = direction;
      const isClinicElement = Boolean(element.closest("#clinic"));
      element.style.setProperty(
        "--reveal-delay",
        `${isClinicElement ? Math.min(clinicIndex++ * 150, 900) : (index % 4) * 110}ms`
      );
      if (isClinicElement) element.classList.add("scroll-reveal--slow");
      element.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
