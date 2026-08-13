"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBooking } from "./BookingProvider";

const navLinks = [
  ["Clinic", "#clinic"],
  ["Treatments", "#treatments"],
  ["Your Journey", "#smile-journey"],
  ["Reviews", "#reviews"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-rose/20 bg-white/95 font-sans text-brand-ink shadow-[0_6px_24px_rgba(58,46,41,.06)] backdrop-blur-md">
      <div className="mx-auto grid h-[88px] max-w-[1650px] grid-cols-[153px_minmax(0,1fr)_auto] items-center gap-x-5 px-5 lg:px-8 max-[640px]:h-[72px] max-[640px]:grid-cols-[116px_1fr_auto] max-[640px]:gap-x-2.5 max-[640px]:px-3">
      <Link
        className="grid h-[81px] w-[153px] -translate-y-px place-items-center overflow-hidden no-underline max-[640px]:h-[62px] max-[640px]:w-[116px]"
        href="/"
        aria-label="Alpha Dental Studio home"
      >
        <Image
          className="h-auto w-[148px] object-contain max-[640px]:w-28"
          src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png"
          alt="Alpha Dental Studio"
          width={532}
          height={310}
          priority
        />
      </Link>

      <nav aria-label="Main navigation" className="hidden items-center justify-center gap-1 lg:flex">
        {navLinks.map(([label, href]) => (
          <Link key={label} href={href} className="rounded-full px-4 py-2 text-[14px] font-medium transition-colors hover:bg-brand-rose/15 hover:text-brand-rust">
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-self-end gap-3">
        <button
          type="button"
          onClick={openBooking}
          className="inline-flex h-[43px] min-w-[175px] items-center justify-center whitespace-nowrap rounded-full bg-brand-rust px-[15px] font-sans text-[15px] leading-none font-medium text-white no-underline max-[640px]:hidden"
        >
          Book Appointment
        </button>

        <a
          href="tel:+918122200767"
          className="hidden h-[43px] min-w-[108px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-ink px-4 font-sans text-[15px] leading-none font-semibold text-white no-underline transition hover:bg-brand-rust sm:inline-flex"
        >
          <span>Call Us</span>
        </a>
        <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} className="grid size-11 place-items-center rounded-full bg-brand-ink text-white lg:hidden">
          <span className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-brand-rose/20 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1650px] flex-col gap-1">
            {navLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-[15px] font-medium hover:bg-brand-rose/15">{label}</Link>
            ))}
            <a href="tel:+918122200767" className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-brand-ink font-semibold text-white">Call +91 8122200767</a>
          </div>
        </nav>
      )}
    </header>
  );
}
