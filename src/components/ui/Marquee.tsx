"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
  repeat?: number;
}

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  repeat = 4,
}: MarqueeProps) {
  const speedDurations = {
    slow: "60s",
    normal: "35s",
    fast: "20s",
  };

  const animationStyle: React.CSSProperties = {
    animationDuration: speedDurations[speed],
    animationDirection: direction === "right" ? "reverse" : "normal",
  };

  return (
    <div
      className={cn(
        "group flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]",
        className
      )}
    >
      <div
        style={animationStyle}
        className={cn(
          "flex shrink-0 items-center justify-around gap-6 animate-marquee-left",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-6">
            {children}
          </div>
        ))}
      </div>
      <div
        style={animationStyle}
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-6 animate-marquee-left",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={`dup-${i}`} className="flex shrink-0 items-center gap-6">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
