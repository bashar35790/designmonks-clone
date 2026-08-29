"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/process";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Compass, Layers, Code2, TrendingUp, Sparkles, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-emerald-400" />,
  Layers: <Layers className="w-6 h-6 text-teal-400" />,
  Code2: <Code2 className="w-6 h-6 text-violet-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-amber-400" />,
};

export function AIProcess() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Workflow Innovation"
          title="Smarter Design,"
          italicAccent="Supercharged by AI"
          subtitle="Our battle-tested 4-step framework integrates cutting-edge AI models into every phase of research, Figma design, and frontend code generation."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all">
                    {iconMap[step.icon] || <Cpu className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <span className="font-mono text-3xl font-bold text-white/20 group-hover:text-emerald-500/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Subtitle / AI Badge */}
                <span className="text-[11px] font-mono text-emerald-400 tracking-wider uppercase block mb-1">
                  {step.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-title text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed font-body mb-6">
                  {step.description}
                </p>
              </div>

              {/* Produces Tags List */}
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

                {/* AI Stack Badges */}
                <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-mono">
                  <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{step.aiTools.join(" • ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
