"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [pressedBtn, setPressedBtn] = useState<"prev" | "next" | "wa" | null>(null);

  const packages = [
    {
      id: "food-packing",
      title: "Food Vacuum Packing,",
      italicSubtitle: "Travel Flavor Shield",
      description:
        "Keep cooked curries, spices, and dry fish 100% leak-proof, odor-free, and flight-ready in food-grade barrier pouches.",
      bullets: [
        "Cooked Curries & Gravies",
        "Spices & Chili Powders",
        "Dry Fish & Sprats",
        "Sweets, Tea & Cashews",
      ],
      image: "/images/food-pack.jpg",
      badge: "Zero Odor & Leak Proof",
      cta: "Book food packing today",
      msg: "Hi Pearl-X, I want to book Food Vacuum Packing for my upcoming flight.",
    },
    {
      id: "luggage-compression",
      title: "Clothing & Luggage,",
      italicSubtitle: "Space Compression",
      description:
        "Flatten bulky winter coats, sweaters, and bedding to save up to 80% suitcase space and avoid excess baggage fees.",
      bullets: [
        "Winter Coats & Parkas",
        "Sweaters & Knitwear",
        "Duvets & Pillows",
        "Moisture & Odor Shield",
      ],
      image: "/images/luggage-pack.jpg",
      badge: "Save Up To 80% Space",
      cta: "Compress your luggage",
      msg: "Hi Pearl-X, I want to compress my winter clothes and luggage.",
    },
    {
      id: "commercial-export",
      title: "Commercial Bulk Sealing,",
      italicSubtitle: "Exporter Standards",
      description:
        "Industrial chamber vacuum sealing for businesses and exporters shipping Ceylon spices, tea, and snacks worldwide.",
      bullets: [
        "Multi-Ply Export Pouches",
        "High-Volume Batches",
        "Cargo Customs Compliant",
        "Exporter Bulk Rates",
      ],
      image: "/images/commercial-pack.jpg",
      badge: "Industrial B2B Grade",
      cta: "Inquire bulk export rates",
      msg: "Hi Pearl-X, I want to inquire about Commercial / Exporter Bulk Sealing.",
    },
  ];

  const nextPackage = () => {
    setActiveIdx((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const prevPackage = () => {
    setActiveIdx((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const handlePrev = () => {
    setPressedBtn("prev");
    prevPackage();
    setTimeout(() => setPressedBtn(null), 300);
  };

  const handleNext = () => {
    setPressedBtn("next");
    nextPackage();
    setTimeout(() => setPressedBtn(null), 300);
  };

  const pkg = packages[activeIdx];

  return (
    <section id="packages" className="py-14 sm:py-20 lg:py-28 bg-slate-50/80 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-5xl font-medium text-slate-900 tracking-[-0.03em] leading-tight">
              Specialized <br className="sm:hidden" />
              <span className="text-red-600 font-medium">Vacuum Packages.</span>
            </h2>
          </div>

          {/* Escapora Slider Arrows */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 ${
                pressedBtn === "prev"
                  ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-600/30"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-md hover:shadow-red-600/20 shadow-sm"
              }`}
              aria-label="Previous Package"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 ${
                pressedBtn === "next"
                  ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-600/30"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-md hover:shadow-red-600/20 shadow-sm"
              }`}
              aria-label="Next Package"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Escapora Signature Package Card Banner */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] sm:min-h-[500px]">
            
            {/* Left Content Side (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-12 lg:p-14 flex flex-col items-center justify-between text-center order-2 lg:order-1">
              <div className="flex flex-col items-center w-full">
                {/* Title + Subtitle */}
                <h3 className="text-xl sm:text-4xl font-medium text-slate-900 mb-3 sm:mb-4 tracking-[-0.03em] leading-tight">
                  {pkg.title}{" "}
                  <span className="font-medium text-red-600">
                    {pkg.italicSubtitle}
                  </span>
                </h3>

                <p className="text-xs sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-md font-normal">
                  {pkg.description}
                </p>

                {/* Bullets Grid with Checkmarks */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-7 sm:mb-10 max-w-md w-full">
                  {pkg.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200/80 rounded-2xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-700"
                    >
                      <div className="w-4 h-4 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Escapora Action Row: Centered Compact Red Pill */}
              <div className="flex items-center justify-center pt-5 sm:pt-6 border-t border-slate-100 w-full">
                <a
                  href={`https://wa.me/94743678100?text=${encodeURIComponent(pkg.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setPressedBtn("wa");
                    setTimeout(() => setPressedBtn(null), 600);
                  }}
                  className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white shadow-md transition-all hover:scale-[1.02] active:scale-95 ${
                    pressedBtn === "wa"
                      ? "bg-[#25D366] shadow-emerald-500/25"
                      : "bg-red-600 hover:bg-[#25D366] active:bg-[#25D366] shadow-red-600/20"
                  }`}
                >
                  <Image
                    src="/images/whatsapp-cta.png"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                  <span>{pkg.cta}</span>
                </a>
              </div>

            </div>

            {/* Right Image Side (6 cols) */}
            <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[350px] lg:min-h-full bg-slate-900 order-1 lg:order-2">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-700"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
