const reviews = [
  {
    initials: "G",
    name: "Gokul",
    review: "My implant treatment finished on time, exactly as planned and cheaper than other clinics in the city.",
  },
  {
    initials: "SK",
    name: "Sharmesh Kumar",
    review: "The clinic's modern vibe and welcoming staff added to the overall great experience. My teeth feel super clean!",
  },
  {
    initials: "DA",
    name: "Duke Allwyn",
    review: "Best Invisalign treatment in Chennai with affordable cost. I am so happy I am getting the smile I wanted.",
  },
];

function GoogleMark({ className = "size-[100px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Google">
      <path fill="#4285F4" d="M61.4 33.3c0-2.1-.2-4.1-.6-6H32v11.4h16.5a14.1 14.1 0 0 1-6.1 9.2v7.4h9.9c5.8-5.3 9.1-13.2 9.1-22Z" />
      <path fill="#34A853" d="M32 63c8.2 0 15.1-2.7 20.2-7.3l-9.9-7.4c-2.7 1.8-6.2 2.9-10.3 2.9-7.9 0-14.6-5.3-17-12.5H4.8v7.6A30.5 30.5 0 0 0 32 63Z" />
      <path fill="#FBBC05" d="M15 38.7a18.3 18.3 0 0 1 0-11.7v-7.6H4.8a30.5 30.5 0 0 0 0 26.9L15 38.7Z" />
      <path fill="#EA4335" d="M32 14.5c4.5 0 8.5 1.5 11.7 4.6l8.7-8.7C47.1 5.5 40.2 2.5 32 2.5A30.5 30.5 0 0 0 4.8 19.4L15 27c2.4-7.2 9.1-12.5 17-12.5Z" />
    </svg>
  );
}

function Stars({ size = 29 }: { size?: number }) {
  return (
    <div className="flex gap-1 text-[#f9c315]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} aria-hidden="true" style={{ "--star-size": `${size}px` } as React.CSSProperties} className="size-[18px] sm:size-[var(--star-size)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 1.8 3.15 6.38 7.04 1.02-5.1 4.97 1.21 7.01L12 17.87l-6.3 3.31 1.21-7.01-5.1-4.97 7.04-1.02L12 1.8Z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section id="reviews" aria-label="Google patient reviews" className="overflow-hidden bg-white py-6 lg:py-20">
      <h2 className="mb-10 text-center font-heading text-[28px] font-bold tracking-[0.08em] text-brand-ink max-sm:mb-7 max-sm:text-[23px] max-sm:tracking-[0.05em]">
        ONE PATIENT LINE.
      </h2>
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:gap-12 lg:pl-16 lg:pr-0 xl:pl-20">
        <div className="flex w-full shrink-0 items-center justify-center gap-8 lg:w-[340px] lg:justify-start">
          <div className="w-full max-w-[340px] text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 text-left lg:justify-start">
              <GoogleMark className="size-[68px] sm:size-[82px]" />
              <p className="font-heading text-[16px] leading-[1.45] font-semibold text-brand-ink sm:text-[18px] lg:text-[20px]">3 Lakh +<br />verified ratings</p>
            </div>
            <div className="mt-3 flex justify-center pl-[82px] lg:justify-start lg:pl-[98px]"><Stars size={21} /></div>
            <p className="mt-5 whitespace-nowrap text-center font-sans text-[19px] tracking-[-.03em] text-brand-ink/90 sm:text-[24px] lg:text-left lg:text-[27px]">Average rating of 4.9</p>
          </div>
          <span className="hidden h-[170px] w-px shrink-0 bg-brand-rose/65 lg:block" />
        </div>

        <div className="no-scrollbar flex min-w-0 w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-3">
          {reviews.map((review) => (
            <article key={review.name} className="relative h-[350px] w-[min(84vw,410px)] shrink-0 snap-start overflow-hidden rounded-[22px] border border-brand-rose/55 bg-[#f8f3f1] px-6 pt-5 pb-6 lg:w-[410px]">
              <div className="absolute top-0 right-0 grid size-[84px] place-items-center rounded-bl-full bg-brand-rose/20">
                <GoogleMark className="size-[36px] -translate-y-1.5 translate-x-1.5" />
              </div>
              <div className="mx-auto grid size-14 place-items-center rounded-full border border-brand-rust bg-brand-rose/15 font-heading text-[20px] font-semibold text-brand-ink sm:size-16 sm:text-[24px]">{review.initials}</div>
              <h3 className="mt-4 text-center font-heading text-[16px] font-bold text-brand-ink sm:mt-5 sm:text-[18px]">{review.name}</h3>
              <div className="mt-3 flex justify-center"><Stars size={23} /></div>
              <p className="mt-4 font-sans text-[14px] leading-[1.6] tracking-[-.012em] text-brand-ink/85 sm:text-[15.5px] sm:leading-[1.65]">{review.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
