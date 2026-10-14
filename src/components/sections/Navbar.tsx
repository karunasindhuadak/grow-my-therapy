"use client";

import { useEffect, useRef, useState } from "react";
import { mayaLinks } from "@/data/maya";
import Link from "next/link";

const navigationItems = [
  { label: "About", href: mayaLinks.about },
  { label: "Services", href: mayaLinks.services },
  { label: "Approach", href: mayaLinks.approach },
  { label: "Our Office", href: mayaLinks.office },
  { label: "FAQs", href: mayaLinks.faqs },
] as const;

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1.25"
    >
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 28 22"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1"
    >
      <path d="M1 1h26M1 11h26M1 21h26" />
    </svg>
  );
}

function Wordmark({ mobile = false }: { mobile?: boolean }) {
  return (
    <span className={`flex flex-col ${mobile ? "max-w-[14rem]" : "max-w-[19rem]"}`}>
      <span className="font-heading text-[clamp(1.3rem,2.1vw,2rem)] leading-none font-medium tracking-[0.01em]">
        Dr. Maya Reynolds
      </span>
      <span className="mt-2 text-[9px] leading-[1.4] font-medium tracking-[0.16em] uppercase">
        Licensed Clinical Psychologist
      </span>
    </span>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuTriggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !mobileMenuRef.current) return;

      const focusableElements = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    menuTriggerRef.current?.focus();
  };

  return (
    <>
      <header className="relative z-40 bg-[#f7f8f4] text-[#263a43]">
        <div className="mx-auto flex min-h-[106px] max-w-[1500px] items-center gap-4 px-[5vw] md:min-h-[118px] md:gap-6 md:px-[4vw]">
          <a
            href={mayaLinks.home}
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43]"
            aria-label="Dr. Maya Reynolds, PsyD home"
          >
            <Wordmark />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-1 lg:gap-x-7"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-sm px-1 text-[13.5px] uppercase font-medium tracking-[0.06em] transition-colors hover:text-[#5f8186] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263a43]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={mayaLinks.contact}
            className="hidden shrink-0 items-center justify-center w-[111px] h-[47.6px] rounded-[50%] border border-[#263a43] bg-transparent text-[#263a43] font-muli text-[12.75px] font-normal uppercase tracking-[1.53px] transition-colors duration-100 ease-linear hover:bg-[#263a43] hover:text-[#f7f8f4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43] md:inline-flex"
          >
            Stay here
          </Link>

          <button
            ref={menuTriggerRef}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43] md:hidden"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            {mobileMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-6 w-7" />}
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className="fixed inset-0 z-50 md:hidden"
          onClick={closeMobileMenu}
        >
          <div className="absolute inset-0 bg-[#263a43]/35" aria-hidden="true" />
          <div
            ref={mobileMenuRef}
            className="relative flex max-h-screen min-h-full flex-col overflow-y-auto bg-[#f7f8f4] text-[#263a43]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-[106px] items-center justify-between px-[5vw]">
              <a
                href={mayaLinks.home}
                className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43]"
                onClick={closeMobileMenu}
                aria-label="Dr. Maya Reynolds, PsyD home"
              >
                <Wordmark mobile />
              </a>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close menu"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43]"
                onClick={closeMobileMenu}
              >
                <CloseIcon className="h-7 w-7" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <h2 id="mobile-menu-title" className="sr-only">
              Main menu
            </h2>

            <nav aria-label="Mobile primary navigation" className="px-[8vw] pb-10">
              <ul>
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block py-5 text-[17px] uppercase font-medium tracking-[0.05em] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#263a43]"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <Link
                href={mayaLinks.contact}
                className="mx-auto mt-8 inline-flex h-[48px] w-[210px] items-center justify-center rounded-[50%] border border-[#263a43] bg-transparent text-[13px] font-normal tracking-[0.16em] uppercase text-[#263a43] transition-colors duration-100 ease-linear hover:bg-[#263a43] hover:text-[#f7f8f4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263a43]"
                onClick={closeMobileMenu}
              >
                Stay here
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
