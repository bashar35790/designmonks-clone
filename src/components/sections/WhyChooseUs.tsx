"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export function WhyChooseUs() {
  const [billingPlan, setBillingPlan] = useState<"monthly" | "quarterly" | "annually">("monthly");

  return (
    <section id="benefits" className="py-24 bg-[#FAF9FF] text-zinc-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 text-emerald-700 text-xs font-semibold mb-6 shadow-sm">
            Why Choose Us
          </div>
          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-tight">
            Unmatched <span className="font-serif italic font-normal">Benefits</span> For{" "}
            <span className="font-serif italic font-normal block sm:inline">Your Success</span>
          </h2>
        </div>

        {/* TOP ROW: 2 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Flexible Payment Plans */}
          <div className="rounded-xl p-8 bg-gradient-to-br from-[#D9E4FF] via-[#E2EAFF] to-[#D5E1FF] border border-white/60 shadow-sm relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">Flexible Payment Plans</h3>
              <p className="text-sm text-zinc-600 mb-6">Pay your way</p>

              {/* Billing Toggle Pills */}
              <div className="inline-flex p-1 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 gap-1 mb-6 shadow-sm">
                {(["monthly", "quarterly", "annually"] as const).map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setBillingPlan(plan)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${billingPlan === plan
                      ? "bg-white text-zinc-900 shadow-md"
                      : "text-zinc-500 hover:text-zinc-800"
                      }`}
                  >
                    {plan}
                  </button>
                ))}
              </div>

              <ul className="space-y-2 text-xs font-medium text-zinc-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span> No commitment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span> Cancel anytime
                </li>
              </ul>
            </div>

            {/* Overlapping Glassmorphism Cards Mockup */}
            <div className="absolute -right-10 -bottom-14 w-80 h-56 pointer-events-none transform -rotate-12">
              <div className="w-full h-32 bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-200 rounded-2xl shadow-xl border border-white/60 p-4 transform translate-y-6 translate-x-6">
                <span className="text-xs font-bold text-zinc-800 tracking-wider">VISA</span>
              </div>
              <div className="w-full h-32 bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300 rounded-2xl shadow-xl border border-white/60 p-4 transform -rotate-6 backdrop-blur-md">
                <span className="text-xs font-bold text-white tracking-wider">VISA</span>
              </div>
            </div>
          </div>

          {/* Card 2: Unlimited Revision (Dark Feedback Box) */}
          <div className="rounded-xl p-8 bg-gradient-to-br from-[#D9E4FF] via-[#E2EAFF] to-[#D5E1FF] border border-white/60 shadow-sm relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Unlimited revision</h3>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-md">
                Enjoy unlimited revisions and lifetime support, ensuring your satisfaction at every stage.
              </p>
            </div>

            {/* Slack UI Container */}
            <div className="rounded-2xl bg-[#1A1A1E] text-white p-4 shadow-2xl border border-zinc-800 text-xs space-y-3.5 mt-4">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 text-zinc-400 font-mono text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-purple-400 font-bold">#</span>
                  <span className="text-zinc-200 font-semibold">Landing Animation Feedback</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1.5">
                    <img className="w-4 h-4 rounded-full border border-zinc-900" src="https://i.pravatar.cc/100?img=33" alt="user" />
                    <img className="w-4 h-4 rounded-full border border-zinc-900" src="https://i.pravatar.cc/100?img=12" alt="user" />
                  </div>
                  <span className="text-[10px] text-zinc-400">3+</span>
                </div>
              </div>

              {/* Message 1 */}
              <div className="flex gap-2.5">
                <img className="w-7 h-7 rounded-full object-cover" src="https://i.pravatar.cc/100?img=33" alt="Abid" />
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-zinc-200 text-xs">Abid Hasan</span>
                    <span className="text-[10px] text-zinc-500">Today at 2:47 PM</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] mt-0.5">Hey team, is the landing feedback finalized?</p>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex gap-2.5">
                <img className="w-7 h-7 rounded-full object-cover" src="https://i.pravatar.cc/100?img=12" alt="Hafij" />
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-zinc-200 text-xs">Hafij</span>
                    <span className="text-[10px] text-zinc-500">Today at 2:55 PM</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] mt-0.5">
                    Yep, all set up ready for <span className="text-blue-400 font-medium">@RubenDao</span>
                  </p>
                  <div className="inline-flex items-center gap-1 bg-zinc-800/80 px-2 py-0.5 rounded-full text-[10px] text-zinc-300 mt-1">
                    👍 <span className="text-zinc-400">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Split into Purple Card (Left) & Combined Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Card 3: Lifetime Support (Purple Card) */}
          <div className="lg:col-span-4 rounded-xl p-8 bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            <div>
              <h3 className="text-2xl font-bold mb-3">Lifetime Support</h3>
              <p className="text-xs text-purple-100 leading-relaxed opacity-90">
                Enjoy unlimited revisions and lifetime support, ensuring your satisfaction at every stage.
              </p>
            </div>

            {/* Dark Action Sheet at Bottom */}
            <div className="rounded-2xl bg-[#1A1A1E]/90 backdrop-blur-md p-4 space-y-2 border border-white/10 shadow-2xl">
              <div className="px-3.5 py-2.5 rounded-xl bg-zinc-800/80 text-xs font-medium text-zinc-200 flex items-center gap-2.5 border border-zinc-700/50">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ongoing updates</span>
              </div>
              <div className="px-3.5 py-2.5 rounded-xl bg-zinc-800/80 text-xs font-medium text-zinc-200 flex items-center gap-2.5 border border-zinc-700/50">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Priority response handling</span>
              </div>
              <div className="px-3.5 py-2.5 rounded-xl bg-zinc-800/80 text-xs font-medium text-zinc-200 flex items-center gap-2.5 border border-zinc-700/50">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 expert assistance</span>
              </div>
            </div>
          </div>

          {/* Card 4 & 5 Combined Container: Hand Picked Resources with Nested "Diverse Skill Set" */}
          <div className="lg:col-span-8 rounded-xl p-8 bg-gradient-to-br from-[#D9E4FF] via-[#E2EAFF] to-[#D5E1FF] border border-white/60 shadow-sm relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center">

            {/* Nested Card: Diverse Skill Set */}
            <div className="w-full lg:w-1/2 rounded-xl bg-white p-5 shadow-lg border border-white/80 z-10 shrink-0">
              <h4 className="text-lg font-bold text-zinc-900 mb-4">Diverse Skill Set</h4>

              <div className="space-y-3.5">
                {[
                  { name: "Sourov Dhali", role: "Product Designer", tags: ["UX Specialist", "Design System"], img: "https://i.pravatar.cc/100?img=60" },
                  { name: "Tanvir Ahmed", role: "Creative Director", tags: ["Brand Design", "Design Direction"], img: "https://i.pravatar.cc/100?img=68" },
                  { name: "Azaz Ahamed", role: "Sr Product Designer", tags: ["UX Consultant", "SaaS Design"], img: "https://i.pravatar.cc/100?img=53" },
                  { name: "Sajib Ahmed", role: "SEO Manager", tags: ["Growth Marketing", "SEO Strategy"], img: "https://i.pravatar.cc/100?img=15" },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <img src={member.img} alt={member.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                      <div>
                        <h5 className="text-xs font-bold text-zinc-900 leading-none">{member.name}</h5>
                        <span className="text-[10px] text-zinc-500">{member.role}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {member.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-semibold text-blue-700 bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Title + Radial Radar Graphic */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Hand Picked Resources</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Explore a wide array of thoughtfully curated resources that showcase the rich diversity and unique perspectives from various regions
                </p>
              </div>

              {/* Concentric Circle Radar Graphic */}
              <div className="relative w-full h-48 mt-4 flex items-center justify-center overflow-hidden">
                <div className="absolute w-64 h-64 rounded-full border border-blue-300/40" />
                <div className="absolute w-44 h-44 rounded-full border border-blue-300/60" />
                <div className="absolute w-24 h-24 rounded-full border border-blue-300/80" />

                {/* Positioned Avatars */}
                <img className="absolute top-4 left-6 w-7 h-7 rounded-full border-2 border-white shadow-md" src="https://i.pravatar.cc/100?img=47" alt="Node" />
                <img className="absolute top-8 right-12 w-7 h-7 rounded-full border-2 border-white shadow-md" src="https://i.pravatar.cc/100?img=32" alt="Node" />
                <img className="absolute top-20 right-4 w-7 h-7 rounded-full border-2 border-white shadow-md" src="https://i.pravatar.cc/100?img=11" alt="Node" />
                <img className="absolute bottom-6 right-8 w-8 h-8 rounded-full border-2 border-purple-500 shadow-md" src="https://i.pravatar.cc/100?img=59" alt="Node" />
                <img className="absolute bottom-2 left-20 w-8 h-8 rounded-full border-2 border-purple-500 shadow-md" src="https://i.pravatar.cc/100?img=65" alt="Node" />
                <img className="absolute bottom-10 left-4 w-7 h-7 rounded-full border-2 border-white shadow-md" src="https://i.pravatar.cc/100?img=22" alt="Node" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Allows both: import { WhyChooseUs } from "..." AND import WhyChooseUs from "..."
export default WhyChooseUs;