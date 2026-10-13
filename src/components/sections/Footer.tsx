import Image from "next/image";

const LOGO_SRC = "/images/original/Conejo-Valley-Counseling-Logo.png";

const navigateLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/therapists-newbury-park" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const teamMembers = [
  { label: "Jennifer Anderson", href: "/jennifer-anderson" },
  { label: "Heather Williams-Baumgart", href: "/heather-williams-baumgart" },
  { label: "Autumn Bodily", href: "/autumn-bodily" },
  { label: "Candace Bletscher", href: "/candace-bletscher" },
  { label: "Samantha Johnson", href: "/samantha-johnson" },
  { label: "Rosa Gomez", href: "/rosa-gomez" },
  { label: "Chad Flores", href: "/chad-flores" },
  { label: "Simran Sidhu", href: "/simran-sidhu" },
  { label: "Jessica Jauregui", href: "/jessica-jauregui" },
];

const footerHeadingClass =
  "mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2b2b2b]";
const footerLinkClass =
  "rounded-sm transition-colors hover:text-[#86b3b3] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b2b2b]";

export default function Footer() {
  return (
    <footer className="text-[#2b2b2b]">
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-[7vw] py-16 md:px-[4vw] md:py-[8vw]">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.9fr_1fr_1.45fr_1.45fr] md:gap-8 lg:gap-12">
            <div className="sm:col-span-2 md:col-span-1">
              <a
                href="/home"
                className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]"
                aria-label="Conejo Valley Family Counseling home"
              >
                <Image
                  src={LOGO_SRC}
                  alt="Conejo Valley Family Counseling"
                  width={3007}
                  height={878}
                  sizes="(max-width: 767px) 82vw, (max-width: 1200px) 30vw, 360px"
                  className="h-auto w-full max-w-[360px]"
                />
              </a>
              <p className="mt-8 max-w-[28rem] text-[15px] leading-7 text-[#2b2b2b] md:mt-10 md:text-base">
                We want to make getting started simple. You’re welcome to come into our office in
                Newbury Park or schedule virtual appointments from anywhere in CA, whatever works
                best for you.
              </p>
            </div>

            <nav aria-labelledby="footer-navigate-heading">
              <h2 id="footer-navigate-heading" className={footerHeadingClass}>
                Navigate
              </h2>
              <ul className="space-y-3 text-[15px] leading-6">
                {navigateLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={footerLinkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className={footerHeadingClass}>Contact</h2>
              <address className="not-italic text-[15px] leading-6">
                <div>925 Broadbeck Dr</div>
                <div>Suites 200 and 225</div>
                <div>Newbury Park, CA 91320</div>
                <a href="mailto:info@conejovalleycounseling.com" className={footerLinkClass}>
                  info@conejovalleycounseling.com
                </a>
                <br />
                <a href="tel:8052423120" className={footerLinkClass}>
                  805.242.3120
                </a>
              </address>
              <p className="mt-5 max-w-[18rem] text-[14px] italic leading-6">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
              </p>
            </div>

            <nav aria-labelledby="footer-team-heading">
              <h2 id="footer-team-heading" className={footerHeadingClass}>
                Our Team
              </h2>
              <ul className="space-y-2.5 text-[15px] leading-6">
                {teamMembers.map((member) => (
                  <li key={member.href}>
                    <a href={member.href} className={footerLinkClass}>
                      {member.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-[#86b3b3] px-6 py-5 text-center text-xs leading-6 text-white md:py-4">
        <p>
          <a href="/terms" className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Terms
          </a>
          <span aria-hidden="true"> | </span>
          <a href="/privacy-policy" className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Privacy Policy
          </a>
          <span aria-hidden="true"> | </span>
          <a href="/disclaimer" className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Disclaimer
          </a>
          <span> | Website by </span>
          <a
            href="https://walkerstrategyco.com"
            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Walker Strategy Co.
          </a>
        </p>
      </section>
    </footer>
  );
}
