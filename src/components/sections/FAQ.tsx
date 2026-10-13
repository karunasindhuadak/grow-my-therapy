"use client";

import { useState } from "react";
import { mayaFaqs } from "@/data/maya";

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1.25"
    >
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="bg-[#ddd5e7] px-[6vw] py-16 text-[#263a43] md:px-[9vw] md:py-[7vw]"
    >
      <div className="mx-auto grid max-w-[1640px] grid-cols-1 gap-y-10 md:grid-cols-[minmax(0,30fr)_minmax(0,70fr)] md:gap-x-[5%]">
        <div>
          <p className="mb-5 text-[13px] leading-[1.8] font-normal tracking-[0.12em] uppercase">
            A FEW DETAILS ABOUT THERAPY
          </p>
          <h2
            id="faqs-heading"
            className="max-w-[20rem] font-heading text-[clamp(2rem,2.75vw,3.5rem)] leading-[1.2] font-light"
          >
            Questions you may have
          </h2>
        </div>

        <div className="border-t border-[#9babb0]">
          {mayaFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const answerId = `faq-answer-${faq.id}`;

            return (
              <div key={faq.id} className="border-b border-[#9babb0]">
                <h3>
                  <button
                    type="button"
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left font-heading text-[clamp(1.35rem,1.8vw,2rem)] leading-[1.3] font-light transition-colors hover:text-[#5f8186] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43]"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <PlusIcon open={isOpen} />
                  </button>
                </h3>
                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="max-w-[48rem] pb-6 pr-10 text-[16px] leading-[1.8] font-light"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
