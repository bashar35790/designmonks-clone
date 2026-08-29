"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { MAIN_NAV_ITEMS, MORE_MENU_ITEMS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <a href="#" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center font-bold text-black font-title text-base shadow-lg shadow-emerald-500/20">
                DM
              </div>
              <span className="font-title font-bold text-lg tracking-tight text-white">
                DESIGN MONKS
              </span>
            </a>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Navigation
            </span>
            <div className="flex flex-col gap-3">
              {MAIN_NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="font-title text-2xl sm:text-3xl font-bold text-white hover:text-emerald-400 transition-colors flex items-center justify-between py-1"
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                      {item.badge}
                    </span>
                  ) : (
                    <ArrowRight className="w-5 h-5 text-zinc-600" />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-2.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                More Pages
              </span>
              <div className="grid grid-cols-2 gap-2">
                {MORE_MENU_ITEMS.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    className="text-sm text-zinc-400 hover:text-white transition-colors py-1 font-body"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
            <Button
              href="#contact"
              onClick={onClose}
              variant="primary"
              size="lg"
              showArrow
              className="w-full"
            >
              Start a Project
            </Button>
            <Button
              href="https://wa.me/"
              target="_blank"
              onClick={onClose}
              variant="glass"
              size="lg"
              icon={MessageSquare}
              iconPosition="left"
              className="w-full"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
