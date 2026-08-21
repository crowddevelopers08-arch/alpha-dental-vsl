"use client";

import Image from "next/image";
import { useBooking } from "./BookingProvider";

export default function OurTeam() {
  const { openBooking } = useBooking();

  return (
    <section id="team" className="px-5 py-8 sm:px-8 lg:px-12 lg:py-20  bg-[#fff8f4]">
      <div className="mx-auto grid max-w-[1650px] grid-cols-1 gap-6 xl:grid-cols-[480px_minmax(0,1fr)] xl:gap-x-[56px]">
        <div className="xl:col-start-1 xl:row-start-1 xl:self-center">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[3px] text-brand-rust uppercase">
            <span aria-hidden="true" className="flex items-center">
              <i className="block w-10 border-t border-brand-rust" />
              <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
            </span>
            <span>Meet The Team</span>
          </p>

          <h2 className="mt-3 font-heading text-3xl leading-tight font-bold tracking-[-1.5px] text-brand-ink sm:text-4xl lg:text-[44px] lg:leading-[1.1] lg:tracking-[-1.5px]">
            The Team Behind Every Confident Smile
          </h2>

          <p className="mt-4 max-w-[420px] text-[16px] leading-[1.6] text-brand-ink/70">
            9 specialist dentists, one roof, every case reviewed by more than one expert eye.
          </p>

          <button
            type="button"
            onClick={openBooking}
            className="mt-7 hidden h-[52px] items-center justify-center rounded-full bg-brand-rust px-6 font-sans text-[15px] font-medium text-white transition hover:bg-brand-ink xl:inline-flex"
          >
            Book Your Consultation 499 →
          </button>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-brand-rose/25 shadow-[0_24px_60px_rgba(58,46,41,.08)] xl:col-start-2 xl:row-start-1 xl:aspect-auto xl:h-[440px] xl:self-start">
          <Image
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1787294152/team-1.png"
            alt="The Alpha Dental Studio team of specialist dentists"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1280px) 100vw, 1100px"
          />
        </div>

        <button
          type="button"
          onClick={openBooking}
          className="inline-flex h-[52px] w-full max-w-[280px] items-center justify-center rounded-full bg-brand-rust px-6 font-sans text-[15px] font-medium text-white transition hover:bg-brand-ink xl:hidden"
        >
          Book Your Consultation 499 →
        </button>
      </div>
    </section>
  );
}
