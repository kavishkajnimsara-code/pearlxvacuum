"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function HeroSection() {
  const [clickedBtn, setClickedBtn] = useState<"wa" | "call" | null>(null);

  const handleBtnClick = (btn: "wa" | "call") => {
    setClickedBtn(btn);
    setTimeout(() => setClickedBtn(null), 600);
  };

  return (
    <section className="bg-white px-2.5 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-4 sm:pb-8">
      <div className="relative sm:min-h-[88vh] flex items-center justify-center overflow-hidden rounded-[22px] sm:rounded-[36px] lg:rounded-[44px] bg-slate-950 text-white">
        
        {/* Full-bleed Hero Background Image inside rounded container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-pack.jpg"
            alt="Pearl-X Vacuum Packing Luggage and Spices"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.55] contrast-[1.05] scale-105 transition-transform duration-1000"
          />
          {/* Soft Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-slate-950/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 py-9 sm:py-28 text-center flex flex-col items-center justify-center">
        
        {/* Main Headline */}
        <h1 className="mb-5 sm:mb-8 w-full flex flex-col items-center justify-center text-center cursor-default">
          <span className="block text-center text-[1.7rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.03em] leading-[1.15] text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.9),0_2px_6px_rgba(0,0,0,0.85)] sm:whitespace-nowrap transition-transform duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1">
            Running Out of <br className="sm:hidden" /> Suitcase Space?
          </span>
          <span className="group/pack block text-center text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-[-0.04em] leading-[1.08] text-red-500 [text-shadow:0_6px_28px_rgba(0,0,0,0.95),0_2px_8px_rgba(0,0,0,0.85)] mt-2 sm:mt-4 whitespace-nowrap transition-transform duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1">
            Pack{" "}
            <span className="inline-block transition-all duration-300 ease-out group-hover/pack:scale-125 group-hover/pack:mx-2 sm:group-hover/pack:mx-4">
              3X
            </span>{" "}
            More.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-xl md:text-2xl lg:text-[1.5rem] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.95),0_1px_4px_rgba(0,0,0,0.9)] font-normal leading-relaxed max-w-4xl mb-8 sm:mb-12 px-1 transition-all duration-300 ease-out hover:scale-[1.01] hover:-translate-y-0.5 cursor-default">
          Don't leave your favorite food or clothes behind. Professional vacuum sealing that saves up to 80% luggage space, keeps food 100% leak-proof, and guarantees freshness on every flight.
        </p>

        {/* Two-CTA Group: Primary WhatsApp + Secondary Call */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          
          {/* Primary CTA Button */}
          <a
            href="https://wa.me/94743678100?text=Hi%20Pearl-X%2C%20I%20would%20like%20to%20inquire%20about%20your%20vacuum%20packing%20service."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleBtnClick("wa")}
            className={`group w-56 sm:w-72 h-12 sm:h-15 inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full text-sm sm:text-lg font-medium border border-transparent shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center ${
              clickedBtn === "wa"
                ? "bg-[#25D366] text-white shadow-emerald-500/30"
                : "bg-white text-slate-900 hover:bg-[#25D366] hover:text-white active:bg-[#25D366] active:text-white"
            }`}
          >
            <Image
              src="/images/whatsapp-cta.png"
              alt="WhatsApp"
              width={22}
              height={22}
              className={`w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 object-contain transition-all duration-300 ${
                clickedBtn === "wa"
                  ? "brightness-100"
                  : "brightness-0 group-hover:brightness-100 group-active:brightness-100"
              }`}
            />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Secondary CTA Button */}
          <a
            href="tel:0743678100"
            onClick={() => handleBtnClick("call")}
            className="group w-56 sm:w-72 h-12 sm:h-15 inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full text-sm sm:text-lg font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center"
          >
            <Phone
              className={`w-4.5 h-4.5 sm:w-5 sm:h-5 transition-all duration-300 ${
                clickedBtn === "call"
                  ? "text-red-500 fill-red-500 scale-110"
                  : "text-white group-hover:text-red-500 group-hover:fill-red-500 group-hover:scale-110 group-active:text-red-500 group-active:fill-red-500"
              }`}
            />
            <span>Call 074 367 8100</span>
          </a>

        </div>

      </div>
    </div>
  </section>
  );
}
