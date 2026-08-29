"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, ArrowRight, Menu } from "lucide-react";
import { MORE_MENU_ITEMS } from "@/data/navigation";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header Bar: Minimal Brand Logo & Mobile Trigger */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-6 sm:px-10 flex items-center justify-between",
          isScrolled ? "bg-black/60 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
        )}
      >
        <a href="#" className="flex items-center gap-2.5 group select-none">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-400 flex items-center justify-center font-title font-black text-white text-base shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
            DM
          </div>
          <span className="font-title font-extrabold text-base sm:text-lg tracking-tight text-white">
            DESIGN MONKS
          </span>
        </a>

        {/* Top Right Mobile Trigger & Quick Action */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white/80 hover:text-white bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-all"
          >
            <span>Book Intro Call</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition-all md:hidden cursor-pointer"
            aria-label="Open Mobile Navigation"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Floating Viewport Bottom Dock Navbar (As shown in screenshot) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        {/* Ambient Purple Underglow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 via-violet-500/50 to-emerald-500/30 rounded-full blur-xl opacity-80 pointer-events-none" />

        <nav className="pointer-events-auto relative flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#0B0B0E]/95 border border-emerald-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_-2px_15px_rgba(16,185,129,0.2)] backdrop-blur-2xl">
          {/* Projects Link */}
          <a
            href="#projects"
            className="px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-title font-semibold text-white/90 hover:text-white hover:bg-white/[0.06] transition-all whitespace-nowrap"
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
              className="px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-title font-semibold text-white/90 hover:text-white hover:bg-white/[0.06] transition-all whitespace-nowrap cursor-pointer"
              aria-expanded={isMegaMenuOpen}
            >
              Services
            </button>

            <MegaMenu
              isOpen={isMegaMenuOpen}
              onClose={() => setIsMegaMenuOpen(false)}
            />
          </div>

          {/* Center Prominent CTA: Start a Project -> with Specular Highlight */}
          <a
            href="#contact"
            className="relative group flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-black/80 hover:bg-black text-white font-title font-bold text-xs sm:text-sm border border-white/30 hover:border-white/60 shadow-lg shadow-black/60 transition-all duration-300 active:scale-95 whitespace-nowrap overflow-hidden"
          >
            {/* Top-Right Specular Light Ray */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-white via-white/40 to-transparent rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <span className="relative z-10 tracking-tight">Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Career Link */}
          <a
            href="#careers"
            className="px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-title font-semibold text-white/90 hover:text-white hover:bg-white/[0.06] transition-all whitespace-nowrap"
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
              className="px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-title font-semibold text-white/90 hover:text-white hover:bg-white/[0.06] transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer"
            >
              <span>More</span>
              <ChevronUp className="w-3 h-3 text-zinc-400" />
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

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
