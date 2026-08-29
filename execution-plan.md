# Design Monks Clone — Task-by-Task Execution & Commit Plan

This execution plan breaks down the development of the **Design Monks Clone** into atomic, testable, and independently committable tasks. Each task represents a single unit of work with clear deliverables, verification criteria, and standard Conventional Commit messages.

---

## 📋 Progress Overview

- [x] **Phase 1: Project Scaffolding & Design System Core** (Tasks 1–4)
- [x] **Phase 2: Data Models & Static Assets Preparation** (Tasks 5–6)
- [x] **Phase 3: Reusable Atomic UI Component Library** (Tasks 7–12)
- [x] **Phase 4: Global Layout & Navigation Chrome** (Tasks 13–16)
- [x] **Phase 5: Homepage Section Implementations** (Tasks 17–28)
- [x] **Phase 6: Global Modals, API Integration & Form Polish** (Tasks 29–31)
- [x] **Phase 7: Motion Polish, Responsiveness & QA Pass** (Tasks 32–34)

---

## 🛠️ Phase 1: Project Scaffolding & Design System Core

### [x] Task 01: Next.js App Scaffolding & Core Dependencies
- **Goal:** Initialize the Next.js 14+ App Router project with TypeScript, ESLint, and Tailwind CSS. Install motion, icons, and utility libraries.
- **Files:** `package.json`, `tsconfig.json`, `.gitignore`, `src/app/layout.tsx`, `src/app/page.tsx`
- **Dependencies to install:** `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `embla-carousel-react`, `canvas-confetti`
- **Verification:** Run `npm run dev` and verify clean compile on `localhost:3000`.
- **Commit Message:**
  ```bash
  git commit -m "chore(setup): initialize Next.js 14 app router with tailwind and framer-motion"
  ```

---

### [x] Task 02: Typography Setup (Google Fonts: Outfit, Red Hat Display, Playfair Display)
- **Goal:** Configure Google Fonts via `next/font/google` in root layout, setting up CSS variables for `--font-outfit`, `--font-redhat`, and `--font-playfair`.
- **Files:** `src/app/layout.tsx`
- **Verification:** Inspect browser computed styles on text elements to ensure fonts load without FOUT.
- **Commit Message:**
  ```bash
  git commit -m "feat(fonts): configure outfit, red hat display, and playfair display font variables"
  ```

---

### [x] Task 03: Tailwind Token Mapping & Custom Keyframes
- **Goal:** Extend `tailwind.config.ts` with custom brand colors (monk darks, glowing accents), border radius tokens, fluid typography tokens, and marquee keyframe animations.
- **Files:** `tailwind.config.ts`, `src/app/globals.css`
- **Verification:** Test custom classes (e.g. `bg-monk-dark`, `font-brand`, `animate-marquee-left`) in a sandbox component.
- **Commit Message:**
  ```bash
  git commit -m "feat(theme): configure design monk color palette, tokens, and marquee keyframes"
  ```

---

### [x] Task 04: Base CSS Reset, Global Scrollbar & Utilities
- **Goal:** Add custom global CSS utilities for glassmorphism (`backdrop-blur`), custom dark scrollbars, text balance, and smooth scrolling.
- **Files:** `src/app/globals.css`, `src/lib/utils.ts` (`cn` helper)
- **Verification:** Check dark background rendering and test `cn()` helper function with conditional classes.
- **Commit Message:**
  ```bash
  git commit -m "style(globals): add custom dark scrollbar, glassmorphism utilities, and cn helper"
  ```

---

## 📦 Phase 2: Data Models & Static Assets

### [x] Task 05: TypeScript Interfaces & Types Definition
- **Goal:** Define structured TypeScript interfaces for all dynamic modules (Projects, Services, Testimonials, Process Steps, Comparison Matrix, FAQs, Team Members, Global Offices).
- **Files:** `src/types/index.ts`
- **Verification:** `tsc --noEmit` passes with zero type errors.
- **Commit Message:**
  ```bash
  git commit -m "feat(types): create comprehensive data models and interfaces"
  ```

---

### [x] Task 06: Mock Data Stores & Asset Manifests
- **Goal:** Populate mock dataset files with high-fidelity agency content (case studies, client quotes, services, FAQs, global offices, video placeholders).
- **Files:**
  - `src/data/navigation.ts`
  - `src/data/projects.ts`
  - `src/data/testimonials.ts`
  - `src/data/services.ts`
  - `src/data/comparison.ts`
  - `src/data/process.ts`
  - `src/data/faq.ts`
  - `src/data/offices.ts`
- **Verification:** Import data into a test script or page to verify data integrity.
- **Commit Message:**
  ```bash
  git commit -m "feat(data): populate structured data files for all homepage modules"
  ```

---

## 🧩 Phase 3: Reusable Atomic UI Component Library

### [x] Task 07: Button Component (Magnetic & Slide-Arrow Variants)
- **Goal:** Create versatile `Button.tsx` supporting `primary`, `secondary`, `outline`, `ghost`, and `magnetic` hover effects with animated trailing arrow icon.
- **Files:** `src/components/ui/Button.tsx`
- **Verification:** Test all button variants with hover states and click events.
- **Commit Message:**
  ```bash
  git commit -m "feat(ui): implement interactive button component with hover animations"
  ```

---

### [x] Task 08: SectionHeader Component
- **Goal:** Build `SectionHeader.tsx` supporting uppercase pill tags, split fonts (Red Hat title + Playfair italic accent), optional subtitle, and alignment controls.
- **Files:** `src/components/ui/SectionHeader.tsx`
- **Verification:** Render headings with highlighted italic words and verify font styling.
- **Commit Message:**
  ```bash
  git commit -m "feat(ui): build section header with dual-font typography styling"
  ```

---

### [x] Task 09: Badges, Chips & Rating Indicators
- **Goal:** Build `Badge.tsx`, `RatingChip.tsx` (with stars), and `StatusPill.tsx` (pulsing live dot indicator).
- **Files:** `src/components/ui/Badge.tsx`, `src/components/ui/RatingChip.tsx`
- **Verification:** Verify badge rendering with different color themes and icon support.
- **Commit Message:**
  ```bash
  git commit -m "feat(ui): create rating badge and status indicator components"
  ```

---

### [x] Task 10: Smooth Infinite Marquee Component
- **Goal:** Build high-performance, CSS-powered `Marquee.tsx` supporting left/right directions, customizable speed, and pause-on-hover capability.
- **Files:** `src/components/ui/Marquee.tsx`
- **Verification:** Test smooth continuous scrolling without stuttering or blank gaps.
- **Commit Message:**
  ```bash
  git commit -m "feat(ui): build high-performance continuous marquee component"
  ```

---

### [x] Task 11: Animated Accordion Component
- **Goal:** Build `Accordion.tsx` powered by Framer Motion for buttery-smooth height expand/collapse transitions with single-open toggle logic.
- **Files:** `src/components/ui/Accordion.tsx`
- **Verification:** Test clicking multiple items; verify animated expand/collapse.
- **Commit Message:**
  ```bash
  git commit -m "feat(ui): build framer-motion animated accordion component"
  ```

---

### [x] Task 12: VideoPlayer & Video Modal Component
- **Goal:** Build `VideoPlayer.tsx` (with native HTML5 video, autoplay, mute toggle, custom play overlay) and `VideoModal.tsx` for full showreel playback.
- **Files:** `src/components/ui/VideoPlayer.tsx`, `src/components/ui/VideoModal.tsx`
- **Verification:** Verify video playback, mute/unmute state changes, and modal opening/closing.
- **Commit Message:**
  ```bash
  git commit -m "feat(ui): build video player and lightbox modal components"
  ```

---

## 🏛️ Phase 4: Global Layout & Navigation Chrome

### [x] Task 13: Sticky Glassmorphic Header & Mega-Menu
- **Goal:** Implement the top sticky navigation with backdrop-blur, brand logo, nav links, interactive Services Mega-Dropdown (with 6 service cards), and "Start a Project" CTA.
- **Files:** `src/components/layout/Header.tsx`, `src/components/layout/MegaMenu.tsx`
- **Verification:** Test scroll background transition and mega-menu hover interactions.
- **Commit Message:**
  ```bash
  git commit -m "feat(layout): implement sticky glassmorphic header with services mega-menu"
  ```

---

### [x] Task 14: Mobile Fullscreen Overlay Navigation
- **Goal:** Build responsive mobile drawer navigation with animated link staggered entry, social icons, and optional ambient video reel background.
- **Files:** `src/components/layout/MobileMenu.tsx`
- **Verification:** Test hamburger open/close transitions across mobile viewports (< 768px).
- **Commit Message:**
  ```bash
  git commit -m "feat(layout): implement full-screen animated mobile navigation drawer"
  ```

---

### [x] Task 15: Mega Footer & 8 Global Offices Grid
- **Goal:** Build comprehensive agency footer featuring newsletter subscribe bar, 8 global office address cards (US, AU, ZA, SG, IT, AE, CY, BD) with globe visual backdrop, link trees, and social/review badges.
- **Files:** `src/components/layout/Footer.tsx`, `src/components/layout/OfficeCard.tsx`
- **Verification:** Verify responsive columns on mobile/desktop and newsletter input state.
- **Commit Message:**
  ```bash
  git commit -m "feat(layout): build mega footer with 8-office global grid and newsletter"
  ```

---

### [x] Task 16: Granular Cookie Consent Banner
- **Goal:** Build non-intrusive floating cookie consent banner with "Accept All", "Decline", and a expandable preferences modal (Necessary, Analytics, Marketing).
- **Files:** `src/components/layout/CookieBanner.tsx`
- **Verification:** Test cookie preference saving to `localStorage` and dismiss behavior.
- **Commit Message:**
  ```bash
  git commit -m "feat(layout): build granular cookie consent banner and settings dialog"
  ```

---

## 🚀 Phase 5: Homepage Section Implementations

### [x] Task 17: Section 01 & 02 — Trust Announcement Bar & Hero Section
- **Goal:** Implement top 4.9★ rating bar and commanding Hero section with split display headline (`Red Hat` + `Playfair`), CTA buttons, floating client stats pill, and featured video preview card.
- **Files:** `src/components/sections/Hero.tsx`, `src/components/sections/TrustBar.tsx`
- **Verification:** Verify visual fidelity, responsive font scaling, and CTA interactions.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build trust rating bar and high-impact hero section"
  ```

---

### [x] Task 18: Section 03 — Dual Infinite Marquee System
- **Goal:** Implement dual-strip scrolling marquee: Top strip with colorful project screenshot cards, Bottom strip with 20+ monochrome client logos scrolling in the opposite direction.
- **Files:** `src/components/sections/DualMarquee.tsx`
- **Verification:** Verify opposite-direction scroll animation and smooth pause-on-hover.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): implement dual-tier project and client logo marquees"
  ```

---

### [x] Task 19: Section 04 — Industry Case Studies Carousel
- **Goal:** Build interactive drag-carousel ("Proven Success in *Every Industry*") featuring industry tags, project screenshots, outcome metrics, scope metadata, and client quote chips.
- **Files:** `src/components/sections/CaseStudiesCarousel.tsx`
- **Verification:** Test carousel drag gestures on touch/mouse and prev/next arrow buttons.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build interactive industry case studies carousel"
  ```

---

### [x] Task 20: Section 05 — Video Testimonials Slider
- **Goal:** Implement "Success Stories That *Inspire Us*" video slider with video thumbnail cards, quote overlays, verified client badge, and modal play trigger.
- **Files:** `src/components/sections/VideoTestimonials.tsx`
- **Verification:** Test card interactions, active slide focus, and modal video launch.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): implement video testimonials slider section"
  ```

---

### [x] Task 21: Section 06 — 4-Step AI-Powered Process Timeline
- **Goal:** Build "Smarter Design, *Supercharged by AI*" 4-phase horizontal timeline (Discover → Design → Build → Optimise) with layered icon stacks and "PRODUCES:" deliverable tags.
- **Files:** `src/components/sections/AIProcess.tsx`
- **Verification:** Verify step hover/scroll reveal and deliverable badge alignment.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build 4-step AI design process timeline section"
  ```

---

### [x] Task 22: Section 07 — Full-Width Showreel Video Block
- **Goal:** Build cinematic full-bleed video banner ("Why Us? Because Your *Growth* Is Our Mission") with gradient vignette and centered magnetic play button.
- **Files:** `src/components/sections/ShowreelBlock.tsx`
- **Verification:** Test play button hover physics and video player trigger.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build full-width agency showreel video section"
  ```

---

### [x] Task 23: Section 08 — Services Bento Grid
- **Goal:** Implement 4-card Services Grid (UI/UX, Web Dev, Branding, Webflow & Framer) with deliverable checklists, interactive hover cards, and floating interface collage.
- **Files:** `src/components/sections/ServicesGrid.tsx`
- **Verification:** Check grid responsiveness (1-col mobile, 2-col tablet, 4-col desktop).
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build services bento grid with interactive deliverable cards"
  ```

---

### [x] Task 24: Section 09 — Why Choose Us / Unmatched Benefits (Bento Grid)
- **Goal:** Build benefits bento grid featuring:
  - Interactive billing plan switch (Monthly vs Milestone)
  - Unlimited revisions & lifetime support cards
  - Team member stacked avatars
  - "Hand-Picked Resources" dual-row tags marquee
- **Files:** `src/components/sections/WhyChooseUs.tsx`
- **Verification:** Test billing toggle calculation and verify smooth dual-row tag marquee.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build benefits bento grid with billing toggle and tag marquee"
  ```

---

### [x] Task 25: Section 10 — Competitive Comparison Matrix
- **Goal:** Build 5-column comparison table (Design Monks vs In-House vs Traditional Agency vs Freelancers vs DIY) across 6 criteria with highlight styling for Design Monks.
- **Files:** `src/components/sections/ComparisonTable.tsx`
- **Verification:** Test desktop table and mobile tab-switcher view.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): implement competitive comparison table with mobile switcher"
  ```

---

### [x] Task 26: Section 11 — Careers Teaser Section
- **Goal:** Implement "Be a Monk! *Like Us*" careers module with category filter tabs and empty state fallback CTA ("Send your portfolio anyway").
- **Files:** `src/components/sections/CareersTeaser.tsx`
- **Verification:** Verify tab switching and empty state fallback styling.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build careers teaser section with category filtering"
  ```

---

### [x] Task 27: Section 12 — Infinite Testimonials Masonry Wall
- **Goal:** Build 3-column continuous scrolling social proof masonry wall with authentic quotes, star ratings, and verified client badges.
- **Files:** `src/components/sections/TestimonialsWall.tsx`
- **Verification:** Check infinite scroll performance and responsive column stacking.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build infinite social proof testimonials masonry wall"
  ```

---

### [x] Task 28: Section 13 — Interactive FAQ Accordion
- **Goal:** Integrate 6 key agency FAQ items with animated single-open accordion behavior.
- **Files:** `src/components/sections/FaqSection.tsx`
- **Verification:** Test accordion keyboard navigation and smooth expand/collapse.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): build interactive agency FAQ accordion section"
  ```

---

## 🎯 Phase 6: Lead Generation & API Integration

### [x] Task 29: Section 14 — Consultation Lead-Gen Form & Executive Card
- **Goal:** Build "Claim a *$799 Consultation*, on Us!" section with COO profile card (Abdullah Al Noman), WhatsApp direct link, and interactive inquiry form (Name, Email, WhatsApp, Budget dropdown, Project details).
- **Files:** `src/components/sections/LeadGenForm.tsx`
- **Verification:** Test client-side validation, error messages, and form state changes.
- **Commit Message:**
  ```bash
  git commit -m "feat(home): implement consultation lead-gen section with executive card"
  ```

---

### [x] Task 30: Contact Route Handler (`/api/contact`)
- **Goal:** Implement Next.js App Router POST endpoint `/api/contact` to process lead submissions with input sanitization and mock/email response.
- **Files:** `src/app/api/contact/route.ts`
- **Verification:** Test API response using Postman or test submit from the lead form.
- **Commit Message:**
  ```bash
  git commit -m "feat(api): implement lead submission api route handler"
  ```

---

### [x] Task 31: Form Submit Success Feedback & Confetti Trigger
- **Goal:** Wire lead-gen form submission to `/api/contact` with loading spinner, success banner, and celebratory confetti burst.
- **Files:** `src/components/sections/LeadGenForm.tsx`
- **Verification:** Submit a valid test lead and observe smooth success state.
- **Commit Message:**
  ```bash
  git commit -m "feat(ux): add loading states and confetti celebration to lead form submission"
  ```

---

## ✨ Phase 7: Motion Polish, Responsiveness & QA Pass

### [x] Task 32: Scroll Entrance Motion & Stagger Pass
- **Goal:** Add Framer Motion `whileInView` fade/slide animations with staggered delays across all section headers, cards, and bento modules.
- **Files:** All section components in `src/components/sections/`
- **Verification:** Scroll through entire page; ensure smooth 60fps animations and zero layout shifts.
- **Commit Message:**
  ```bash
  git commit -m "style(motion): implement scroll-triggered entrance animations across all sections"
  ```

---

### [x] Task 33: Responsive Layout Verification (375px to 1920px)
- **Goal:** Review and optimize layouts across mobile (375px, 414px), tablet (768px, 1024px), desktop (1440px), and ultrawide (1920px). Ensure no horizontal overflow.
- **Files:** `src/app/globals.css`, layout and section components
- **Verification:** Test with browser device toolbar across all standard breakpoints.
- **Commit Message:**
  ```bash
  git commit -m "fix(responsive): refine layouts and typography across all breakpoint sizes"
  ```

---

### [x] Task 34: SEO Metadata, OpenGraph & Favicon Polish
- **Goal:** Add comprehensive SEO metadata, OpenGraph tags, Twitter card tags, robots rules, and dynamic favicon to root layout.
- **Files:** `src/app/layout.tsx`, `public/favicon.ico`, `public/og-image.png`
- **Verification:** Inspect `<head>` tags in browser devtools.
- **Commit Message:**
  ```bash
  git commit -m "chore(seo): add comprehensive metadata, opengraph tags, and favicon"
  ```

---

## 🏁 Execution Workflow Guidelines for AntiGravity IDE

1. **Pick one task at a time:** Work in sequence from Task 01 to Task 34.
2. **Execute & Test:** Implement the task files, run verification steps.
3. **Commit Cleanly:** Use the exact commit message provided in each task.
4. **Mark Checkbox:** Update `[x]` in this `execution-plan.md` to track real-time progress.
