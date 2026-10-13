import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { homepage, homepageLinks } from "@/data/homepage";
import { cn } from "@/lib/utils";

export default function About() {
  const content = homepage.about;

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="bg-[#f2d9ca] py-16 text-[#2b2b2b] md:py-[7vw]"
    >
      <div className="mx-auto grid max-w-[2000px] grid-cols-1 gap-y-8 px-[6vw] md:grid-cols-[minmax(0,34fr)_minmax(0,34fr)_minmax(0,26fr)] md:gap-x-[3%] md:gap-y-12 md:pr-0 md:pl-[9vw]">
        <p className="text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase md:col-span-2">
          {content.eyebrow}
        </p>
        <h2
          id="how-we-work-heading"
          className="max-w-[60rem] font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.15] font-light md:col-span-2 md:row-start-2 md:mt-4"
        >
          {content.heading}
        </h2>

        <div className="relative my-3 aspect-[1.3] overflow-hidden md:col-start-3 md:row-span-4 md:row-start-1 md:my-0 md:ml-[10%] md:aspect-auto">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(max-width: 767px) 88vw, (max-width: 2000px) 24vw, 480px"
            className="object-cover object-[21.626%_45.603%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#f2d9ca]/14"
          />
        </div>

        <div className="md:col-start-1 md:row-start-3">
          <p className="mb-5 text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase">
            {content.introduction}
          </p>
          <p className="text-[16px] leading-[1.8] font-light">
            {content.firstParagraph}
          </p>
        </div>
        <p className="text-[16px] leading-[1.8] font-light md:col-start-2 md:row-start-3">
          {content.secondParagraph}
        </p>

        <a
          href={homepageLinks.team}
          className={cn(
            buttonVariants({ variant: "link" }),
            "h-auto min-h-11 w-fit max-w-full rounded-none border-0 border-b border-[#515151] px-0 py-3 text-[13px] font-normal tracking-[0.12em] whitespace-normal text-[#2b2b2b] uppercase no-underline hover:border-transparent hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b] motion-reduce:transition-none md:col-span-2 md:col-start-1 md:row-start-4",
          )}
        >
          {content.action}
        </a>
      </div>
    </section>
  );
}
