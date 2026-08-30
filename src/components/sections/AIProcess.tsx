"use client";

import React, { useRef } from "react";
import Image from "next/image";
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

const PROCESS_STEPS = [
  {
    title: "Discover & Strategy",
    tools: [
      "/images/ai-power-design-section/6a68a64542e40dfeaacb53d9_Frame 2147238883.avif",
      "/images/ai-power-design-section/6a68a6456726ab23af13421d_Frame 2147238878.png",
      "/images/ai-power-design-section/6a68a645980305061c2870c1_Frame 2147238884.avif",
    ],
    produces: ["Discovery Report", "User Personas", "Content Hierarchy"],
  },
  {
    title: "Design",
    tools: [
      "/images/ai-power-design-section/6a68a645a10c36c6a575c707_Frame 2147238876.png",
      "/images/ai-power-design-section/6a68a64631081c891f6f9df5_Frame 2147238879.avif",
      "/images/ai-power-design-section/6a68a64634804a67f3a877ee_Frame 2147238881.avif",
      "/images/ai-power-design-section/6a68a646d027100b1bba3ac6_Frame 2147238877.avif",
    ],
    produces: ["Visual Direction", "UI Screens", "Design System"],
  },
  {
    title: "Build",
    tools: [
      "/images/ai-power-design-section/6a68a6479764a1163884f85b_Frame 2147238880.avif",
      "/images/ai-power-design-section/6a68a64cf7785b70a1541523_Frame 2085665741.avif",
      "/images/ai-power-design-section/6a5810149e88d3358ac95b41_Frame 2147238893.avif",
      "/images/ai-power-design-section/6a58a6a2cb044ee3817c8f32_Frame 2147238892.png",
    ],
    produces: ["Codebase", "CMS Integration", "Component Docs"],
  },
  {
    title: "Optimise",
    tools: [
      "/images/ai-power-design-section/6a58a6cef218cc1b08c70c27_Frame 2147238888.avif",
      "/images/ai-power-design-section/6a58a73bd7b7e03d4a590269_Frame 2147238891.avif",
      "/images/ai-power-design-section/6a58a75735e91d2a5c56f5ba_Frame 2147238892 (1).avif",
    ],
    produces: ["CRO Recommendations", "A/B Test Plan", "Launch Report"],
  },
];

export function AIProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const renderIconTile = (src: string, idx: number) => (
    <div
      key={idx}
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0c121d] border border-white/[0.08] flex items-center justify-center p-3.5 flex-shrink-0"
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
      className="relative bg-[#020408] text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Title Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>AI-Powered Design</span>
        </div>

        <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
          Smarter Design,{" "}
          <span className="italic font-serif font-normal text-zinc-300">
            Supercharged By AI
          </span>
        </h2>

        <p className="font-body text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
          From wireframes to launch, we blend AI tools with strategy to deliver faster, <br className="hidden sm:inline" />
          sharper, and data-led design results.
        </p>

        {/* Marquee & Center Transparent Circle */}
        <div className="relative">
          {/* Centered Transparent Orb Assembly */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center"
            >
              {/* Soft Cyan Ambient Glow Behind */}
              <div className="w-36 h-36 rounded-full bg-cyan-500/20 blur-xl absolute" />

              {/* Transparent Circle Ring */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-cyan-400/60 bg-transparent flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)] relative">
                
                {/* Exact Speech Bubble Message Icon */}
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Chat Message Bubble Body (Round top with bottom-left tail) */}
                  <path
                    d="M 50 18
                       C 68 18, 82 31, 82 48
                       C 82 65, 68 78, 50 78
                       C 43 78, 36 76, 30 71
                       C 22 75, 18 80, 18 80
                       C 18 80, 20 71, 22 65
                       C 19 60, 18 54, 18 48
                       C 18 31, 32 18, 50 18 Z"
                    fill="white"
                  />
                  {/* Smile Arc Inside */}
                  <path
                    d="M 37 48 C 42 58, 58 58, 63 48"
                    stroke="#070c18"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>

              </div>
            </motion.div>
          </div>

          {/* Marquee Background Rows */}
          <div className="space-y-4 opacity-35">
            <Marquee direction="left" duration="35s" pauseOnHover={false} repeat={2}>
              {AI_MARQUEE_ROW_1.map(renderIconTile)}
            </Marquee>
            <Marquee direction="right" duration="35s" pauseOnHover={false} repeat={2}>
              {AI_MARQUEE_ROW_2.map(renderIconTile)}
            </Marquee>
          </div>
        </div>

        {/* Dynamic Branching SVG Lines */}
        <div className="hidden md:block relative w-full h-24 max-w-5xl mx-auto -mt-2">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 96" fill="none">
            {/* Center Drop Line */}
            <motion.path
              d="M 500 0 L 500 44"
              stroke="#00d2ff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.4 }}
              style={{ filter: "drop-shadow(0 0 8px #00d2ff)" }}
            />
            {/* Split Lines with Rounded Corners */}
            <motion.path
              d="M 125 96 L 125 56 C 125 44 135 44 145 44 L 855 44 C 865 44 875 44 875 56 L 875 96 M 375 44 L 375 96 M 625 44 L 625 96"
              stroke="#00d2ff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ filter: "drop-shadow(0 0 8px #00d2ff)" }}
            />
            {/* Dots */}
            {[125, 375, 625, 875].map((x, i) => (
              <motion.circle
                key={i}
                cx={x}
                cy="96"
                r="3.5"
                fill="#00d2ff"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                style={{ filter: "drop-shadow(0 0 6px #00d2ff)" }}
              />
            ))}
          </svg>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mt-2 text-left">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="p-6 rounded-[28px] bg-[#070b13] border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-title text-base sm:text-lg font-semibold text-white mb-6">
                  {step.title}
                </h3>

                <div className="flex items-center gap-2 mb-8">
                  {step.tools.map((src, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-xl bg-[#0c1320] border border-cyan-500/20 p-2 flex items-center justify-center shadow-[inset_0_0_12px_rgba(34,211,238,0.15)]"
                    >
                      <Image src={src} alt="Tool" width={22} height={22} className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase block mb-3">
                  PRODUCES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {step.produces.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[#0f1726] text-zinc-300 text-[11px] font-medium border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Purple Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-14 flex justify-center"
        >
          <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] hover:from-[#7c3aed] hover:to-[#5b21b6] text-white font-medium text-sm flex items-center gap-2 shadow-[0_0_35px_rgba(139,92,246,0.6)] border border-violet-400/30 transition-all duration-300 transform hover:scale-105">
            <span>Explore AI Capabilities</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
