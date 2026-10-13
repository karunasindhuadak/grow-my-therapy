import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import OurOffice from "@/components/sections/OurOffice";
import Services, { AreasOfExpertise } from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Welcome from "@/components/sections/Welcome";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <a
        href="#page"
        className="sr-only fixed top-4 left-4 z-[60] bg-foreground px-4 py-3 text-sm text-background focus:not-sr-only"
      >
        Skip to Content
      </a>
      <Navbar />
      <main id="page">
        <Hero />
        <Welcome />
        <Services />
        <Testimonials />
        <AreasOfExpertise />
        <About />
        <Approach />
        <FAQ />
        <OurOffice />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
