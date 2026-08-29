import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingChipProps {
  score?: string;
  source?: string;
  className?: string;
}

export function RatingChip({
  score = "4.9",
  source = "on Clutch & Google",
  className,
}: RatingChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-white text-xs font-medium backdrop-blur-md transition-all hover:bg-white/[0.1]",
        className
      )}
    >
      <div className="flex items-center gap-0.5 text-amber-400">
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      </div>
      <span className="font-semibold text-white">{score} ★</span>
      <span className="text-zinc-400">{source}</span>
    </div>
  );
}
