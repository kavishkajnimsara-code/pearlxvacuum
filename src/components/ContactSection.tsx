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
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium text-slate-900 tracking-[-0.03em] mb-3 sm:mb-4">
            Contact & <span className="text-red-600 font-medium">Walk-In Location.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Conveniently situated along Baseline Road in Kirulapone with easy customer parking. Walk-ins are served on the spot!
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          
          {/* Top Section: Direct Info Cards & Quote Form */}
          <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
            
            {/* Quick Contact Info Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              
              {/* Hotline Card */}
              <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-3.5 sm:mb-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xs uppercase font-medium tracking-wider text-slate-400 mb-1">
                  Direct Hotline
                </div>
                <a
                  href="tel:0743678100"
                  className="text-xl sm:text-2xl font-medium text-slate-900 hover:text-red-600 transition-colors block tracking-tight"
                >
                  074 367 8100
                </a>
                <a
                  href="mailto:info@pearlxceylon.com"
                  className="text-xs sm:text-sm text-slate-600 hover:text-red-600 transition-colors mt-1 font-normal"
                >
                  info@pearlxceylon.com
                </a>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-3.5 sm:mb-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xs uppercase font-medium tracking-wider text-slate-400 mb-1">
                  Operating Hours
                </div>
                <div className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">
                  8:30 AM – 8:00 PM
                </div>
                <div className="text-xs text-slate-500 mt-1 font-normal">
                  Monday to Sunday
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center">
                <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
                  <a
                    href="https://www.instagram.com/pearlxvacuum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pearl-X on Instagram"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-red-50 text-red-600 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/pearlxvacuum"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pearl-X on Facebook"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-red-50 text-red-600 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                </div>
                <div className="text-xs uppercase font-medium tracking-wider text-slate-400 mb-1">
                  Follow Us
                </div>
                <div className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">
                  @pearlxvacuum
                </div>
                <div className="text-xs text-slate-500 mt-1 font-normal">
                  Instagram & Facebook
                </div>
              </div>

            </div>

            {/* Escapora "Request a Quote" Form Card */}
            <div className="bg-white p-5 sm:p-9 rounded-3xl border border-slate-200 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-red-600" />
                <h3 className="text-lg sm:text-xl font-medium text-slate-900 tracking-tight">
                  Request a Quote
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-5 sm:mb-6 font-normal text-center">
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

                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full text-sm font-medium text-white bg-red-600 hover:bg-[#25D366] active:bg-[#25D366] transition-all shadow-md shadow-red-600/25 hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-95"
                  >
                    <Image
                      src="/images/whatsapp-cta.png"
                      alt="WhatsApp"
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain"
                    />
                    <span className="text-white">Request a Quote via WhatsApp</span>
                  </button>
                </div>

                {submitted && (
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 justify-center">
                    <CheckCircle className="w-4 h-4" />
                    <span>WhatsApp chat opened! We will respond in minutes.</span>
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Full-Width Single Screen Google Maps Location Embed & Directions */}
          <div className="w-full">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-xl flex flex-col items-center gap-4">
              
              {/* Responsive Full-Width Google Maps Iframe with Curved Corners */}
              <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] bg-slate-100 rounded-2xl overflow-hidden">
                <iframe
                  title="Pearl-X Kirulapone Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0772!2d79.8732485!3d6.8835212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b0039034a5d%3A0x7c39e9bdd879392e!2sPearl%20-%20X%20%23Vacuum%20Packing!5e0!3m2!1sen!2slk!4v1730200000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Open Location in Maps Compact Centered Pill Button */}
              <a
                href="https://maps.app.goo.gl/KwbGziWSJjtMKwvc6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs sm:text-sm font-medium transition-all shadow-md shadow-red-600/20 hover:scale-[1.02] active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Location in Google Maps</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
