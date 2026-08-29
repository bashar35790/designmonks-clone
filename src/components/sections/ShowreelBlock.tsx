"use client";

import React, { useState } from "react";
import { Play, Sparkles, Award } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

export function ShowreelBlock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="showreel" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-zinc-950 border border-white/10 shadow-2xl group cursor-pointer"
             onClick={() => setIsOpen(true)}
        >
          {/* Background Ambient Poster Image */}
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1800&auto=format&fit=crop"
            alt="Design Monks Showreel Backdrop"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

          {/* Center Play Trigger */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Official 2026 Showreel</span>
            </div>

            <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-3xl mb-6">
              Why Us? Because Your{" "}
              <span className="font-brand font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Growth
              </span>{" "}
              Is Our Mission
            </h2>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Play showreel"
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-6 sm:w-8 h-6 sm:h-8 fill-black ml-1" />
            </button>
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
