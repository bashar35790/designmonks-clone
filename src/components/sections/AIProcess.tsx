"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/process";
import { Compass, Layers, Code2, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-purple-400" />,
  Layers: <Layers className="w-6 h-6 text-teal-400" />,
  Code2: <Code2 className="w-6 h-6 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-amber-400" />,
};

export function AIProcess() {
  return (
    <section id="process" className="py-24 bg-[#07040F] text-white relative overflow-hidden">
      {/* Ambient Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 block mb-2">
            AI-POWERED SPEED &amp; CRAFT
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Smarter Design,{" "}
            <span className="font-brand italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-300">
              Supercharged by AI
            </span>
          </h2>
          <p className="font-body text-purple-200/70 text-sm sm:text-base leading-relaxed">
            Our 4-step framework merges cutting-edge generative AI models with senior human craft to ship products in record time.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl"
            >
              <div>
                {/* Step & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-all">
                    {iconMap[step.icon] || <Sparkles className="w-6 h-6 text-purple-400" />}
                  </div>
                  <span className="font-mono text-3xl font-bold text-white/20 group-hover:text-purple-400/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-purple-400 tracking-wider uppercase block mb-1">
                  {step.subtitle}
                </span>

                <h3 className="font-title text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-body mb-6">
                  {step.description}
                </p>
              </div>

              {/* Produces Tags */}
              <div className="pt-5 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-2">
                  PRODUCES:
                </span>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {step.produces.map((item, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] text-zinc-300 text-[11px] font-body border border-white/[0.05]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-mono">
                  <Sparkles className="w-3 h-3 text-purple-400 shrink-0" />
                  <span className="truncate">{step.aiTools.join(" • ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA: Explore AI Capabilities */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-title font-bold text-sm shadow-xl shadow-purple-600/30 transition-all active:scale-95"
          >
            <span>Explore AI Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
