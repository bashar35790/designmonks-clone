"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaqItem } from "@/types";

interface AccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenIndex = 0,
  className,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("flex flex-col gap-3 w-full max-w-3xl mx-auto", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.id || idx}
            className={cn(
              "rounded-2xl border transition-all duration-300 overflow-hidden",
              isOpen
                ? "bg-zinc-900/90 border-emerald-500/30 shadow-lg shadow-emerald-500/5"
                : "glass-panel border-white/[0.08] hover:border-white/[0.16] hover:bg-zinc-900/50"
            )}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <span className="font-title text-base sm:text-lg font-semibold text-white tracking-tight">
                {item.question}
              </span>
              <span
                className={cn(
                  "p-2 rounded-full transition-colors flex shrink-0 items-center justify-center",
                  isOpen
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-white/[0.05] text-zinc-400 group-hover:text-white"
                )}
              >
                {isOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 sm:px-8 pb-6 text-zinc-400 text-sm sm:text-base leading-relaxed border-t border-white/[0.06] pt-4 font-body">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
