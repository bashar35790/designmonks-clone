"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

// --- Location Data ---
const locations = [
  { country: "United States", address: "16 Cove Road\nMount Arlington, NJ 07856" },
  { country: "Australia", address: "155 Bennett Rd, St Clair NSW\n2759" },
  { country: "South Africa", address: "55 Mons Rd, Bellevue East,\nJohannesburg, 2198" },
  { country: "Singapore", address: "6 Raffles Blvd, Marina\nSquare" },
  { country: "Italy", address: "Via Bari, 9, 03043 Cassino,\nFR" },
  { country: "Dubai", address: "AlFattan Downtown - 32d St -\nAl Satwa" },
  { country: "Cyprus", address: "Estias 5, Strovolos\n2001" },
  { country: "Bangladesh", address: "Ventura Iconia, Plot 37 Road\nNo. 11, Banani, Dhaka 1213" },
];

// --- Navigation Data ---
const navSections = [
  {
    title: "Important Links",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "About Us", href: "#about" },
      { label: "Products", href: "#products" },
      { label: "Industry", href: "#industry" },
      { label: "Blogs", href: "#blogs" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "UI/UX Design", href: "#ui-ux" },
      { label: "Web Design", href: "#web-design" },
      { label: "Logo & Branding", href: "#branding" },
      { label: "Webflow Design", href: "#webflow" },
      { label: "Framer Design", href: "#framer" },
    ],
  },
  {
    title: "Specialized Industry",
    links: [
      { label: "Fintech Industry", href: "#fintech" },
      { label: "Healthcare & Fitness Industry", href: "#healthcare" },
      { label: "Edtech Industry", href: "#edtech" },
      { label: "Cybersecurity Industry", href: "#cybersecurity" },
      { label: "Company Deck", href: "#company-deck", hasDownload: true },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Vs Agencies", href: "#vs-agencies" },
      { label: "Vs Freelancers", href: "#vs-freelancers" },
      { label: "Vs Inhouse", href: "#vs-inhouse" },
    ],
  },
];

// --- Partner Badges ---
const partners = [
  { name: "Framer", subtext: "Professional Partner", iconPath: "/images/footer/68a1a630288a807b150cd91a_Frame 1116606739.svg" },
  { name: "Webflow", subtext: "Professional Partner", iconPath: "/images/footer/68a1a625f8231c1a57a017fc_Frame.svg" },
  { name: "Behance", subtext: "Top Team On Behance", iconPath: "/images/footer/68a1a63eef83f7891cb55475_Frame 1116606740.svg" },
  { name: "Dribbble", subtext: "Top Team On Dribbble", iconPath: "/images/footer/68a1a63eef83f7891cb55478_Frame 1116606741.svg" },
  { name: "Clutch", subtext: "Reviewed On", iconPath: "/images/footer/68a1a63e1b6574571b18b9f9_Frame 1116606742.svg" },
  { name: "Google", subtext: "Reviewed On", iconPath: "/images/footer/68a1a6571c705d568fbe3e0d_Google.svg" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#080808] text-white overflow-hidden relative font-body">
      {/* SECTION 1: Locations with Video Background */}
      <section className="relative min-h-[550px] lg:min-h-[650px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
          >
            <source src="/videos/footer_globe.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70" />
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-[#0A101D]/75 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/50 rounded-xl p-5 text-center transition-all duration-300 shadow-lg shadow-black/40 group"
              >
                <h3 className="text-base font-bold text-white mb-1.5 tracking-wide group-hover:text-cyan-300 transition-colors">
                  {loc.country}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed font-light whitespace-pre-line">
                  {loc.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Navigation Links */}
      <section className="relative z-10 border-t border-white/5 bg-[#080808] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Footer Logo */}
          <div className="mb-12">
            <Image
              src="/images/footer/footerwithlogo.avif"
              alt="Design Monks logo"
              width={180}
              height={60}
              priority
              className="w-auto h-12 sm:h-14 object-contain"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {navSections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-sm font-bold text-white tracking-wider">
                  {sec.title}
                </h4>
                <ul className="space-y-3">
                  {sec.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                      >
                        <span>{link.label}</span>
                        {link.hasDownload && (
                          <span className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
                            <ArrowDown className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-px bg-white/5" />
      </div>

      {/* SECTION 3: Partners & Legal Bar */}
      <section className="relative z-10 bg-[#080808] pt-12 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Partner Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center space-y-1.5 text-center">
                <div className="flex items-center gap-1.5 h-7">
                  <Image
                    src={partner.iconPath}
                    alt={partner.name}
                    width={80}
                    height={24}
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <p className="text-[10px] text-zinc-500 font-medium tracking-tight">
                  {partner.subtext}
                </p>
              </div>
            ))}
          </div>

          {/* Legal / Copyright Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 border-t border-white/5 pt-8">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <p className="text-center text-zinc-400 font-normal">
              &copy; {new Date().getFullYear()}, Design Monks LLC, All Rights Reserved.
            </p>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: Footer Logo Watermark Banner */}
      <section className="relative w-full overflow-hidden select-none">
        <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[350px]">
          {/* Final Footer Logo */}
          <Image
            src="/images/footer/footerlogo.avif"
            alt="Design Monks footer logo"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </section>
    </footer>
  );
}