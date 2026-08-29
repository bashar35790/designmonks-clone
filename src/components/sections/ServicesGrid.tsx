"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ServiceSection {
  id: string;
  title: string;
  italicTitle: string;
  description: string;
  card1: {
    title: string;
    bgColor: string;
    image: string;
  };
  card2: {
    title: string;
    bgColor: string;
    image: string;
  };
}

const SERVICES_DATA: ServiceSection[] = [
  {
    id: "ui-ux",
    title: "UI/UX",
    italicTitle: "Design",
    description:
      "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    card1: {
      title: "Help Organize Your Meeting Schedule",
      bgColor: "bg-[#7DD3FC]",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    },
    card2: {
      title: "Mobile Fintech & Card UI",
      bgColor: "bg-[#86EFAC]",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    },
  },
  {
    id: "web-dev",
    title: "Web",
    italicTitle: "Development",
    description:
      "Frontend Development, Fullstack Web Apps, Next.js & React Architecture, CMS Integration, Performance Optimization, and Interactive Builds.",
    card1: {
      title: "Dashboard Overview (+23.05%)",
      bgColor: "bg-[#FB923C]",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    },
    card2: {
      title: "Interactive E-Commerce Web Portal",
      bgColor: "bg-[#FDE047]",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=900&auto=format&fit=crop",
    },
  },
  {
    id: "branding",
    title: "Logo &",
    italicTitle: "Branding",
    description:
      "Logo Design, Full Branding, Business Branding, 3D Logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.",
    card1: {
      title: "Startio Brand Identity System",
      bgColor: "bg-[#10B981]",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    },
    card2: {
      title: "Mobile Iconography & Widgets",
      bgColor: "bg-[#4ADE80]",
      image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=900&auto=format&fit=crop",
    },
  },
  {
    id: "experiences",
    title: "Design for",
    italicTitle: "Experiences",
    description:
      "Design System Architecture, Micro-interactions, Motion Design, Product Growth UI, Conversion Optimization, and Multi-platform Scaling.",
    card1: {
      title: "Design for Experiences",
      bgColor: "bg-[#FDBA74]",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    },
    card2: {
      title: "Transforming Ideas into Digital Stories",
      bgColor: "bg-[#5EEAD4]",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    },
  },
];

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active index dynamically from 0 to 3
  const activeIndexFloat = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 3]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#040406] text-white"
      style={{ height: "420vh" }} // Provides the scroll space for sticky transition
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Top Header */}
        <div className="text-left mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 text-xs font-semibold mb-3 sm:mb-4">
            <span>What We Do</span>
          </div>

          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            We Design <span className="font-brand italic font-normal text-white">Brands</span> That{" "}
            <span className="font-brand italic font-normal text-white">Speak</span> to Audiences
          </h2>
        </div>

        {/* Center Grid: Left Text Navigation & Right Staggered Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center flex-1 my-auto">
          {/* Left Column: Interactive Service Text */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            {SERVICES_DATA.map((service, idx) => {
              // Smooth opacity for each step
              const stepOpacity = useTransform(
                scrollYProgress,
                [
                  (idx - 0.5) / 3.5,
                  idx / 3.5,
                  (idx + 0.5) / 3.5,
                ],
                [0.35, 1, idx === 3 ? 1 : 0.35]
              );

              return (
                <motion.div
                  key={service.id}
                  style={{
                    opacity: stepOpacity,
                  }}
                  className="transition-all duration-300"
                >
                  <h3 className="font-title text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                    {service.title}{" "}
                    <span className="font-brand italic font-normal text-white">
                      {service.italicTitle}
                    </span>
                  </h3>

                  {/* Expandable description */}
                  <motion.div
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [(idx - 0.2) / 3.5, idx / 3.5, (idx + 0.3) / 3.5],
                        [0, 1, idx === 3 ? 1 : 0]
                      ),
                      height: useTransform(
                        scrollYProgress,
                        [(idx - 0.2) / 3.5, idx / 3.5, (idx + 0.3) / 3.5],
                        ["0px", "auto", idx === 3 ? "auto" : "0px"]
                      ),
                    }}
                    className="overflow-hidden space-y-3 pt-2"
                  >
                    <div className="h-0.5 w-12 bg-[#6D28D9] rounded-full" />
                    <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed font-body max-w-sm">
                      {service.description}
                    </p>
                    <div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-title font-bold text-[#8B5CF6] hover:text-[#A78BFA] transition-colors"
                      >
                        <span>See More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Sticky Card Pairs */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] md:h-[480px] w-full flex items-center justify-center">
            {SERVICES_DATA.map((service, idx) => {
              // Fade and slide transitions between image pairs
              const cardOpacity = useTransform(
                scrollYProgress,
                [
                  (idx - 0.35) / 3.5,
                  idx / 3.5,
                  (idx + 0.35) / 3.5,
                ],
                [0, 1, idx === 3 ? 1 : 0]
              );

              const cardY = useTransform(
                scrollYProgress,
                [
                  (idx - 0.35) / 3.5,
                  idx / 3.5,
                  (idx + 0.35) / 3.5,
                ],
                [40, 0, idx === 3 ? 0 : -40]
              );

              const cardScale = useTransform(
                scrollYProgress,
                [
                  (idx - 0.35) / 3.5,
                  idx / 3.5,
                  (idx + 0.35) / 3.5,
                ],
                [0.94, 1, idx === 3 ? 1 : 0.94]
              );

              return (
                <motion.div
                  key={service.id}
                  style={{
                    opacity: cardOpacity,
                    y: cardY,
                    scale: cardScale,
                    pointerEvents: idx === 3 ? "auto" : "none",
                  }}
                  className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 items-center"
                >
                  {/* Card 1 */}
                  <div
                    className={`rounded-[32px] p-4 sm:p-5 ${service.card1.bgColor} aspect-[4/5] shadow-2xl overflow-hidden relative group flex items-center justify-center`}
                  >
                    <img
                      src={service.card1.image}
                      alt={service.card1.title}
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                  </div>

                  {/* Card 2 (Staggered Vertical Offset) */}
                  <div
                    className={`rounded-[32px] p-4 sm:p-5 ${service.card2.bgColor} aspect-[4/5] shadow-2xl overflow-hidden relative group sm:mt-10 flex items-center justify-center`}
                  >
                    <img
                      src={service.card2.image}
                      alt={service.card2.title}
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Centered "Book a Call ->" Purple CTA Button with Moving Border */}
        <div className="text-center pt-4">
          <div className="relative group inline-flex rounded-full p-[1.5px] overflow-hidden shadow-[0_4px_25px_rgba(109,40,217,0.5)] hover:shadow-[0_4px_35px_rgba(109,40,217,0.7)] transition-shadow">
            {/* Animated Spinning Conic Light Beam for White Border */}
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ffffff_340deg,transparent_360deg)] animate-[spin_3s_linear_infinite]" />

            {/* Inner Button Content */}
            <a
              href="#contact"
              className="relative z-10 flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5B1FE6] via-[#6D28D9] to-[#8032F0] hover:from-[#501ACF] hover:to-[#7329E0] text-white font-title font-extrabold text-sm transition-all duration-300 active:scale-[0.98] whitespace-nowrap overflow-hidden select-none cursor-pointer"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
