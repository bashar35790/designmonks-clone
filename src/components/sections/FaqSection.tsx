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
    <section id="faq" className="py-24 bg-white text-zinc-900 relative overflow-hidden border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
            Your Questions{" "}
            <span className="font-brand italic font-normal text-purple-700">
              Answered!
            </span>
          </h2>
          <p className="font-body text-zinc-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about working with Design Monks, sprints, and delivery.
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
                      isOpen ? "bg-purple-700 text-white" : "bg-zinc-200 text-zinc-700"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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

        {/* Bottom Quick Contact */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-bold text-zinc-900 block">
              Have another question?
            </span>
            <span className="text-xs text-zinc-500">
              Speak directly with our leadership team.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-title font-bold text-xs shadow-md transition-all"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
