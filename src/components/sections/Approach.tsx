import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { homepage, specialties } from "@/data/homepage";
import { cn } from "@/lib/utils";

export default function Approach() {
  const content = homepage.honoring;

  return (
    <>
      <section
        aria-labelledby="honoring-heading"
        className="bg-white py-16 text-[#2b2b2b] md:py-[6.6vw]"
      >
        <div className="mx-auto grid max-w-[2000px] grid-cols-1 gap-y-9 md:grid-cols-[55%_40%] md:gap-x-[5%]">
          <div className="relative ml-[6vw] aspect-[1.62] overflow-hidden md:ml-0">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 767px) 94vw, (max-width: 2000px) 55vw, 1100px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-white/11"
            />
          </div>

          <h2
            id="honoring-heading"
            className="px-[6vw] font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.15] font-light md:self-end md:pr-[5vw] md:pl-0"
          >
            {content.firstLine}{" "}
            <span className="font-printed font-normal text-[#86b3b3]">&amp;</span>{" "}
            {content.secondLine}
          </h2>
        </div>
      </section>

      <section
        id="specialties"
        aria-labelledby="specialties-heading"
        className="bg-white px-[6vw] pt-8 pb-16 text-[#2b2b2b] md:px-[9vw] md:pt-[4vw] md:pb-[7vw]"
      >
        <div className="mx-auto grid max-w-[1640px] grid-cols-1 gap-y-10 md:grid-cols-[minmax(0,30fr)_minmax(0,70fr)] md:gap-x-[5%]">
          <h2
            id="specialties-heading"
            className="max-w-[20rem] font-heading text-[clamp(2rem,2.75vw,3.5rem)] leading-[1.2] font-light"
          >
            Our{" "}
            <span className="font-printed font-normal text-[#86b3b3]">
              specialties
            </span>{" "}
            include…
          </h2>

          <div className="grid grid-cols-1 gap-x-9 gap-y-12 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-y-16">
            {specialties.map((specialty) => (
              <article
                key={specialty.id}
                aria-labelledby={`specialty-${specialty.id}`}
                className="flex min-w-0 flex-col items-start"
              >
                <h3
                  id={`specialty-${specialty.id}`}
                  className="mb-5 font-heading text-[clamp(1.6rem,2.1vw,2.5rem)] leading-[1.2] font-light"
                >
                  {specialty.title}
                </h3>
                <p className="mb-6 text-[16px] leading-[1.8] font-light">
                  {specialty.description}
                </p>
                <a
                  href={specialty.href}
                  aria-label={`Learn more about ${specialty.title}`}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "mt-auto h-auto min-h-11 max-w-full rounded-none border-0 border-b border-[#515151] px-0 py-3 text-[13px] font-normal tracking-[0.12em] whitespace-normal text-[#2b2b2b] uppercase no-underline hover:border-transparent hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b] motion-reduce:transition-none",
                  )}
                >
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
