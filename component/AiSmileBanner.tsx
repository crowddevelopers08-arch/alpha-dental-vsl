"use client";

import Image from "next/image";
import { useBooking } from "./BookingProvider";

export default function AiSmileBanner() {
  const { openBooking } = useBooking();
  return (
    <section className="bg-[#f8f3f1] px-5 py-6 sm:px-8 lg:px-[60px] lg:py-20">
      <div className="relative mx-auto min-h-[302px] max-w-[1650px] overflow-hidden rounded-[28px] border border-brand-rose/25 bg-gradient-to-r from-brand-rose/45 via-brand-rose/20 to-brand-sage/10 shadow-[0_24px_60px_rgba(58,46,41,.08)] max-lg:min-h-0">
        <div className="relative z-20 flex min-h-[302px] w-full flex-col justify-center px-7 py-10 sm:px-[72px] lg:w-[56%] lg:px-[92px]">
          <p className="flex items-center gap-3 font-sans text-[13px] font-bold text-brand-rust max-sm:text-[14px]">
            <span className="size-2 rounded-full bg-brand-rust" /> WHY WATCH BEFORE YOU BOOK
          </p>
          <div className="mt-7 max-w-[760px] space-y-4 font-heading text-[22px] leading-[1.45] font-semibold tracking-[-0.25px] text-brand-ink max-[1450px]:text-[20px] max-xl:text-[18px] max-sm:mt-5 max-sm:text-[16px]">
            <p className="flex items-start gap-3">
              <span className="mt-[0.62em] size-2 shrink-0 rounded-full bg-brand-rust" />
              <span>Most clinics quote a price before they even explain the problem.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="mt-[0.62em] size-2 shrink-0 rounded-full bg-brand-rust" />
              <span>This video shows you exactly what&apos;s wrong, what it costs, and what to expect before you sit in any chair.</span>
            </p>
          </div>
          <button
            type="button"
            onClick={openBooking}
            className="mt-9 inline-flex h-[60px] w-full max-w-[460px] items-center justify-center rounded-full bg-brand-rust font-sans text-[17px] font-medium text-white transition hover:bg-brand-ink max-sm:h-[52px] max-sm:text-[15px]"
          >
            Book Your Consultation 199 →
          </button>
        </div>

        <div className="relative h-[390px] overflow-hidden bg-brand-sage/15 sm:h-[440px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[40%]">
          <Image
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612790/ai-smile-preview.png"
            alt="AI preview showing a smile before and after"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 510px"
          />
          <span className="animate-ai-smile-flash pointer-events-none absolute inset-y-[-15%] left-0 z-10 w-[18%] bg-gradient-to-r from-transparent via-white/75 to-transparent blur-sm" />
          <span className="absolute top-[13%] left-[3%] text-[48px] leading-none text-brand-rust">✧</span>
          <span className="absolute top-[9%] right-[2%] text-[54px] leading-none text-brand-rust">✧</span>

          <div className="absolute bottom-6 left-4 w-[calc(50%-24px)] max-w-[180px] lg:bottom-8 lg:left-5 lg:w-[42%]">
            <p className="mb-2 text-center text-[18px] font-semibold text-brand-rust sm:text-[20px]">Before</p>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[15px] border-2 border-white shadow-md">
              <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786628041/before_h_bf815860c7.webp" alt="Smile before treatment" fill className="object-cover" sizes="112px" />
            </div>
          </div>

          <div className="absolute right-4 bottom-6 w-[calc(50%-24px)] max-w-[180px] lg:right-5 lg:bottom-8 lg:w-[42%]">
            <p className="mb-2 text-center text-[18px] font-semibold text-brand-rust sm:text-[20px]">After</p>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[15px] border-2 border-white shadow-md">
              <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786628041/after_h_4cf6e788ac.webp" alt="Smile after treatment" fill className="object-cover" sizes="112px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
