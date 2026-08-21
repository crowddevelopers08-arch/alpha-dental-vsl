"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function PageNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-rose/20 bg-white/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8"
      >
      <Link
        className="flex items-center gap-2.5 no-underline max-[640px]:gap-1.5"
        href="/"
        aria-label="Alpha Dental Studio home"
      >
        <span className="relative size-18 shrink-0 overflow-hidden rounded-xl bg-[#fff8f4] max-[640px]:size-15">
          <Image
            className="object-contain p-1"
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1787294145/logo_black_transparent.png"
            alt=""
            fill
            priority
          />
        </span>
        <Image
          className="h-15 w-auto object-contain max-[640px]:h-14"
          src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1787294146/alpha-dental-logo.png"
          alt="Alpha Dental Studio"
          width={2149}
          height={732}
          priority
        />
      </Link>

        {/* <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold text-brand-ink transition-colors hover:text-brand-rust"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul> */}

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+918122200767"
            className="text-sm font-semibold text-brand-sage transition-colors hover:text-brand-rust"
          >
            +91 8122200767
          </a>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-rust px-6 text-sm font-bold text-white shadow-lg shadow-brand-rust/25 transition-transform hover:-translate-y-0.5 hover:bg-brand-ink"
          >
            Back to Home
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="primary-nav-panel"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg bg-brand-rose/10 md:hidden"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-brand-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-brand-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-brand-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        id="primary-nav-panel"
        className={`${open ? "flex" : "hidden"} flex-col gap-1 border-t border-brand-rose/20 px-4 pb-4 pt-2 md:hidden`}
      >
        <button
          type="button"
          className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-brand-rust px-6 text-sm font-bold text-white shadow-lg shadow-brand-rust/25"
        >
          Book Consultation
        </button>
      </div>
    </header>
  );
}
