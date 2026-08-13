"use client";

import Image from "next/image";
import { useBooking } from "./BookingProvider";

export default function ContactFooter() {
  const { openBooking } = useBooking();

  return (
    <footer id="contact" className="border-t border-brand-rose/25 bg-white font-sans text-brand-ink">
      <div className="grid min-h-[620px] lg:grid-cols-[57%_43%]">
        <div className="flex flex-col justify-center bg-gradient-to-br from-white to-[#f8f3f1] px-6 py-6 sm:px-12 lg:px-[72px] lg:py-12">
          <Image
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png"
            alt="Alpha Dental Studio"
            width={532}
            height={310}
            className="mb-7 h-auto w-[245px] object-contain sm:w-[270px]"
          />

          <div className="max-w-[860px] space-y-5 text-[15px] leading-[1.65] sm:text-[17px] lg:text-[18px]">
            <address className="not-italic">
              <h2 className="mb-1 font-heading text-[18px] font-bold sm:text-[20px]">RA Puram Branch</h2>
              <p>Plot Number 65, First Floor, Old Door Number 2/4, Thiruvenkadam Street, Chennai, Tamil Nadu 600028</p>
              <p className="mt-3 break-words font-semibold text-brand-rust">
                <a href="tel:+918122200767">+91 81222 00767</a>
                <span> | </span>
                <a href="mailto:info@alphadentalstudios.com">info@alphadentalstudios.com</a>
              </p>
            </address>

            <address className="not-italic">
              <h2 className="mb-1 font-heading text-[18px] font-bold sm:text-[20px]">Kottivakkam Branch</h2>
              <p>No 2, 311, AGS Colony, 2nd Main Rd, Kannappa Nagar, Kottivakkam, Chennai, Tamil Nadu 600041</p>
              <p className="mt-3 break-words font-semibold text-brand-rust">
                <a href="tel:+918637438826">+91 863 743 8826</a>
                <span> | </span>
                <a href="mailto:info@alphadentalstudios.com">info@alphadentalstudios.com</a>
              </p>
            </address>

            <p>
              Follow Us: <a className="text-brand-rust hover:underline" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              <span> | </span>
              <a className="text-brand-rust hover:underline" href="https://www.instagram.com/alphadentalstudios/" target="_blank" rel="noreferrer">Instagram</a>
            </p>
          </div>
        </div>

        <div className="relative flex items-center overflow-hidden px-8 py-6 text-brand-ink sm:px-16 lg:px-16">
          <Image
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612790/clinic-interior.png"
            alt="Alpha Dental Studio clinic interior"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 43vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f3f1]/95 via-brand-rose/85 to-brand-rust/70" />
          <div className="relative z-10 w-full max-w-[520px] space-y-5 rounded-[24px] border border-white/50 bg-white/30 p-6 shadow-[0_18px_50px_rgba(58,46,41,.12)] backdrop-blur-[3px] sm:p-8">
            <div>
              <h2 className="font-heading text-[18px] font-bold uppercase tracking-[0.04em] sm:text-[20px]">Office Hours</h2>
              <dl className="mt-5 max-sm:mt-2 grid grid-cols-[110px_1fr] gap-y-2 text-[15px] sm:grid-cols-[126px_1fr] sm:text-[18px]">
                <dt className="font-bold">MON – SAT</dt><dd>10AM – 8PM</dd>
                <dt className="font-bold">SUN</dt><dd>CLOSED</dd>
              </dl>
            </div>

            <div>
              <h2 className="font-heading text-[18px] font-bold uppercase tracking-[0.04em] sm:text-[20px]">Instagram</h2>
              <a className="mt-4 max-sm:mt-1 inline-block text-[16px] font-medium hover:underline sm:text-[19px]" href="https://www.instagram.com/alphadentalstudios/" target="_blank" rel="noreferrer">@alphadentalstudios</a>
            </div>

            <div className="pt-8 max-sm:pt-1">
              <h2 className="font-heading text-[18px] font-bold uppercase tracking-[0.04em] sm:text-[20px]">Book an Appointment</h2>
              <button type="button" onClick={openBooking} className="mt-5 min-h-[50px] rounded-full bg-brand-rust px-8 text-[15px] font-semibold uppercase text-white shadow-[0_5px_18px_rgba(58,46,41,.2)] transition hover:-translate-y-0.5 hover:bg-brand-ink sm:text-[16px]">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
