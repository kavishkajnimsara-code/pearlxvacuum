"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setPressed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setPressed(false), 400);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      } ${
        pressed
          ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/30"
          : "bg-white text-slate-800 border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-xl"
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
}

