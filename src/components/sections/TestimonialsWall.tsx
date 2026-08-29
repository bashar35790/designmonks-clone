"use client";

import React from "react";
import { TEXT_TESTIMONIALS } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Star, CheckCircle, Quote } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

export function TestimonialsWall() {
  const row1 = TEXT_TESTIMONIALS.slice(0, 4);
  const row2 = TEXT_TESTIMONIALS.slice(4, 8);

  const renderCard = (t: (typeof TEXT_TESTIMONIALS)[0]) => (
    <div
      key={t.id}
      className="w-80 sm:w-96 p-6 rounded-3xl bg-zinc-950 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
    >
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6 font-body">
          &ldquo;{t.content}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover border border-white/10"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-title text-sm font-bold text-white">{t.name}</span>
            {t.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
          </div>
          <span className="text-[11px] text-zinc-500 block font-body">
            {t.role} • <span className="text-emerald-400">@{t.company}</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <SectionHeader
          eyebrow="Social Proof Wall"
          title="Trusted by People,"
          italicAccent="Chosen by Brands"
          subtitle="Real reviews from the founders, design directors, and tech executives we partner with."
        />
      </div>

      {/* 2-Row Continuous Moving Testimonial Marquees */}
      <div className="space-y-6">
        <Marquee direction="left" speed="normal" pauseOnHover={true}>
          {row1.map(renderCard)}
        </Marquee>

        <Marquee direction="right" speed="normal" pauseOnHover={true}>
          {row2.map(renderCard)}
        </Marquee>
      </div>
    </section>
  );
}
