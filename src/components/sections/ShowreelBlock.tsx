"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { VideoModal } from "@/components/ui/VideoModal";

export function ShowreelBlock() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Smooth scaling from small (0.7) to full-width (1.0) as user scrolls down
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["44px", "24px"]);

  return (
    <section
      id="showreel"
      ref={containerRef}
      className="py-24 sm:py-32 bg-white text-zinc-900 relative overflow-hidden border-b border-zinc-200"
    >
      {/* Subtle Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching Screenshot 1 */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50/50 text-emerald-700 text-xs font-semibold mb-6">
            <span>What Sets Us Apart</span>
          </div>

          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.14] mb-4">
            Why Us? Because Your{" "}
            <span className="font-brand italic font-normal text-zinc-900">
              Growth Is Our Mission
            </span>
          </h2>

          <p className="font-body text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            See the difference thoughtful design makes. Our works highlight the dedication <br className="hidden sm:inline" />
            we bring to every client partnership.
          </p>
        </div>

        {/* Scroll-Scaling Video Container */}
        <div className="flex justify-center w-full">
          <motion.div
            style={{
              scale,
              borderRadius,
            }}
            className="relative w-full max-w-6xl aspect-[16/9] bg-zinc-950 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-black/10 group cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {/* Background Autoplay Video */}
            <video
              src="/videos/DM Showreel 2026.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

            {/* Center Official Rotating Play Icon Badge from public/videoplay.svg */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="pointer-events-auto relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 group-hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer">
                <Image
                  src="/videoplay.svg"
                  alt="Watch Video"
                  fill
                  className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Video Modal on Click */}
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoSrc="/videos/DM Showreel 2026.mp4"
        title="Design Monks Showreel 2026"
      />
    </section>
  );
}
