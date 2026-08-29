import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { DualMarquee } from "@/components/sections/DualMarquee";
import { CaseStudiesCarousel } from "@/components/sections/CaseStudiesCarousel";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { AIProcess } from "@/components/sections/AIProcess";
import { ShowreelBlock } from "@/components/sections/ShowreelBlock";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { CareersTeaser } from "@/components/sections/CareersTeaser";
import { TestimonialsWall } from "@/components/sections/TestimonialsWall";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadGenForm } from "@/components/sections/LeadGenForm";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import ResourceMarquee from "@/components/sections/ResourceMarquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F7] flex flex-col selection:bg-purple-500 selection:text-white pb-16">
      {/* Top Header & Bottom Floating Dock Navbar */}
      <Header />

      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section (Purple Nebula + Project Collage) */}
        <Hero />

        {/* 2. Client Logos Marquee (Clean White) */}
        <DualMarquee />

        {/* 3. Case Studies (Pastel-Tinted Cards: Lilac, Sky Blue, Lime, Yellow, Salmon, Powder Blue) */}
        <CaseStudiesCarousel />

        {/* 4. Video Testimonials (Portrait Cards on Light Background) */}
        <VideoTestimonials />

        {/* 5. AI-Powered 4-Step Process (Dark Obsidian with Purple Accents) */}
        <AIProcess />

        {/* 6. Agency Showreel Banner (Clean Light Background) */}
        <ShowreelBlock />

        {/* 7. Services (Sticky Sidebar + 2-Col Masonry Screen Collage) */}
        <ServicesGrid />

        {/* 8. Why Choose Us / Benefits (Light Bento + Lavender Resource Marquee) */}
        <WhyChooseUs />

        <ResourceMarquee></ResourceMarquee>

        {/* 9. Comparison Matrix (Dark Cyber Grid with Purple Design Monks Column) */}
        <ComparisonTable />

        {/* 10. Careers Teaser (Clean Light Background) */}
        <CareersTeaser />

        {/* 11. Testimonials Wall (Multi-Row Review Cards on White) */}
        <TestimonialsWall />

        {/* 12. FAQ Accordion (Clean White Background) */}
        <FaqSection />

        {/* 13. Consultation Lead Gen (Dark Luxury Box with COO Profile & WhatsApp) */}
        <LeadGenForm />
      </main>

      {/* Global Mega Footer with 3D Globe Horizon & Massive Wordmark */}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
