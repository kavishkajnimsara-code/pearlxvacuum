"use client";

import { useState } from "react";
import { Calculator, MessageCircle, Plus, Minus, CheckCircle2 } from "lucide-react";

export default function LuggageCalculator() {
  const [winterJackets, setWinterJackets] = useState(2);
  const [sweaters, setSweaters] = useState(4);
  const [curryPacks, setCurryPacks] = useState(3);
  const [spicesKg, setSpicesKg] = useState(2);

  const rawVolumeLiters = winterJackets * 15 + sweaters * 6 + curryPacks * 2 + spicesKg * 2;
  const compressedVolumeLiters = Math.round(
    winterJackets * 3 + sweaters * 1.5 + curryPacks * 1.5 + spicesKg * 1
  );
  const savedLiters = Math.max(0, rawVolumeLiters - compressedVolumeLiters);
  const percentSaved =
    rawVolumeLiters > 0
      ? Math.round((savedLiters / rawVolumeLiters) * 100)
      : 0;

  const whatsappInquiry = `Hi Pearl-X, I used your Pack Calculator:
- Winter Jackets: ${winterJackets}
- Sweaters / Knits: ${sweaters}
- Cooked Curry Packs: ${curryPacks}
- Spices / Dry Food: ${spicesKg} kg
Estimated ~${savedLiters}L luggage space saved (${percentSaved}%). Can I walk in to get this packed?`;

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-medium uppercase tracking-wider text-red-600 block mb-2">
            Interactive Travel Tool
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium text-slate-900 tracking-[-0.03em] mb-4">
            Luggage Space <span className="text-red-600 font-medium">Savings Calculator.</span>
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Calculate how much suitcase volume you reclaim by vacuum sealing bulky clothing and food items.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Input Counters */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-base sm:text-lg font-medium text-slate-900 border-b border-slate-100 pb-3">
                Select Items to Vacuum Pack:
              </h3>

              {/* Winter Jackets */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <div className="text-sm font-medium text-slate-900">Heavy Winter Coats / Parkas</div>
                  <div className="text-xs text-slate-500 font-normal">Puffers, jackets, overcoats</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setWinterJackets(Math.max(0, winterJackets - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center font-medium text-slate-900">{winterJackets}</span>
                  <button
                    onClick={() => setWinterJackets(winterJackets + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Sweaters */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <div className="text-sm font-medium text-slate-900">Sweaters, Hoodies & Knits</div>
                  <div className="text-xs text-slate-500 font-normal">Woolen clothing & thermals</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSweaters(Math.max(0, sweaters - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center font-medium text-slate-900">{sweaters}</span>
                  <button
                    onClick={() => setSweaters(sweaters + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Cooked Curries */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <div className="text-sm font-medium text-slate-900">Cooked Curry / Gravy Pouches</div>
                  <div className="text-xs text-slate-500 font-normal">Chicken, fish, beef, or polos</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurryPacks(Math.max(0, curryPacks - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center font-medium text-slate-900">{curryPacks}</span>
                  <button
                    onClick={() => setCurryPacks(curryPacks + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Spices */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <div className="text-sm font-medium text-slate-900">Spices / Dry Food (kg)</div>
                  <div className="text-xs text-slate-500 font-normal">Chili powder, dry fish, tea, nuts</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSpicesKg(Math.max(0, spicesKg - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center font-medium text-slate-900">{spicesKg}</span>
                  <button
                    onClick={() => setSpicesKg(spicesKg + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 text-slate-600 font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="md:col-span-5 bg-slate-950 text-white p-7 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-red-400 mb-2">
                  Estimated Result
                </div>
                
                {/* Big Stat */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-medium text-white tracking-tight">{percentSaved}%</span>
                  <span className="text-xs font-normal text-slate-400">Space Saved</span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-2.5 mb-6 overflow-hidden">
                  <div
                    className="bg-red-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(10, percentSaved))}%` }}
                  />
                </div>

                {/* Details */}
                <div className="space-y-3 text-xs text-slate-300 mb-8">
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="font-normal text-slate-400">Reclaimed Suitcase Space:</span>
                    <span className="font-medium text-emerald-400">~{savedLiters} Liters</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="font-normal text-slate-400">Leak Risk Status:</span>
                    <span className="font-medium text-red-400">0% (Airtight Sealed)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-normal text-slate-400">Equivalent Space:</span>
                    <span className="font-medium text-white">~1 Extra Carry-On Bag</span>
                  </div>
                </div>
              </div>

              {/* Escapora Red Pill CTA */}
              <a
                href={`https://wa.me/94743678100?text=${encodeURIComponent(whatsappInquiry)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-medium text-white bg-red-600 hover:bg-red-700 transition-all shadow-md shadow-red-600/25 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book This Packing on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
