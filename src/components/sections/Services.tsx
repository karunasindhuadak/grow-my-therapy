import Image from "next/image";
import { mayaExpertiseColumns, mayaLinks, mayaServices } from "@/data/maya";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white px-[6vw] py-16 text-[#263a43] md:px-[5vw] md:py-[6.6vw]"
    >
      <div className="mx-auto max-w-[1800px]">
        <h2
          id="services-heading"
          className="mb-10 max-w-[44rem] font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.15] font-light md:mb-12"
        >
          Focused support for your{" "}
          <span className="font-printed font-normal text-[#6f9294]">next step</span>
        </h2>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 md:ml-[12.5%] md:grid-cols-3">
          {mayaServices.map((service) => (
            <article
              key={service.id}
              aria-labelledby={`service-${service.id}`}
              className="min-w-0"
            >
              <div className="relative aspect-[1.04] overflow-hidden md:aspect-[0.93]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 767px) 88vw, (max-width: 2000px) 26vw, 525px"
                  className="object-cover"
                  style={{ objectPosition: service.imagePosition }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[#b9d0d1]/10"
                />
              </div>

              <h3
                id={`service-${service.id}`}
                className="mt-7 mb-4 font-heading text-[clamp(1.6rem,2.1vw,2.5rem)] leading-[1.2] font-light"
              >
                {service.title}
              </h3>
              <p className="text-[16px] leading-[1.8] font-light">
                {service.description}
              </p>
              <a
                href={mayaLinks.contact}
                className="mt-5 inline-block rounded-sm border-b border-[#60767c] py-2 text-[13px] font-normal tracking-[0.12em] uppercase transition-colors hover:border-[#b57f70] hover:text-[#5f8186] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43]"
              >
                Explore this focus
              </a>
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
      className="bg-white px-[6vw] py-16 text-[#263a43] md:px-[9vw] md:py-[8vw]"
    >
      <div className="mx-auto grid max-w-[1640px] grid-cols-1 gap-y-10 md:grid-cols-[minmax(0,28fr)_minmax(0,72fr)] md:gap-x-[5%]">
        <h2
          id="expertise-heading"
          className="max-w-[18rem] font-heading text-[clamp(2rem,2.75vw,3.5rem)] leading-[1.2] font-light"
        >
          What can be part of{" "}
          <span className="font-printed font-normal text-[#6f9294]">therapy</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
          {mayaExpertiseColumns.map((column, index) => (
            <ul key={index} className="min-w-0">
              {column.map((item) => (
                <li
                  key={item}
                  className="border-b border-[#c7d2d0] py-5 text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
