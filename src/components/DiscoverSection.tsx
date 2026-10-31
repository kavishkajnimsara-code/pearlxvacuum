"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export default function DiscoverSection() {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Escapora Heading & Value Copy */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            
            {/* Headline with Escapora Styling (Poppins Medium, tight letter spacing) */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-[-0.03em] leading-[1.1] mb-4 sm:mb-6">
              Discover the <br />
              <span className="text-red-600 font-medium">freshness with us.</span>
            </h2>

            {/* Concise Paragraph */}
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed mb-7 sm:mb-8 max-w-xl font-normal">
              From home-cooked curries and spices to bulky winter jackets, we vacuum seal your travel essentials so you fly leak-free, odor-free, and customs-ready.
            </p>

            {/* Compact Centered Feature Checklist */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-md w-full">
              {[
                "100% Leak & Odor-Proof",
                "Up to 80% Space Saved",
                "Airport Customs Ready",
                "15-Min Walk-in Service",
              ].map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200/80 rounded-2xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-700"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Group: Centered Pill Button */}
            <div className="flex items-center justify-center">
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Escapora 3-Image Collage Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-2.5 sm:gap-4 h-[360px] sm:h-[560px]">
              
              {/* Tall Image Left (7 cols) */}
              <div className="col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-slate-100 group">
                <Image
                  src="/images/food-pack.jpg"
                  alt="Airtight Food Vacuum Packing"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Stacked Images Right (5 cols) */}
              <div className="col-span-5 flex flex-col gap-2.5 sm:gap-4 h-full">
                
                {/* Top Stacked Image */}
                <div className="relative flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-slate-100 group">
                  <Image
                    src="/images/luggage-pack.jpg"
                    alt="Luggage Space Compression"
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Stacked Image */}
                <div className="relative flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-slate-100 group">
                  <Image
                    src="/images/leakproof-curry.jpg"
                    alt="Zero Leak Pressure Test"
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
