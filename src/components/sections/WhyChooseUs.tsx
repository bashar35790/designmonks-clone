"use client";

import React, { useState } from "react";
import { Marquee } from "@/components/ui/Marquee";
import { RESOURCE_TAGS_ROW_1, RESOURCE_TAGS_ROW_2, TEAM_MEMBERS } from "@/data/logos";
import {
  CreditCard,
  RotateCcw,
  Headphones,
  Users,
  CheckCircle,
  Zap,
  ArrowRight,
} from "lucide-react";

export function WhyChooseUs() {
  const [billingPlan, setBillingPlan] = useState<"monthly" | "milestone">("monthly");

  return (
    <section id="benefits" className="py-24 bg-[#F8F8FC] text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
            UNMATCHED ADVANTAGES
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
            Unmatched Benefits{" "}
            <span className="font-brand italic font-normal text-purple-700">
              For Your Success
            </span>
          </h2>
          <p className="font-body text-zinc-600 text-sm sm:text-base leading-relaxed">
            Eliminate agency friction, junior handoffs, and unexpected billable creep with transparent retainers and senior talent.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Bento Card 1: Payment Plans */}
          <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-purple-100 text-purple-700">
                  <CreditCard className="w-6 h-6" />
                </div>

                {/* Plan Toggle */}
                <div className="p-1 rounded-full bg-zinc-100 border border-zinc-200 flex items-center gap-1">
                  <button
                    onClick={() => setBillingPlan("monthly")}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      billingPlan === "monthly"
                        ? "bg-purple-700 text-white shadow-md"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    Monthly Retainer
                  </button>
                  <button
                    onClick={() => setBillingPlan("milestone")}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      billingPlan === "milestone"
                        ? "bg-purple-700 text-white shadow-md"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    Fixed Milestone
                  </button>
                </div>
              </div>

              <h3 className="font-title text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-2">
                Flexible Payment &amp; Sprint Models
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-body max-w-xl mb-6">
                {billingPlan === "monthly"
                  ? "Pause or cancel anytime with zero lock-in. One fixed monthly investment for dedicated senior design bandwidth."
                  : "Milestone-based billing pegged to specific deliverables. 50% kick-off, 50% upon final sign-off."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct senior designer access</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Slack &amp; Figma real-time sync</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pause subscription between releases</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500 block">Starting from</span>
                <span className="text-xl font-bold text-zinc-900 font-title">
                  {billingPlan === "monthly" ? "$4,950 / month" : "$8,500 / project"}
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-950 text-white font-title font-bold text-xs hover:bg-zinc-800 transition-all shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: Unlimited Revisions */}
          <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-3.5 rounded-2xl bg-violet-100 text-violet-700 w-fit mb-6">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="font-title text-2xl font-bold text-zinc-900 mb-2">
                Unlimited Revisions
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-body mb-4">
                We iterate and polish screens until you are 100% thrilled. No extra change-order fees.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-purple-50 text-xs text-purple-900 font-mono font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-700 shrink-0" />
              <span>48-hour revision turnarounds</span>
            </div>
          </div>

          {/* Bento Card 3: Top 1% Senior Talent */}
          <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-3.5 rounded-2xl bg-blue-100 text-blue-700 w-fit mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-title text-2xl font-bold text-zinc-900 mb-2">
                Top 1% Senior Talent
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-body mb-6">
                No junior delegates. You work directly with veteran product designers who built for tier-1 unicorns.
              </p>

              <div className="flex items-center -space-x-3 mb-2">
                {TEAM_MEMBERS.map((m, idx) => (
                  <img
                    key={idx}
                    src={m.avatar}
                    alt={m.name}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <span className="text-[11px] text-zinc-500 font-mono">
                Multidisciplinary team in 8 global hubs
              </span>
            </div>
          </div>

          {/* Bento Card 4: Lifetime Support */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-3.5 rounded-2xl bg-amber-100 text-amber-700 w-fit mb-6">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-title text-2xl font-bold text-zinc-900 mb-2">
                Lifetime Support &amp; Tokenized Assets
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-body max-w-xl">
                We provide ongoing assistance for token syncs, Figma component updates, and developer handoff queries after delivery.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-emerald-700 font-mono font-bold">
                100% intellectual property transfer upon delivery
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
              >
                <span>Learn More →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hand-Picked Resources Strip with Light Purple Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F0ECF9] border border-purple-200 shadow-xl overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-1">
              FULL-SPECTRUM CAPABILITIES
            </span>
            <h4 className="font-title text-xl font-bold text-zinc-900">
              Hand-Picked Resources &amp; Specializations
            </h4>
          </div>

          <div className="space-y-3 mb-6">
            <Marquee direction="left" speed="normal" pauseOnHover={true}>
              {RESOURCE_TAGS_ROW_1.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white text-xs font-bold text-purple-950 whitespace-nowrap shadow-sm border border-purple-100"
                >
                  {tag}
                </span>
              ))}
            </Marquee>

            <Marquee direction="right" speed="normal" pauseOnHover={true}>
              {RESOURCE_TAGS_ROW_2.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white text-xs font-bold text-purple-950 whitespace-nowrap shadow-sm border border-purple-100"
                >
                  {tag}
                </span>
              ))}
            </Marquee>
          </div>

          {/* Preview Screenshots Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-white border border-purple-200 shadow-md">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-white border border-purple-200 shadow-md">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop" alt="Mobile App" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-white border border-purple-200 shadow-md">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" alt="3D Studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
