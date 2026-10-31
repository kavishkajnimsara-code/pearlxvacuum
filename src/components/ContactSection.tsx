"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Clock, MessageCircle, Navigation, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Food Vacuum Packing");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Pearl-X, I'd like to get an inquiry / quote:
- Name: ${name || "Customer"}
- Phone: ${phone || "Not specified"}
- Service Needed: ${service}
- Details: ${notes || "None"}`;

    const url = `https://wa.me/94743678100?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium text-slate-900 tracking-[-0.03em] mb-4">
            Contact & <span className="text-red-600 font-medium">Walk-In Location.</span>
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Conveniently situated along Baseline Road in Kirulapone with easy customer parking. Walk-ins are served on the spot!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & Escapora Inquiry Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Info Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Hotline Card */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-xs uppercase font-medium tracking-wider text-slate-400 mb-1">
                    Direct Hotline
                  </div>
                  <a
                    href="tel:0743678100"
                    className="text-2xl font-medium text-slate-900 hover:text-red-600 transition-colors block tracking-tight"
                  >
                    074 367 8100
                  </a>
                  <div className="text-xs text-slate-500 mt-1 font-normal">
                    Open 7 Days • Call anytime
                  </div>
                </div>
                <a
                  href="tel:0743678100"
                  className="mt-4 text-xs font-medium text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <span>Click to call now</span>
                  <span>→</span>
                </a>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="text-xs uppercase font-medium tracking-wider text-slate-400 mb-1">
                    Operating Hours
                  </div>
                  <div className="text-2xl font-medium text-slate-900 tracking-tight">
                    8:30 AM – 8:00 PM
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-normal">
                    Monday to Sunday (No holidays)
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>15-Min Walk-ins Welcome</span>
                </div>
              </div>

            </div>

            {/* Escapora "Request a Quote" Form Card */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-red-600" />
                <h3 className="text-xl font-medium text-slate-900 tracking-tight">
                  Request a Quote
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-6 font-normal">
                Tell us what you need packed and we'll instantly connect you with our Kirulapone packing desk.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kasun Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all font-normal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all bg-white font-normal"
                  >
                    <option value="Food Vacuum Packing">Food & Cooked Curries Vacuum Packing</option>
                    <option value="Luggage & Clothing Compression">Clothing & Luggage Compression (Winter coats, blankets)</option>
                    <option value="Commercial / Bulk Export Sealing">Commercial / Exporter Bulk Sealing</option>
                    <option value="Urgent Walk-in Today">Urgent Walk-in Packing Today</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Tell us your items or special requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 5 bags of cooked chicken curry, 2 kg chili powder, 3 puffer jackets"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all font-normal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full text-sm font-medium text-white bg-red-600 hover:bg-[#25D366] active:bg-[#25D366] transition-all shadow-md shadow-red-600/25 hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-95"
                >
                  <Image
                    src="/images/whatsapp-cta.png"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                  <span>Request a Quote via WhatsApp</span>
                </button>

                {submitted && (
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 justify-center">
                    <CheckCircle className="w-4 h-4" />
                    <span>WhatsApp chat opened! We will respond in minutes.</span>
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Right Column: Google Maps Location Embed & Directions */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-xl flex flex-col gap-3 h-full">
              
              {/* Responsive Google Maps Iframe with Curved Corners */}
              <div className="relative w-full min-h-[460px] lg:min-h-[540px] flex-1 bg-slate-100 rounded-2xl overflow-hidden">
                <iframe
                  title="Pearl-X Kirulapone Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0772!2d79.8732485!3d6.8835212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b0039034a5d%3A0x7c39e9bdd879392e!2sPearl%20-%20X%20%23Vacuum%20Packing!5e0!3m2!1sen!2slk!4v1730200000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "460px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Open Location in Maps Bar with Curved Corners */}
              <a
                href="https://maps.app.goo.gl/KwbGziWSJjtMKwvc6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center gap-2.5 text-sm font-medium transition-all shadow-md shadow-red-600/20 hover:scale-[1.01] active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Location in Google Maps</span>
                <span>↗</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
