"use client";

import React from "react";
import { FAQ_ITEMS } from "@/data/faq";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Your Questions"
          italicAccent="Answered"
          subtitle="Everything you need to know about partnering with Design Monks, onboarding sprints, and deliverables."
          className="mb-16"
        />

        {/* Animated Accordion */}
        <Accordion items={FAQ_ITEMS} defaultOpenIndex={0} className="mb-12" />

        {/* Quick Help Footer */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/[0.08] max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-semibold text-white block">
              Have a question not listed here?
            </span>
            <span className="text-xs text-zinc-400">
              Speak directly with our Chief Operating Officer.
            </span>
          </div>
          <Button href="#contact" variant="emerald" size="sm" showArrow>
            Ask a Question
          </Button>
        </div>
      </div>
    </section>
  );
}
