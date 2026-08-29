"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-white text-zinc-900 relative overflow-hidden border-b border-zinc-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 text-xs font-medium mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="font-title text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-4">
            Your Questions{" "} <br />
            <span className="font-brand italic font-normal">
              Answered!
            </span>
          </h2>
          <p className="font-body text-zinc-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about working with Design Monks,
            sprints, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-purple-50/40 border-purple-300 shadow-md"
                    : "bg-zinc-50/50 border-zinc-200/80 hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-title text-base sm:text-lg font-bold text-zinc-900">
                    {item.question}
                  </span>
                  <span
                    className={`p-2 rounded-full flex shrink-0 items-center justify-center transition-colors ${
                      isOpen
                        ? "bg-purple-700 text-white"
                        : "bg-zinc-200 text-zinc-700"
                    }`}
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
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-purple-100 pt-4 font-body">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
