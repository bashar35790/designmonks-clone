"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CaseStudiesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Case Studies & Work"
            title="Proven Success in"
            italicAccent="Every Industry"
            subtitle="Explore how we helped visionary founders and enterprise leaders turn ambitious ideas into category-defining digital products."
          />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous Project"
              className="p-3 rounded-full bg-zinc-900 border border-white/10 hover:border-white/20 text-white hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next Project"
              className="p-3 rounded-full bg-zinc-900 border border-white/10 hover:border-white/20 text-white hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={emblaRef}>
        <div className="flex -ml-6">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_65%] min-w-0 pl-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 flex flex-col justify-between h-full group">
                {/* Project Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 mb-6 border border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 text-emerald-400 text-xs font-semibold backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 text-zinc-300 text-xs font-medium backdrop-blur-md border border-white/10">
                      {project.duration}
                    </span>
                  </div>

                  {project.stats && (
                    <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-black/80 border border-emerald-500/30 backdrop-blur-md flex items-center gap-2">
                      <span className="text-xs text-zinc-400 font-medium">
                        {project.stats.label}:
                      </span>
                      <span className="text-sm font-bold text-emerald-400 font-mono">
                        {project.stats.value}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-title text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-body">
                    {project.description}
                  </p>

                  {/* Testimonial Quote Pill */}
                  {project.testimonial && (
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6 flex items-start gap-3">
                      <img
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                        className="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5"
                      />
                      <div className="text-xs">
                        <p className="text-zinc-300 italic mb-1">
                          &ldquo;{project.testimonial.quote}&rdquo;
                        </p>
                        <span className="font-semibold text-white">
                          {project.testimonial.author}
                        </span>{" "}
                        <span className="text-zinc-500">
                          — {project.testimonial.role}, {project.testimonial.company}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Scope Tags & CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.scope.map((tag, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 text-[11px] font-mono border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-emerald-400 transition-colors group/link"
                    >
                      <span>Request Case Study Deck</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
