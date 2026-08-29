"use client";

import React, { useState } from "react";
import { VIDEO_TESTIMONIALS } from "@/data/testimonials";
import { Play, Star, CheckCircle } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

export function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <section className="py-24 bg-[#FAFAFC] text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
            FOUNDER STORIES
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
            Success Stories That{" "}
            <span className="font-brand italic font-normal text-purple-700">
              Inspire Us
            </span>
          </h2>
          <p className="font-body text-zinc-600 text-sm sm:text-base leading-relaxed">
            Hear directly from the founders and executives who scaled their core metrics with Design Monks.
          </p>
        </div>

        {/* 4 Portrait Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-zinc-200/80 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-3"
            >
              {/* Portrait Video Thumbnail */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[9/13] bg-zinc-900 mb-3 cursor-pointer"
                onClick={() =>
                  setSelectedVideo({
                    url: testimonial.videoUrl,
                    title: `${testimonial.clientName} (${testimonial.clientCompany})`,
                  })
                }
              >
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.clientName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Duration Badge */}
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 text-white text-[11px] font-mono backdrop-blur-md">
                  {testimonial.duration}
                </span>

                {/* Play Button */}
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/50 group-hover:scale-110 active:scale-95 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>

                {/* Quote Text */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="flex items-center gap-0.5 text-amber-400 mb-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/90 line-clamp-3 italic leading-snug font-body">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Client Info */}
              <div className="px-2 pb-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-title text-sm font-bold text-zinc-900 flex items-center gap-1">
                      <span>{testimonial.clientName}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    </h4>
                    <span className="text-[11px] text-zinc-500 block font-body">
                      {testimonial.clientRole}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-[10px] font-mono font-bold text-purple-700">
                    {testimonial.clientCompany}
                  </span>
                </div>
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
