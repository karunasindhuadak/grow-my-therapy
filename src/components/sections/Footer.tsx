import { mayaLinks, mayaServices } from "@/data/maya";

const navigateLinks = [
  { label: "Home", href: mayaLinks.home },
  { label: "About", href: mayaLinks.about },
  { label: "Approach", href: mayaLinks.approach },
  { label: "Our Office", href: mayaLinks.office },
  { label: "FAQs", href: mayaLinks.faqs },
] as const;

const footerHeadingClass =
  "mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#263a43]";
const footerLinkClass =
  "rounded-sm transition-colors hover:text-[#5f8186] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263a43]";

export default function Footer() {
  return (
    <footer className="text-[#263a43]">
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-[7vw] py-16 md:px-[4vw] md:py-[8vw]">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.9fr_1fr_1.45fr_1.45fr] md:gap-8 lg:gap-12">
            <div className="sm:col-span-2 md:col-span-1">
              <a
                href={mayaLinks.home}
                className="inline-flex flex-col rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43]"
                aria-label="Dr. Maya Reynolds, PsyD home"
              >
                <span className="font-heading text-[clamp(1.6rem,2.6vw,2.5rem)] leading-none font-medium">
                  Dr. Maya Reynolds, PsyD
                </span>
                <span className="mt-3 text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase">
                  Licensed Clinical Psychologist
                </span>
              </a>
              <p className="mt-8 max-w-[28rem] text-[15px] leading-7 text-[#263a43] md:mt-10 md:text-base">
                Warm, collaborative therapy for adults in Santa Monica and secure telehealth across
                California.
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

            <nav aria-labelledby="footer-focus-heading">
              <h2 id="footer-focus-heading" className={footerHeadingClass}>
                Therapy focus
              </h2>
              <ul className="space-y-3 text-[15px] leading-6">
                {mayaServices.map((service) => (
                  <li key={service.id}>
                    <a href={mayaLinks.services} className={footerLinkClass}>
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className={footerHeadingClass}>Visit or connect</h2>
              <address className="not-italic text-[15px] leading-6">
                <div>123th Street 45 W</div>
                <div>Santa Monica, CA 90401</div>
              </address>
              <p className="mt-5 max-w-[18rem] text-[14px] italic leading-6">
                In-person therapy in Santa Monica and secure telehealth across California.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6f9294] px-6 py-5 text-center text-xs leading-6 text-white md:py-4">
        <p>
          Dr. Maya Reynolds, PsyD <span aria-hidden="true">·</span> Santa Monica, California
        </p>
      </section>
    </footer>
  );
}
