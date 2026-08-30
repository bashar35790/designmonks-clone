"use client";

import React from "react";
import { Check, X, Users, Paintbrush, User, Briefcase, MessageSquare } from "lucide-react";

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
    description:
      "Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees",
    icon: <MessageSquare className="w-6 h-6 text-white fill-white" />,
    isMonk: true,
    speed: true,
    flexibility: true,
    quality: true,
    scalability: true,
    affordability: true,
  },
  {
    platform: "In House Team",
    description:
      "A full-time designer may ensure brand consistency, but there's a risk of limited expertise even though you pay regularly",
    icon: <Users className="w-6 h-6 text-white" />,
    speed: false,
    flexibility: false,
    quality: false,
    scalability: true,
    affordability: false,
  },
  {
    platform: "Creative Agencies",
    description:
      "Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    speed: false,
    flexibility: false,
    quality: true,
    scalability: true,
    affordability: false,
  },
  {
    platform: "Freelancers",
    description:
      "Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration",
    icon: <User className="w-6 h-6 text-white" />,
    speed: false,
    flexibility: true,
    quality: false,
    scalability: false,
    affordability: true,
  },
  {
    platform: "Self-Service Tools",
    description:
      "DIY tools like website builders are budget-friendly, but you can't expect strategic thinking & originality",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    speed: false,
    flexibility: false,
    quality: true,
    scalability: true,
    affordability: false,
  },
];

export function ComparisonTable() {
  return (
    <section id="compare" className="py-24 bg-[#050505] text-white relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-sm font-medium mb-6">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-title sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            <span className="font-brand italic font-normal text-white">
               Design Monks&apos;s  
            </span> {" "}
              Alternative? <br />
             <span className="font-brand italic font-normal text-white">Think </span> One More Time!
          </h2>
        </div>

        {/* Table Wrapper */}
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="min-w-[850px]">

            {/* Table Header Row */}
            <div className="grid grid-cols-12 items-center text-xl px-8 py-4  font-semibold text-zinc-300 border-b border-zinc-800/60 mb-6">
              <div className="col-span-5 text-left text-white">Platform</div>
              <div className="col-span-7 grid grid-cols-5 text-center ">
                <span>Speed</span>
                <span>Flexibility</span>
                <span>Quality</span>
                <span>Scalability</span>
                <span>Affordability</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2">
              {COMPARISON_DATA.map((row, idx) => {
                if (row.isMonk) {
                  return (
                    /* Design Monks Glowing Box */
                    <div
                      key={idx}
                      className="p-0.5 rounded-lg bg-linear-to-r from-[#4F62FF] via-[#A855F7] to-[#3B82F6] shadow-2xl shadow-purple-950/40 my-6"
                    >
                      <div className="grid grid-cols-12 items-center px-8 py-6 rounded-[22.5px] bg-linear-to-r from-[#170E2E] via-[#120B24] to-[#1E103A]">
                        
                        {/* Left: Icon + Text */}
                        <div className="col-span-5 flex items-center gap-5 pr-4">
                          <div className="w-18 h-18 rounded-2xl shrink-0 flex items-center justify-center bg-[#7C4DFF] shadow-lg shadow-purple-600/30">
                            {row.icon}
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-1 leading-snug">{row.platform}</h3>
                            <p className="text-xl sm:text-sm text-zinc-300 leading-relaxed pr-2">
                              {row.description}
                            </p>
                          </div>
                        </div>

                        {/* Right: Checkmarks */}
                        <div className="col-span-7 grid grid-cols-5 items-center justify-items-center">
                          {[row.speed, row.flexibility, row.quality, row.scalability, row.affordability].map((_, i) => (
                            <div key={i} className="flex items-center justify-center">
                              <Check className="w-8 h-8 text-white stroke-[2.5]" />
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  );
                }

                return (
                  /* Standard Underlined Rows */
                  <div
                    key={idx}
                    className="grid grid-cols-12 items-center px-8 py-7 border-b border-zinc-800/60"
                  >
                    {/* Left: Icon + Text */}
                    <div className="col-span-5 flex items-center gap-5 pr-4">
                      <div className="w-18 h-18 rounded-xl shrink-0 flex items-center justify-center bg-[#0B2246]">
                        {row.icon}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-1 leading-snug">{row.platform}</h3>
                        <p className="text-xl sm:text-sm text-zinc-400 leading-relaxed pr-2">
                          {row.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Check/Cross Matrix */}
                    <div className="col-span-7 grid grid-cols-5 items-center justify-items-center">
                      {[
                        row.speed,
                        row.flexibility,
                        row.quality,
                        row.scalability,
                        row.affordability,
                      ].map((isCheck, i) => (
                        <div key={i} className="flex items-center justify-center">
                          {isCheck ? (
                            <Check className="w-8 h-8 text-white stroke-[2.5]" />
                          ) : (
                            <X className="w-8 h-8 text-[#EF4444] stroke-[2]" />
                          )}
                        </div>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ComparisonTable;
