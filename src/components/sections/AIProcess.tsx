"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Smile } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { motion, useInView } from "framer-motion";

const AI_MARQUEE_ROW_1 = [
  "/images/ai-power-design-section/6a68a64542e40dfeaacb53d9_Frame 2147238883.avif",
  "/images/ai-power-design-section/6a68a6456726ab23af13421d_Frame 2147238878.png",
  "/images/ai-power-design-section/6a68a645980305061c2870c1_Frame 2147238884.avif",
  "/images/ai-power-design-section/6a68a645a10c36c6a575c707_Frame 2147238876.png",
  "/images/ai-power-design-section/6a68a64631081c891f6f9df5_Frame 2147238879.avif",
  "/images/ai-power-design-section/6a68a64634804a67f3a877ee_Frame 2147238881.avif",
  "/images/ai-power-design-section/6a68a646d027100b1bba3ac6_Frame 2147238877.avif",
  "/images/ai-power-design-section/6a68a6479764a1163884f85b_Frame 2147238880.avif",
  "/images/ai-power-design-section/6a68a64cf7785b70a1541523_Frame 2085665741.avif",
  "/images/ai-power-design-section/6a5810149e88d3358ac95b41_Frame 2147238893.avif",
  "/images/ai-power-design-section/6a58a6a2cb044ee3817c8f32_Frame 2147238892.png",
  "/images/ai-power-design-section/6a58a6cef218cc1b08c70c27_Frame 2147238888.avif",
];

const AI_MARQUEE_ROW_2 = [
  "/images/ai-power-design-section/6a58a73bd7b7e03d4a590269_Frame 2147238891.avif",
  "/images/ai-power-design-section/6a58a75735e91d2a5c56f5ba_Frame 2147238892 (1).avif",
  "/images/ai-power-design-section/6a58a76f75452fd285b8ab73_Frame 2147238888 (1).png",
  "/images/ai-power-design-section/6a58a7e3f08415c83ca01858_Frame 2147238891 (1).avif",
  "/images/ai-power-design-section/6a58a80e4ee26d41bf4dd8a6_Frame 2147238892 (2).png",
  "/images/ai-power-design-section/6a58a830d43297817ac79851_Frame 2147238888 (2).png",
  "/images/ai-power-design-section/6a58a8504ee26d41bf4e0834_Frame 2147238893 (1).png",
  "/images/ai-power-design-section/6a58a8a3242b409075144410_Frame 2147238891 (2).avif",
  "/images/ai-power-design-section/6a68a5b01e333acdbdd81e0c_Frame 2147238886 (1).avif",
  "/images/ai-power-design-section/6a68a5b0272c3fd2b206aed2_Frame 2147238891 (1).avif",
  "/images/ai-power-design-section/6a68a5b02ec430ef255bc6dd_Frame 2147238892 (1).avif",
  "/images/ai-power-design-section/6a68a5b0565c4b54d0794a02_Frame 2147238887 (1).png",
];

export function AIProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const renderIconTile = (src: string, idx: number) => (
    <div
      key={idx}
      className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-[20px] sm:rounded-[24px] bg-gradient-to-b from-[#1E2028] to-[#111319] border border-white/[0.08] flex items-center justify-center p-3 sm:p-3.5 flex-shrink-0 shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
    >
      <div className="relative w-full h-full">
        <Image src={src} alt="AI Tool" fill className="object-contain" />
      </div>
    </div>
  );

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative -mt-10 sm:-mt-16 pt-20 pb-24 bg-[#030206] text-white md:rounded-2xl overflow-hidden"
    >
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Tag Chip */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/50 bg-emerald-950/40 text-emerald-400 text-xs font-semibold mb-6">
          <span>AI-Powered Design</span>
        </div>

        {/* Title */}
        <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
          Smarter Design,{" "}
          <span className="font-brand italic font-normal text-white">
            Supercharged By AI
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-body text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-16">
          From wireframes to launch, we blend AI tools with strategy to deliver faster, <br className="hidden sm:inline" />
          sharper, and data-led design results.
        </p>

        {/* Two-Row AI Tool Icons Marquee with Center Glowing Orb */}
        <div className="relative mb-6">
          {/* Central Illuminated Cyan Glowing Hub Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Outer Cyan Glow Aura */}
              <div className="absolute -inset-6 bg-cyan-400/30 rounded-full blur-2xl animate-pulse" />
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0A1628]/95 border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.7),inset_0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-xl flex items-center justify-center text-white relative z-10">
                <Smile className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Row 1: Left Direction */}
          <div className="mb-3">
            <Marquee direction="left" duration="32s" pauseOnHover={false} repeat={2}>
              {AI_MARQUEE_ROW_1.map(renderIconTile)}
            </Marquee>
          </div>

          {/* Row 2: Right Direction */}
          <div>
            <Marquee direction="right" duration="32s" pauseOnHover={false} repeat={2}>
              {AI_MARQUEE_ROW_2.map(renderIconTile)}
            </Marquee>
          </div>
        </div>

        {/* Branching Tree SVG Connecting Lines (Connecting Hub Orb to 4 Columns) */}
        <div className="hidden md:block relative w-full h-16 max-w-5xl mx-auto">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 64" fill="none">
            {/* Center Drop and Left/Right Splitter */}
            <path
              d="M 500 0 L 500 24 M 125 64 L 125 24 C 125 24 125 24 500 24 C 875 24 875 24 875 24 L 875 64 M 375 24 L 375 64 M 625 24 L 625 64"
              stroke="#38bdf8"
              strokeWidth="2"
              className="transition-all duration-1000"
              style={{ filter: "drop-shadow(0 0 6px #38bdf8)" }}
            />
          </svg>
        </div>

        {/* 4 Process Step Cards matching Screenshot 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-14 text-left pt-2">
          {/* Card 1: Discover & Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-[28px] bg-gradient-to-b from-[#0C0E17] to-[#06070B] border border-white/[0.1] shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-title text-base sm:text-lg font-bold text-white mb-4">
                Discover &amp; Strategy
              </h3>

              {/* 3 AI Tool Icon Chips */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a64542e40dfeaacb53d9_Frame 2147238883.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a6456726ab23af13421d_Frame 2147238878.png" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a645980305061c2870c1_Frame 2147238884.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-2.5">
                PRODUCES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  Discovery Report
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  User Personas
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  Content Hierarchy
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-[28px] bg-gradient-to-b from-[#0C0E17] to-[#06070B] border border-white/[0.1] shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-title text-base sm:text-lg font-bold text-white mb-4">
                Design
              </h3>

              {/* 4 AI Tool Icon Chips */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a645a10c36c6a575c707_Frame 2147238876.png" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a64631081c891f6f9df5_Frame 2147238879.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a64634804a67f3a877ee_Frame 2147238881.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a646d027100b1bba3ac6_Frame 2147238877.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-2.5">
                PRODUCES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  Visual Direction
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  UI Screens
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  Design System
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Build */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-[28px] bg-gradient-to-b from-[#0C0E17] to-[#06070B] border border-white/[0.1] shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-title text-base sm:text-lg font-bold text-white mb-4">
                Build
              </h3>

              {/* 4 AI Tool Icon Chips */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a6479764a1163884f85b_Frame 2147238880.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a68a64cf7785b70a1541523_Frame 2085665741.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a5810149e88d3358ac95b41_Frame 2147238893.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a58a6a2cb044ee3817c8f32_Frame 2147238892.png" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-2.5">
                PRODUCES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  Codebase
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  CMS Integration
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  Component Docs
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Optimise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-[28px] bg-gradient-to-b from-[#0C0E17] to-[#06070B] border border-white/[0.1] shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-title text-base sm:text-lg font-bold text-white mb-4">
                Optimise
              </h3>

              {/* 3 AI Tool Icon Chips */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a58a6cef218cc1b08c70c27_Frame 2147238888.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a58a73bd7b7e03d4a590269_Frame 2147238891.avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141622] border border-white/10 p-2 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.15)]">
                  <Image src="/images/ai-power-design-section/6a58a75735e91d2a5c56f5ba_Frame 2147238892 (1).avif" alt="Tool" width={24} height={24} className="object-contain" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-2.5">
                PRODUCES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  CRO Recommendations
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  A/B Test Plan
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#151722] text-zinc-300 text-[10px] font-body border border-white/[0.08]">
                  Launch Report
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
