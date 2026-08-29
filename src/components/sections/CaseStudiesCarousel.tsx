"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface StickyCaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  scope: string;
  bgColor: string;
  image: string;
}

const STICKY_PROJECTS: StickyCaseStudy[] = [
  {
    id: "ai-saas",
    category: "AI SaaS.",
    title: "Designing A Lawyer's Second Brain",
    description:
      "We designed an intuitive AI workspace that simplifies legal research, document analysis, and drafting while helping professionals work faster with complete confidence.",
    scope: "Scope: Branding, Product Design",
    bgColor: "bg-[#F1C4FF]",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "fmcg",
    category: "FMCG",
    title: "Brand Identity Design That Tells Stories",
    description:
      "A playful identity system gave every flavor its own lovable personality while keeping the entire candy family instantly recognizable together.",
    scope: "Scope: Branding, Packaging Design",
    bgColor: "bg-[#BEE5FF]",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "fintech",
    category: "FinTech",
    title: "Next-Gen Institutional Wealth & Asset Console",
    description:
      "Reimagined high-frequency asset management with real-time risk telemetry, portfolio insights, and institutional trading flows for 200k+ users.",
    scope: "Scope: Web App, Mobile UX",
    bgColor: "bg-[#D8F8A5]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "booking-platform",
    category: "Booking Platform",
    title: "Seamless Vacation & Luxury Stays Booking",
    description:
      "Streamlined the end-to-end guest journey from discovery to instant booking with high-converting visual filters and interactive map search.",
    scope: "Scope: Product Design, Mobile App",
    bgColor: "bg-[#FFBDB8]",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "fitness",
    category: "Fitness",
    title: "A Smarter Way to Sweat",
    description:
      "Finding the right gym, booking classes, and tracking fitness goals now feel like one smooth journey instead of separate everyday tasks.",
    scope: "Scope: iOS App, Design System",
    bgColor: "bg-[#A8DDFF]",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ecommerce",
    category: "E-Commerce",
    title: "Luxury Timepiece Marketplace & Escrow",
    description:
      "Engineered an exclusive authentication and collector trading platform with seamless digital provenance, live bidding, and secure escrow settlement.",
    scope: "Scope: Branding, Next.js E-Commerce",
    bgColor: "bg-[#FFECA8]",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
];

export function CaseStudiesCarousel() {
  return (
    <section id="projects" className="py-24 bg-white text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50/50 text-emerald-700 text-xs font-semibold mb-6">
            <span>Industry Wins</span>
          </div>

          <h2 className="font-title text-4xl sm:text-6xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
            Proven Success in <br />
            <span className="font-brand italic font-normal text-zinc-900">
              Every Industry
            </span>
          </h2>
        </div>

        {/* 6 Sticky Stacking Cards */}
        <div className="relative pb-24 space-y-12">
          {STICKY_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              style={{
                top: `${90 + idx * 28}px`,
              }}
              className={`sticky rounded-3xl sm:rounded-[36px] md:rounded-[40px] p-8 sm:p-12 md:p-14 ${project.bgColor} border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[460px] sm:min-h-[500px] flex flex-col justify-center`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Category, Title, Description, Scope */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-brand italic font-semibold text-xl sm:text-2xl text-zinc-900 block mb-3">
                      {project.category}
                    </span>

                    <h3 className="font-title font-extrabold text-2xl sm:text-4xl md:text-[2.6rem] text-zinc-900 tracking-tight leading-[1.16] mb-4">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-body max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs sm:text-sm font-title font-semibold text-zinc-600 block">
                      {project.scope}
                    </span>
                  </div>
                </div>

                {/* Right Column: Device Screen / Showcase Image */}
                <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/11] bg-black/10 border border-black/10 shadow-2xl relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered "See All Projects" Purple CTA Button */}
        <div className="text-center pt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-title font-bold text-sm shadow-xl shadow-purple-600/30 transition-all active:scale-95 cursor-pointer"
          >
            <span>See All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
