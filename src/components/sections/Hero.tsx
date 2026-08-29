"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, CheckCircle, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VideoModal } from "@/components/ui/VideoModal";

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-6 pb-20 overflow-hidden">
      {/* Background Decorative Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Dynamic Location & Satisfaction Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Globe2 className="w-3.5 h-3.5" />
          <span>Global Product & UX Design Agency</span>
          <span className="text-emerald-500/50">•</span>
          <span className="text-zinc-300 font-normal capitalize">98% Client Satisfaction</span>
        </motion.div>

        {/* Main Split Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6"
        >
          Leading UI/UX Design Agency <br />
          <span className="font-brand font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
            We Design Products That Drive Results
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We partner with fast-growing startups and global enterprises to design high-converting SaaS platforms, mobile applications, and brand identities with obsessive craft.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            showArrow
            className="w-full sm:w-auto shadow-2xl shadow-white/10"
          >
            Book a 15-Min Intro Call
          </Button>

          <Button
            onClick={() => setIsVideoModalOpen(true)}
            variant="glass"
            size="lg"
            icon={Play}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Watch Agency Showreel
          </Button>
        </motion.div>

        {/* Hero Interactive Media Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-emerald-500/5 group"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-zinc-950 border border-white/[0.08]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
              alt="Design Monks Product Showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Play Button Overlay */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play showreel"
              className="absolute inset-0 m-auto w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-6 sm:w-8 h-6 sm:h-8 fill-black ml-1" />
            </button>

            {/* Floating Glassmorphic UI Widgets */}
            <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                +42%
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold text-white block">Avg Conversion Lift</span>
                <span className="text-[11px] text-zinc-400">Measured across 120+ client launches</span>
              </div>
            </div>

            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-medium text-white">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Figma + Next.js Handover</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Design Monks Agency Showreel 2026"
      />
    </section>
  );
}
