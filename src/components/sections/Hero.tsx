"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowRight, Smile } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const HERO_MARQUEE_ROW_1 = [
  "/images/herocarousel/1.avif",
  "/images/herocarousel/2.avif",
  "/images/herocarousel/3.avif",
  "/images/herocarousel/4.avif",
  "/images/herocarousel/5.avif",
  "/images/herocarousel/6.avif",
  "/images/herocarousel/7.avif",
  "/images/herocarousel/8.avif",
  "/images/herocarousel/9.avif",
  "/images/herocarousel/10.avif",
  "/images/herocarousel/11.avif",
  "/images/herocarousel/12.avif",
];

const HERO_MARQUEE_ROW_2 = [
  "/images/herocarousel/13.avif",
  "/images/herocarousel/14.avif",
  "/images/herocarousel/15.avif",
  "/images/herocarousel/16.avif",
  "/images/herocarousel/17.avif",
  "/images/herocarousel/18.avif",
  "/images/herocarousel/19.avif",
  "/images/herocarousel/20.avif",
  "/images/herocarousel/21.avif",
  "/images/herocarousel/22.avif",
  "/images/herocarousel/23.avif",
  "/images/herocarousel/24.avif",
];

export function Hero() {
  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex flex-col items-center justify-center pt-8 pb-24 text-center overflow-hidden bg-[#12072B]">
      {/* Background SVG Gradient & Dot Matrix (from public/images) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hergradientcolor.svg"
          alt="Hero Background Gradient"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        <Image
          src="/images/herodot.svg"
          alt="Hero Dots Matrix"
          fill
          priority
          className="object-cover object-center opacity-70 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 mb-14">
        {/* Top Logo: designmonks */}
        <div className="mb-5 select-none">
          <span className="font-title font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
            designmonks
          </span>
        </div>

        {/* Clutch & Google Review Badge (heroG.svg) */}
        <div className="flex flex-col items-center gap-1.5 mb-5">
          <div className="relative w-14 h-8">
            <Image
              src="/images/heroG.svg"
              alt="Clutch and Google Reviews"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-white">
            <span className="text-white/90">4.9</span>
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>
        </div>

        {/* Eyebrow: Leading UI/UX Design Agency */}
        <div className="mb-4">
          <span className="font-title text-sm sm:text-base font-semibold text-white tracking-wide">
            Leading UI/UX Design Agency
          </span>
        </div>

        {/* Main Display Headline Matching Screenshot */}
        <h1 className="font-title text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.12] mb-8 max-w-5xl">
          We <span className="font-brand italic font-normal text-white">Design</span> Products That <br />
          Drive{" "}
          <span className="inline-flex items-center align-middle mx-1 sm:mx-3 -translate-y-1">
            {/* Figma Icon */}
            <span className="w-9 sm:w-13 h-9 sm:h-13 rounded-full bg-white shadow-xl flex items-center justify-center p-2 sm:p-2.5 -mr-2.5 z-10 border border-white/40">
              <svg viewBox="0 0 38 57" className="w-full h-full">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
              </svg>
            </span>
            {/* Webflow Icon */}
            <span className="w-9 sm:w-13 h-9 sm:h-13 rounded-full bg-[#146EF5] shadow-xl flex items-center justify-center p-2 sm:p-2.5 -mr-2.5 z-20 border border-white/40">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M17.803 8.78c-1.393-.016-2.583.844-3.082 2.083l-1.928 4.793-1.637-4.72c-.475-1.368-1.748-2.274-3.21-2.274H4.5v.068l2.97 8.358c.456 1.282 1.666 2.133 3.033 2.133h.044c1.378 0 2.597-.866 3.038-2.162l1.96-5.748 1.954 5.753c.441 1.296 1.66 2.157 3.038 2.157h.044c1.367 0 2.577-.851 3.033-2.133l2.97-8.358v-.068h-3.442c-.001 0-1.401.077-2.409.927z" />
              </svg>
            </span>
            {/* Framer Icon */}
            <span className="w-9 sm:w-13 h-9 sm:h-13 rounded-full bg-black shadow-xl flex items-center justify-center p-2 sm:p-2.5 z-30 border border-white/40">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
              </svg>
            </span>
          </span>{" "}
          <span className="font-brand italic font-normal text-white">Results</span>
        </h1>

        {/* Global Country Badge SVG */}
        <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-black/70 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md mb-6">
          <div className="relative w-[340px] sm:w-[406px] h-6 flex items-center justify-center">
            <Image
              src="/images/herocountybaget.svg"
              alt="Designing across 8+ countries"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* "Book a Call ->" Button with Animated Moving White Border */}
        <div className="relative group inline-flex rounded-xl p-[1.5px] overflow-hidden shadow-[0_0_35px_rgba(109,40,217,0.5)] hover:shadow-[0_0_50px_rgba(109,40,217,0.7)] transition-shadow">
          {/* Animated Spinning Conic Light Beam for Border */}
          <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ffffff_340deg,transparent_360deg)] animate-[spin_3s_linear_infinite]" />

          {/* Inner Button Content */}
          <a
            href="#contact"
            className="relative z-10 flex items-center gap-2 px-8 py-3.5 rounded-[inherit] bg-gradient-to-r from-[#6320EE] via-[#7028E8] to-[#7C3AED] hover:from-[#561CD0] hover:to-[#6D28D9] text-white font-title font-bold text-sm sm:text-base tracking-wide transition-all active:scale-[0.98] select-none cursor-pointer"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* 2 Continuous Moving Dual-Marquee Rows (Smooth, Non-Stopping on Hover) */}
      <div className="w-full space-y-4 sm:space-y-6 overflow-hidden relative z-10">
        {/* Row 1: Left Direction (Images 1 - 12) */}
        <Marquee direction="left" duration="80s" pauseOnHover={false} repeat={2}>
          {HERO_MARQUEE_ROW_1.map((src, idx) => (
            <div
              key={idx}
              className="relative w-[280px] sm:w-[360px] md:w-[420px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Showcase Project ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 280px, 420px"
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>

        {/* Row 2: Right Direction (Images 13 - 24) */}
        <Marquee direction="right" duration="80s" pauseOnHover={false} repeat={2}>
          {HERO_MARQUEE_ROW_2.map((src, idx) => (
            <div
              key={idx}
              className="relative w-[280px] sm:w-[360px] md:w-[420px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Showcase Project ${idx + 13}`}
                fill
                sizes="(max-width: 768px) 280px, 420px"
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Floating Bottom-Right Support Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95 transition-all group"
          aria-label="Live Chat Support"
        >
          <Smile className="w-6 sm:w-7 h-6 sm:h-7" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#12072B] animate-pulse" />
        </a>
      </div>
    </section>
  );
}
