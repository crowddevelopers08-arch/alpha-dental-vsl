import Image from "next/image";

const cards = [
  {
    title: "Dental Implants",
    description: <>Missing one tooth or all of them fixed, permanent, feels natural.</>,
    icon: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612784/icon-1.png",
  },
  {
    title: "Smile Designing",
    description: <>See your new smile on screen <em className="font-semibold">before</em> you commit to it.</>,
    icon: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612784/icon-2.png",
  },
  {
    title: "Root Canal",
    description: <>Painless, single sitting root canal no more guessing, no more delay.</>,
    icon: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612785/icon-3.png",
  },
];

export default function DentalExperts() {
  return (
    <section id="treatments" className="bg-[#f8f3f1] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1650px]">
        <div className="text-center text-brand-ink">
          <h2 className="font-heading text-[34px] leading-tight font-bold tracking-[-0.7px] max-sm:text-[28px]">
            THINGS WE FIX
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[150px] items-center gap-6 rounded-2xl border border-brand-rose/45 bg-white px-6 py-5 text-brand-rust shadow-[0_14px_35px_rgba(58,46,41,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(58,46,41,.1)]"
            >
              <Image
                src={card.icon}
                alt=""
                width={96}
                height={96}
                className="size-[82px] shrink-0 object-contain max-sm:size-[68px]"
              />
              <div className="min-w-0 text-brand-ink">
                <h3 className="font-heading text-[20px] leading-tight font-bold tracking-[-0.35px]">
                  {card.title}
                </h3>
                <p className="mt-[11px] font-sans text-[16px] leading-[1.55] font-normal">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-[30px] text-center text-brand-rust font-sans text-[16px] leading-[1.55] font-normal">
          <p> Led by 9 specialist dentists. Not generalists .</p>
        </div>
      </div>
    </section>
  );
}
