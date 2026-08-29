export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface MegaMenuCategory {
  title: string;
  description: string;
  href: string;
  iconName: string;
  badge?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  description: string;
  scope: string[];
  duration: string;
  year: string;
  stats?: { label: string; value: string };
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
    company: string;
  };
  link: string;
  featured?: boolean;
}

export interface VideoTestimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  companyLogo?: string;
  avatar: string;
  quote: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  rating: number;
}

export interface TextTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  date?: string;
  verified?: boolean;
}

export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
  featuredBadge?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  produces: string[];
  aiTools: string[];
}

export interface ComparisonRow {
  feature: string;
  designMonks: string | boolean;
  inHouse: string | boolean;
  agencies: string | boolean;
  freelancers: string | boolean;
  diy: string | boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: "Design" | "Engineering" | "Product" | "Growth";
  location: string;
  type: "Full-Time" | "Contract" | "Remote";
  experience: string;
  active: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface GlobalOffice {
  id: string;
  city: string;
  country: string;
  flag: string;
  address: string;
  email: string;
  timezone: string;
  coordinates?: { lat: number; lng: number };
}

export interface ClientLogo {
  name: string;
  svgText: string;
  category?: string;
}
