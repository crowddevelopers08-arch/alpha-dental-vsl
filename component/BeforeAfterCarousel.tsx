"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const RESULTS = [
  { src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787124956/unnamed_6.webp", alt: "Patient dental transformation before and after treatment" },
  { src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787124956/unnamed_2.webp", alt: "Alpha Dental Studio patient smile before and after treatment" },
  { src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787124956/unnamed_1.webp", alt: "Composite veneering smile transformation before and after treatment" },
  { src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787124956/unnamed_3.webp", alt: "Dental smile makeover before and after treatment" },
  { src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787124956/unnamed_4.webp", alt: "Patient dental transformation before and after treatment" },
  { src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787124956/unnamed_5.webp", alt: "Patient dental transformation before and after treatment" },
] as const;

export default function BeforeAfterCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
      }
    }, { threshold: 0.25 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function goTo(index: number) {
    const nextIndex = Math.max(0, Math.min(index, RESULTS.length - 1));
    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveIndex(nextIndex);
  }

  function updateActiveSlide() {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActiveIndex(closestIndex);
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="smile-results-title"
      className="overflow-hidden bg-[#fff8f4] py-8 sm:py-12"
    >
      <div className="mx-auto w-[min(1320px,92vw)]">
        <div className="relative mb-7 sm:mb-9">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="smile-results-title"
              className={`mt-3 font-heading uppercase text-[34px] leading-tight font-bold tracking-[-1.5px] text-brand-ink transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-sm:text-[24px] max-sm:tracking-[-0.35px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              Smiles Transformed At Alpha
            </h2>
            <p className={`mx-auto mt-3 max-w-xl text-md leading-6 text-brand-ink/60 transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
              Real before and after results from treatments at our RA Puram studio.
            </p>
          </div>

          <div className={`absolute right-0 bottom-0 hidden shrink-0 gap-2 transition-all delay-[1200ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:flex ${revealed ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
            <button
              type="button"
              aria-label="Show previous result"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-brand-ink shadow-sm transition hover:border-brand-rust hover:bg-brand-rust hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-l-2 border-current" />
            </button>
            <button
              type="button"
              aria-label="Show next result"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === RESULTS.length - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-brand-ink shadow-sm transition hover:border-brand-rust hover:bg-brand-rust hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span className="h-2.5 w-2.5 rotate-45 border-t-2 border-r-2 border-current" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateActiveSlide}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
        >
          {RESULTS.map((result, index) => (
            <article
              key={result.src}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              style={{ transitionDelay: `${1400 + index * 300}ms`, transitionDuration: "1200ms" }}
              className={`relative aspect-[4/7] w-full shrink-0 snap-start overflow-hidden rounded-lg bg-white opacity-0 shadow-[0_12px_35px_rgba(58,46,41,.12)] ring-1 ring-brand-rose/15 transition-opacity ease-out motion-reduce:opacity-100 sm:w-[44vw] sm:max-w-[360px] sm:transition-all sm:motion-reduce:transform-none lg:w-[calc((100%_-_3rem)/4)] lg:max-w-none ${revealed ? "opacity-100 sm:translate-y-0" : "sm:translate-y-12"}`}
            >
              <Image
                src={result.src}
                alt={result.alt}
                width={1080}
                height={1350}
                sizes="(max-width: 639px) 92vw, (max-width: 1023px) 44vw, 25vw"
                className="block h-full w-full object-cover"
              />
            </article>
          ))}
        </div>

        <div className={`mt-4 flex items-center justify-center gap-4 transition-all delay-[2700ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <button
            type="button"
            aria-label="Show previous result"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-brand-ink shadow-sm transition active:bg-brand-rust active:text-white disabled:cursor-not-allowed disabled:opacity-35 sm:hidden"
          >
            <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-l-2 border-current" />
          </button>
          <div className="flex items-center justify-center gap-2" aria-label="Select a result">
            {RESULTS.map((result, index) => (
              <button
                key={result.src}
                type="button"
                aria-label={`Show result ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-7 bg-brand-rust"
                    : "w-2.5 bg-brand-rose/45 hover:bg-brand-rust/65"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Show next result"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === RESULTS.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-brand-ink shadow-sm transition active:bg-brand-rust active:text-white disabled:cursor-not-allowed disabled:opacity-35 sm:hidden"
          >
            <span className="h-2.5 w-2.5 rotate-45 border-t-2 border-r-2 border-current" />
          </button>
        </div>
      </div>
    </section>
  );
}
