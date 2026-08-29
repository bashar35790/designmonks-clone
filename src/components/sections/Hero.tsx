"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Play, Sparkles } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

const HERO_COLLAGE_ROW_1 = [
  { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", title: "SaaS Analytics Dashboard" },
  { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop", title: "Mobile Banking App" },
  { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", title: "3D Product Visuals" },
  { img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", title: "AI Workflow Suite" },
];

const HERO_COLLAGE_ROW_2 = [
  { img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop", title: "Webflow Interactive Site" },
  { img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop", title: "Design System Tokens" },
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", title: "Enterprise Cloud Console" },
  { img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop", title: "Luxury E-Commerce" },
];

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-16 sm:pt-20 pb-20 overflow-hidden bg-gradient-to-b from-[#0B0418] via-[#12072B] to-[#180A38] text-white">
      {/* Background Dot Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* Ambient Purple Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Trust Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-xl text-xs font-semibold uppercase tracking-wider text-purple-300 mb-6 shadow-lg shadow-purple-900/30"
        >
          <div className="flex items-center gap-0.5 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
          <span>4.9 ★ Rating on Clutch &amp; Google</span>
          <span className="text-white/30">•</span>
          <span className="text-zinc-300 capitalize font-normal">Leading UI/UX Agency</span>
        </motion.div>

        {/* Big Two-Line Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6"
        >
          We Design Products That <br />
          <span className="font-brand font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-200 to-emerald-300">
            Drive Results
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-purple-200/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Partnering with ambitious founders and Fortune 500 leaders to build award-winning digital experiences, SaaS platforms, and mobile apps.
        </motion.p>

        {/* Centered Purple "Book a Call" CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-title font-bold text-base shadow-[0_0_40px_rgba(109,40,217,0.5)] hover:shadow-[0_0_50px_rgba(109,40,217,0.7)] transition-all active:scale-95"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Multi-Row Staggered Image Collage Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 max-w-6xl mx-auto"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {HERO_COLLAGE_ROW_1.map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10 shadow-2xl hover:border-purple-500/50 hover:scale-[1.03] transition-all duration-300"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-xs font-semibold text-white truncate">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {HERO_COLLAGE_ROW_2.map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10 shadow-2xl hover:border-emerald-500/50 hover:scale-[1.03] transition-all duration-300"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-xs font-semibold text-white truncate">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Design Monks Product Reel"
      />
    </section>
  );
}
