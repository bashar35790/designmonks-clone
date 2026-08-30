"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#FAF9FB] text-zinc-900 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 font-medium rounded-full border border-emerald-500/30 bg-emerald-50 text-emerald-600 text-sm mb-6">
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

        {/* Minimal Accordion List */}
        <div className="divide-y divide-zinc-200/80 border-b border-zinc-200/80 mb-12">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.id} className="py-6 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-6 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-title text-lg sm:text-xl font-bold text-zinc-900 leading-snug">
                    {item.question}
                  </span>
                  
                  {/* Chevron Icon Container */}
                  <span
                    className={`w-10 h-10 rounded-full flex shrink-0 items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#6C38CC] text-white shadow-md shadow-purple-600/20"
                        : "border border-purple-600/60 text-purple-600 bg-transparent group-hover:border-purple-600 group-hover:bg-purple-50/50"
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 stroke-[2]" />
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
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pr-12 text-zinc-600 text-sm sm:text-base leading-relaxed font-body">
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

export default FaqSection;
