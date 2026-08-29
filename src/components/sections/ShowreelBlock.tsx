"use client";

import React, { useState } from "react";
import { Play, Award, Sparkles } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

export function ShowreelBlock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="showreel" className="py-24 bg-white text-zinc-900 relative overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
            AGENCY SHOWREEL 2026
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            Why Us? Because Your{" "}
            <span className="font-brand italic font-normal text-purple-700">
              Growth
            </span>{" "}
            Is Our Mission
          </h2>
        </div>

        {/* Video Card */}
        <div
          className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-zinc-950 border border-zinc-200 shadow-2xl group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1800&auto=format&fit=crop"
            alt="Design Monks Showreel"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Play showreel"
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl shadow-purple-600/50 group-hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-6 sm:w-8 h-6 sm:h-8 fill-white ml-1" />
            </button>
            <span className="text-xs sm:text-sm font-title font-bold text-white uppercase tracking-widest mt-4">
              Click to Watch Showreel (1:42)
            </span>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Design Monks Master Showreel"
      />
    </section>
  );
}
