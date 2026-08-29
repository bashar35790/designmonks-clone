"use client";

import React, { useState } from "react";
import { GLOBAL_OFFICES } from "@/data/offices";
import {
  Globe2,
  Mail,
  CheckCircle2,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative bg-[#040208] text-zinc-300 pt-24 pb-28 border-t border-purple-900/30 overflow-hidden">
      {/* Illuminated 3D Earth / Globe Horizon Curve Header */}
      <div className="relative max-w-6xl mx-auto px-4 text-center mb-20">
        <div className="relative rounded-t-[100px] sm:rounded-t-[160px] pt-16 pb-12 px-6 bg-gradient-to-b from-blue-900/30 via-purple-950/20 to-transparent border-t border-blue-400/40 shadow-[0_-20px_80px_rgba(59,130,246,0.25)] overflow-hidden">
          {/* Glowing Horizon Arc */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#38bdf8]" />

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-2">
            GLOBAL PRODUCT LEADERSHIP
          </span>
          <h3 className="font-title text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Transforming Digital Experiences Across 8 Global Timezones
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/70 max-w-xl mx-auto font-body mb-8">
            From Silicon Valley to London, Singapore, and Dubai — we collaborate seamlessly across continents.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed! Check your inbox for weekly UX teardowns.</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-black/80 border border-white/20 focus-within:border-cyan-400 transition-colors shadow-2xl">
                <div className="flex items-center gap-2 px-3 w-full">
                  <Mail className="w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-xs text-white placeholder:text-zinc-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-600 text-white font-title font-bold text-xs shadow-md transition-all whitespace-nowrap cursor-pointer"
                >
                  Join 35k+
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 8 Global Office Cards */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <Globe2 className="w-5 h-5 text-purple-400" />
            <h4 className="font-title text-base sm:text-lg font-bold text-white uppercase tracking-wider">
              8 Strategic Global Hubs
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.id}
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-purple-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-title font-bold text-white text-base">
                      {office.city}
                    </span>
                    <span className="text-xl">{office.flag}</span>
                  </div>
                  <span className="text-xs font-semibold text-purple-400 block mb-2 font-mono">
                    {office.country} • {office.timezone}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {office.address}
                  </p>
                </div>
                <a
                  href={`mailto:${office.email}`}
                  className="text-xs text-zinc-500 hover:text-white transition-colors underline underline-offset-4 font-mono"
                >
                  {office.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link Trees */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-t border-white/[0.08]">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-400 flex items-center justify-center font-bold text-white font-title text-base">
                DM
              </div>
              <span className="font-title font-bold text-lg text-white">DESIGN MONKS</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-6 font-body">
              Leading digital product design &amp; UX agency. We craft high-converting SaaS platforms, mobile applications, and brand systems for ambitious companies worldwide.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9 Clutch Rating
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Top Agency 2026
              </span>
            </div>
          </div>

          <div>
            <h5 className="font-title text-xs font-bold uppercase tracking-widest text-white mb-4">
              Services
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Product Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Next.js Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity &amp; 3D</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Webflow &amp; Framer Build</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">AI-Powered Prototyping</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-title text-xs font-bold uppercase tracking-widest text-white mb-4">
              Industries
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#projects" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Fintech &amp; Wealth</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Healthcare &amp; Biotech</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Cloud &amp; DevOps Infra</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Luxury &amp; E-Commerce</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-title text-xs font-bold uppercase tracking-widest text-white mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers (Hiring)</a></li>
              <li><a href="#compare" className="hover:text-white transition-colors">Comparison</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Consultation</a></li>
            </ul>
          </div>
        </div>

        {/* Massive Stylized "designmonks" Wordmark Banner (As shown in screenshot) */}
        <div className="pt-12 pb-6 border-t border-white/[0.08] text-center select-none overflow-hidden">
          <h2 className="font-title text-5xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-purple-400 opacity-90 leading-none">
            designmonks
          </h2>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Design Monks Clone. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
