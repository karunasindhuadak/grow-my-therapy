import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { homepage, homepageLinks } from "@/data/homepage";
import { cn } from "@/lib/utils";

export default function Hero() {
  const content = homepage.hero;

  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-hidden bg-[#fcf4ee] text-[#2b2b2b]"
    >
      <div className="mx-auto grid max-w-[2000px] grid-cols-[minmax(0,1fr)_18%] gap-x-[10%] gap-y-10 pt-8 pb-10 md:grid-cols-[35%_45%_8%] md:gap-x-[6%] md:gap-y-0 md:pt-[3vw] md:pb-[6vw]">
        <div className="col-span-2 px-[6vw] md:col-span-1 md:col-start-2 md:row-start-1 md:flex md:flex-col md:px-0">
          <p className="max-w-[28rem] text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase">
            {content.eyebrow}
          </p>
          <div className="mt-10 md:mt-auto md:pt-16">
            <h1
              id="hero-heading"
              className="font-heading text-[clamp(2.5rem,4.2vw,5rem)] leading-[1.08] font-light"
            >
              {content.heading}{" "}
              <span className="font-printed font-normal text-[#86b3b3]">
                {content.emphasis}
              </span>
              .
            </h1>
            <p className="mt-6 max-w-[38rem] text-[16px] leading-[1.8] font-light md:text-[17px]">
              {content.description}
            </p>
            <a
              href={homepageLinks.contact}
              className={cn(
                buttonVariants({ variant: "link" }),
                "mt-6 h-auto min-h-11 max-w-full rounded-none border-0 border-b border-[#515151] px-0 py-3 text-[13px] font-normal tracking-[0.12em] whitespace-normal text-[#2b2b2b] uppercase no-underline hover:border-transparent hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b] motion-reduce:transition-none",
              )}
            >
              {content.action}
            </a>
          </div>
        </div>

        <div className="relative col-start-1 aspect-[1.08] overflow-hidden md:row-start-1 md:aspect-auto md:min-h-[clamp(29rem,41vw,48rem)]">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(max-width: 767px) 72vw, (max-width: 2000px) 35vw, 700px"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#f2d9ca]/7"
          />
        </div>

        <div className="relative col-start-2 h-40 self-end overflow-hidden md:col-start-3 md:row-start-1 md:h-[66%]">
          <Image
            src={content.accentImage}
            alt={content.accentImageAlt}
            fill
            sizes="(max-width: 767px) 18vw, (max-width: 2000px) 8vw, 160px"
            className="object-cover object-[87.295%_56.004%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#f2d9ca]/14"
          />
        </div>
      </div>
    </section>
  );
}
