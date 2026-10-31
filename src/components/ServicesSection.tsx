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
        "Whether it is mom's spicy chicken curry, polos, roasted curry powder, or dried sprats, our food-grade vacuum pouches guarantee 100% leak-proof and smell-proof security for global flights.",
      bullets: [
        "Cooked Curries & Gravies",
        "Roasted Spices & Chili Powders",
        "Dry Fish, Sprats & Maldive Fish",
        "Traditional Sweets (Dodol, Halape)",
        "Ceylon Tea Leaves & Cashews",
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
        "Tired of struggling to close your suitcase or paying hefty excess luggage fees? Our heavy-duty compression vacuum sealing flattens winter jackets, chunky knitwear, and blankets to save up to 80% volume.",
      bullets: [
        "Bulky Winter Coats & Parkas",
        "Woolen Sweaters & Knitwear",
        "Bed Linen & Travel Pillows",
        "Moisture & Mildew Protection",
        "Fit Double Your Wardrobe",
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
        "Tailored for local businesses, retailers, and artisans sending Ceylon spices, tea, dried fruits, and snack packs overseas. Professional industrial vacuum chamber machines ensure pristine retail finish.",
      bullets: [
        "Certified Multi-Ply Food Bags",
        "High-Volume Daily Batches",
        "Airport Cargo Customs Compliant",
        "Uniform Retail Pouch Finish",
        "Volume Discounts for Exporters",
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
    <section id="packages" className="py-20 lg:py-28 bg-slate-50/80 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-medium text-slate-900 tracking-[-0.03em]">
              Specialized <span className="text-red-600 font-medium">Vacuum Packages.</span>
            </h2>
          </div>

          {/* Escapora Slider Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className={`w-12 h-12 rounded-full border transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 ${
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
              className={`w-12 h-12 rounded-full border transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 ${
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
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Content Side (6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Title + Italic Subtitle (Escapora Style) */}
                <h3 className="text-2xl sm:text-4xl font-medium text-slate-900 mb-4 tracking-[-0.03em] leading-tight">
                  {pkg.title}{" "}
                  <span className="font-medium text-red-600">
                    {pkg.italicSubtitle}
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 font-normal">
                  {pkg.description}
                </p>

                {/* Bullets Grid with Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {pkg.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2]" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Escapora Action Row: Red Pill + Phone Widget */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
                <a
                  href={`https://wa.me/94743678100?text=${encodeURIComponent(pkg.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setPressedBtn("wa");
                    setTimeout(() => setPressedBtn(null), 600);
                  }}
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-medium text-white shadow-md transition-all hover:scale-[1.02] active:scale-95 ${
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
            <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full bg-slate-900">
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
