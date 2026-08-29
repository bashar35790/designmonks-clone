import { NavItem, MegaMenuCategory } from "@/types";

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Benefits", href: "#benefits" },
  { label: "Compare", href: "#compare" },
  { label: "Career", href: "#careers", badge: "Hiring" },
];

export const SERVICES_MEGA_MENU: MegaMenuCategory[] = [
  {
    title: "UI/UX Product Design",
    description: "End-to-end design systems, mobile apps, SaaS dashboards, and Web apps.",
    href: "#services",
    iconName: "Layout",
    badge: "Popular",
  },
  {
    title: "Web & Framer Development",
    description: "Lightning-fast Next.js, Framer, and Webflow high-converting websites.",
    href: "#services",
    iconName: "Code2",
    badge: "Fast Delivery",
  },
  {
    title: "Logo & Brand Identity",
    description: "Distinctive typography, 3D visual language, guidelines & brand strategy.",
    href: "#services",
    iconName: "Sparkles",
  },
  {
    title: "AI-Powered Prototyping",
    description: "Supercharged user flows, synthetic personas, and generative wireframing.",
    href: "#process",
    iconName: "Cpu",
    badge: "New",
  },
  {
    title: "Design Systems & Tokens",
    description: "Scalable component libraries built in Figma with production-ready tokens.",
    href: "#services",
    iconName: "Layers",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Audits, heatmaps, user testing, and A/B test experiments for SaaS growth.",
    href: "#services",
    iconName: "TrendingUp",
  },
];

export const MORE_MENU_ITEMS: NavItem[] = [
  { label: "About Design Monks", href: "#about" },
  { label: "Our Global Team", href: "#benefits" },
  { label: "Showreel 2026", href: "#showreel" },
  { label: "Client Testimonials", href: "#testimonials" },
  { label: "Frequently Asked Questions", href: "#faq" },
  { label: "Book Consultation", href: "#contact" },
];
