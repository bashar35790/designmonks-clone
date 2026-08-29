"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  italicAccent?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  eyebrowIcon?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  italicAccent,
  subtitle,
  align = "center",
  className,
  eyebrowIcon,
}: SectionHeaderProps) {
  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex flex-col max-w-4xl", alignmentStyles[align], className)}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4 backdrop-blur-md">
          {eyebrowIcon}
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4">
        {title}{" "}
        {italicAccent && (
          <span className="font-brand font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
            {italicAccent}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="font-body text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
