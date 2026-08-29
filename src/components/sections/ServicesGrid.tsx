"use client";

import React, { useState } from "react";
import { SERVICES_LIST } from "@/data/services";
import { ArrowRight, CheckCircle2, Layout, Code2, Sparkles, Layers } from "lucide-react";

const RIGHT_COLLAGE_ITEMS = [
  { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop", title: "Mobile Fintech UI", tag: "iOS App", bg: "bg-emerald-950/40 border-emerald-500/30" },
  { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", title: "Analytics Pro Console", tag: "SaaS Dashboard", bg: "bg-blue-950/40 border-blue-500/30" },
  { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", title: "Spatial 3D Studio", tag: "3D Brand", bg: "bg-purple-950/40 border-purple-500/30" },
  { img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop", title: "Gaming Commerce Hub", tag: "Framer CMS", bg: "bg-orange-950/40 border-orange-500/30" },
  { img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", title: "AI Pipeline Engine", tag: "Web App", bg: "bg-teal-950/40 border-teal-500/30" },
  { img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop", title: "Geneva Watch Vault", tag: "Luxury Store", bg: "bg-amber-950/40 border-amber-500/30" },
];

export function ServicesGrid() {
  const [activeService, setActiveService] = useState(SERVICES_LIST[0].id);

  return (
    <section id="services" className="py-24 bg-[#080511] text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Service Details (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 block mb-2">
                WHAT WE DO
              </span>
              <h2 className="font-title text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                We Design Brands That{" "}
                <span className="font-brand italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-emerald-300">
                  Speak to Audiences
                </span>
              </h2>
              <p className="font-body text-purple-200/70 text-sm sm:text-base leading-relaxed">
                Transforming complex product logic into effortless, delightful customer journeys.
              </p>
            </div>

            {/* Service Selection List */}
            <div className="space-y-3">
              {SERVICES_LIST.map((service) => {
                const isActive = activeService === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-purple-950/40 border-purple-500/50 shadow-lg shadow-purple-900/20"
                        : "bg-zinc-950/50 border-white/[0.06] hover:border-white/[0.14]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-title font-bold text-base ${isActive ? "text-white" : "text-zinc-300"}`}>
                        {service.number} {service.title}
                      </h4>
                      <span className="text-xs font-mono text-purple-400">→</span>
                    </div>
                    {isActive && (
                      <div className="space-y-3 pt-2 text-xs text-zinc-400 font-body">
                        <p>{service.description}</p>
                        <div className="space-y-1.5 pt-2">
                          {service.deliverables.slice(0, 3).map((d, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-title font-bold text-sm shadow-xl shadow-purple-600/30 transition-all active:scale-95"
              >
                <span>Book a Call Directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 2-Column Staggered Masonry Collage of Mobile/Web Screens (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RIGHT_COLLAGE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-3 bg-zinc-950 border ${item.bg} shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between ${
                  idx % 2 === 1 ? "sm:mt-8" : ""
                }`}
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 mb-3 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[10px] font-mono backdrop-blur-md border border-white/10">
                    {item.tag}
                  </span>
                </div>
                <div className="px-2 pb-1 flex items-center justify-between">
                  <span className="font-title font-bold text-sm text-white">
                    {item.title}
                  </span>
                  <span className="text-xs text-purple-400 font-mono">View UI</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
