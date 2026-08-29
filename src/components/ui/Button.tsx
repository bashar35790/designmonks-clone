"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "emerald";
  size?: "sm" | "md" | "lg" | "xl";
  showArrow?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  href?: string;
  target?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      showArrow = false,
      icon: Icon,
      iconPosition = "right",
      className,
      href,
      target,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-4 gap-2.5",
      xl: "text-lg px-10 py-5 gap-3",
    };

    const variantStyles = {
      primary:
        "bg-white text-black font-semibold hover:bg-[#E5E5EA] active:scale-[0.98] shadow-lg shadow-white/10 hover:shadow-white/20",
      secondary:
        "bg-zinc-900 text-white border border-white/10 hover:border-white/20 hover:bg-zinc-800 active:scale-[0.98]",
      outline:
        "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]",
      ghost:
        "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
      glass:
        "glass-panel text-white hover:bg-white/10 active:scale-[0.98] border border-white/10",
      emerald:
        "bg-emerald-500 text-black font-semibold hover:bg-emerald-400 active:scale-[0.98] shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30",
    };

    const content = (
      <>
        {Icon && iconPosition === "left" && (
          <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        )}
        <span>{children}</span>
        {Icon && iconPosition === "right" && (
          <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        )}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          whileTap={{ scale: 0.98 }}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
