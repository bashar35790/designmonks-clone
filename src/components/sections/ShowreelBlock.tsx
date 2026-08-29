"use client";

import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ShowreelBlock() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for fluid scaling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    restDelta: 0.0001,
  });

  // Scale: video starts small (0.55) and grows to fill viewport (1.0)
  const scale = useTransform(smoothProgress, [0, 0.55], [0.55, 1]);

  // Border radius: starts rounded (28px) → becomes 0 at full screen
  const borderRadius = useTransform(smoothProgress, [0, 0.55], [28, 0]);

  // Overlay opacity: fade out the darkening overlay as it scales up
  const overlayOpacity = useTransform(smoothProgress, [0, 0.3, 0.55], [0.6, 0.4, 0.15]);

  // Text: fade out the header copy as the video expands
  const headerOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(smoothProgress, [0, 0.25], [0, -30]);

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "200vh" }}
    >
      {/* Sticky container that holds the entire showreel layout */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Light dotted background (matches screenshot) */}
        <div
          className="absolute inset-0 bg-[#F7F8FC]"
          style={{
            backgroundImage: "radial-gradient(circle, #D0D0D8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Section Header — fades out as video expands */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center text-center pt-14 px-4"
        >
          {/* Tag Chip */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/50 bg-transparent text-emerald-600 text-xs font-semibold mb-6">
            <span>What Sets Us Apart</span>
          </div>

          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight max-w-4xl">
            Why Us? Because Your{" "}
            <span className="font-brand italic font-normal text-zinc-900">
              Growth Is Our Mission
            </span>
          </h2>

          <p className="mt-4 text-zinc-500 font-body text-sm sm:text-base max-w-xl leading-relaxed">
            See the difference thoughtful design makes. Our works highlight the dedication
            we bring to every client partnership.
          </p>
        </motion.div>

        {/* Scroll-Scaling Video Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            ref={videoContainerRef}
            style={{
              scale,
              borderRadius,
            }}
            className="relative w-full h-full overflow-hidden cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Video Thumbnail / Background */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1800&auto=format&fit=crop"
              alt="Design Monks Agency Showreel"
              className="w-full h-full object-cover"
              draggable={false}
            />

            {/* Dynamic dark overlay */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-black"
            />

            {/* "WATCH VIDEO" Circular Rotating Text + Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative flex items-center justify-center">
                {/* Rotating circular text ring */}
                <svg
                  className="absolute w-32 h-32 sm:w-40 sm:h-40 animate-[spin_10s_linear_infinite] text-white/80"
                  viewBox="0 0 160 160"
                  fill="none"
                >
                  <path
                    id="circlePath"
                    d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  />
                  <text
                    className="font-mono text-[14px] fill-white tracking-[0.3em] uppercase"
                    fontSize="14"
                    fill="white"
                    letterSpacing="6"
                  >
                    <textPath href="#circlePath">
                      WATCH VIDEO · WATCH VIDEO ·{" "}
                    </textPath>
                  </text>
                </svg>

                {/* Center Play Button */}
                <button
                  aria-label="Play Agency Showreel"
                  className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl shadow-purple-600/60 group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                  }}
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white text-white ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Design Monks Master Showreel 2026"
      />
    </section>
  );
}
