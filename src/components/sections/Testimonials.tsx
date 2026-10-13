import Image from "next/image";
import { homepage } from "@/data/homepage";

export default function Testimonials() {
  const content = homepage.quote;

  return (
    <section
      aria-label="Our commitment to you"
      className="relative isolate overflow-hidden bg-[#2b2b2b] text-[#fcf4ee]"
    >
      <Image
        src={content.image}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-black/54"
      />
      <div className="mx-auto flex min-h-[22rem] max-w-[2000px] items-end px-[6vw] py-16 md:min-h-[40vw] md:px-[9vw] md:py-[7vw]">
        <blockquote className="max-w-[55rem] font-heading text-[clamp(2rem,3.25vw,4rem)] leading-[1.2] font-light md:max-w-[72%]">
          <p>
            {content.firstSentence}{" "}
            <em>{content.secondSentence}</em>
          </p>
        </blockquote>
      </div>
    </section>
  );
}
