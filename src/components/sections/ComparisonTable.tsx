"use client";

import React, { useState } from "react";
import { COMPARISON_DATA } from "@/data/comparison";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ComparisonTable() {
  const [activeTab, setActiveTab] = useState<"inHouse" | "agencies" | "freelancers" | "diy">("agencies");

  const renderCell = (val: string | boolean, isMonk = false) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className={`inline-flex p-1 rounded-full ${isMonk ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-white"}`}>
          <Check className="w-4 h-4" />
        </span>
      ) : (
        <span className="inline-flex p-1 rounded-full bg-red-500/10 text-red-400">
          <X className="w-4 h-4" />
        </span>
      );
    }
    return (
      <span className={`text-xs ${isMonk ? "font-semibold text-emerald-400" : "text-zinc-400"}`}>
        {val}
      </span>
    );
  };

  const competitorLabels = {
    inHouse: "In-House Team",
    agencies: "Traditional Agencies",
    freelancers: "Freelancers",
    diy: "DIY Builders",
  };

  return (
    <section id="compare" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Market Comparison"
          title="Design Monks Alternative?"
          italicAccent="Think One More Time!"
          subtitle="Compare how we stack up against traditional options in speed, seniority, cost, and technical execution."
          className="mb-16"
        />

        {/* Desktop Comparison Table (Hidden on Mobile) */}
        <div className="hidden lg:block overflow-hidden rounded-3xl bg-zinc-950 border border-white/[0.08] shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-zinc-900/60">
                <th className="p-6 text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                  Feature / Criteria
                </th>
                <th className="p-6 text-sm font-title font-bold text-white bg-emerald-950/30 border-x border-emerald-500/20 relative">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Design Monks</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">Top-tier partner</span>
                </th>
                <th className="p-6 text-xs font-title font-semibold text-zinc-300">In-House Hire</th>
                <th className="p-6 text-xs font-title font-semibold text-zinc-300">Legacy Agency</th>
                <th className="p-6 text-xs font-title font-semibold text-zinc-300">Freelancers</th>
                <th className="p-6 text-xs font-title font-semibold text-zinc-300">DIY / Templates</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-semibold text-white">{row.feature}</td>
                  <td className="p-6 bg-emerald-950/20 border-x border-emerald-500/20">
                    {renderCell(row.designMonks, true)}
                  </td>
                  <td className="p-6">{renderCell(row.inHouse)}</td>
                  <td className="p-6">{renderCell(row.agencies)}</td>
                  <td className="p-6">{renderCell(row.freelancers)}</td>
                  <td className="p-6">{renderCell(row.diy)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Tab-Switcher View (< lg) */}
        <div className="lg:hidden">
          {/* Competitor Select Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
            {(Object.keys(competitorLabels) as (keyof typeof competitorLabels)[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === key
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white"
                }`}
              >
                vs {competitorLabels[key]}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {COMPARISON_DATA.map((row, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/[0.08]">
                <h4 className="font-semibold text-white text-sm mb-3">{row.feature}</h4>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06]">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1 font-bold">
                      Design Monks
                    </span>
                    {renderCell(row.designMonks, true)}
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900 border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                      {competitorLabels[activeTab]}
                    </span>
                    {renderCell(row[activeTab])}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
