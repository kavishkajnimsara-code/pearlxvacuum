import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiscoverSection from "@/components/DiscoverSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Top Banner & Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Escapora Full-bleed Hero */}
        <HeroSection />

        {/* Escapora Asymmetric "Discover the Freshness" Section */}
        <DiscoverSection />

        {/* Escapora Packages / Services Slider Cards */}
        <ServicesSection />

        {/* Escapora Dark "Why We're Your Perfect Travel Partner" Section */}
        <BenefitsSection />

        {/* Visual Ad Creative Showcase */}
        <GalleryCarousel />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact, Location & Quote Form */}
        <ContactSection />
      </main>

      {/* Escapora Dark Footer */}
      <Footer />

      {/* Floating Back to Top Button (Bottom Left) */}
      <BackToTop />

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <FloatingWhatsApp />
    </div>
  );
}
