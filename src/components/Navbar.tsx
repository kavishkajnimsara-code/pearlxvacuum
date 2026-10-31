"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedBtn, setClickedBtn] = useState<"wa" | "call" | null>(null);

  const handleBtnClick = (btn: "wa" | "call") => {
    setClickedBtn(btn);
    setTimeout(() => setClickedBtn(null), 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Why Us", href: "#why-us" },
    { name: "Showcase", href: "#showcase" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Main Escapora Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3"
            : "bg-white py-3.5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          
          {/* Pearl-X Brand Logo (Attached Oval Badge) */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 lg:justify-self-start">
            <div className="relative h-12 w-28 sm:h-14 sm:w-32 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/pearl-x-logo.png"
                alt="Pearl-X Vacuum Packing Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Center Navigation Links (Escapora Typography) */}
          <nav className="hidden lg:flex items-center justify-center gap-9 xl:gap-12 font-sans lg:justify-self-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative inline-block text-base lg:text-[18px] font-medium tracking-[-0.03em] text-slate-900 hover:text-red-600 transition-all duration-300 ease-out hover:scale-120 hover:-translate-y-0.5 hover:z-10 hover:drop-shadow-[0_6px_12px_rgba(220,38,38,0.18)]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Escapora Pill CTA Buttons */}
          <div className="hidden sm:flex items-center gap-4 lg:justify-self-end">
            <a
              href="https://wa.me/94743678100?text=Hi%20Pearl-X%2C%20I%20would%20like%20to%20inquire%20about%20your%20vacuum%20packing%20service."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleBtnClick("wa")}
              className={`inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm lg:text-base font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                clickedBtn === "wa"
                  ? "bg-[#25D366] shadow-emerald-500/25"
                  : "bg-red-600 hover:bg-[#25D366] active:bg-[#25D366] shadow-red-600/20"
              }`}
            >
              <Image
                src="/images/whatsapp-cta.png"
                alt="WhatsApp"
                width={18}
                height={18}
                className="w-4.5 h-4.5 object-contain"
              />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-red-600 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-red-600 py-1.5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-100">
              <a
                href="tel:0743678100"
                onClick={() => handleBtnClick("call")}
                className="group flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all"
              >
                <Phone
                  className={`w-4 h-4 transition-all duration-300 ${
                    clickedBtn === "call"
                      ? "text-red-600 fill-red-600 scale-110"
                      : "text-slate-500 group-hover:text-red-600 group-hover:fill-red-600 group-active:text-red-600 group-active:fill-red-600"
                  }`}
                />
                <span>Call Hotline (074 367 8100)</span>
              </a>
              <a
                href="https://wa.me/94743678100?text=Hi%20Pearl-X%2C%20I%20would%20like%20to%20inquire%20about%20your%20vacuum%20packing%20service."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBtnClick("wa")}
                className={`flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium text-white shadow-md transition-all ${
                  clickedBtn === "wa"
                    ? "bg-[#25D366]"
                    : "bg-red-600 hover:bg-[#25D366] active:bg-[#25D366]"
                }`}
              >
                <Image
                  src="/images/whatsapp-cta.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
