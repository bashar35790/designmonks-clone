"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#080808] text-white py-20 px-4 sm:px-8 md:px-16 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs font-semibold mb-6">
            What We Do
          </div>
          <h2 className="font-title text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            We Design <span className="italic font-brand font-normal">Brands</span> That{" "}
            <span className="italic font-brand font-normal">Speak</span> to Audiences
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12 items-start relative">

          {/* LEFT COLUMN: Sticky Service Details */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-40 h-auto lg:h-[40vh] flex flex-col justify-center pointer-events-none z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={SERVICES_DATA[activeIndex].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-6 pointer-events-auto transform-gpu"
              >
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {SERVICES_DATA[activeIndex].title}{" "}
                  <span className="italic font-brand font-normal">
                    {SERVICES_DATA[activeIndex].italicTitle}
                  </span>
                </h3>

                <div className="w-full h-[1px] bg-white/10" />

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-sm">
                  {SERVICES_DATA[activeIndex].description}
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

          {/* RIGHT COLUMN: Individual Tracked Sections */}
          <div className="w-full lg:w-7/12 space-y-40 pb-32">
            {SERVICES_DATA.map((service, index) => (
              <ServiceItem
                key={service.id}
                service={service}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

// Individual Card Component with precise Viewport Trigger
function ServiceItem({
  service,
  index,
  setActiveIndex,
}: {
  service: ServiceData;
  index: number;
  setActiveIndex: (idx: number) => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Triggers when the middle 20% of the image block hits the screen center
  const isInView = useInView(itemRef, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div
      ref={itemRef}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center transform-gpu"
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

      {/* Image 2 */}
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
  );
}
