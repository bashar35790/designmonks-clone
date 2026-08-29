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
  const speedDurations: Record<string, string> = {
    slow: "75s",
    normal: "45s",
    fast: "25s",
  };

  const dur = duration || speedDurations[speed];
  const keyframeName = direction === "right" ? "marqueeRight" : "marqueeLeft";

  // Use full animation shorthand to avoid any CSS class specificity conflicts
  const animationStyle: React.CSSProperties = {
    animation: `${keyframeName} ${dur} linear infinite`,
    willChange: "transform",
  };

  const trackClass = cn(
    "flex shrink-0 items-center gap-4 sm:gap-6 [transform:translateZ(0)]",
    pauseOnHover && "group-hover:[animation-play-state:paused]"
  );

  return (
    <div
      className={cn(
        "group flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]",
        className
      )}
    >
      {/* Track A */}
      <div style={animationStyle} className={trackClass}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-4 sm:gap-6">
            {children}
          </div>
        ))}
      </div>

      {/* Track B — duplicate, stays in sync */}
      <div style={animationStyle} aria-hidden="true" className={trackClass}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={`dup-${i}`} className="flex shrink-0 items-center gap-4 sm:gap-6">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
