"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceData {
  id: string;
  title: string;
  italicTitle: string;
  description: string;
  images: [string, string];
}

const SERVICES_DATA: ServiceData[] = [
  {
    id: "uiux",
    title: "UI/UX",
    italicTitle: "Design",
    description:
      "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "webdev",
    title: "Web",
    italicTitle: "Development",
    description:
      "Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "branding",
    title: "Logo &",
    italicTitle: "Branding",
    description:
      "Logo Design, Full Branding, Business Branding, 3D Logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "motion",
    title: "Motion &",
    italicTitle: "3D Art",
    description:
      "3D Modeling, Motion Graphics, Interactive Design, Brand Animations, Promo Videos, Micro-Interactions, and Visual Storytelling.",
    images: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track overall scroll progress inside the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active index dynamically during scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = 1 / SERVICES_DATA.length;
    const currentIndex = Math.min(
      Math.floor(latest / step),
      SERVICES_DATA.length - 1
    );
    if (currentIndex !== activeIndex && currentIndex >= 0) {
      setActiveIndex(currentIndex);
    }
  });

  const currentService = SERVICES_DATA[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#080808] text-white py-16 px-4 sm:px-8 md:px-16 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION: Tag & Main Title across full width */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs font-semibold mb-6">
            What We Do
          </div>
          <h2 className="font-title text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            We Design <span className="italic font-brand font-normal">Brands</span> That{" "}
            <span className="italic font-brand font-normal">Speak</span> to Audiences
          </h2>
        </div>

        {/* BOTTOM CONTENT: Sticky Left Info + Scrolling Right Images */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT COLUMN: Sticky Service Details */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-40 h-auto lg:h-[40vh] flex flex-col justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 pointer-events-auto"
              >
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {currentService.title}{" "}
                  <span className="italic font-brand font-normal">
                    {currentService.italicTitle}
                  </span>
                </h3>

                <div className="w-full h-[1px] bg-white/10" />

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-sm">
                  {currentService.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors group"
                >
                  <span>See More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Scrolling Image Pairs */}
          <div className="w-full lg:w-7/12 space-y-32">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
              >
                {/* Image 1 */}
                <div className="rounded-[10px] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl h-[380px] sm:h-[460px] relative group">
                  <Image
                    src={service.images[0]}
                    alt={`${service.title} preview 1`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Image 2 (Staggered) */}
                <div className="rounded-[10px] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl h-[340px] sm:h-[420px] relative sm:mt-16 group">
                  <Image
                    src={service.images[1]}
                    alt={`${service.title} preview 2`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}