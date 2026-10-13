import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import CTA from "@/components/sections/CTA";
import Services, { AreasOfExpertise } from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Welcome from "@/components/sections/Welcome";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcf4ee]">
      <a
        href="#page"
        className="sr-only fixed top-4 left-4 z-[60] bg-[#2b2b2b] px-4 py-3 text-sm text-white focus:not-sr-only"
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
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
