"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "OUR TEAM", href: "#team" },
  { label: "SPECIALTIES", href: "#specialties" },
  { label: "METHODS", href: "#methods" },
  { label: "FAQS", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="relative w-full z-[2] box-border px-[5vw] py-[13.5px] lg:py-[1.4vw] min-h-[102px] flex items-center justify-between bg-[#F4F1EA] font-sans font-light text-[16px] text-[#2B2B2B] antialiased">
      {/* Exact Logo from DevTools */}
      <Link
        href="/"
        className="block relative w-[257px] h-[75px] max-h-[75px] max-w-full overflow-clip cursor-pointer shrink-0"
      >
        <Image
          src="/images/logo.png"
          alt="Conejo Valley Family Counseling"
          width={257}
          height={75}
          priority
          className="h-full w-auto object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-end grow shrink pl-[25px] text-right">
        <nav className="inline-flex flex-wrap items-center justify-end h-[27px] text-right font-sans font-light text-[16px] text-[#2B2B2B] antialiased gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center h-[27px] py-[1.35px] font-sans text-[13.5px] font-normal uppercase tracking-[1.35px] leading-[24.3px] text-[#2B2B2B] hover:text-[#6A8D88] transition-colors whitespace-nowrap cursor-pointer antialiased"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact CTA Button  */}
        <div className="block ml-[25px] h-[47.6px] shrink-0">
          <Button
            variant="outline"
            className="relative inline-flex items-center justify-center w-[111px] h-[47.6px] rounded-[50%] border border-[#2B2B2B] bg-transparent text-[#2B2B2B] font-sans text-[12.75px] font-light uppercase tracking-[1.53px] whitespace-nowrap cursor-pointer hover:bg-[#2B2B2B] hover:text-white transition-colors duration-100 ease-linear shadow-none px-0 py-0"
            render={<Link href="#contact" />}
          >
            CONTACT
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-6 text-[#2B2B2B]" />
              </Button>
            }
          />
          <SheetContent side="right" className="w-72 bg-[#FAF6F1] p-6">
            <SheetTitle className="font-serif text-xl mb-8 text-[#2B2B2B]">
              Conejo Valley
            </SheetTitle>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.label}
                  render={
                    <Link
                      href={link.href}
                      className="font-sans text-xs uppercase tracking-[0.15em] text-[#2B2B2B] hover:text-[#6A8D88] transition-colors"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                render={
                  <Button
                    variant="outline"
                    className="rounded-full border-[0.8px] border-[#2B2B2B] bg-transparent text-[#2B2B2B] text-[12.75px] font-normal uppercase tracking-[1.53px] px-[19.5px] py-[15px] h-[47.6px] hover:bg-[#2B2B2B] hover:text-white transition-colors duration-100 ease-linear shadow-none w-full mt-4"
                  >
                    <Link href="#contact">CONTACT</Link>
                  </Button>
                }
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
