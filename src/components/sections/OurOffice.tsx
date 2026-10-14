import Image from "next/image";

export default function OurOffice() {
  return (
    <section
      id="office"
      aria-labelledby="office-heading"
      className="bg-[#183e3b] px-[6vw] py-16 text-[#f6f1e8] md:px-[9vw] md:py-[7vw]"
    >
      <div className="mx-auto max-w-[1640px]">
        <div className="grid grid-cols-1 gap-y-7 md:grid-cols-[55%_40%] md:gap-x-[5%]">
          <div>
            <p className="mb-5 text-[13px] leading-[1.8] font-normal tracking-[0.12em] text-[#c7b58f] uppercase">
              Our office in Santa Monica
            </p>
            <h2
              id="office-heading"
              className="max-w-[40rem] font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.15] font-light"
            >
              Our Office is a calm space to feel{" "}
              <span className="font-printed font-normal text-[#c7b58f]">
                grounded
              </span>
              .
            </h2>
          </div>

          <p className="max-w-[38rem] text-[16px] leading-[1.8] font-light md:self-end">
            Dr. Maya Reynolds&apos; Santa Monica office is a quiet, private space
            designed to feel calm and grounding. Natural light, comfortable
            seating, and an uncluttered environment offer room to slow down and
            settle in.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 md:mt-[4vw] md:grid-cols-[55%_40%] md:gap-x-[5%]">
          <div>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/maya/office-1.webp"
                  alt="Sunlit therapy room with a gray sofa, cushioned armchair, and tall windows with sheer curtains."
                  fill
                  sizes="(max-width: 767px) 88vw, (max-width: 2000px) 45.1vw, 902px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 text-[13px] leading-[1.8] font-normal tracking-[0.06em] text-[#c7b58f]">
                Natural light and a comfortable place to pause.
              </figcaption>
            </figure>

            <div className="mt-8 max-w-[32rem] border-t border-[#c7b58f]/40 pt-6 md:mt-10">
              <h3 className="mb-3 font-heading text-[clamp(1.5rem,2.1vw,2.5rem)] leading-[1.2] font-light">
                Space for safety and privacy
              </h3>
              <p className="text-[16px] leading-[1.8] font-light">
                A private setting supports a carefully paced approach to therapy,
                with an emphasis on safety and helping you feel more at ease.
              </p>
            </div>
          </div>

          <div className="md:pt-[6vw]">
            <div className="relative ml-[10%] aspect-[4/3] overflow-hidden md:ml-0">
              <Image
                src="/images/maya/office-2.webp"
                alt="Therapy office seating area with a sofa, armchair, glass table, plant, and neatly arranged bookshelves."
                fill
                sizes="(max-width: 767px) 79.2vw, (max-width: 2000px) 32.8vw, 656px"
                className="object-cover"
              />
            </div>

            <dl className="mt-8 border-t border-[#c7b58f]/40">
              <div className="border-b border-[#c7b58f]/40 py-5">
                <dt className="mb-2 font-heading text-[1.5rem] leading-[1.2] font-light">
                  In-person therapy
                </dt>
                <dd className="text-[16px] leading-[1.8] font-light">
                  Meet with Dr. Maya at her Santa Monica, California office.
                </dd>
              </div>
              <div className="border-b border-[#c7b58f]/40 py-5">
                <dt className="mb-2 font-heading text-[1.5rem] leading-[1.2] font-light">
                  Secure telehealth
                </dt>
                <dd className="text-[16px] leading-[1.8] font-light">
                  Online therapy is available for clients located across
                  California.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
