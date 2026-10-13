import Image from "next/image";
import { audiences, expertiseColumns } from "@/data/homepage";

export default function Services() {
  return (
    <section
      id="who-we-help"
      aria-labelledby="who-we-help-heading"
      className="bg-white px-[6vw] py-16 text-[#2b2b2b] md:px-[5vw] md:py-[6.6vw]"
    >
      <div className="mx-auto max-w-[1800px]">
        <h2
          id="who-we-help-heading"
          className="mb-10 font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.15] font-light md:mb-12"
        >
          Who we{" "}
          <span className="font-printed font-normal text-[#86b3b3]">help</span>
        </h2>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 md:ml-[12.5%] md:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.id}
              aria-labelledby={`audience-${audience.id}`}
              className="min-w-0"
            >
              <div className="relative aspect-[1.04] overflow-hidden md:aspect-[0.93]">
                <Image
                  src={audience.image}
                  alt={audience.imageAlt}
                  fill
                  sizes="(max-width: 767px) 88vw, (max-width: 2000px) 26vw, 525px"
                  className="object-cover"
                  style={{ objectPosition: audience.imagePosition }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-white/10"
                />
              </div>

              <h3
                id={`audience-${audience.id}`}
                className="mt-7 mb-4 font-heading text-[clamp(1.6rem,2.1vw,2.5rem)] leading-[1.2] font-light"
              >
                {audience.href ? (
                  <a
                    href={audience.href}
                    className="underline decoration-[1px] underline-offset-4 hover:text-[#577c7c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]"
                  >
                    {audience.title}
                  </a>
                ) : (
                  audience.title
                )}
                {audience.titleSuffix}
              </h3>
              <p className="text-[16px] leading-[1.8] font-light">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AreasOfExpertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="bg-white px-[6vw] py-16 text-[#2b2b2b] md:px-[9vw] md:py-[8vw]"
    >
      <div className="mx-auto grid max-w-[1640px] grid-cols-1 gap-y-10 md:grid-cols-[minmax(0,28fr)_minmax(0,72fr)] md:gap-x-[5%]">
        <h2
          id="expertise-heading"
          className="max-w-[18rem] font-heading text-[clamp(2rem,2.75vw,3.5rem)] leading-[1.2] font-light"
        >
          Our areas of{" "}
          <span className="font-printed font-normal text-[#86b3b3]">
            expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
          {expertiseColumns.map((column, index) => (
            <ul key={index} className="min-w-0">
              {column.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-[#b3b3b3] py-5 text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase last:border-0"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="inline-block underline decoration-[1px] underline-offset-4 hover:text-[#577c7c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
