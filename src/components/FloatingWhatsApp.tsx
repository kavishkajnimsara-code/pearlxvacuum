"use client";

import Image from "next/image";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end group">
      {/* Hover Popup Message */}
      <div className="hidden sm:block mb-2.5 bg-white text-slate-900 px-4 py-2 rounded-full shadow-xl border border-slate-200 text-xs sm:text-sm font-medium whitespace-nowrap opacity-0 translate-y-2 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out">
        <span>Need to know more?</span>
      </div>

      {/* Main Floating Trigger Button */}
      <a
        href="https://wa.me/94743678100?text=Hi%20Pearl-X%2C%20I%20would%20like%20to%20inquire%20about%20your%20vacuum%20packing%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp (074 367 8100)"
      >
        <Image
          src="/images/whatsapp-icon.png"
          alt="Chat on WhatsApp"
          width={64}
          height={64}
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-xl"
        />
      </a>
    </div>
  );
}
