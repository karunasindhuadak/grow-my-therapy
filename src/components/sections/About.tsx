import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { mayaHomepage, mayaLinks } from "@/data/maya";
import { cn } from "@/lib/utils";

export default function About() {
  const content = mayaHomepage.about;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#ddd5e7] py-16 text-[#263a43] md:py-[7vw]"
    >
      <div className="mx-auto grid max-w-[2000px] grid-cols-1 gap-y-8 px-[6vw] md:grid-cols-[minmax(0,34fr)_minmax(0,34fr)_minmax(0,26fr)] md:gap-x-[3%] md:gap-y-12 md:pr-0 md:pl-[9vw]">
        <p className="text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase md:col-span-2">
          {content.eyebrow}
        </p>
        <h2
          id="about-heading"
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
            className="object-cover object-[50%_28%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#dfc2b6]/14"
          />
        </div>

        <div className="md:col-start-1 md:row-start-3">
          <p className="mb-5 text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase">
            {content.introduction}
          </p>
          <p className="text-[16px] leading-[1.8] font-light">{content.firstParagraph}</p>
        </div>
        <p className="text-[16px] leading-[1.8] font-light md:col-start-2 md:row-start-3">
          {content.secondParagraph}
        </p>

        <a
          href={mayaLinks.approach}
          className={cn(
            buttonVariants({ variant: "link" }),
            "relative h-auto min-h-11 w-fit max-w-full rounded-none border-0 px-0 py-3 text-[13px] font-normal tracking-[0.12em] whitespace-normal text-[#263a43] uppercase no-underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43] md:col-span-2 md:col-start-1 md:row-start-4",
            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-100 after:bg-[#60767c] after:transition-transform after:duration-800 after:ease-out hover:after:scale-x-0 motion-reduce:after:transition-none",
          )}
        >
          {content.action}
        </a>
      </div>
    </section>
  );
}
