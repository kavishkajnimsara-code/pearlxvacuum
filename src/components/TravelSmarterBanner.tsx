"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, MessageCircle, ArrowRight } from "lucide-react";

export default function TravelSmarterBanner() {
  const [phoneInput, setPhoneInput] = useState("");

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/94743678100?text=${encodeURIComponent(
      `Hi Pearl-X, my number is ${phoneInput || "provided"}. I would like to get my items vacuum packed.`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-24 sm:py-28 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-pack.jpg"
          alt="Travel with Pearl-X Vacuum Sealed Luggage"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.25] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Escapora Heading & Star Rating */}
          <div className="lg:col-span-7">
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-normal text-slate-300">
                4.9 Rate by 10,000+ Reviews
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-[-0.03em] leading-[1.08] mb-6">
              Travel smarter <br />
              <span className="text-red-500 font-medium">
                with Pearl-X.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed font-normal">
              Join thousands of Sri Lankan expats, university students, and travelers who safely pack home-cooked curries, pungent spices, and bulky winter coats with guaranteed zero spills.
            </p>
          </div>

          {/* Right Column: Escapora Input Pill & CTA */}
          <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
              Ready to pack for your flight?
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-normal">
              Enter your WhatsApp number to connect instantly with our Kirulapone counter.
            </p>

            <form onSubmit={handleStartChat} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-2.5 bg-slate-950/80 p-2 rounded-full border border-slate-800 focus-within:border-red-500 transition-colors">
                <input
                  type="text"
                  placeholder="Enter your phone or WhatsApp"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  className="w-full bg-transparent px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none font-normal"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-full text-xs font-medium text-white bg-red-600 hover:bg-red-700 transition-all shadow-md shadow-red-600/25 hover:scale-[1.02] active:scale-95"
                >
                  <span>Chat Free</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1 font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open 7 days a week: 8:30 AM – 8:00 PM</span>
              </div>
            </form>
          </div>

        </div>
      </div>

    </section>
  );
}
