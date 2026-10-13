import Image from "next/image";
import { mayaHomepage, mayaMethods } from "@/data/maya";

export default function Approach() {
  const content = mayaHomepage.honoring;

  return (
    <>
      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="bg-[#f7f8f4] py-16 text-[#263a43] md:py-[6.6vw]"
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
              className="pointer-events-none absolute inset-0 bg-[#b9d0d1]/11"
            />
          </div>

          <h2
            id="approach-heading"
            className="px-[6vw] font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.15] font-light md:self-end md:pr-[5vw] md:pl-0"
          >
            {content.firstLine}{" "}
            <span className="font-printed font-normal text-[#6f9294]">{content.secondLine}</span>
          </h2>
        </div>
      </section>

      <section
        aria-labelledby="methods-heading"
        className="bg-[#f7f8f4] px-[6vw] pt-8 pb-16 text-[#263a43] md:px-[9vw] md:pt-[4vw] md:pb-[7vw]"
      >
        <div className="mx-auto grid max-w-[1640px] grid-cols-1 gap-y-10 md:grid-cols-[minmax(0,30fr)_minmax(0,70fr)] md:gap-x-[5%]">
          <h2
            id="methods-heading"
            className="max-w-[20rem] font-heading text-[clamp(2rem,2.75vw,3.5rem)] leading-[1.2] font-light"
          >
            A grounded, collaborative{" "}
            <span className="font-printed font-normal text-[#6f9294]">approach</span>
          </h2>

          <div className="grid grid-cols-1 gap-x-9 gap-y-12 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-y-16">
            {mayaMethods.map((method) => (
              <article
                key={method.id}
                aria-labelledby={`method-${method.id}`}
                className="flex min-w-0 flex-col items-start"
              >
                <h3
                  id={`method-${method.id}`}
                  className="mb-5 font-heading text-[clamp(1.6rem,2.1vw,2.5rem)] leading-[1.2] font-light"
                >
                  {method.title}
                </h3>
                <p className="text-[16px] leading-[1.8] font-light">
                  {method.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
