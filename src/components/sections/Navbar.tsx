"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LOGO_SRC = "/images/original/Conejo-Valley-Counseling-Logo.png";

const navigationFolders = [
  {
    id: "our-team",
    label: "Our Team",
    href: "/our-team",
    items: [
      { label: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
      { label: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
      {
        label: "Heather Williams-Baumgart, AMFT",
        href: "/heather-williams-baumgart",
      },
      { label: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
      { label: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
      { label: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
      { label: "Chad Flores, AMFT", href: "/chad-flores" },
      { label: "Simran Sidhu, AMFT", href: "/simran-sidhu" },
      { label: "Jessica Jauregui, MA, AMFT", href: "/jessica-jauregui" },
    ],
  },
  {
    id: "specialties",
    label: "Specialties",
    href: "/specialties",
    items: [
      {
        label: "Dissociation",
        href: "/dissociative-identity-disorder-therapist-newbury-park",
      },
      { label: "Trauma", href: "/trauma-counseling-newbury-park" },
      {
        label: "Special Needs Parenting",
        href: "/counseling-special-needs-parents-newbury-park",
      },
      { label: "Couples", href: "/couples-therapy" },
      { label: "Children & Teens", href: "/children-and-teens" },
      { label: "Anxiety & Depression", href: "/anxiety-depression" },
      { label: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
    ],
  },
  {
    id: "methods",
    label: "Methods",
    href: "/methods",
    items: [
      { label: "EMDR", href: "/emdr-therapy-newbury-park" },
      { label: "Brainspotting", href: "/brainspotting" },
      { label: "Somatic Therapy", href: "/somatic-therapy" },
      { label: "Parts Work Therapy", href: "/parts-work-therapy" },
    ],
  },
] as const;

function DownArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1"
    >
      <path d="M18 7 11 14 4 7" />
    </svg>
  );
}

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

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFolder, setMobileFolder] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setMobileFolder(null);
        menuTriggerRef.current?.focus();
      }

      if (event.key !== "Tab" || !mobileMenuRef.current) return;

      const focusableElements = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
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
    setMobileFolder(null);
    menuTriggerRef.current?.focus();
  };

  const openMobileMenu = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(true);
  };

  return (
    <>
      <header className="relative z-40 bg-[#fcf4ee] text-[#2b2b2b]">
        <div className="mx-auto flex min-h-[106px] max-w-[1500px] items-center gap-4 px-[5vw] md:min-h-[118px] md:gap-6 md:px-[4vw]">
          <Link
            href="/"
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]"
            aria-label="Conejo Valley Family Counseling home"
          >
            <Image
              src={LOGO_SRC}
              alt="Conejo Valley Family Counseling"
              width={3007}
              height={878}
              priority
              sizes="(max-width: 767px) 52vw, (max-width: 1200px) 23vw, 300px"
              className="h-auto w-[min(52vw,230px)] md:w-[clamp(180px,21vw,300px)]"
            />
          </Link>

          <nav
            ref={desktopNavRef}
            aria-label="Primary navigation"
            className="hidden min-w-0 flex-1 items-center justify-end gap-3 md:flex lg:gap-5 xl:gap-7"
          >
            <a
              href="/therapists-newbury-park"
              className="rounded-sm px-1 py-3 text-[13px] font-medium tracking-[0.06em] transition-colors hover:text-[#86b3b3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b2b2b]"
            >
              About
            </a>

            {navigationFolders.map((folder) => {
              const isOpen = openDropdown === folder.id;
              const dropdownId = `desktop-dropdown-${folder.id}`;

              return (
                <div key={folder.id} className="relative">
                  <button
                    type="button"
                    aria-controls={dropdownId}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className="inline-flex items-center gap-1 rounded-sm px-1 py-3 text-[13px] font-medium tracking-[0.06em] transition-colors hover:text-[#86b3b3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b2b2b]"
                    onClick={() => setOpenDropdown(isOpen ? null : folder.id)}
                  >
                    {folder.label}
                    <DownArrow
                      className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    id={dropdownId}
                    className={`absolute top-full left-1/2 z-50 min-w-[220px] -translate-x-1/2 border-t border-[#2b2b2b]/20 bg-[#fcf4ee] px-5 py-3 shadow-[0_12px_30px_rgba(43,43,43,0.12)] transition-[visibility,opacity,transform] duration-200 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <ul className="space-y-0.5">
                      {folder.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            tabIndex={isOpen ? 0 : -1}
                            className="block rounded-sm px-2 py-2 text-[13px] leading-snug transition-colors hover:bg-white hover:text-[#86b3b3] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2b2b2b]"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            <a
              href="/faqs"
              className="rounded-sm px-1 py-3 text-[13px] font-medium tracking-[0.06em] transition-colors hover:text-[#86b3b3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b2b2b]"
            >
              FAQs
            </a>
          </nav>

          <a
            href="/contact"
            className="hidden shrink-0 rounded-sm border border-[#2b2b2b] px-5 py-3 text-[12px] font-medium tracking-[0.14em] transition-colors hover:bg-[#2b2b2b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b] md:inline-flex"
          >
            Contact
          </a>

          <button
            ref={menuTriggerRef}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b] md:hidden"
            onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}
          >
            {mobileMenuOpen ? (
              <CloseIcon className="h-7 w-7" />
            ) : (
              <MenuIcon className="h-6 w-7" />
            )}
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
          <div className="absolute inset-0 bg-[#2b2b2b]/30" aria-hidden="true" />
          <div
            ref={mobileMenuRef}
            className="relative flex max-h-screen min-h-full flex-col overflow-y-auto bg-[#fcf4ee] text-[#2b2b2b]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-[106px] items-center justify-between px-[5vw]">
              <Link
                href="/"
                className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]"
                onClick={closeMobileMenu}
              >
                <Image
                  src={LOGO_SRC}
                  alt="Conejo Valley Family Counseling"
                  width={3007}
                  height={878}
                  sizes="52vw"
                  className="h-auto w-[min(52vw,230px)]"
                />
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close menu"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]"
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
              <ul className="border-t border-[#2b2b2b]/25">
                <li className="border-b border-[#2b2b2b]/25">
                  <a
                    href="/therapists-newbury-park"
                    className="block py-5 text-[17px] font-medium tracking-[0.05em] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2b2b2b]"
                    onClick={closeMobileMenu}
                  >
                    About
                  </a>
                </li>

                {navigationFolders.map((folder) => {
                  const isOpen = mobileFolder === folder.id;
                  const submenuId = `mobile-submenu-${folder.id}`;

                  return (
                    <li key={folder.id} className="border-b border-[#2b2b2b]/25">
                      <button
                        type="button"
                        aria-controls={submenuId}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between py-5 text-left text-[17px] font-medium tracking-[0.05em] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2b2b2b]"
                        onClick={() => setMobileFolder(isOpen ? null : folder.id)}
                      >
                        {folder.label}
                        <DownArrow
                          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <ul
                        id={submenuId}
                        className={`overflow-hidden pl-4 transition-[max-height,opacity] duration-200 ${
                          isOpen ? "max-h-[900px] pb-3 opacity-100" : "max-h-0 opacity-0"
                        }`}
                        aria-hidden={!isOpen}
                      >
                        {folder.items.map((item) => (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              tabIndex={isOpen ? 0 : -1}
                              className="block py-2.5 text-[15px] leading-snug focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2b2b2b]"
                              onClick={closeMobileMenu}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}

                <li className="border-b border-[#2b2b2b]/25">
                  <a
                    href="/faqs"
                    className="block py-5 text-[17px] font-medium tracking-[0.05em] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2b2b2b]"
                    onClick={closeMobileMenu}
                  >
                    FAQs
                  </a>
                </li>
              </ul>

              <a
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center border border-[#2b2b2b] px-5 py-4 text-[12px] font-medium tracking-[0.16em] transition-colors hover:bg-[#2b2b2b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
