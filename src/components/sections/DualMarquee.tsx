"use client";

import React from "react";
import { Marquee } from "@/components/ui/Marquee";
import { CLIENT_BRAND_LOGOS } from "@/data/logos";

export function DualMarquee() {
  const row1 = CLIENT_BRAND_LOGOS.slice(0, 9);
  const row2 = CLIENT_BRAND_LOGOS.slice(9, 18);

  return (
    <section className="py-16 bg-white text-zinc-900 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h3 className="font-title text-base sm:text-lg font-bold text-zinc-800 tracking-tight">
          Trusted by{" "}
          <span className="font-brand italic font-normal text-purple-700">
            200+ of the world&apos;s top brands
          </span>
        </h3>
      </div>

      {/* Row 1 Logos (Scrolling Left) */}
      <div className="mb-4">
        <Marquee direction="left" speed="normal" pauseOnHover={true}>
          {row1.map((brand, idx) => (
            <div
              key={idx}
              className="px-6 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-purple-400 hover:bg-purple-50/50 text-zinc-600 hover:text-purple-900 transition-all font-title font-bold text-sm tracking-wider uppercase select-none shadow-sm"
            >
              {brand.name}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Row 2 Logos (Scrolling Right) */}
      <div>
        <Marquee direction="right" speed="normal" pauseOnHover={true}>
          {row2.map((brand, idx) => (
            <div
              key={idx}
              className="px-6 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-purple-400 hover:bg-purple-50/50 text-zinc-600 hover:text-purple-900 transition-all font-title font-bold text-sm tracking-wider uppercase select-none shadow-sm"
            >
              {brand.name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
