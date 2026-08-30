"use client";

import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MediaPreviewCardProps {
  type?: "services" | "more";
}

export function MediaPreviewCard({ type = "services" }: MediaPreviewCardProps) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative w-full md:w-[300px] lg:w-[340px] h-[360px] md:h-[400px] shrink-0 rounded-2xl bg-zinc-950 overflow-hidden flex flex-col justify-between p-6 shadow-lg">
      {/* Background Gradient / Video Container */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-zinc-900 to-zinc-950 z-0 pointer-events-none" />

      {type === "services" ? (
        /* Image 1 Visual Style Placeholder */
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
            <span className="w-6 h-6 rounded-full bg-purple-500 animate-pulse" />
          </div>
          <p className="text-white text-sm font-semibold">Featured Work Showcase</p>
          <p className="text-zinc-400 text-xs mt-1">Interactive UI/UX & Web Solutions</p>
        </div>
      ) : (
        /* Image 2 Visual Style: Startups & Client Logos Showcase */
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="bg-white/10 border border-white/10 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md">
              Oter
            </span>
            <span className="bg-white/10 border border-white/10 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md">
              Property Finder
            </span>
            <span className="bg-white/10 border border-white/10 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md">
              Pepsi
            </span>
            <span className="bg-white/10 border border-white/10 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md">
              যান্ত্রিক
            </span>
            <span className="bg-white/10 border border-white/10 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md">
              Telenor
            </span>
          </div>

          <div>
            <p className="text-zinc-300 text-sm font-medium">We&apos;ve helped</p>
            <h3 className="text-white text-2xl font-black tracking-tight mt-0.5">
              150 startups <span className="text-purple-400 font-normal">in</span>
            </h3>
            <p className="text-zinc-400 text-xs mt-1">in 7 countries</p>
          </div>
        </div>
      )}

      {/* Mute Button Bottom Right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMuted(!isMuted);
        }}
        className="absolute bottom-4 right-4 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 border border-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95"
        aria-label="Toggle audio"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
