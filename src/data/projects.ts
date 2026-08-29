import { ProjectCaseStudy } from "@/types";

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "nexus-ai",
    title: "Nexus AI: Next-Gen Enterprise Workspace",
    client: "Nexus Labs (San Francisco)",
    category: "AI & SaaS",
    industry: "Artificial Intelligence",
    description:
      "A complete reimagination of multimodal generative AI workspace for 200,000+ technical developers and designers worldwide.",
    scope: ["UI/UX Design", "Design System", "Next.js Frontend"],
    duration: "8 Weeks",
    year: "2025",
    stats: { label: "ARR Growth Post-Launch", value: "+280%" },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    testimonial: {
      quote:
        "Design Monks delivered beyond our loftiest expectations. Their attention to micro-interactions and dark-mode elegance is unmatched in the industry.",
      author: "Julian Vance",
      role: "VP of Product",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      company: "Nexus AI",
    },
    link: "#",
    featured: true,
  },
  {
    id: "aura-fintech",
    title: "Aura Wealth: Algorithmic Global Banking",
    client: "Aura Capital (London)",
    category: "Fintech",
    industry: "Wealth Management",
    description:
      "High-frequency institutional wealth management platform with real-time portfolio analytics, zero-latency charts, and biometric security.",
    scope: ["Mobile App (iOS/Android)", "Web Dashboard", "Design System"],
    duration: "10 Weeks",
    year: "2025",
    stats: { label: "Assets Under Management", value: "$1.4B" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    testimonial: {
      quote:
        "The conversion rate on our investor onboarding jumped 42% in the first 30 days after the redesign. Design Monks are true masters of product UX.",
      author: "Elena Rostova",
      role: "Chief Operating Officer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      company: "Aura Wealth",
    },
    link: "#",
    featured: true,
  },
  {
    id: "pulse-health",
    title: "Pulse Health: Telemetry & Biomarker AI",
    client: "Pulse Bio (Zurich)",
    category: "HealthTech",
    industry: "Healthcare & Biotech",
    description:
      "Predictive telemetry app connecting smart wearable biosensors with remote clinical teams for proactive cardiac healthcare.",
    scope: ["Mobile UX", "Hardware Companion UI", "Framer Marketing"],
    duration: "6 Weeks",
    year: "2025",
    stats: { label: "Daily Active Retention", value: "91%" },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    testimonial: {
      quote:
        "Design Monks turned complex biomedical sensor data into an intuitive, calming interface that patients of all ages can use with ease.",
      author: "Dr. Marcus Chen",
      role: "Co-Founder & Head of Clinical AI",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      company: "Pulse Health",
    },
    link: "#",
    featured: true,
  },
  {
    id: "strata-cloud",
    title: "Strata: Distributed GPU Compute Cloud",
    client: "Strata Infra (Austin)",
    category: "Cloud Infrastructure",
    industry: "DevOps & Cloud",
    description:
      "Self-serve GPU cluster provisioning dashboard with granular cost telemetry, kubernetes node monitoring, and developer API keys.",
    scope: ["Web Dashboard", "Design System", "Brand Identity"],
    duration: "7 Weeks",
    year: "2024",
    stats: { label: "Deployment Speed Improvement", value: "4.8x" },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    testimonial: {
      quote:
        "Engineers are notoriously picky about developer tools. Our community gave the new Strata console a 4.9/5 satisfaction score.",
      author: "Siddharth Rao",
      role: "VP of Engineering",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      company: "Strata Infra",
    },
    link: "#",
    featured: true,
  },
  {
    id: "krona-luxury",
    title: "Krona: Modern High-Horology Marketplace",
    client: "Krona Genève (Geneva)",
    category: "E-Commerce",
    industry: "Luxury Goods",
    description:
      "Ultra-high-end watch authentication and private collector escrow marketplace featuring 3D model viewers and real-time provenance tracking.",
    scope: ["Brand Identity", "E-Commerce UX", "Custom Next.js Frontend"],
    duration: "8 Weeks",
    year: "2024",
    stats: { label: "Average Order Value", value: "$34,500" },
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    testimonial: {
      quote:
        "The editorial typography, sleek dark palette, and fluid micro-interactions feel like walking through a private high-jewelry salon.",
      author: "Henriette Blanc",
      role: "Global Creative Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      company: "Krona Genève",
    },
    link: "#",
    featured: true,
  },
];

export const MARQUEE_PROJECT_THUMBS = [
  { title: "SaaS Analytics Pro", category: "Dashboard UI", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
  { title: "Aero Mobile Banking", category: "iOS / Android", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop" },
  { title: "Lumina 3D Studio", category: "Brand & 3D", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" },
  { title: "Neuroflow AI", category: "Web Application", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" },
  { title: "Vortex Gaming Hub", category: "Webflow & Motion", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop" },
  { title: "Echo Audio Gear", category: "E-Commerce", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop" },
  { title: "Zenith Cloud Cluster", category: "SaaS Platform", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
];
