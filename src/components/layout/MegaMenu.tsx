"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MediaPreviewCard } from "../ui/Badge";

export interface MenuItem {
  title: string;
  description: string;
  href: string;
}

const SERVICES_ITEMS: MenuItem[] = [
  { title: "UI UX", description: "Creating user-friendly digital experiences.", href: "#ui-ux" },
  { title: "Logo & Branding", description: "Creating memorable identities for brands.", href: "#branding" },
  { title: "Web Design", description: "Building visually appealing & functional websites.", href: "#web-design" },
  { title: "Webflow Design", description: "Developing responsive websites effortlessly.", href: "#webflow" },
  { title: "Framer Design", description: "Interactive web designs are made simple.", href: "#framer" },
  { title: "SaaS Design", description: "Intuitive interfaces that boost user engagement.", href: "#saas" },
];

const MORE_ITEMS: MenuItem[] = [
  { title: "Home", description: "Home is where the monk lives", href: "#home" },
  { title: "About us", description: "The journey of Design Monks", href: "#about" },
  { title: "Meet the team", description: "An overview of the Monk family", href: "#team" },
  { title: "Blogs", description: "A collection of informative blogs", href: "#blogs" },
  { title: "Career", description: "Work with top global brands, grow your skills", href: "#careers" },
  { title: "Contact us", description: "Start your dream design journey from here", href: "#contact" },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  type: "services" | "more";
}

export function MegaMenu({ isOpen, onClose, type }: MegaMenuProps) {
  const menuItems = type === "services" ? SERVICES_ITEMS : MORE_ITEMS;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute bottom-full mb-4 z-50 w-[92vw] max-w-[760px] pointer-events-auto ${
            type === "services" ? "left-0 sm:-left-20" : "right-0 sm:-right-6"
          }`}
          onMouseLeave={onClose}
        >
          {/* Main White Card Modal Wrapper */}
          <div className="relative bg-white text-zinc-900 rounded-[28px] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-black/5">
            <div
              className={`flex flex-col md:flex-row gap-6 items-center ${
                type === "more" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Link Options Column */}
              <div className="flex-1 w-full space-y-4 py-1">
                {menuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    className="group block rounded-xl p-1.5 transition-colors hover:bg-zinc-50"
                  >
                    <h4 className="text-sm sm:text-base font-semibold text-zinc-900 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-normal leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>

              {/* Dynamic Dark Preview Media Card Column */}
              <MediaPreviewCard type={type} />
            </div>

            {/* Downward Pointer Arrow Matching White Background */}
            <div
              className={`absolute -bottom-2.5 w-5 h-5 bg-white rotate-45 rounded-sm border-r border-b border-black/5 ${
                type === "services" ? "left-16" : "right-12"
              }`}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
