"use client";

import Image from "next/image";
import { useBooking } from "./BookingProvider";

export default function AppointmentBanner() {
  const { openBooking } = useBooking();
  return (
    <section id="book-appointment" aria-label="Book a dental appointment" className="relative overflow-hidden bg-[#f8f3f1] px-4 pb-10 pt-10 sm:px-6 xl:px-6 xl:pt-[130px]">
      <div className="relative mx-auto min-h-[298px] w-full max-w-[1684px] overflow-visible rounded-[26px] border border-brand-rose/60 bg-[#f8f3f1]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[25px]">
          <div className="absolute inset-y-0 right-0 w-[36%] bg-brand-rose" />
          <div className="absolute right-[25.5%] top-1/2 size-[430px] -translate-y-1/2 rounded-full border-[58px] border-brand-rose/35 sm:size-[500px] xl:size-[565px]" />
          <div className="absolute right-[26.5%] top-1/2 size-[335px] -translate-y-1/2 rounded-full border-[55px] border-white/55 sm:size-[405px] xl:size-[450px]" />
        </div>

        <div className="relative z-10 flex min-h-[296px] w-full flex-col items-start justify-center px-7 py-9 sm:px-10 xl:max-w-[62%] xl:px-10">
          <h2 className="max-w-[840px] font-heading text-[25px] leading-tight font-bold tracking-[-.02em] text-brand-ink sm:text-[29px] xl:text-[31px]">
            Your first step costs nothing but 20 minutes.
          </h2>
          <p className="mt-8 max-w-[820px] font-sans text-[16px] leading-relaxed text-brand-ink/85 sm:text-[18px] xl:mt-12 xl:text-[20px]">
            Book a free consultation. We&apos;ll show you your options honestly.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-12">
            <button type="button" onClick={openBooking} className="inline-flex h-[47px] items-center rounded-full border border-brand-rust bg-brand-rust px-6 font-heading text-[16px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-ink">
              Book Your Consultation →
            </button>
            <a href="tel:+918122200767" className="font-sans text-[14px] font-semibold text-brand-ink transition hover:text-brand-rust sm:text-[15px]">
               +91 8122200767 · Mon–Sat, 10 AM–8 PM
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-[100px] right-[3.5%] z-20 hidden h-[418px] w-[330px] overflow-hidden rounded-t-[180px] xl:block 2xl:right-[6%]">
        <Image
          src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612790/dentist-banner-clear.png"
          alt="Friendly dentist ready for an appointment"
          width={1024}
          height={1536}
          quality={95}
          className="h-full w-full object-cover object-top"
        />
        </div>
      </div>

      <div className="relative mx-auto mt-5 block max-w-[420px] overflow-hidden rounded-[24px] bg-brand-rose pt-5 xl:hidden">
        <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612790/dentist-banner-clear.png" alt="Friendly dentist" width={1024} height={1536} quality={95} className="mx-auto h-[390px] w-full object-cover object-top" />
      </div>
    </section>
  );
}
