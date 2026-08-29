"use client";

import React from "react";
import { TEXT_TESTIMONIALS } from "@/data/testimonials";
import { Star, CheckCircle } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

export function TestimonialsWall() {
  const row1 = TEXT_TESTIMONIALS.slice(0, 4);
  const row2 = TEXT_TESTIMONIALS.slice(4, 8);

  const renderCard = (t: (typeof TEXT_TESTIMONIALS)[0]) => (
    <div
      key={t.id}
      className="w-80 sm:w-96 p-6 rounded-3xl bg-white border border-zinc-200/80 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm text-zinc-900"
    >
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic mb-6 font-body">
          &ldquo;{t.content}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover border border-zinc-200"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-title text-sm font-bold text-zinc-900">{t.name}</span>
            {t.verified && <CheckCircle className="w-3.5 h-3.5 text-purple-600" />}
          </div>
          <span className="text-[11px] text-zinc-500 block font-body">
            {t.role} • <span className="text-purple-700 font-semibold">@{t.company}</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 bg-white text-zinc-900 relative overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
          SOCIAL PROOF WALL
        </span>
        <h2 className="font-title text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
          Trusted by People,{" "}
          <span className="font-brand italic font-normal text-purple-700">
            Chosen by Brands
          </span>
        </h2>
        <p className="font-body text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Over 30+ verified reviews from founders, VPs of product, and engineering directors.
        </p>
      </div>

      {/* 2 Moving Rows of White Review Cards */}
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
