"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_MEGA_MENU } from "@/data/navigation";
import { Layout, Code2, Sparkles, Cpu, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-emerald-400" />,
  Code2: <Code2 className="w-5 h-5 text-teal-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
  Cpu: <Cpu className="w-5 h-5 text-violet-400" />,
  Layers: <Layers className="w-5 h-5 text-blue-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-pink-400" />,
};

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[740px] max-w-[90vw] p-6 rounded-3xl bg-zinc-950/95 border border-white/[0.14] shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
          onMouseLeave={onClose}
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
              <span className="font-title text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Design &amp; Engineering Services
              </span>
              <a
                href="#services"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES_MEGA_MENU.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all shrink-0 mt-0.5">
                    {iconMap[item.iconName] || <Layout className="w-5 h-5 text-purple-400" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-title text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </span>
                      {item.badge && (
                        <Badge
                          variant={item.badge === "Popular" ? "emerald" : "violet"}
                          size="sm"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
