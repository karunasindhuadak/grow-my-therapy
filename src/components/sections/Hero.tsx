import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full bg-[#F4F1EA] pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden min-h-[calc(100vh-90px)] flex items-center">
      {/* Container */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8">
        
        {/* Left Column: Family Beach Portrait */}
        <div className="w-full sm:w-[380px] lg:w-[400px] xl:w-[460px] shrink-0 self-start">
          <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[620px] xl:h-[660px]">
            <Image
              src="/images/hero-family.jpg"
              alt="Family walking together along the beach in Newbury Park, California"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Center Column: Typography Hierarchy */}
        <div className="w-full max-w-[620px] xl:max-w-[700px] flex flex-col justify-start self-start pt-2 sm:pt-4">
          {/* Eyebrow: Aligned near the top of the left image */}
          <div className="mb-10 sm:mb-14 lg:mb-20">
            <span className="block font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#5C605E] leading-relaxed">
              ONLINE & IN-PERSON COUNSELING IN NEWBURY
            </span>
            <span className="block font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#5C605E] leading-relaxed">
              PARK & ACROSS CA
            </span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="font-serif text-[38px] sm:text-[46px] lg:text-[54px] xl:text-[60px] font-normal leading-[1.12] text-[#2D3130] mb-6 tracking-tight">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span
              className="text-[#6A8D88] text-[1.35em] font-normal tracking-normal inline-block ml-1 align-baseline"
              style={{ fontFamily: "'Sacramento', cursive", fontStyle: "normal" }}
            >
              thrive
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] font-light leading-[1.8] text-[#5C605E] mb-12 max-w-[540px]">
            Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
          </p>

          {/* CTA Link: Clean Underlined Link */}
          <div>
            <Link
              href="#appointment"
              className="inline-block font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#2D3130] pb-1 border-b border-[#2D3130] hover:text-[#6A8D88] hover:border-[#6A8D88] transition-colors duration-300"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>

        {/* Right Column: Coastal Shoreline Waves (Desktop only, aligned with H1) */}
        <div className="hidden lg:block relative -mr-6 sm:-mr-10 lg:-mr-12 w-[160px] xl:w-[220px] 2xl:w-[260px] h-[460px] xl:h-[500px] shrink-0 self-start mt-24 sm:mt-28 lg:mt-32">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-ocean-wave.jpg"
              alt="Gentle ocean waves washing along the sandy shore"
              fill
              sizes="(max-width: 1440px) 220px, 260px"
              className="object-cover object-left"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
