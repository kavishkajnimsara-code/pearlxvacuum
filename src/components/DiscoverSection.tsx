"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export default function DiscoverSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Escapora Heading & Value Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Headline with Escapora Styling (Poppins Medium, tight letter spacing) */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-[-0.03em] leading-[1.1] mb-6">
              Discover the <br />
              <span className="text-red-600 font-medium">freshness with us.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              From mom’s home-cooked chicken curries and roasted curry powders, to compressing winter jackets into carry-ons, we protect your essentials so you travel border-free without luggage spills or airline customs worries.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-normal">
              Whether you are an expat traveling to Australia, UK, or Canada, a student packing for winter university terms, or an artisan exporter shipping Ceylon spices — our Colombo vacuum sealing hub ensures pristine, certified protection.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 w-full">
              {[
                "100% Odor & Leak-Proof",
                "Certified BPA-Free Food Grade",
                "Up to 80% Space Reduction",
                "15-Min Express Walk-ins",
                "Airport Customs Compliant",
                "Open 7 Days in Kirulapone",
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Group: Pill Button & Phone */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-medium text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Escapora 3-Image Collage Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 h-[480px] sm:h-[560px]">
              
              {/* Tall Image Left (7 cols) */}
              <div className="col-span-7 relative rounded-3xl overflow-hidden shadow-xl bg-slate-100 group">
                <Image
                  src="/images/food-pack.jpg"
                  alt="Airtight Food Vacuum Packing"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-medium text-white uppercase tracking-wider">
                  Food Grade Barrier
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg">
                  <div className="text-xs font-medium text-slate-900">Curries & Spices Sealed</div>
                  <div className="text-[11px] text-slate-500 font-normal">100% Aroma & Odor Sealed</div>
                </div>
              </div>

              {/* Stacked Images Right (5 cols) */}
              <div className="col-span-5 flex flex-col gap-4 h-full">
                
                {/* Top Stacked Image */}
                <div className="relative flex-1 rounded-3xl overflow-hidden shadow-lg bg-slate-100 group">
                  <Image
                    src="/images/luggage-pack.jpg"
                    alt="Luggage Space Compression"
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-red-600/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-medium text-white text-center">
                    80% Space Saved
                  </div>
                </div>

                {/* Bottom Stacked Image */}
                <div className="relative flex-1 rounded-3xl overflow-hidden shadow-lg bg-slate-100 group">
                  <Image
                    src="/images/leakproof-curry.jpg"
                    alt="Zero Leak Pressure Test"
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-medium text-white text-center">
                    0 Leaks on White Shirts
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
