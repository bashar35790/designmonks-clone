"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  aspectRatio?: string;
  overlayText?: string;
}

export function VideoPlayer({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  className,
  aspectRatio = "aspect-video",
  overlayText,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/[0.08]",
        aspectRatio,
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {overlayText && (
        <div className="absolute bottom-4 left-4 right-16 text-xs text-white/80 font-medium truncate pointer-events-none">
          {overlayText}
        </div>
      )}

      {/* Video controls */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
          className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
