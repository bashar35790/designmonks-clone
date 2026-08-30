"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ProjectsHeaderSection() {
  return (
    <section className="relative w-full h-[40vh] min-h-[380px] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* 1. Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 brightness-110 contrast-125"
      >
        <source
          src="https://cdn.jsdelivr.net/gh/designmonks/webvideos@main/Abstract_objects_(dark_theme).mp4"
          type="video/mp4"
        />
      </video>

      {/* 2. Primary Green Glow Overlay Layer */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none w-full h-full mix-blend-screen opacity-90"
        style={{
          background: `
            linear-gradient(to top, rgba(5, 150, 105, 0.8) 0%, rgba(2, 44, 30, 0.5) 45%, transparent 100%)
          `
        }}
      />

      {/* 3. Secondary Deep Ambient Radial Light */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-emerald-500/30 blur-[120px] pointer-events-none z-[1]" />

      {/* 4. Top Right Floating Glass Cube Asset */}
      <div className="absolute -top-12 -right-8 sm:right-0 z-10 w-64 sm:w-80 md:w-[420px] lg:w-[480px] aspect-square pointer-events-none filter drop-shadow-[0_20px_50px_rgba(5,150,105,0.4)]">
        <Image
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67fbb9e09e1ee391a7f159d2_Group%202147223906.avif"
          alt="3D Glass Cube Element Top Right"
          fill
          priority
          sizes="(max-width: 768px) 256px, (max-width: 1024px) 420px, 480px"
          className="object-contain"
        />
      </div>

      {/* 5. Bottom Left Floating Glass Cube Asset (ENLARGED & ALIGNED TO LEFT EDGE) */}
      <div className="absolute -bottom-16 left-0 z-10 w-72 sm:w-96 md:w-[480px] lg:w-[540px] aspect-square pointer-events-none filter drop-shadow-[0_25px_60px_rgba(5,150,105,0.45)]">
        <Image
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680abee77b8b1a005391c27b_d06c4296b2ae60af25ab36e28167df46_box%20element.avif"
          alt="3D Glass Cube Element Bottom Left"
          fill
          priority
          sizes="(max-width: 768px) 288px, (max-width: 1024px) 480px, 540px"
          className="object-contain object-left-bottom"
        />
      </div>

      {/* 6. Foreground Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 mx-auto space-y-4">
        {/* Brand Logo Header */}
        <h1 className="font-extrabold tracking-tight text-white text-xl sm:text-2xl md:text-3xl">
          design<span className="font-normal">monks</span>
        </h1>

        {/* Breadcrumb Navigation Capsule */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs text-zinc-200 shadow-[0_0_20px_rgba(5,150,105,0.3)]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-white font-medium">Projects</span>
        </div>

        {/* Hero Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] drop-shadow-lg">
          <span className="font-serif italic font-light">Designs</span> That Speak
          <br />
          Results that <span className="font-serif italic font-light">Matter</span>
        </h2>
      </div>
    </section>
  );
}
