"use client";

import React from "react";
import { Check, X, Users, Paintbrush, User, Briefcase, Smile } from "lucide-react";

interface ComparisonRow {
  platform: string;
  description: string;
  icon: React.ReactNode;
  isMonk?: boolean;
  speed: boolean;
  flexibility: boolean;
  quality: boolean;
  scalability: boolean;
  affordability: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    platform: "Design Monks",
    description: "Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees",
    icon: <Smile className="w-5 h-5 text-white" />,
    isMonk: true,
    speed: true,
    flexibility: true,
    quality: true,
    scalability: true,
    affordability: true,
  },
  {
    platform: "In House Team",
    description: "A full-time designer may ensure brand consistency, but there's a risk of limited expertise even though you pay regularly",
    icon: <Users className="w-5 h-5 text-blue-300" />,
    speed: false,
    flexibility: false,
    quality: false,
    scalability: true,
    affordability: false,
  },
  {
    platform: "Creative Agencies",
    description: "Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects",
    icon: <Paintbrush className="w-5 h-5 text-blue-300" />,
    speed: false,
    flexibility: false,
    quality: true,
    scalability: true,
    affordability: false,
  },
  {
    platform: "Freelancers",
    description: "Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration",
    icon: <User className="w-5 h-5 text-blue-300" />,
    speed: false,
    flexibility: true,
    quality: false,
    scalability: false,
    affordability: true,
  },
  {
    platform: "Self-Service Tools",
    description: "DIY tools like website builders are budget-friendly, but you can't expect strategic thinking & originality",
    icon: <Briefcase className="w-5 h-5 text-blue-300" />,
    speed: false,
    flexibility: false,
    quality: true,
    scalability: true,
    affordability: false,
  },
];

export function ComparisonTable() {
  return (
    <section id="compare" className="py-24 bg-[#090A0F] text-white relative overflow-hidden font-sans">
      {/* Top Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs font-medium mb-6">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Design Monks&apos;s Alternative? <br />
            <span className="font-serif italic font-normal text-white">
              Think One More Time!
            </span>
          </h2>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="min-w-[800px]">

            {/* Table Header Row */}
            <div className="grid grid-cols-12 items-center px-6 py-4 text-xs font-semibold text-zinc-300 border-b border-zinc-800/60 mb-4">
              <div className="col-span-6 text-left font-bold text-sm text-white">Platform</div>
              <div className="col-span-6 grid grid-cols-5 text-center text-zinc-400 font-medium">
                <span>Speed</span>
                <span>Flexibility</span>
                <span>Quality</span>
                <span>Scalability</span>
                <span>Affordability</span>
              </div>
            </div>

            {/* Table Body Rows */}
            <div className="space-y-4">
              {COMPARISON_DATA.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 items-center p-6 rounded-2xl transition-all ${row.isMonk
                    ? "bg-gradient-to-r from-[#211142] via-[#1B1238] to-[#2B1147] border border-purple-500/40 shadow-xl shadow-purple-950/40"
                    : "bg-[#0B0D14]/80 border-b border-zinc-800/40 hover:bg-zinc-900/30"
                    }`}
                >
                  {/* Platform Title + Description */}
                  <div className="col-span-6 flex items-start gap-4 pr-6">
                    <div className={`p-3 rounded-xl shrink-0 flex items-center justify-center ${row.isMonk
                      ? "bg-purple-600 shadow-md shadow-purple-600/50"
                      : "bg-[#111827] border border-zinc-800"
                      }`}>
                      {row.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{row.platform}</h3>
                      <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
                        {row.description}
                      </p>
                    </div>
                  </div>

                  {/* Criteria Checklist Indicators */}
                  <div className="col-span-6 grid grid-cols-5 items-center justify-items-center">
                    {[row.speed, row.flexibility, row.quality, row.scalability, row.affordability].map((isCheck, i) => (
                      <div key={i} className="flex items-center justify-center">
                        {isCheck ? (
                          <Check className="w-5 h-5 text-white stroke-[2.5]" />
                        ) : (
                          <X className="w-5 h-5 text-red-500/80 stroke-[2]" />
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ComparisonTable;