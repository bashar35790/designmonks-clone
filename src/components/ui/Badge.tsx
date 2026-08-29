import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "emerald" | "violet" | "outline" | "glass";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  dot = false,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-white/[0.08] text-white/90 border border-white/[0.1]",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    violet: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    outline: "bg-transparent text-zinc-300 border border-white/15",
    glass: "glass-panel text-white/90 border-white/10",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full backdrop-blur-sm transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            variant === "emerald" ? "bg-emerald-400" : "bg-white"
          )}
        />
      )}
      {children}
    </span>
  );
}
