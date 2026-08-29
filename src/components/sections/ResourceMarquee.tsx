"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marquee";


const textItems = [
    "Slide Decks",
    "Mobile Apps",
    "Figma",
    "Social Media",
    "Framer",
    "Branding",
    "Dashboard",
    "Logos",
    "Webflow",
];

const mediaItems = [
    {
        type: "mobile",
        image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=600&auto=format&fit=crop",
        alt: "Mobile Banking App",
    },
    {
        type: "desktop",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
        alt: "Agency Landing Page",
    },
    {
        type: "mobile",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
        alt: "Travel App",
    },
    {
        type: "desktop",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
        alt: "Dashboard Analytics",
    },
    {
        type: "mobile",
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=600&auto=format&fit=crop",
        alt: "AI App",
    },
    {
        type: "desktop",
        image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=900&auto=format&fit=crop",
        alt: "E-Commerce",
    },
];

export function ResourceMarquee() {
    return (
        <section className="py-16 bg-[#F3EBF9] overflow-hidden select-none flex flex-col gap-8">

            {/* 1st Row: Text Marquee (Left) */}
            <Marquee duration="40s" pauseOnHover>
                <div className="flex items-center gap-8 pr-8">
                    {textItems.map((item, index) => (
                        <div key={`top-${index}`} className="flex items-center gap-8">
                            <span className="text-zinc-900 font-medium text-base tracking-tight">{item}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0" />
                        </div>
                    ))}
                </div>
            </Marquee>

            {/* 2nd Row: Image Devices Marquee (Right) */}
            <Marquee duration="50s" direction="right" pauseOnHover>
                <div className="flex items-center gap-6 pr-6 py-2">
                    {mediaItems.map((item, index) => (
                        <div
                            key={`img-${index}`}
                            className={cn(
                                "relative overflow-hidden rounded-[2.2rem] border-[5px] border-zinc-900 bg-zinc-900 shadow-xl shrink-0 transition-transform duration-300 hover:scale-[1.02]",
                                item.type === "mobile"
                                    ? "w-[170px] sm:w-[210px] h-[320px] sm:h-[370px]"
                                    : "w-[320px] sm:w-[480px] h-[320px] sm:h-[370px]"
                            )}
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover rounded-[10px]"
                            />
                        </div>
                    ))}
                </div>
            </Marquee>

            {/* 3rd Row: Text Marquee (Left) */}
            <Marquee duration="45s" pauseOnHover>
                <div className="flex items-center gap-8 pr-8">
                    {textItems.map((item, index) => (
                        <div key={`bottom-${index}`} className="flex items-center gap-8">
                            <span className="text-zinc-900 font-medium text-base tracking-tight">{item}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0" />
                        </div>
                    ))}
                </div>
            </Marquee>

        </section>
    );
}

export default ResourceMarquee;
