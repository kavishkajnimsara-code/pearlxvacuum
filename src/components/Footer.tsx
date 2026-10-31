"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 sm:pt-20 pb-24 sm:pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-slate-900">
          
          {/* Logo & About Column (Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="relative h-12 w-28 sm:h-14 sm:w-32 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/pearl-x-logo.png"
                  alt="Pearl-X Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Turning your travel flavors and luggage into seamless, worry-free journeys. Export-quality hermetic vacuum sealing in Colombo, Sri Lanka.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/94743678100"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-[#25D366] active:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-[#25D366] hover:scale-110"
                aria-label="WhatsApp"
              >
                <Image
                  src="/images/whatsapp-cta.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </a>
              <a
                href="tel:0743678100"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-red-600 active:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-red-600 hover:scale-110"
                aria-label="Phone Hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-normal">
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-red-400 transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-red-400 transition-colors">
                  Why Choose Pearl-X
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-red-400 transition-colors">
                  Creative Showcase
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Colombo Walk-In Hub */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Colombo Hub:
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400 font-normal">
              <div className="leading-relaxed">
                123 Baseline Road, <br />
                Kirulapone, Colombo, Sri Lanka
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Near Kirulapone Junction • Customer parking on-site
              </div>
              <a
                href="https://maps.app.goo.gl/KwbGziWSJjtMKwvc6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-500 hover:text-red-400 pt-2 font-medium"
              >
                <span>View Google Map</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Contact No.:
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-normal">
              <a
                href="tel:0743678100"
                className="block text-base font-medium text-white hover:text-red-500 transition-colors"
              >
                074 367 8100
              </a>
              <div className="text-slate-400">
                WhatsApp: +94 74 367 8100
              </div>
              <div className="pt-2 text-slate-400">
                Mon – Sun: 8:30 AM – 8:00 PM
              </div>
              <div className="text-emerald-400 font-normal text-[11px] flex items-center gap-1.5 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open 7 Days • Never Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Escapora Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-end gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span>Keep it fresh. Keep it secure.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
