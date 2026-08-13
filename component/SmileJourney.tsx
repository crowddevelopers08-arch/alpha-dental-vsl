"use client";

import Image from "next/image";
import { useBooking } from "./BookingProvider";

const steps = [
  {
    number: "01",
    image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612797/journey-scan.png",
    alt: "Dental scan performed at home",
    label: "At– Home",
    description: "Book a scan at home / 50+ clinics or consult our dentist",
  },
  {
    number: "02",
    image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612790/journey-aligners.png",
    alt: "Premium dental aligner kit",
    description: "Start wearing your aligners, designed by expert orthodontist",
  },
  {
    number: "03",
    image: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/journey-progress.png",
    alt: "Patient tracking dental progress virtually",
    label: "Progress Monitoring",
    description: "Track progress virtually and in-person with experts",
  },
];

export default function SmileJourney() {
  const { openBooking } = useBooking();
  return (
    <section id="smile-journey" className="bg-white px-5 py-16 sm:px-8 lg:px-[62px] lg:py-20">
      <div className="mx-auto max-w-[1620px]">
        <h2 className="text-center font-heading text-[42px] leading-[1.15] font-bold tracking-[-1.1px] text-brand-ink max-lg:text-[36px] max-sm:text-[29px]">
          Stress free journey to your dream smile
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <article key={step.number}>
              <div className="relative aspect-[1.78/1] overflow-hidden rounded-[20px] bg-zinc-100">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                {step.label && (
                  <p className="absolute bottom-5 left-[52px] font-sans text-[21px] font-semibold text-white">
                    {step.label}
                  </p>
                )}
              </div>

              <div className="mt-5 flex items-start gap-[15px]">
                <span className="grid size-[57px] shrink-0 place-items-center rounded-[15px] bg-brand-sage/20 font-heading text-[30px] leading-none font-semibold text-brand-ink">
                  {step.number}
                </span>
                <p className="max-w-[420px] font-sans text-[23px] leading-[1.42] font-medium tracking-[-0.3px] text-brand-ink/80 max-xl:text-[20px] max-sm:text-[18px]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-[680px] text-center">
          <button
            type="button"
            onClick={openBooking}
            className="mx-auto mt-5 inline-flex min-h-[56px] w-full max-w-[420px] items-center justify-center rounded-full bg-brand-rust px-6 py-3 font-sans text-[17px] font-semibold text-white transition hover:bg-brand-ink max-sm:text-[15px]"
          >
            Book My Free Consultation →
          </button>
          <p className="mt-3 font-sans text-[13px] leading-relaxed italic text-brand-ink/65 max-sm:text-xs">
            No pressure. No obligation. Just an honest plan for your teeth.
          </p>
        </div>
      </div>
    </section>
  );
}
