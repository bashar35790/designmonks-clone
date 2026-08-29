import { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover & Strategy",
    subtitle: "AI-Powered Market Intel",
    description:
      "We dissect your product landscape, target demographics, and competitors using AI-assisted user interviews, synthetic persona modeling, and rapid user empathy maps.",
    icon: "Compass",
    produces: [
      "Competitive Matrix",
      "Synthetic User Personas",
      "Information Architecture",
      "User Journey Maps",
    ],
    aiTools: ["Claude 3.5 Sonnet", "Synthetic Users AI", "Perplexity Pro"],
  },
  {
    step: "02",
    title: "Design & Prototype",
    subtitle: "Generative & High-Fidelity UI",
    description:
      "Crafting pixel-perfect Figma screens, responsive layouts, micro-interaction states, and tokenized design systems tested with real-time interactive prototypes.",
    icon: "Layers",
    produces: [
      "High-Fidelity Wireframes",
      "Design Token System",
      "Interactive Figma Prototype",
      "Motion & Micro-Interaction Specs",
    ],
    aiTools: ["Midjourney v6", "Relume AI", "Galileo AI"],
  },
  {
    step: "03",
    title: "Build & Integrate",
    subtitle: "Clean Code & Motion Engines",
    description:
      "Engineering the approved interfaces into production-ready Next.js / Webflow with strict TypeScript types, responsive breakpoints, and Framer Motion spring physics.",
    icon: "Code2",
    produces: [
      "Production Next.js / Framer Code",
      "Responsive Breakpoint Suite",
      "API & CMS Connections",
      "Lighthouse 95+ Audit Report",
    ],
    aiTools: ["Cursor", "GitHub Copilot", "Vercel v0"],
  },
  {
    step: "04",
    title: "Optimise & Scale",
    subtitle: "Continuous CRO & Growth",
    description:
      "Post-launch telemetry analysis, heatmaps, and iterative A/B test experiments to systematically increase conversion rates and user retention.",
    icon: "TrendingUp",
    produces: [
      "CRO Analytics Dashboard",
      "A/B Testing Playbook",
      "Iterative Component Updates",
      "Quarterly UX Growth Audit",
    ],
    aiTools: ["PostHog AI", "Hotjar", "VWO AI"],
  },
];
