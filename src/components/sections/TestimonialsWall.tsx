"use client";

import React from "react";
import { TEXT_TESTIMONIALS } from "@/data/testimonials";
import { Marquee } from "../ui/Marquee";

export function TestimonialsWall() {
  const row1 = TEXT_TESTIMONIALS.slice(0, 4);
  const row2 = TEXT_TESTIMONIALS.slice(4, 8);
  const row3 = TEXT_TESTIMONIALS.slice(8, 12);
  const row4 = TEXT_TESTIMONIALS.slice(12, 16);

  const cycle = (start: number, count: number) =>
    Array.from({ length: count }, (_, i) => TEXT_TESTIMONIALS[(start + i) % TEXT_TESTIMONIALS.length]);

  const renderCard = (t: (typeof TEXT_TESTIMONIALS)[0]) => (
    <div
      key={t.id}
      className="w-80  h-[400px] p-6 mx-1 rounded-sm bg-[#FBFBFB] border border-zinc-200/60 flex flex-col justify-between shrink-0 select-none"
    >
      {/* Content */}
      <p className="text-xl font-body text-zinc-600 leading-relaxed font-normal">
        {t.content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div className="overflow-hidden">
          <h4 className="text-md font-title font-bold text-zinc-900 leading-snug truncate">
            {t.name}
          </h4>
          <p className="text-sm text-zinc-500 truncate">
            {t.role} @ {t.company}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 bg-white text-zinc-900 relative overflow-hidden">

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 mb-16 text-center">
        <div className="inline-flex items-center px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 text-xs font-medium mb-6">
          Referral From People
        </div>
        <h2 className="text-3xl font-title sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
          Trusted by People <br />
          <span className="font-serif italic font-normal text-zinc-900 font-brand">
            Chosen By Brands
          </span>
        </h2>
      </div>

      {/* Testimonials Marquee Wall */}
      <div className="relative space-y-6 max-w-7xl mx-auto px-4">

        {/* Left & Right Edge Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left */}
        <Marquee direction="left">
          <div className="flex items-center py-1">
            {row1.map(renderCard)}
          </div>
        </Marquee>

        {/* Row 2: Right */}
        <Marquee direction="right">
          <div className="flex items-center py-1">
            {row2.map(renderCard)}
          </div>
        </Marquee>

        {/* Row 3: Left */}
        <Marquee direction="left">
          <div className="flex items-center py-1">
            {(row3.length > 0 ? row3 : cycle(0, 3)).map(renderCard)}
          </div>
        </Marquee>

      </div>
    </section>
  );
}

export default TestimonialsWall;
