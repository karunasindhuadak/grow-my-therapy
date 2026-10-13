import Image from "next/image";
import { mayaHomepage } from "@/data/maya";

export default function Testimonials() {
  const content = mayaHomepage.quote;

  return (
    <section
      aria-label="A grounded place for support"
      className="relative isolate overflow-hidden bg-[#263a43] text-[#f7f8f4]"
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
        className="pointer-events-none absolute inset-0 -z-10 bg-[#263a43]/68"
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
