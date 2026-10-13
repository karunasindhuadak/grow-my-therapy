import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { homepage, homepageLinks } from "@/data/homepage";
import { cn } from "@/lib/utils";

export default function CTA() {
  const content = homepage.cta;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="overflow-hidden bg-[#fcf4ee] py-16 text-[#2b2b2b] md:py-[6.6vw]"
    >
      <div className="mx-auto grid max-w-[2000px] grid-cols-1 gap-y-10 md:grid-cols-[12%_40%_35%] md:gap-x-[6.5%] md:gap-y-0">
        <div className="relative w-1/2 aspect-[1.15] overflow-hidden md:mt-[7vw] md:aspect-auto md:w-auto">
          <Image
            src={content.accentImage}
            alt={content.accentImageAlt}
            fill
            sizes="(max-width: 767px) 50vw, (max-width: 2000px) 12vw, 240px"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#fcf4ee]/33"
          />
        </div>

        <div className="min-w-0 px-[6vw] md:px-0">
          <p className="mb-9 text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase md:mb-12">
            {content.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="mb-7 font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.15] font-light"
          >
            {content.heading}{" "}
            <span className="font-printed font-normal text-[#86b3b3]">
              {content.emphasis}
            </span>
            .
          </h2>
          <p className="text-[16px] leading-[1.8] font-light">
            {content.description}
          </p>
          <p className="mt-5 text-[16px] leading-[1.8] font-light">
            {content.instruction}
          </p>
          <a
            href={homepageLinks.contact}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-8 h-auto min-h-12 max-w-full rounded-full border border-[#2b2b2b] bg-transparent px-9 py-4 text-[13px] font-normal tracking-[0.12em] whitespace-normal text-[#2b2b2b] uppercase hover:bg-[#2b2b2b] hover:text-[#fcf4ee] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b] motion-reduce:transition-none",
            )}
          >
            {content.action}
          </a>
        </div>

        <div className="relative ml-[16vw] aspect-[1.12] overflow-hidden md:ml-0 md:aspect-auto">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(max-width: 767px) 84vw, (max-width: 2000px) 35vw, 700px"
            className="object-cover object-[62.857%_52.803%]"
          />
        </div>
      </div>
    </section>
  );
}
