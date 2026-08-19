"use client";

import { useRef } from "react";
import { useBooking } from "./BookingProvider";

const journeyVideos = [
  {
    src: "/video-1.mp4",
    description: "See how our dentists understand your concerns, plan every step, and guide you through comfortable, personalised dental care.",
    label: "01",
  },
  {
    src: "/video-2.mp4",
    description: "Discover how thoughtful treatment, regular progress reviews, and expert attention help you reach a healthy smile with confidence.",
    label: "02",
  },
];

export default function SmileJourney() {
  const { openBooking } = useBooking();
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const playOnly = (activeIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== activeIndex && video && !video.paused) video.pause();
    });
  };

  return (
    <section id="smile-journey" className="bg-white px-5 py-6 sm:px-8 lg:px-[62px] lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[850px] text-center">
          {/* <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-rust">Your Smile Journey</p> */}
          <h2 className="mt-3 font-heading text-[42px] font-bold leading-[1.15] tracking-[-1.1px] text-brand-ink max-lg:text-[36px] max-sm:text-[29px]">
            See How We Take You From Consultation to a Confident Smile
          </h2>
          {/* <p className="mx-auto mt-5 max-w-[760px] font-sans text-[19px] leading-[1.7] text-brand-ink/70 max-sm:text-[16px]">
            Watch the complete Alpha Dental experience—from understanding your concerns and planning your treatment to expert care, progress reviews, and your final smile.
          </p> */}
        </div>

        <div className="mx-auto mt-12 max-sm:mt-5 grid max-w-[1160px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
          {journeyVideos.map((video, index) => (
            <article key={video.src}>
              <div className="mx-auto aspect-square w-full max-w-[1060px] overflow-hidden rounded-[20px] bg-white">
                <video
                  ref={(element) => { videoRefs.current[index] = element; }}
                  className="h-full w-[177%] max-w-none object-fit object-left"
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.description}
                  onPlay={() => playOnly(index)}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-5 flex items-start gap-[15px]">
                <span className="grid size-[57px] shrink-0 place-items-center rounded-[15px] bg-brand-sage/20 font-heading text-[30px] font-semibold leading-none text-brand-ink">{video.label}</span>
                <p className="max-w-[500px] font-sans text-[18px] font-medium leading-[1.42] tracking-[-0.3px] text-brand-ink/80 max-xl:text-[14px] max-sm:text-[14px]">{video.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-5 max-sm:mt-0 max-w-[680px] text-center">
          {/* <p className="font-sans text-[18px] font-medium leading-relaxed text-brand-ink/75 max-sm:text-[16px]">
            Ready to understand the right treatment for your smile? Start with a clear, honest consultation tailored to you.
          </p> */}
          <button type="button" onClick={openBooking} className="mx-auto mt-6 inline-flex min-h-[56px] w-full max-w-[420px] items-center justify-center rounded-full bg-brand-rust px-6 py-3 font-sans text-[17px] font-semibold text-white transition hover:bg-brand-ink max-sm:text-[15px]">
            Book Your Consultation 499 →
          </button>
          <p className="mt-3 font-sans text-[13px] italic leading-relaxed text-brand-ink/65 max-sm:text-xs">No pressure. No obligation. Just an honest plan for your teeth.</p>
        </div>
      </div>
    </section>
  );
}
