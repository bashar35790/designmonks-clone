"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Marquee } from "@/components/ui/Marquee";
import { RESOURCE_TAGS_ROW_1, RESOURCE_TAGS_ROW_2, TEAM_MEMBERS } from "@/data/logos";
import {
  CreditCard,
  RotateCcw,
  Headphones,
  Users,
  Layers,
  CheckCircle,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function WhyChooseUs() {
  const [billingPlan, setBillingPlan] = useState<"monthly" | "milestone">("monthly");

  return (
    <section id="benefits" className="py-24 bg-[#0A0A0A] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Unmatched Advantages"
          title="Unmatched Benefits"
          italicAccent="For Your Success"
          subtitle="We eliminate agency friction, junior handoffs, and unexpected billable creep with transparent subscriptions and senior talent."
          className="mb-16"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Bento Card 1: Interactive Billing Plan Switch */}
          <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <CreditCard className="w-6 h-6" />
                </div>

                {/* Plan Toggle */}
                <div className="p-1 rounded-full bg-zinc-900 border border-white/10 flex items-center gap-1">
                  <button
                    onClick={() => setBillingPlan("monthly")}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      billingPlan === "monthly"
                        ? "bg-emerald-500 text-black shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Monthly Retainer
                  </button>
                  <button
                    onClick={() => setBillingPlan("milestone")}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      billingPlan === "milestone"
                        ? "bg-emerald-500 text-black shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Fixed Milestone
                  </button>
                </div>
              </div>

              <h3 className="font-title text-2xl sm:text-3xl font-bold text-white mb-2">
                Flexible Payment & Sprint Models
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-body max-w-xl mb-6">
                {billingPlan === "monthly"
                  ? "Pause or cancel anytime with zero lock-in. One fixed monthly investment for dedicated senior design bandwidth."
                  : "Milestone-based billing pegged to specific deliverables. Clear stages: 50% kick-off, 50% final production sign-off."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Slack & Figma real-time sync</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct senior designer access</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pause subscription between product launches</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500 block">Starting from</span>
                <span className="text-xl font-bold text-white font-title">
                  {billingPlan === "monthly" ? "$4,950 / month" : "$8,500 / project"}
                </span>
              </div>
              <Button href="#contact" variant="primary" size="sm" showArrow>
                Get Started
              </Button>
            </div>
          </div>

          {/* Bento Card 2: Unlimited Revisions */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between shadow-xl">
            <div>
              <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 w-fit mb-6">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="font-title text-2xl font-bold text-white mb-2">
                Unlimited Revisions
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-body mb-4">
                We iterate and polish screens until you are 100% satisfied. No nickel-and-diming for extra iterations.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs text-emerald-400 font-mono flex items-center gap-2">
              <Zap className="w-4 h-4 shrink-0" />
              <span>48-hour revision turnarounds</span>
            </div>
          </div>

          {/* Bento Card 3: Senior Talent & Diverse Skillset */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between shadow-xl">
            <div>
              <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-title text-2xl font-bold text-white mb-2">
                Top 1% Senior Talent
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-body mb-6">
                No junior designers or outsourced middlemen. You work directly with veterans who built for leading unicorns.
              </p>

              {/* Stacked Avatars */}
              <div className="flex items-center -space-x-3 mb-2">
                {TEAM_MEMBERS.map((m, idx) => (
                  <img
                    key={idx}
                    src={m.avatar}
                    alt={m.name}
                    className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover"
                  />
                ))}
              </div>
              <span className="text-[11px] text-zinc-500 font-mono">
                Multidisciplinary team in 8 timezones
              </span>
            </div>
          </div>

          {/* Bento Card 4: Lifetime Support & Assets */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between shadow-xl">
            <div>
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit mb-6">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-title text-2xl font-bold text-white mb-2">
                Lifetime Support & Tokenized Assets
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-body max-w-xl">
                We don’t disappear after handoff. You receive lifetime support for Figma component updates, token syncs, and design questions.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-mono">
                100% intellectual property transfer upon delivery
              </span>
              <Button href="#contact" variant="ghost" size="sm" showArrow>
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Hand-Picked Resources Dual Marquee Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/[0.08] shadow-2xl overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              FULL-SPECTRUM TOOLING & CAPABILITIES
            </span>
            <h4 className="font-title text-xl font-bold text-white">
              Hand-Picked Resources & Specializations
            </h4>
          </div>

          <div className="space-y-3">
            <Marquee direction="left" speed="normal" pauseOnHover={true}>
              {RESOURCE_TAGS_ROW_1.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 whitespace-nowrap hover:border-emerald-500/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </Marquee>

            <Marquee direction="right" speed="normal" pauseOnHover={true}>
              {RESOURCE_TAGS_ROW_2.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 whitespace-nowrap hover:border-emerald-500/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
