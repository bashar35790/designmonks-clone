"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { MegaMenu } from "@/components/layout/MegaMenu";

export function Header() {
  const [activeMenu, setActiveMenu] = useState<"services" | "more" | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-auto max-w-[96vw]">
      <nav className="pointer-events-auto relative flex items-center gap-1 sm:gap-3 px-2 sm:px-4 py-2 rounded-full bg-[#070709] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-3xl">
        
        {/* Projects Link */}
        <a
          href="/projects"
          className="px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
        >
          Projects
        </a>

        {/* Services Link with Upward Mega-Menu */}
        <div
          className="relative"
          onMouseEnter={() => setActiveMenu("services")}
        >
          <button
            onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
            className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              activeMenu === "services" ? "text-purple-400" : "text-zinc-300 hover:text-white"
            }`}
          >
            Services
          </button>

          <MegaMenu
            isOpen={activeMenu === "services"}
            onClose={() => setActiveMenu(null)}
            type="services"
          />
        </div>

        {/* Start a Project CTA */}
        <div className="relative group inline-flex rounded-full p-[1.5px] overflow-hidden shadow-[0_4px_25px_rgba(109,40,217,0.5)]">
          <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ffffff_340deg,transparent_360deg)] animate-[spin_3s_linear_infinite]" />
          
          <a
            href="#contact"
            className="relative z-10 flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#5B1FE6] via-[#6D28D9] to-[#8032F0] hover:from-[#501ACF] hover:to-[#7329E0] text-white font-extrabold text-xs sm:text-sm transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Career Link */}
        <a
          href="#careers"
          className="px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
        >
          Career
        </a>

        {/* More Upward Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setActiveMenu("more")}
        >
          <button
            onClick={() => setActiveMenu(activeMenu === "more" ? null : "more")}
            className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              activeMenu === "more" ? "text-purple-400" : "text-zinc-300 hover:text-white"
            }`}
          >
            More
          </button>

          <MegaMenu
            isOpen={activeMenu === "more"}
            onClose={() => setActiveMenu(null)}
            type="more"
          />
        </div>
      </nav>
    </div>
  );
}
