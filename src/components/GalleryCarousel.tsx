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
    <section id="showcase" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-medium text-slate-900 tracking-[-0.03em]">
              Visual Ad <span className="text-red-600 font-medium">Creative Showcase.</span>
            </h2>
          </div>

          {/* Controls: Prev, Next, Play/Pause */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
              aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={handlePrev}
              className={`w-12 h-12 rounded-full border transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 ${
                pressedBtn === "prev"
                  ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-600/30"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-md hover:shadow-red-600/20 shadow-sm"
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className={`w-12 h-12 rounded-full border transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 ${
                pressedBtn === "next"
                  ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-600/30"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-md hover:shadow-red-600/20 shadow-sm"
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Showcase Banner */}
        <div className="relative rounded-3xl bg-slate-950 text-white overflow-hidden shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Visual Image Side */}
            <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-full bg-slate-900">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-all duration-700 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950" />
              
              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>{slides[currentIndex].badge}</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-slate-950">
              <div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 tracking-[-0.03em] leading-tight">
                  {slides[currentIndex].title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {slides[currentIndex].subtitle}
                </p>

                {/* Key Spec Card */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                    Verified Outcome
                  </div>
                  <div className="text-sm font-medium text-red-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{slides[currentIndex].stat}</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-2 font-normal">
                    "{slides[currentIndex].quote}"
                  </div>
                </div>
              </div>

              {/* Slide Buttons / Indicators */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {slides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === dotIdx
                          ? "w-8 bg-red-600"
                          : "w-2.5 bg-slate-800 hover:bg-slate-600"
                      }`}
                      aria-label={`Jump to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <a
                  href="https://wa.me/94743678100?text=Hi%20Pearl-X%2C%20I%20saw%20your%20showcase%20and%20want%20to%20get%20my%20items%20packed."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full transition-all shadow-md shadow-red-600/20"
                >
                  <span>Book This Now</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
