import React from "react";
import { Header } from "@/components/layout/Header";
import { TrustBar } from "@/components/sections/TrustBar";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F7] flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Top Header */}
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Section 01: Trust / Announcement Bar */}
        <TrustBar />

        {/* Section 02: High-Impact Hero */}
        <Hero />

        {/* Section 03: Dual Infinite Marquee */}
        <DualMarquee />

        {/* Section 04: Case Studies & Work Carousel */}
        <CaseStudiesCarousel />

        {/* Section 05: Video Testimonials */}
        <VideoTestimonials />

        {/* Section 06: AI-Powered 4-Step Process */}
        <AIProcess />

        {/* Section 07: Full-Width Agency Showreel */}
        <ShowreelBlock />

        {/* Section 08: Services Bento Grid */}
        <ServicesGrid />

        {/* Section 09: Why Choose Us Benefits */}
        <WhyChooseUs />

        {/* Section 10: Comparison Matrix */}
        <ComparisonTable />

        {/* Section 11: Careers Teaser */}
        <CareersTeaser />

        {/* Section 12: Testimonials Masonry Wall */}
        <TestimonialsWall />

        {/* Section 13: FAQ Accordion */}
        <FaqSection />

        {/* Section 14: Lead Generation & Consultation Form */}
        <LeadGenForm />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Granular Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
