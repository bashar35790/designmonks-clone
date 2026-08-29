"use client";

import React, { useState } from "react";
import { GLOBAL_OFFICES } from "@/data/offices";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Globe2,
  Mail,
  CheckCircle2,
  Star,
  ShieldCheck,
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
    <footer className="relative bg-[#060606] text-zinc-300 pt-20 pb-12 border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 relative overflow-hidden">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2 inline-block">
              Design Monks Journal
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-white mb-2">
              Stay ahead of digital product design & AI
            </h3>
            <p className="text-sm text-zinc-400">
              Join 35,000+ founders, design leads, and engineers receiving our bi-weekly UX teardowns.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5" />
                <span>You are subscribed! Check your inbox for our latest teardown.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-full bg-zinc-900 border border-white/10 focus-within:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-2.5 px-4 w-full">
                  <Mail className="w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none py-2"
                  />
                </div>
                <Button type="submit" variant="emerald" size="sm" className="w-full sm:w-auto whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            )}
          </form>
        </div>

        {/* 8 Global Offices Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <Globe2 className="w-5 h-5 text-emerald-400" />
            <h4 className="font-title text-lg font-bold text-white uppercase tracking-wider">
              Global Presence — 8 Strategic Hubs
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.id}
                className="p-5 rounded-2xl bg-zinc-950/60 border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-title font-bold text-white text-base">
                      {office.city}
                    </span>
                    <span className="text-xl">{office.flag}</span>
                  </div>
                  <span className="text-xs font-medium text-emerald-400 block mb-3 font-mono">
                    {office.country} • {office.timezone}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {office.address}
                  </p>
                </div>
                <a
                  href={`mailto:${office.email}`}
                  className="text-xs text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center font-bold text-black font-title text-base">
                DM
              </div>
              <span className="font-title font-bold text-lg text-white">DESIGN MONKS</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-6">
              Award-winning digital product design and UX agency. We design high-converting SaaS platforms, mobile applications, and brand identities for hyper-growth companies worldwide.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9 Clutch Rating
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Top Agency 2026
              </span>
            </div>
          </div>

          <div>
            <h5 className="font-title text-xs font-bold uppercase tracking-widest text-white mb-4">
              Core Services
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Product Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Next.js Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity & 3D</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Webflow & Framer Build</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">AI-Powered Prototyping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Design Systems & Tokens</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-title text-xs font-bold uppercase tracking-widest text-white mb-4">
              Industries
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#projects" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Fintech & WealthTech</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Healthcare & Biotech</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Enterprise Cloud & DevOps</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Luxury & E-Commerce</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-title text-xs font-bold uppercase tracking-widest text-white mb-4">
              Company & Legal
            </h5>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Design Monks</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers (We're Hiring!)</a></li>
              <li><a href="#compare" className="hover:text-white transition-colors">Why Compare Us</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Support</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book a Consultation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Design Monks Clone. All rights reserved. Designed for elite digital products.</p>
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
