"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, ArrowRight, Sparkles } from "lucide-react";
import { MAIN_NAV_ITEMS, MORE_MENU_ITEMS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group select-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-300 to-emerald-500 flex items-center justify-center font-title font-extrabold text-black text-lg shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              DM
            </div>
            <div className="flex flex-col">
              <span className="font-title font-bold text-lg tracking-tight text-white leading-none">
                DESIGN MONKS
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mt-0.5">
                Product & UX
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            {MAIN_NAV_ITEMS.map((item, idx) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                  >
                    <button
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
                      aria-expanded={isMegaMenuOpen}
                    >
                      <span>Services</span>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                    </button>

                    <MegaMenu
                      isOpen={isMegaMenuOpen}
                      onClose={() => setIsMegaMenuOpen(false)}
                    />
                  </div>
                );
              }

              return (
                <a
                  key={idx}
                  href={item.href}
                  className="relative px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all flex items-center gap-1.5"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}

            {/* More Flyout */}
            <div
              className="relative"
              onMouseEnter={() => setIsMoreMenuOpen(true)}
              onMouseLeave={() => setIsMoreMenuOpen(false)}
            >
              <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white transition-all cursor-pointer">
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
              </button>

              {isMoreMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 p-2 rounded-2xl bg-zinc-950 border border-white/[0.1] shadow-2xl backdrop-blur-xl z-50 flex flex-col gap-1">
                  {MORE_MENU_ITEMS.map((moreItem, mIdx) => (
                    <a
                      key={mIdx}
                      href={moreItem.href}
                      onClick={() => setIsMoreMenuOpen(false)}
                      className="px-3 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      {moreItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              showArrow
              className="hidden sm:inline-flex text-xs px-5 py-2.5"
            >
              Start a Project
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all lg:hidden cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
