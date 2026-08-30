"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

interface StoryCard {
  id: string;
  company: string;
  founder: string;
  role: string;
  quote: string;
  bgColor: string;
  image: string;
  videoUrl: string;
}

const CLIENT_STORIES: StoryCard[] = [
  {
    id: "klasio",
    company: "klasio",
    founder: "Emran Hasan",
    role: "CEO & Co Founder @ Klasio",
    quote: "Thanks to Design Monks for building a world-class website that captured our brand vision perfectly.",
    bgColor: "bg-[#C4B5FD]",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "ontik",
    company: "Ontik Technology",
    founder: "Moshiur Rahman Radif",
    role: "COO @ Ontik Technologies",
    quote: "We've worked with Design Monks for over 2 years on 10+ projects, and the design velocity is simply unmatched.",
    bgColor: "bg-[#BAE6FD]",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "medease",
    company: "MEDEASE",
    founder: "Arvin",
    role: "Co Founder @ Medease",
    quote: "We tried many designers before, but nothing really worked until we found Design Monks. True product partners.",
    bgColor: "bg-[#FDE68A]",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "salesgo",
    company: "SalesGo",
    founder: "Sebastian",
    role: "Founder @ Salesgo",
    quote: "We started with an MVP and needed a polished enterprise product. Design Monks shipped it in record time.",
    bgColor: "bg-[#BFDBFE]",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "externalize",
    company: "externalize it",
    founder: "David",
    role: "Founder @ Externalize It",
    quote: "Working with Design Monks was a fantastic experience. Their team was super agile, proactive, and thoughtful.",
    bgColor: "bg-[#DDD6FE]",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "goodgenes",
    company: "GoodGenes",
    founder: "Tommy Lu",
    role: "Founder @ GoodGenes",
    quote: "Design Monks did an amazing job bringing my brand to life. From the visual system to the mobile app UX.",
    bgColor: "bg-[#FED7AA]",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
  },
  {
    id: "tatlist",
    company: "Tatlist",
    founder: "Ayesha Karim",
    role: "Head of Growth @ Tatlist",
    quote: "User engagement doubled within two weeks of launching the new interface. Absolutely thrilled with the results!",
    bgColor: "bg-[#D9F99D]",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  },
];

export function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  // Mouse Drag to Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    setHasMoved(true);
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag scroll velocity multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCardClick = (story: StoryCard) => {
    if (!hasMoved) {
      setSelectedVideo({
        url: story.videoUrl,
        title: `${story.founder} (${story.company})`,
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 380;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="stories" className="py-24 bg-white text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50/50 text-emerald-700 text-xs font-semibold mb-6">
              <span>Client Stories</span>
            </div>

            <h2 className="font-title text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.12]">
              Success <span className="font-brand italic font-normal text-zinc-900">Stories</span> <br />
              That <span className="font-brand italic font-normal text-zinc-900">Inspire Us</span>
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3 self-start sm:self-end">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mouse Drag-to-Scroll Video Carousel Container */}
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center gap-6 overflow-x-auto pb-8 no-scrollbar cursor-grab active:cursor-grabbing select-none scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {CLIENT_STORIES.map((story) => (
          <div
            key={story.id}
            onClick={() => handleCardClick(story)}
            className={`relative w-[280px] sm:w-[320px] md:w-[340px] h-[480px] sm:h-[520px] rounded-[32px] overflow-hidden ${story.bgColor} flex-shrink-0 shadow-xl border border-black/5 flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-1.5`}
          >
            {/* Founder Portrait Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={story.image}
                alt={story.founder}
                fill
                sizes="(max-width: 768px) 70vw, 33vw"
                className="object-cover object-top rounded-[10px]"
                draggable={false}
              />
              {/* Bottom Dark Gradient Shadow for High Contrast Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            </div>

            {/* Top Empty Space */}
            <div className="relative z-10 p-6" />

            {/* Center Floating Glass Play Button */}
            <div className="relative z-10 self-center">
              <button
                aria-label={`Play ${story.founder} testimonial video`}
                className="w-14 h-14 rounded-full bg-white/30 group-hover:bg-white/60 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-95 cursor-pointer"
              >
                <Play className="w-6 h-6 fill-white text-white ml-1" />
              </button>
            </div>

            {/* Bottom Content (Company, Quote, Founder Name & Role) */}
            <div className="relative z-10 p-6 sm:p-7 text-white text-left space-y-3">
              {/* Company Logo / Wordmark */}
              <div className="font-title font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                <span>{story.company}</span>
              </div>

              {/* Quote Snippet */}
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-body line-clamp-3">
                &ldquo;{story.quote}&rdquo;
              </p>

              {/* Founder Details */}
              <div className="pt-2 border-t border-white/15">
                <h4 className="font-title font-bold text-sm sm:text-base text-white">
                  {story.founder}
                </h4>
                <span className="text-xs text-white/70 block font-body">
                  {story.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Popup */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}
