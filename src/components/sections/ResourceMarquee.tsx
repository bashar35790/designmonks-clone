"use client";

import React from "react";

// Sample text items for the top and bottom marquees
const marqueeItems = [
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

// Sample showcase items alternating between mobile frame ratio and laptop/tablet ratio
const showcaseItems = [
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
        alt: "Travel Mobile App",
    },
    {
        type: "desktop",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
        alt: "Dashboard Analytics",
    },
    {
        type: "mobile",
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=600&auto=format&fit=crop",
        alt: "AI NFT App",
    },
    {
        type: "desktop",
        image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=900&auto=format&fit=crop",
        alt: "E-Commerce Website",
    },
    {
        type: "mobile",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=600&auto=format&fit=crop",
        alt: "Healthcare App",
    },
];

export function ResourceMarquee() {
    return (
        <section className="py-16 bg-[#F3EBF9] overflow-hidden select-none flex flex-col gap-10">

            {/* 1ST MARQUEE: Text Moving Left */}
            <div className="flex overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee items-center gap-6 shrink-0 text-zinc-800 font-medium text-sm sm:text-base tracking-wide">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                        <React.Fragment key={`top-${index}`}>
                            <span>{item}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 inline-block" />
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* 2ND MARQUEE: Device Mockup Cards Moving Right */}
            <div className="flex overflow-hidden whitespace-nowrap py-2">
                <div className="flex animate-marquee-reverse items-center gap-6 shrink-0">
                    {[...showcaseItems, ...showcaseItems].map((card, index) => (
                        <div
                            key={`card-${index}`}
                            className={`relative overflow-hidden rounded-[2.5rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-2xl shrink-0 transition-transform duration-300 hover:scale-[1.02] ${card.type === "mobile"
                                ? "w-[160px] sm:w-[200px] h-[300px] sm:h-[360px]"
                                : "w-[300px] sm:w-[460px] h-[300px] sm:h-[360px]"
                                }`}
                        >
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-full object-cover rounded-[2rem]"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* 3RD MARQUEE: Text Moving Left */}
            <div className="flex overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee items-center gap-6 shrink-0 text-zinc-800 font-medium text-sm sm:text-base tracking-wide">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                        <React.Fragment key={`bottom-${index}`}>
                            <span>{item}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 inline-block" />
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default ResourceMarquee;
