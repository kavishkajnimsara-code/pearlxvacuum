"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 sm:pt-20 pb-24 sm:pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-16 border-b border-slate-900">
          
          {/* Logo & About Column (Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col items-center text-center md:items-start md:text-left space-y-4 sm:space-y-5">
            <Link href="/" className="inline-block group">
              <div className="relative h-12 w-28 sm:h-14 sm:w-32 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/pearl-x-logo.png"
                  alt="Pearl-X Logo"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Turning your travel flavors and luggage into seamless, worry-free journeys. Export-quality hermetic vacuum sealing in Colombo, Sri Lanka.
            </p>

            <div className="pt-1 flex items-center justify-center md:justify-start gap-3">
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
              <a
                href="https://www.instagram.com/pearlxvacuum/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-transparent hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/pearlxvacuum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-[#1877F2] hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation (Hidden on Mobile) */}
          <div className="hidden lg:block space-y-3.5">
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
          <div className="space-y-2.5 sm:space-y-3.5 text-center md:text-left">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Colombo Hub:
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-normal">
              <div className="leading-relaxed">
                123 Baseline Road, <br />
                Kirulapone, Colombo, Sri Lanka
              </div>
              <div className="text-[11px] text-slate-500 pt-0.5">
                Near Kirulapone Junction
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5 sm:space-y-3.5 text-center md:text-left">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white">
              Contact No.:
            </h4>
            <div className="space-y-1.5 sm:space-y-2 text-xs text-slate-400 font-normal">
              <a
                href="tel:0743678100"
                className="block text-sm sm:text-base font-medium text-white hover:text-red-500 transition-colors"
              >
                074 367 8100
              </a>
              <a
                href="mailto:info@pearlxceylon.com"
                className="block text-slate-300 hover:text-red-400 transition-colors"
              >
                info@pearlxceylon.com
              </a>
              <div className="pt-1 text-slate-400">
                Mon – Sun: 8:30 AM – 8:00 PM
              </div>
              <div className="text-emerald-400 font-normal text-[11px] pt-0.5">
                <span>Open 7 Days</span>
              </div>
            </div>
          </div>

        </div>

        {/* Escapora Bottom Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span>Keep it fresh. Keep it secure.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
