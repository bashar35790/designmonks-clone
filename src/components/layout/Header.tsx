"use client";

import React, { useState } from "react";
import { ChevronUp, ArrowRight } from "lucide-react";
import { MORE_MENU_ITEMS } from "@/data/navigation";
import { MegaMenu } from "@/components/layout/MegaMenu";

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Viewport Bottom Dock Navbar Matching Exact Attachment */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-auto max-w-[96vw]">
        <nav className="pointer-events-auto relative flex items-center gap-1.5 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-[22px] bg-[#070709] border-t-2 border-emerald-500/80 border-x border-b border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_-3px_15px_rgba(16,185,129,0.35)] backdrop-blur-3xl">
          {/* Projects Link */}
          <a
            href="#projects"
            className="px-3.5 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-title font-bold text-white hover:text-purple-300 transition-colors whitespace-nowrap"
          >
            Projects
          </a>

          {/* Services Link with Upward Mega-Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
          >
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="px-3.5 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-title font-bold text-white hover:text-purple-300 transition-colors whitespace-nowrap cursor-pointer"
              aria-expanded={isMegaMenuOpen}
            >
              Services
            </button>

            <MegaMenu
              isOpen={isMegaMenuOpen}
              onClose={() => setIsMegaMenuOpen(false)}
            />
          </div>

          {/* Center Prominent CTA: Start a Project -> with Moving White Border Animation */}
          <div className="relative group inline-flex rounded-2xl p-[1.5px] overflow-hidden shadow-[0_4px_25px_rgba(109,40,217,0.5)] hover:shadow-[0_4px_35px_rgba(109,40,217,0.7)] transition-shadow">
            {/* Animated Spinning Conic Light Beam for White Border */}
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ffffff_340deg,transparent_360deg)] animate-[spin_3s_linear_infinite]" />

            {/* Inner Button Content */}
            <a
              href="#contact"
              className="relative z-10 flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-[inherit] bg-gradient-to-r from-[#5B1FE6] via-[#6D28D9] to-[#8032F0] hover:from-[#501ACF] hover:to-[#7329E0] text-white font-title font-extrabold text-sm sm:text-base transition-all duration-300 active:scale-[0.98] whitespace-nowrap overflow-hidden select-none"
            >
              {/* Top-Right Specular Flare Light Glint */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-white via-white/30 to-transparent rounded-tr-[inherit] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

              <span className="relative z-10 tracking-tight">Start a Project</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Career Link */}
          <a
            href="#careers"
            className="px-3.5 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-title font-bold text-white hover:text-purple-300 transition-colors whitespace-nowrap"
          >
            Career
          </a>

          {/* More Upward Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreMenuOpen(true)}
            onMouseLeave={() => setIsMoreMenuOpen(false)}
          >
            <button
              onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
              className="px-3.5 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-title font-bold text-white hover:text-purple-300 transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer"
            >
              <span>More</span>
              <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            {isMoreMenuOpen && (
              <div className="absolute bottom-full right-0 mb-3 w-52 p-2 rounded-2xl bg-zinc-950 border border-white/[0.12] shadow-2xl backdrop-blur-2xl z-50 flex flex-col gap-1">
                {MORE_MENU_ITEMS.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMoreMenuOpen(false)}
                    className="px-3 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
