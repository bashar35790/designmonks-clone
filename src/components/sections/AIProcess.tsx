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

interface ProcessStep {
  title: string;
  icons: string[];
  produces: string[];
}

const AI_STEPS: ProcessStep[] = [
  {
    title: "Discover & Strategy",
    icons: [
      "/images/ai-power-design-section/6a68a64542e40dfeaacb53d9_Frame 2147238883.avif",
      "/images/ai-power-design-section/6a68a6456726ab23af13421d_Frame 2147238878.png",
      "/images/ai-power-design-section/6a68a645980305061c2870c1_Frame 2147238884.avif",
    ],
    produces: ["Discovery Report", "UX/UI Roadmap", "Content Hierarchy"],
  },
  {
    title: "Design",
    icons: [
      "/images/ai-power-design-section/6a68a645a10c36c6a575c707_Frame 2147238876.png",
      "/images/ai-power-design-section/6a68a64631081c891f6f9df5_Frame 2147238879.avif",
      "/images/ai-power-design-section/6a68a64634804a67f3a877ee_Frame 2147238881.avif",
      "/images/ai-power-design-section/6a68a646d027100b1bba3ac6_Frame 2147238877.avif",
    ],
    produces: ["Visual Direction", "3D Screens", "Design System"],
  },
  {
    title: "Build",
    icons: [
      "/images/ai-power-design-section/6a68a6479764a1163884f85b_Frame 2147238880.avif",
      "/images/ai-power-design-section/6a68a64cf7785b70a1541523_Frame 2085665741.avif",
      "/images/ai-power-design-section/6a5810149e88d3358ac95b41_Frame 2147238893.avif",
      "/images/ai-power-design-section/6a58a6a2cb044ee3817c8f32_Frame 2147238892.png",
    ],
    produces: ["Codebase", "CMS Integration", "Lottie Animations"],
  },
  {
    title: "Optimise",
    icons: [
      "/images/ai-power-design-section/6a58a6cef218cc1b08c70c27_Frame 2147238888.avif",
      "/images/ai-power-design-section/6a58a73bd7b7e03d4a590269_Frame 2147238891.avif",
      "/images/ai-power-design-section/6a58a75735e91d2a5c56f5ba_Frame 2147238892 (1).avif",
    ],
    produces: ["CRO Recommendations", "A/B Split Test", "Search Report"],
  },
];

export function AIProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const renderIconChip = (src: string, idx: number) => (
    <div
      key={idx}
      className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-zinc-900/90 border border-white/10 flex items-center justify-center p-2.5 flex-shrink-0 shadow-lg"
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
      className="py-24 bg-[#030206] text-white relative overflow-hidden"
    >
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Tag Chip */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 text-xs font-semibold mb-6">
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
          From wireframes to launch, we blend AI tools with strategy to deliver faster, sharper, and data-backed design results.
        </p>

        {/* Two-Row AI Tool Icons Marquee with Center Glowing Orb */}
        <div className="relative mb-8">
          {/* Central Illuminated Cyan Glowing Hub Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Outer Cyan Glow Aura */}
              <div className="absolute -inset-4 bg-cyan-400/25 rounded-full blur-xl animate-pulse" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0A1628] border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center text-white relative z-10">
                <Smile className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Row 1: Left Direction */}
          <div className="mb-3">
            <Marquee direction="left" duration="35s" pauseOnHover={false} repeat={2}>
              {AI_MARQUEE_ROW_1.map(renderIconChip)}
            </Marquee>
          </div>

          {/* Row 2: Right Direction */}
          <div>
            <Marquee direction="right" duration="35s" pauseOnHover={false} repeat={2}>
              {AI_MARQUEE_ROW_2.map(renderIconChip)}
            </Marquee>
          </div>
        </div>

        {/* Branching Tree SVG Connecting Lines (Connecting Hub Orb to 4 Columns) */}
        <div className="hidden md:block relative w-full h-16 max-w-5xl mx-auto">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 64" fill="none">
            {/* Branch 1 to Discover & Strategy (x=125) */}
            <path
              d="M 500 0 L 500 24 C 500 36 125 36 125 64"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray={isInView ? "none" : "300"}
              strokeDashoffset={isInView ? "0" : "300"}
              className="transition-all duration-1000"
              style={{ filter: "drop-shadow(0 0 6px #38bdf8)" }}
            />
            {/* Branch 2 to Design (x=375) */}
            <path
              d="M 500 0 L 500 24 C 500 36 375 36 375 64"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray={isInView ? "none" : "300"}
              strokeDashoffset={isInView ? "0" : "300"}
              className="transition-all duration-1000"
              style={{ filter: "drop-shadow(0 0 6px #38bdf8)" }}
            />
            {/* Branch 3 to Build (x=625) */}
            <path
              d="M 500 0 L 500 24 C 500 36 625 36 625 64"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray={isInView ? "none" : "300"}
              strokeDashoffset={isInView ? "0" : "300"}
              className="transition-all duration-1000"
              style={{ filter: "drop-shadow(0 0 6px #38bdf8)" }}
            />
            {/* Branch 4 to Optimise (x=875) */}
            <path
              d="M 500 0 L 500 24 C 500 36 875 36 875 64"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray={isInView ? "none" : "300"}
              strokeDashoffset={isInView ? "0" : "300"}
              className="transition-all duration-1000"
              style={{ filter: "drop-shadow(0 0 6px #38bdf8)" }}
            />
          </svg>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-14 text-left pt-4">
          {AI_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#09080F] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
            >
              <div>
                {/* Step Title */}
                <h3 className="font-title text-base sm:text-lg font-bold text-white mb-4">
                  {step.title}
                </h3>

                {/* AI Tool Icon Chips */}
                <div className="flex items-center gap-2 mb-6">
                  {step.icons.map((iconSrc, iIdx) => (
                    <div
                      key={iIdx}
                      className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 p-1.5 flex items-center justify-center flex-shrink-0"
                    >
                      <div className="relative w-full h-full">
                        <Image src={iconSrc} alt="tool icon" fill className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Produces Tags */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-2">
                  PRODUCES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {step.produces.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 text-[10px] font-body border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button: Explore AI Capabilities */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6320EE] to-[#7C3AED] hover:from-[#561CD0] hover:to-[#6D28D9] text-white font-title font-bold text-xs sm:text-sm shadow-xl shadow-purple-600/30 transition-all active:scale-95 cursor-pointer"
          >
            <span>Explore AI Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
