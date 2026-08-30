# Design Monks — Website Clone

A high-fidelity clone of the Design Monks agency website: a dark, animated, marketing site for a UI/UX design studio. Built with the Next.js App Router and statically generated where possible, with a fully responsive layout, custom design system, and premium section-by-section animations.

## Tech Stack

- **Next.js 16.3.3** (App Router, Turbopack, TypeScript)
- **React 19**
- **Tailwind CSS v4** (`@tailwindcss/postcss`, `@theme` design tokens in `globals.css`)
- **Framer Motion** — scroll/entrance/exit animations
- **Embla Carousel** — case-study carousel & testimonials
- **lucide-react** — icons
- **canvas-confetti** — celebration effects
- **clsx + tailwind-merge** — `cn()` class merging (`src/lib/utils.ts`)

Fonts are self-hosted via `next/font/google`:

| Role | Font | Token |
| --- | --- | --- |
| Body | Outfit | `--font-body` |
| Titles | Red Hat Display | `--font-title` |
| Brand / serif accents | Playfair Display (normal + italic) | `--font-brand` |

## Routes

| Route | Type | Description |
| --- | --- | --- |
| `/` | Static | Homepage (13 landing sections) |
| `/projects` | Static | Projects listing: category filter + paginated grid (6 cards/page) |
| `/projects/[slug]` | SSG (20 pages) | Project case-study details via `generateStaticParams` |
| `/api/contact` | Dynamic POST | Consultation lead submission (simulated) |

## Homepage Sections (`src/app/page.tsx`)

1. **Hero** — purple nebula, project collage carousel, "Clutch & Google Reviews" badge
2. **DualMarquee** — two counter-scrolling trusted-brand logo rows
3. **CaseStudiesCarousel** — pastel-tinted case cards (Embla)
4. **VideoTestimonials** — portrait video cards with a glass play button
5. **AIProcess** — dark obsidian 4-step AI-powered process with tool ticker
6. **ShowreelBlock** — agency showreel banner + auto-playing video
7. **ServicesGrid** — sticky sidebar + 2-column masonry service collage
8. **WhyChooseUs** — light bento benefits grid with stacked avatar mockups
9. **ResourceMarquee** — lavender marquee of client/resources
10. **ComparisonTable** — dark "cyber grid" comparing Design Monks vs in-house/agencies/freelancers
11. **TestimonialsWall** — multi-row review cards
12. **FaqSection** — expandable FAQ accordion
13. **LeadGenForm** — dark consultation booking box with COO profile & WhatsApp CTA

## Global Layout (`src/app/layout.tsx`)

- **Header** (`components/layout/Header.tsx`) — fixed floating **bottom dock** nav: Projects, Services (upward mega menu), "Start a Project" CTA, Career, More (upward dropdown)
- **Footer** (`components/layout/Footer.tsx`) — 3D globe video horizon, global offices (8 locations), massive wordmark, partner badges
- **CookieBanner** — consent dialog with accept / essential-only / customize, persisted to `localStorage`

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts     # POST lead simulation
│   ├── projects/page.tsx        # Projects listing
│   ├── projects/[slug]/page.tsx # SSG case-study page
│   ├── globals.css              # Tailwind v4 @theme tokens + utilities
│   ├── layout.tsx               # Fonts, metadata, Header, Footer, CookieBanner
│   └── page.tsx                 # Homepage section composition
├── components/
│   ├── layout/                  # Header, MegaMenu, Footer, CookieBanner
│   ├── projects/                # ProjectsHeaderSection, ProjectsGrid, ProjectCard
│   ├── sections/                # One component per homepage section
│   └── ui/                      # Button, Marquee, Badge, VideoModal
├── data/                        # Content: projects, testimonials, faq, careers, navigation
├── lib/utils.ts                 # cn() helper
└── types/index.ts               # Shared TypeScript interfaces
public/
├── images/                      # Local assets (138 files), incl. herocarousel, ai-power-design-section, footer, trustedbrands
├── videos/footer_globe.mp4      # Footer globe background
└── videoplay.svg
```

## Design System

Defined in `src/app/globals.css` via `@theme`:

- **Colors** — `monk-dark` `#080808`, `monk-surface`, `monk-accent` (emerald), `monk-violet`, `monk-light`
- **Radius scale** — custom `--radius-*` tokens up to `3rem`
- **Animations** — `marquee-left/right`, `marquee-fast`, `pulse-slow`, `float`
- **Utilities** — `.glass-panel`, `.glass-header`, `.text-gradient`, `.glow-emerald`, `.no-scrollbar`
- **Accessibility** — full `prefers-reduced-motion` reduction block

## Image Configuration (`next.config.ts`)

Remote images are optimized through `next/image` with allowlisted hosts:

- `images.unsplash.com`
- `i.pravatar.cc`
- `cdn.prod.website-files.com`

`dangerouslyAllowSVG: true` enables rendering the site's inline SVG assets (hero badge, brand marquee, footer partner icons).

## API

`POST /api/contact` — accepts `{ name, email, whatsapp, budget, message }`, validates `name`/`email`, and simulates lead processing (logs to the server console). No database or email is wired up yet — extend `src/app/api/contact/route.ts` to integrate a real backend.

## Getting Started

Requirements: Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server (Turbopack) |
| `npm run build` | Production build (SSG + prerenders all routes) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type-check |

## Editing Content

Most marketing copy lives in `src/data/` (`projects.ts`, `testimonials.ts`, `faq.ts`, `careers.ts`, `navigation.ts`). Project cards and case-study pages are fully data-driven — add an entry to `projectsData` in `src/data/projects.ts` and the grid + detail page pick it up automatically (including new `generateStaticParams` slugs).