"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("all");
  const [clickedBtn, setClickedBtn] = useState<"wa" | "call" | null>(null);

  const handleBtnClick = (btn: "wa" | "call") => {
    setClickedBtn(btn);
    setTimeout(() => setClickedBtn(null), 600);
  };

  const faqs = [
    {
      category: "food",
      question: "What types of food can be vacuum packed?",
      answer:
        "Almost any food! We routinely pack cooked curries (chicken, beef, mutton, fish, polos), roasted curry powders, raw and dried spices, dry fish, Maldive fish, sprats, traditional Sri Lankan sweets (dodol, kavum, kokis, halape), Ceylon tea, cashew nuts, roasted snacks, and even fresh meats and seafood. For cooked curries, we recommend chilling them first so our specialized chamber machines create a flawless, liquid-tight seal.",
    },
    {
      category: "food",
      question: "How long does food stay fresh after vacuum sealing?",
      answer:
        "Vacuum sealing extends freshness up to 3 to 5 times longer than conventional plastic bags or plastic containers. Cooked curries, once vacuum sealed and frozen, can easily last 3 to 6 months with zero freezer burn or ice crystal buildup. Dry spices, powders, and tea retain their full aromatic potency and color for over 12 to 18 months because oxygen and moisture are completely eliminated.",
    },
    {
      category: "travel",
      question: "Will this pass airport and airline regulations?",
      answer:
        "Yes, absolutely. Airlines and airport customs (including TSA in the USA, Border Force in the UK, Australia Biosecurity, and Canada CBSA) strictly regulate pungent odors and leaking liquids in passenger luggage. Our heavy-gauge, multi-layer commercial pouches lock in 100% of the smell and prevent liquid spills under high flight altitude decompression. We provide clear, neat labeling so airport security screeners can inspect the contents with ease.",
    },
    {
      category: "service",
      question: "Do I need to book an appointment or can I walk in?",
      answer:
        "Walk-ins are 100% welcome! No prior appointment is needed. Our Kirulapone facility operates 7 days a week from 8:30 AM to 8:00 PM. Most individual travel orders (e.g., 5 to 15 food pouches or a couple of suitcases of winter wear) are finished within 15 to 20 minutes while you wait. For very large commercial export batches (100+ units), giving us a quick heads-up on WhatsApp helps us prioritize your machine queue.",
    },
    {
      category: "travel",
      question: "Can you vacuum pack cooked curries and gravies without leaking?",
      answer:
        "Yes! Unlike cheap handheld vacuum sealers that suck liquids into the motor, Pearl-X utilizes heavy industrial chamber vacuum sealers and double-pulse thermal impulse welders. This guarantees a broad, impenetrable seal that does not burst even if your suitcase is dropped or compressed under heavy airport cargo.",
    },
    {
      category: "service",
      question: "Do you supply the vacuum bags or do I need to bring my own?",
      answer:
        "We provide everything! We stock heavy-duty, food-grade, certified BPA-free vacuum pouches in a wide variety of dimensions — from small 250g spice pouches to medium curry bags, and jumbo embossed compression bags for luggage and duvets. All bag costs are included in our transparent, competitive pricing.",
    },
  ];

  const filteredFaqs =
    activeTab === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeTab);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-medium text-slate-900 tracking-[-0.03em] mb-4">
            Frequently Asked <span className="text-red-600 font-medium">Questions.</span>
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Everything you need to know about preparing your foods, clothes, and international travel packing.
          </p>
        </div>

        {/* Escapora Category Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Questions" },
            { id: "food", label: "Food & Curries" },
            { id: "travel", label: "Travel & Customs" },
            { id: "service", label: "Walk-ins & Service" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIdx(0);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-red-300 bg-red-50/20 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-slate-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-red-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-red-100/60 animate-in fade-in-50 duration-200 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <div className="font-medium text-slate-900 text-base sm:text-lg">
              Have a specific question about your items?
            </div>
            <div className="text-xs text-slate-500 mt-1 font-normal">
              Our packaging desk in Kirulapone is online 7 days a week.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:0743678100"
              onClick={() => handleBtnClick("call")}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-all shadow-xs"
            >
              <Phone
                className={`w-3.5 h-3.5 transition-all duration-300 ${
                  clickedBtn === "call"
                    ? "text-red-600 fill-red-600 scale-110"
                    : "text-slate-500 group-hover:text-red-600 group-hover:fill-red-600 group-active:text-red-600 group-active:fill-red-600"
                }`}
              />
              <span>074 367 8100</span>
            </a>
            <a
              href="https://wa.me/94743678100?text=Hi%20Pearl-X%2C%20I%20have%20a%20question%20about%20vacuum%20packing."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleBtnClick("wa")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium text-white transition-all shadow-md ${
                clickedBtn === "wa"
                  ? "bg-[#25D366] shadow-emerald-500/25"
                  : "bg-red-600 hover:bg-[#25D366] active:bg-[#25D366] shadow-red-600/20"
              }`}
            >
              <Image
                src="/images/whatsapp-cta.png"
                alt="WhatsApp"
                width={14}
                height={14}
                className="w-3.5 h-3.5 object-contain"
              />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
