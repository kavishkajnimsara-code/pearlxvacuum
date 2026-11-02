"use client";

import { Check, ArrowRight } from "lucide-react";

export default function DiscoverSection() {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading & Value Copy */}
        <div className="flex flex-col items-center text-center">
          
          {/* Headline with Escapora Styling (Poppins Medium, tight letter spacing) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-[-0.03em] leading-[1.1] mb-4 sm:mb-6">
            Discover the <br />
            <span className="text-red-600 font-medium">freshness with us.</span>
          </h2>

          {/* Concise Paragraph */}
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed mb-7 sm:mb-8 max-w-2xl font-normal">
            From home-cooked curries and spices to bulky winter jackets, we vacuum seal your travel essentials so you fly leak-free, odor-free, and customs-ready.
          </p>

          {/* Compact Centered Feature Checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            {[
              "100% Leak & Odor-Proof",
              "Up to 80% Space Saved",
              "Airport Customs Ready",
              "15-Min Walk-in Service",
            ].map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200/80 rounded-2xl px-3 py-3 text-xs sm:text-sm font-medium text-slate-700"
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

      </div>
    </section>
  );
}
