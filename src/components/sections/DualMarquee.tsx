"use client";

import React from "react";
import { Marquee } from "@/components/ui/Marquee";
import { MARQUEE_PROJECT_THUMBS } from "@/data/projects";
import { CLIENT_BRAND_LOGOS } from "@/data/logos";

export function DualMarquee() {
  return (
    <section className="py-14 overflow-hidden border-y border-white/[0.06] bg-black/40">
      {/* Top Section Header / Trust Statement */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <span className="font-title text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Trusted by 200+ of the world&apos;s most innovative teams &amp; funded startups
        </span>
      </div>

      {/* Layer A: Project Screenshot Cards (Scrolling Left) */}
      <div className="mb-6">
        <Marquee direction="left" speed="normal" pauseOnHover={true}>
          {MARQUEE_PROJECT_THUMBS.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-72 h-44 rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-title text-xs font-semibold text-white truncate">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/60 text-emerald-400 border border-white/10">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Layer B: Monochrome Brand Logos (Scrolling Right) */}
      <div>
        <Marquee direction="right" speed="slow" pauseOnHover={true}>
          {CLIENT_BRAND_LOGOS.map((brand, idx) => (
            <div
              key={idx}
              className="px-6 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] text-zinc-400 hover:text-white transition-all font-title font-bold text-sm tracking-wider uppercase select-none"
            >
              {brand.name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
