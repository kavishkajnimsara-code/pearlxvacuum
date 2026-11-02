"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [pressed, setPressed] = useState(false);

  const scrollToTop = () => {
    setPressed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setPressed(false), 400);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-[999] w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
        pressed
          ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/30"
          : "bg-white text-slate-800 border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-xl"
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
}

