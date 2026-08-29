"use client";

import React, { useState } from "react";
import { VIDEO_TESTIMONIALS } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Play, Star, CheckCircle, Quote } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

export function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Real Client Feedback"
          title="Success Stories That"
          italicAccent="Inspire Us"
          subtitle="Watch how founders, VPs of Product, and engineering leaders scaled their metrics with Design Monks."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between p-4 shadow-xl"
            >
              {/* Thumbnail with Play Trigger */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 mb-4 cursor-pointer"
                   onClick={() => setSelectedVideo({ url: testimonial.videoUrl, title: `${testimonial.clientName} (${testimonial.clientCompany})` })}
              >
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.clientName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Duration Badge */}
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 text-zinc-300 text-[11px] font-mono backdrop-blur-md border border-white/10">
                  {testimonial.duration}
                </span>

                {/* Play Button Icon */}
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-lg shadow-emerald-500/40 group-hover:scale-110 active:scale-95 transition-transform">
                  <Play className="w-5 h-5 fill-black ml-0.5" />
                </div>

                {/* Overlay Quote Snippet */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/90 line-clamp-3 italic leading-snug">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Client Info */}
              <div className="px-2 pb-2">
                <div className="flex items-center gap-2.5 mb-1">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.clientName}
                    className="w-8 h-8 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="font-title text-sm font-bold text-white flex items-center gap-1">
                      <span>{testimonial.clientName}</span>
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    </h4>
                    <span className="text-[11px] text-zinc-400 block font-body">
                      {testimonial.clientRole}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 block">
                  @{testimonial.clientCompany}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}
