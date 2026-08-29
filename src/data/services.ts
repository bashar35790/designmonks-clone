import { ServiceOffering } from "@/types";

export const SERVICES_LIST: ServiceOffering[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Product Design",
    tagline: "High-converting digital products crafted for user delight and retention.",
    description:
      "We design responsive mobile apps, SaaS dashboards, complex web applications, and multi-tier platforms with obsessive craft and scientific UX methodology.",
    deliverables: [
      "User Research & Journey Mapping",
      "Wireframing & Information Architecture",
      "High-Fidelity Interactive Prototypes",
      "Comprehensive Figma Design System",
      "Micro-Interactions & Animation Specs",
    ],
    tools: ["Figma", "Protopie", "Lottie", "FigJam"],
    icon: "Layout",
    featuredBadge: "Most Requested",
  },
  {
    id: "web-dev",
    number: "02",
    title: "Full-Stack Web Development",
    tagline: "High-performance Next.js and frontend engineering with zero compromise.",
    description:
      "Transforming bespoke designs into pixel-perfect, accessible, and blindingly fast web experiences backed by clean architecture and robust TypeScript.",
    deliverables: [
      "Next.js 14+ (App Router) Architecture",
      "Tailwind CSS & Framer Motion Animations",
      "REST & GraphQL API Integrations",
      "Headless CMS Integration (Sanity, Strapi)",
      "99+ Google Lighthouse & SEO Optimization",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: "Code2",
    featuredBadge: "Blazing Fast",
  },
  {
    id: "branding",
    number: "03",
    title: "Brand Identity & 3D Visuals",
    tagline: "Bold, modern visual identities that elevate your product above the noise.",
    description:
      "We forge distinctive brand foundations: from bespoke logotypes and editorial typography palettes to 3D hero assets and comprehensive brand guidelines.",
    deliverables: [
      "Brand Strategy & Positioning",
      "Logomark & Custom Typography System",
      "3D Asset Design & Motion Guidelines",
      "Brand Style Guide & Component Kit",
      "Marketing Collateral & Pitch Decks",
    ],
    tools: ["Illustrator", "Blender", "Spline", "Cinema 4D"],
    icon: "Sparkles",
  },
  {
    id: "framer-webflow",
    number: "04",
    title: "Webflow & Framer Development",
    tagline: "Rapid marketing launchpads with CMS power and native animation engines.",
    description:
      "Empowering marketing teams to launch, iterate, and scale campaigns in days instead of months without relying on heavy engineering backlogs.",
    deliverables: [
      "Pixel-Perfect Framer / Webflow Build",
      "Custom CMS Architecture & Filtering",
      "Dynamic Scroll & Parallax Interactions",
      "Client Training & Documentation",
      "Global CDN & Custom Domain Setup",
    ],
    tools: ["Framer", "Webflow", "Relume", "GSAP"],
    icon: "Layers",
    featuredBadge: "Fast Turnaround",
  },
];
