"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: "luggage-comparison",
      title: "Luggage Space Revolution: Before vs After",
      subtitle: "Save up to 80% suitcase volume for heavy sweaters, winter coats, and blankets.",
      image: "/images/luggage-pack.jpg",
      category: "Space Saving Creative",
      badge: "80% Space Saved",
      stat: "Double Wardrobe Capacity",
      quote: "No more paying for overweight luggage or leaving your favorite jackets behind.",
    },
    {
      id: "leakproof-curry",
      title: "100% Leak-Proof Cooked Curry Travel Test",
      subtitle: "Sri Lankan spicy chicken curry sealed with double thermal welds directly touching crisp white dress shirts.",
      image: "/images/leakproof-curry.jpg",
      category: "Aroma & Leak Shield",
      badge: "0 Leaks • 0 Stains",
      stat: "Pressure-Proof Thermal Weld",
      quote: "Carried through 20-hour international flights with zero leakage or odor release.",
    },
    {
      id: "food-packing",
      title: "Authentic Food & Spice Protection",
      subtitle: "Sealed pouches of aromatic curry powder, cinnamon sticks, dry fish, and traditional snacks.",
      image: "/images/food-pack.jpg",
      category: "Food Grade Barrier",
      badge: "12-Month Freshness",
      stat: "BPA-Free Food Grade",
      quote: "Locks in authentic mom's cooking flavor without any external humidity spoilage.",
    },
    {
      id: "commercial-export",
      title: "Commercial & Export Batch Vacuum Sealing",
      subtitle: "Industrial chamber machines sealing Ceylon tea, spices, and nuts for global supermarkets and distributors.",
      image: "/images/commercial-pack.jpg",
      category: "B2B & Exporter",
      badge: "Commercial Grade",
      stat: "Multi-Chamber Industrial Speed",
      quote: "Uniform, clean, retail-ready finish compliant with international cargo requirements.",
    },
    {
      id: "hero-pack",
      title: "Complete Travel Ready Suitcase Organization",
      subtitle: "Compact clothes, sealed curry pouches, and dry spices all packed neatly side by side.",
      image: "/images/hero-pack.jpg",
      category: "Full Travel Solution",
      badge: "Border-Free Flavors",
      stat: "100% Airport Compliant",
      quote: "Effortless customs clearance across UK, Australia, Canada, UAE, and USA airports.",
    },
  ];

  const [pressedBtn, setPressedBtn] = useState<"prev" | "next" | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handlePrev = () => {
    setPressedBtn("prev");
    prevSlide();
    setTimeout(() => setPressedBtn(null), 300);
  };

  const handleNext = () => {
    setPressedBtn("next");
    nextSlide();
    setTimeout(() => setPressedBtn(null), 300);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  return (
    <section id="showcase" className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-medium text-slate-900 tracking-[-0.03em] leading-tight">
            Visual Ad <span className="text-red-600 font-medium">Creative Showcase.</span>
          </h2>
        </div>

        {/* Main Showcase Banner */}
        <div className="relative rounded-3xl bg-slate-100 overflow-hidden shadow-xl border border-slate-200">
          <div className="relative w-full h-64 sm:h-[420px] lg:h-[540px]">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              sizes="100vw"
              className="object-cover transition-all duration-700 ease-in-out"
              priority
            />

            {/* Left Arrow Inside Image */}
            <button
              onClick={handlePrev}
              className={`absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 ${
                pressedBtn === "prev"
                  ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/30"
                  : "bg-white/90 backdrop-blur-sm text-slate-800 border-white/60 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-lg"
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow Inside Image */}
            <button
              onClick={handleNext}
              className={`absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 ${
                pressedBtn === "next"
                  ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/30"
                  : "bg-white/90 backdrop-blur-sm text-slate-800 border-white/60 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-lg"
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? "w-6 sm:w-8 bg-red-600"
                  : "w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Jump to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
