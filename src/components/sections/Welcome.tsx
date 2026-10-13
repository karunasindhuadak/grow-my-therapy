import Image from "next/image";
import { homepage } from "@/data/homepage";

export default function Welcome() {
  const content = homepage.welcome;

  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="bg-[#fcf4ee] py-16 text-[#2b2b2b] md:py-[7vw]"
    >
      <div className="mx-auto grid max-w-[2000px] grid-cols-1 gap-y-8 px-[6vw] md:grid-cols-[minmax(0,29fr)_minmax(0,29fr)_minmax(0,32fr)] md:gap-x-[3%] md:gap-y-12 md:pr-0 md:pl-[9vw]">
        <h2
          id="welcome-heading"
          className="max-w-[52rem] font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.15] font-light md:col-span-2 md:self-end md:pt-[5vw]"
        >
          {content.heading}
        </h2>

        <div className="md:col-start-1 md:row-start-2">
          <p className="mb-5 text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase">
            {content.introduction}
          </p>
          <p className="text-[16px] leading-[1.8] font-light">
            {content.firstParagraph}
          </p>
        </div>

        <div className="relative my-3 aspect-[1.45] overflow-hidden md:col-start-3 md:row-span-2 md:row-start-1 md:my-0 md:ml-[8%] md:aspect-auto md:min-h-[36rem]">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(max-width: 767px) 88vw, (max-width: 2000px) 30vw, 600px"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#f2d9ca]/18"
          />
        </div>

        <p className="text-[16px] leading-[1.8] font-light md:col-start-2 md:row-start-2 md:pb-6">
          {content.secondParagraph}
        </p>
      </div>
    </section>
  );
}
