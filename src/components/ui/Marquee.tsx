"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  duration?: string;
  pauseOnHover?: boolean;
  className?: string;
  repeat?: number;
}

export function Marquee({
  children,
  direction = "left",
  speed = "slow",
  duration,
  pauseOnHover = false,
  className,
  repeat = 2,
}: MarqueeProps) {
  const speedDurations = {
    slow: "75s",
    normal: "45s",
    fast: "25s",
  };

  const animationStyle: React.CSSProperties = {
    animationDuration: duration || speedDurations[speed],
    animationDirection: direction === "right" ? "reverse" : "normal",
    willChange: "transform",
  };

  return (
    <div
      className={cn(
        "group flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]",
        className
      )}
    >
      <div
        style={animationStyle}
        className={cn(
          "flex shrink-0 items-center justify-around gap-2 sm:gap-3 animate-marquee-left [transform:translateZ(0)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2 sm:gap-3">
            {children}
          </div>
        ))}
      </div>
      <div
        style={animationStyle}
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-2 sm:gap-3 animate-marquee-left [transform:translateZ(0)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={`dup-${i}`} className="flex shrink-0 items-center gap-2 sm:gap-3">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
