"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function ShowreelBlock() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale smoothly from card-size to 100% full-screen dimensions
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.65, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], [32, 0]);

  // Header text fades out early into the scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative -mb-10 bg-white w-full pt-20 "
      style={{ height: "300vh" }}
    >
      {/* Sticky Full Viewport Container */}
      <div className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Subtle Background Dot Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Section Header (Fades Out on Scroll) */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="relative z-20 text-center px-4 mb-6 pointer-events-none transform-gpu"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 text-emerald-700 text-xs font-semibold mb-4 backdrop-blur-sm">
            What Sets Us Apart
          </div>

          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
            Why Us? Because Your{" "}
            <span className="italic font-serif font-normal text-zinc-900">
              Growth Is Our Mission
            </span>
          </h2>

          <p className="font-body text-zinc-500 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
            See the difference thoughtful design makes. Our works highlight the dedication
            <br className="hidden sm:inline" /> we bring to every client partnership.
          </p>
        </motion.div>

        {/* Scroll-Expanding Full-Screen Video Container */}
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="relative w-full h-full max-w-full max-h-full overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.18)] will-change-transform origin-center transform-gpu z-10"
        >
          <div className="relative w-full h-full bg-zinc-950">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1800&auto=format&fit=crop"
            >
              <source src="/videos/DM Showreel 2026.mp4" type="video/mp4" />
            </video>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

            {/* Interactive Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto">
              <div className="relative group cursor-pointer flex items-center justify-center">

                {/* Circular Rotating Text */}
                <svg
                  viewBox="0 0 120 120"
                  className="w-28 h-28 sm:w-36 sm:h-36 animate-[spin_12s_linear_infinite] absolute pointer-events-none"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                    />
                  </defs>
                  <text
                    fill="white"
                    fontSize="10"
                    fontFamily="inherit"
                    fontWeight="600"
                    letterSpacing="3"
                  >
                    <textPath href="#circlePath">
                      WATCH VIDEO · WATCH VIDEO ·&nbsp;
                    </textPath>
                  </text>
                </svg>

                {/* Center Play Button Icon */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-600/90 hover:bg-purple-500 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-purple-600/50 transition-all duration-300 group-hover:scale-110 active:scale-95">
                  <Image
                    src="/videoplay.svg"
                    alt="Play"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-9 sm:h-9"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
