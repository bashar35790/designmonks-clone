"use client";

import React from "react";
import { SERVICES_LIST } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Layout, Code2, Sparkles, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const serviceIcons: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-emerald-400" />,
  Code2: <Code2 className="w-6 h-6 text-teal-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  Layers: <Layers className="w-6 h-6 text-violet-400" />,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Offerings"
          title="We Design Brands That"
          italicAccent="Speak to Audiences"
          subtitle="From high-velocity design sprints to full-scale enterprise frontend implementations, our modular service offerings scale with your product ambitions."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Subtle Corner Glow */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all">
                    {serviceIcons[service.icon]}
                  </div>
                  <span className="font-mono text-2xl font-bold text-zinc-600 group-hover:text-emerald-400 transition-colors">
                    {service.number}
                  </span>
                </div>

                {service.featuredBadge && (
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
                    {service.featuredBadge}
                  </span>
                )}

                <h3 className="font-title text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-emerald-400/90 font-medium mb-3">
                  {service.tagline}
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed font-body mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                    KEY DELIVERABLES:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & CTA */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-400 text-[11px] font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-emerald-400 transition-colors group/cta"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
