"use client";

import { Sparkles, ShieldCheck, Clock, CheckCheck, ShoppingBag, PackageCheck, PlaneTakeoff } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Freshness Guaranteed",
      headline: "Locks in Authentic Taste & Aroma",
      description:
        "By eliminating 99.8% of oxygen, oxidation and spoilage stop dead in their tracks. Spices retain fresh-ground potency, cooked gravies preserve authentic savor, and pungent odors stay sealed.",
      points: [
        "Aroma-barrier multi-ply nylon films",
        "Prevents freezer burn & moisture loss",
        "Retains aroma freshness for over 12 months",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Standards",
      headline: "Professional Food-Grade Compliance",
      description:
        "Sealed in a sanitized stainless facility using 100% BPA-free, FDA-compliant barrier pouches. Calibrated high-temp thermal impulse welders create dual-weld seams that survive cabin decompression.",
      points: [
        "100% BPA-free heavy barrier films",
        "Dual-pulse heat sealing for 0 leaks",
        "Sanitized stainless preparation area",
      ],
    },
    {
      icon: Clock,
      title: "Reliable Service",
      headline: "Fast, Secure & Open 7 Days a Week",
      description:
        "Flying out tonight? Walk right into our Kirulapone facility. Most personal orders are completed in 15–20 minutes while you wait in our air-conditioned lounge. Zero advance booking needed.",
      points: [
        "Walk-ins welcomed with zero wait",
        "Open 7 days a week: 8:30 AM – 8:00 PM",
        "Convenient Colombo spot with parking",
      ],
    },
  ];

  const steps = [
    {
      step: "01",
      icon: ShoppingBag,
      title: "Bring Your Items",
      desc: "Walk in with your cooked curries, spices, dry fish, or bulky winter clothes.",
    },
    {
      step: "02",
      icon: PackageCheck,
      title: "Chamber Vacuum Seal",
      desc: "We pouch, evacuate 99.8% air with calibrated machines, and double-weld the border.",
    },
    {
      step: "03",
      icon: PlaneTakeoff,
      title: "Fly With Zero Worry",
      desc: "Pack directly next to your clean white clothes and clear airport customs smoothly.",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Packs Sealed Yearly", desc: "Trusted by Sri Lankan travelers worldwide" },
    { value: "99.9%", label: "Zero-Leak Record", desc: "Engineered for harsh aircraft baggage holds" },
    { value: "80%", label: "Max Space Saved", desc: "Compress bulky winter garments & duvets" },
    { value: "15 Mins", label: "Average Walk-In Time", desc: "Express sealing ready while you wait" },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white text-slate-900 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-50/70 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Escapora Light Centered Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.1] mb-6 text-slate-900">
            Why we're your <br />
            <span className="text-red-600 font-medium">
              perfect travel partner.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Engineered vacuum packaging, heavy-gauge barrier films, and 7-day express walk-in service in Colombo.
          </p>
        </div>

        {/* 3 Core Cards (Escapora Light Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 sm:p-9 rounded-3xl border border-slate-200/80 hover:border-red-300 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="text-xs uppercase font-medium tracking-wider text-red-600 mb-2">
                  {benefit.title}
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mb-3 tracking-tight">
                  {benefit.headline}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8 font-normal">
                  {benefit.description}
                </p>

                {/* Subpoints */}
                <div className="mt-auto pt-6 border-t border-slate-100 space-y-2.5">
                  {benefit.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-normal">
                      <CheckCheck className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Step Walk-In Process */}
        <div className="bg-slate-50/90 rounded-3xl p-8 sm:p-12 border border-slate-200/80 mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 mb-2 tracking-tight">
              Simple 3-Step <span className="text-red-600 font-medium">Walk-In Process</span>
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              No complicated reservations required. Walk straight into our Kirulapone branch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, sIdx) => {
              const StepIcon = st.icon;
              return (
                <div key={sIdx} className="flex flex-col items-center text-center group">
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-red-600 shadow-sm flex items-center justify-center group-hover:border-red-300 group-hover:bg-red-50 transition-colors">
                      <StepIcon className="w-8 h-8 text-red-600" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] font-medium w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow">
                      {sIdx + 1}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-slate-900 mb-2">{st.title}</h4>
                  <p className="text-xs text-slate-600 max-w-xs leading-relaxed font-normal">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 text-center hover:border-red-200 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-medium text-slate-900 mb-1.5 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase font-medium tracking-wider text-red-600 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-600 font-normal">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
