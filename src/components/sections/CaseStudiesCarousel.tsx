"use client";

import React from "react";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

interface PastelCaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  scopeDuration: string;
  bgColor: string;
  textColor: string;
  accentBadgeColor: string;
  image: string;
  quote: string;
  clientName: string;
  clientRole: string;
  avatar: string;
}

const PASTEL_PROJECTS: PastelCaseStudy[] = [
  {
    id: "nexus-ai",
    tag: "AI & SaaS Platform",
    title: "Nexus AI: Next-Gen Multimodal Developer Workspace",
    description: "Reimagined the developer workspace for 200k+ technical engineers with zero-latency dark UI and real-time AI code synthesis.",
    scopeDuration: "Scope: UI/UX + Design System • Duration: 8 Weeks",
    bgColor: "bg-[#EADBFF]",
    textColor: "text-[#2D1B4E]",
    accentBadgeColor: "bg-[#D5BFFF] text-[#2D1B4E]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    quote: "Design Monks delivered beyond our loftiest expectations. Micro-interactions are unmatched.",
    clientName: "Julian Vance",
    clientRole: "VP of Product, Nexus AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "aura-wealth",
    tag: "Fintech & Algorithmic Banking",
    title: "Aura Wealth: Real-Time Institutional Asset Portal",
    description: "High-frequency wealth management dashboard with biometric authentication and real-time portfolio analytics.",
    scopeDuration: "Scope: iOS/Android + Web Dashboard • Duration: 10 Weeks",
    bgColor: "bg-[#DDF2FF]",
    textColor: "text-[#103B56]",
    accentBadgeColor: "bg-[#C4E7FF] text-[#103B56]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    quote: "Onboarding conversion jumped 42% in 30 days. True masters of product UX.",
    clientName: "Elena Rostova",
    clientRole: "COO, Aura Wealth",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "pulse-health",
    tag: "Biotech & Telemetry",
    title: "Pulse Health: Predictive Wearable Telemetry Suite",
    description: "Connecting wearable biosensors with remote medical teams for proactive cardiovascular patient healthcare.",
    scopeDuration: "Scope: Mobile UX + Framer Launch • Duration: 6 Weeks",
    bgColor: "bg-[#E8F8CE]",
    textColor: "text-[#254212]",
    accentBadgeColor: "bg-[#D4F0A8] text-[#254212]",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    quote: "Turned complex biometric data into a calming, intuitive interface.",
    clientName: "Dr. Marcus Chen",
    clientRole: "Co-Founder, Pulse Bio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "krona-luxury",
    tag: "E-Commerce & High-Horology",
    title: "Krona Genève: Collector Marketplace & Escrow",
    description: "Ultra-luxury watch authentication and private collector marketplace featuring real-time provenance tracking.",
    scopeDuration: "Scope: Brand + Next.js E-Com • Duration: 8 Weeks",
    bgColor: "bg-[#FFF0BA]",
    textColor: "text-[#4A3C08]",
    accentBadgeColor: "bg-[#FFE58A] text-[#4A3C08]",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    quote: "Editorial typography and fluid animations feel like a high-jewelry salon.",
    clientName: "Henriette Blanc",
    clientRole: "Creative Director, Krona",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "strata-cloud",
    tag: "Cloud Infra & GPU Compute",
    title: "Strata: Distributed AI Infrastructure Console",
    description: "Self-serve GPU cluster provisioning dashboard with granular cost telemetry and developer API monitoring.",
    scopeDuration: "Scope: Web App + Design System • Duration: 7 Weeks",
    bgColor: "bg-[#FFDEDE]",
    textColor: "text-[#541C1C]",
    accentBadgeColor: "bg-[#FFC4C4] text-[#541C1C]",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    quote: "Engineers loved it! Our community gave the new console a 4.9/5 rating.",
    clientName: "Siddharth Rao",
    clientRole: "VP Engineering, Strata",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "lumina-3d",
    tag: "Creative Studio & Motion",
    title: "Lumina 3D: Generative Spatial Visual Engine",
    description: "Empowering spatial computing teams with real-time 3D asset generation and web-based rendering pipelines.",
    scopeDuration: "Scope: UI/UX + Webflow • Duration: 6 Weeks",
    bgColor: "bg-[#D8EDFF]",
    textColor: "text-[#0E3557]",
    accentBadgeColor: "bg-[#BFDEFF] text-[#0E3557]",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    quote: "Fastest turnaround and cleanest Figma token handoff we've ever seen.",
    clientName: "Arnaud Dupont",
    clientRole: "Managing Director, Lumina",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  },
];

export function CaseStudiesCarousel() {
  return (
    <section id="projects" className="py-24 bg-white text-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
            PROVEN CASE STUDIES
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
            Proven Success in{" "}
            <span className="font-brand italic font-normal text-purple-700">
              Every Industry
            </span>
          </h2>
          <p className="font-body text-zinc-600 text-sm sm:text-base leading-relaxed">
            From hyper-growth AI startups to institutional fintech, see how our design systems drive measurable outcomes.
          </p>
        </div>

        {/* Vertical Stack of Large Pastel Cards (As shown in screenshot) */}
        <div className="space-y-8 mb-16">
          {PASTEL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 ${project.bgColor} ${project.textColor} transition-all duration-300 hover:shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 group`}
            >
              {/* Left Column: Details & Quote */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-bold font-mono ${project.accentBadgeColor}`}>
                    {project.tag}
                  </span>
                </div>

                <h3 className="font-title text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base opacity-80 leading-relaxed font-body max-w-xl">
                  {project.description}
                </p>

                <div className="text-xs font-mono font-semibold opacity-70">
                  {project.scopeDuration}
                </div>

                {/* Client Quote Chip */}
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-black/5 flex items-start gap-3 shadow-sm max-w-lg">
                  <img
                    src={project.avatar}
                    alt={project.clientName}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="text-xs">
                    <p className="text-zinc-800 italic mb-1 font-body">
                      &ldquo;{project.quote}&rdquo;
                    </p>
                    <span className="font-bold text-zinc-900">{project.clientName}</span>{" "}
                    <span className="text-zinc-500">— {project.clientRole}</span>
                  </div>
                </div>

                {/* View Project Button */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white font-title font-bold text-xs hover:bg-zinc-800 transition-all shadow-md group/btn"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Device Screen Mockup */}
              <div className="w-full lg:w-[48%] rounded-2xl overflow-hidden shadow-2xl aspect-[16/11] bg-black/10 border border-black/10 group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered "See All Projects" Purple CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-title font-bold text-sm shadow-xl shadow-purple-600/30 transition-all active:scale-95"
          >
            <span>See All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
