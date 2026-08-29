"use client";

import React from "react";
import { Star, ShieldCheck, Flame } from "lucide-react";

export function TrustBar() {
  return (
    <div className="pt-24 sm:pt-28 pb-4 flex items-center justify-center">
      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-lg shadow-black/40">
        <div className="flex items-center gap-1 text-amber-400">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        </div>
        <span className="text-xs font-semibold text-white">4.9 ★ Rating</span>
        <span className="text-zinc-500 text-xs">•</span>
        <span className="text-xs text-zinc-400">Trusted by 200+ Global Brands</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
      </div>
    </div>
  );
}
