"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBooking } from "./BookingProvider";

const ClockIcon = () => (
  <svg className="size-7 shrink-0 text-brand-rust" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 7v5l3 2" />
  </svg>
);

const PinIcon = () => (
  <svg className="size-7 shrink-0 text-brand-rust" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.7" />
  </svg>
);

export default function ClinicDetail() {
  const [isMuted, setIsMuted] = useState(true);
  const { openBooking } = useBooking();

  return (
    <section id="clinic" className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1650px] grid-cols-1 gap-10 xl:grid-cols-[620px_minmax(0,1fr)] xl:gap-[56px]">
        <div>
          <p className="mb-5 font-sans text-[15px] font-semibold tracking-[0.02em] text-brand-rust">
            Alpha Dental Studio · RA Puram, Chennai
          </p>

          <h1 className="max-w-[610px] font-heading text-[38px] leading-[1.13] font-semibold tracking-[-1.15px] text-brand-ink max-sm:text-[32px]">
            Missing teeth, a broken smile, or a tooth that won&apos;t stop hurting? Watch this before you pick a dentist.
          </h1>

          <div className="mt-7 overflow-hidden rounded-[14px] bg-white shadow-[0_8px_30px_rgba(58,46,41,0.12)] xl:hidden">
            <div className="relative aspect-[4/5] bg-[#f8f3f1]">
              <video
                className="absolute inset-0 h-full w-full object-contain"
                src="https://res.cloudinary.com/jfmvvhot/video/upload/v1784808906/hero-1_p0ut1j.mp4"
                poster="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/smile-promo.jpg"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                aria-label="Confident smile treatment at Alpha Dental"
              />
              <button
                type="button"
                onClick={() => setIsMuted((muted) => !muted)}
                className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-black/65 text-white shadow-md backdrop-blur-sm transition hover:bg-brand-rust"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" /><path strokeLinecap="round" d="m16 9 5 5m0-5-5 5" /></svg>
                ) : (
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" /><path strokeLinecap="round" d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" /></svg>
                )}
              </button>
            </div>
            <div className="hidden bg-white px-5 py-5 text-center">
              <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png" alt="Alpha Dental Studio" width={108} height={63} className="mx-auto h-auto w-[108px]" />
              <p className="mt-2 text-[15px] font-semibold text-brand-ink">Your confident smile starts here</p>
              <p className="mt-1 text-[13px] text-brand-rust">Advanced care. Beautiful results.</p>
            </div>
          </div>

          <p className="mt-6 max-w-[590px] font-sans text-[18px] leading-[1.65] text-brand-ink/75">
            3 minutes. One video. Everything you need to know about Implants, Smile Design &amp; Root Canal — before you spend a rupee.
          </p>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-[18px] font-medium text-brand-rust">4.9/5 Average Rating</span>
            <div className="flex gap-2 text-[35px] leading-none text-[#ffbc4b]" aria-label="4.9 out of 5 stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-[#f1c900]">☆</span>
            </div>
          </div>

          <div className="mt-5 space-y-5 text-[17px] text-brand-ink">
            <div className="flex items-center gap-4"><ClockIcon /><span>10:00:00 - 08:00:00 <b className="font-semibold">(Closed on Sun)</b></span></div>
            <div className="flex items-start gap-4"><PinIcon /><div><p>Plot Number 65, First Floor, Old Door Number 2/4, Thiruvengadam Street, Chennai, Tamil Nadu 600028</p><a className="mt-4 inline-block font-medium text-brand-rust " rel="noreferrer">+91 8122200767 |  info@alphadentalstudios.com</a></div></div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-8 sm:gap-[15px]">
            <a href="tel:+918122200767" className="inline-flex h-[47px] items-center gap-3 rounded-full border border-brand-rust px-5 text-[14px] font-semibold text-brand-ink transition hover:bg-brand-rust hover:text-white">
              <span className="text-xl">☎</span> Call Now 8122200767
            </a>
            <button type="button" onClick={openBooking} className="inline-flex h-[47px] items-center gap-3 rounded-full bg-brand-rust px-6 text-[14px] font-semibold text-white transition hover:bg-brand-ink">
              <span className="text-xl">▣</span> Book Appointment
            </button>
          </div>
        </div>

        <div className="hidden min-h-[460px] grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1.22fr_1fr_1.83fr] lg:grid-rows-[217px_224px] xl:grid">
          <div className="relative overflow-hidden rounded-tl-[14px]"><Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/clinic-exterior.png" alt="Alpha Dental clinic exterior" fill className="object-cover" sizes="300px" /></div>
          <div className="relative overflow-hidden sm:rounded-tr-[14px] lg:rounded-tr-none"><Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612790/clinic-interior.png" alt="Alpha Dental clinic reception" fill className="object-cover" sizes="300px" /></div>

          <div className="flex min-h-[460px] flex-col overflow-hidden bg-white sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:rounded-r-[14px]">
            <div className="relative min-h-0 flex-1 bg-[#f8f3f1]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="https://res.cloudinary.com/jfmvvhot/video/upload/v1784808906/hero-1_p0ut1j.mp4"
                poster="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/smile-promo.jpg"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                aria-label="Confident smile treatment at Alpha Dental"
              />
              <button
                type="button"
                onClick={() => setIsMuted((muted) => !muted)}
                className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-black/65 text-white shadow-md backdrop-blur-sm transition hover:bg-brand-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rust"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" />
                    <path strokeLinecap="round" d="m16 9 5 5m0-5-5 5" />
                  </svg>
                ) : (
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" />
                    <path strokeLinecap="round" d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" />
                  </svg>
                )}
              </button>
            </div>
            {/* <div className="shrink-0 bg-white px-6 py-5 text-center">
              <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png" alt="Alpha Dental Studio" width={108} height={63} className="mx-auto h-auto w-[108px]" />
              <p className="mt-2 text-[13px] font-semibold text-brand-ink">Your confident smile starts here</p>
              <p className="mt-1 text-[11px] text-brand-rust">Advanced care. Beautiful results.</p>
            </div> */}
          </div>

          <div className="relative hidden overflow-hidden rounded-bl-[14px] bg-[#edf1ef] sm:col-span-2 lg:col-span-2 lg:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.711236357408!2d80.2641285!3d13.024299699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267fe2b4e48af%3A0x2fad03f83ec90c76!2sAlpha%20Dental%20Studio!5e1!3m2!1sen!2sin!4v1786636617879!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0"
              title="Alpha Dental Studio location"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
