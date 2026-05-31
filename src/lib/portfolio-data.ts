import { Bot, BrainCircuit, Code2, Cpu, LineChart, MonitorSmartphone, ShieldCheck, Smartphone, Sparkles, Wand2 } from "lucide-react";

export const profile = {
  name: "Mohadese Ghadimi",
  title: "Frontend & AI Product Engineer",
  subtitle: "I build intelligent, Persian-first products across web, mobile, AI platforms, Web3, dashboards, and real-time interfaces.",
  email: "mohadese.ghadimi@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohadese-ghadimi/",
  github: "#",
};

export const bootLines = [
  "Initializing Mohadese OS...",
  "Loading frontend architecture...",
  "Loading AI product systems...",
  "Loading Android experience...",
  "Loading Web3 interfaces...",
  "Optimizing Persian-first UI engine...",
  "Portfolio ready."
];

export const metrics = [
  { value: "6+", label: "Years building software" },
  { value: "20+", label: "Android apps built" },
  { value: "1000+", label: "AI product users" },
  { value: "4", label: "Android experiences" },
];

export const experiences = [
  {
    company: "Hoosh",
    role: "Frontend Developer",
    period: "Jan 2026 — Present",
    signal: "AI Products",
    scene: "AI Agent Platform",
    description: "Building CRM, captcha, analytics, and gamified data-collection systems for AI agents. Work includes Persian-first product UX, large real-time data rendering, canvas layers, and reusable core layouts.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Zustand", "GSAP"],
    highlights: ["Built Persian-first AI workflows", "Rendered large real-time datasets without lag", "Designed canvas/layer interaction systems", "Supported 1000+ users"],
  },
  {
    company: "Infinite8",
    role: "Senior Frontend Developer",
    period: "Aug 2024 — Mar 2025",
    signal: "Web3 / Gaming",
    scene: "Game + Marketplace Ecosystem",
    description: "Developed LandRocker website, admin panel, marketplace, sandbox-like game interfaces, and Telegram Mini App product flows for a Dubai-based gaming/Web3 ecosystem.",
    stack: ["React", "Next.js", "TypeScript", "Wagmi", "Ethers", "RainbowKit", "Charts"],
    highlights: ["Built wallet-connected flows", "Delivered marketplace and admin modules", "Worked on game-like frontend systems", "Improved Web3 product UX"],
  },
  {
    company: "Coin Iran",
    role: "Frontend Developer",
    period: "Previous Experience",
    signal: "Crypto / Content",
    scene: "Crypto Product Interfaces",
    description: "Built production frontend features for crypto-related products, content systems, and responsive web experiences.",
    stack: ["React", "TypeScript", "REST APIs", "Responsive UI"],
    highlights: ["Created production UI", "Integrated API-driven screens", "Worked with crypto product requirements"],
  },
  {
    company: "Android Development",
    role: "Android Developer",
    period: "4 separate roles",
    signal: "Mobile",
    scene: "Mobile Product Builder",
    description: "Built many Android applications across multiple professional roles, combining mobile UI, API integration, and product-focused implementation.",
    stack: ["Android", "Java/Kotlin", "APIs", "Mobile UI", "App Architecture"],
    highlights: ["Built 20+ apps", "Shipped mobile-first experiences", "Connected apps to real APIs"],
  },
];

export const projects = [
  {
    title: "AI CRM Platform",
    icon: Bot,
    type: "AI / Enterprise",
    year: "2026",
    description: "Persian-first CRM for managing AI agent workflows, users, analytics, and operational data.",
    challenge: "Large real-time data rendering without lag.",
    solution: "Optimized state boundaries, reusable layouts, careful table rendering, and lean UI composition.",
    stack: ["Next.js", "React", "TypeScript", "Zustand", "shadcn/ui"],
  },
  {
    title: "Captcha System",
    icon: ShieldCheck,
    type: "AI Data Platform",
    year: "2026",
    description: "Interactive captcha and validation workflows for Persian data collection and agent improvement.",
    challenge: "Persian UX where common libraries were not enough.",
    solution: "Custom validation, RTL-first components, and product-specific interaction patterns.",
    stack: ["React", "TypeScript", "Tailwind", "Canvas"],
  },
  {
    title: "Analytics Dashboard",
    icon: LineChart,
    type: "Dashboard",
    year: "2026",
    description: "High-density analytics interface with filtering, summaries, charts, and responsive views.",
    challenge: "Complex data visibility with clean UX.",
    solution: "Separated data, presentation, and interaction logic into optimized feature modules.",
    stack: ["React", "Charts", "TypeScript", "REST APIs"],
  },
  {
    title: "Agent Training Game",
    icon: Sparkles,
    type: "Gamified AI Data Collection",
    year: "2026",
    description: "Game-like interface that collects correct data for AI agents while keeping users engaged.",
    challenge: "Make data collection accurate, fast, and enjoyable.",
    solution: "Swipe interactions, feedback loops, animation, and validation-driven flows.",
    stack: ["React", "GSAP", "TypeScript", "Tailwind"],
  },
  {
    title: "OCR Platform",
    icon: Wand2,
    type: "AI / OCR",
    year: "2026",
    description: "Interfaces for image-to-text and document review/correction workflows with Persian text handling.",
    challenge: "Persian OCR correction and document-heavy UI.",
    solution: "Built custom correction screens, RTL flows, and focused review interactions.",
    stack: ["Next.js", "React", "OCR UI", "RTL"],
  },
  {
    title: "Web3 Marketplace",
    icon: Cpu,
    type: "Web3",
    year: "2024–2025",
    description: "Marketplace and wallet-connected product flows for a gaming/Web3 ecosystem.",
    challenge: "Smooth transaction-aware wallet UX.",
    solution: "Integrated wallet flows with clear state feedback and product-specific Web3 components.",
    stack: ["Wagmi", "Ethers", "RainbowKit", "React", "Next.js"],
  },
];

export const skillClusters = [
  { title: "Frontend", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "SSR/ISR", "GSAP"] },
  { title: "AI Products", icon: BrainCircuit, items: ["OCR", "Voice AI", "Text-to-Image", "Agent Tools", "CRM", "Analytics"] },
  { title: "Mobile", icon: Smartphone, items: ["Android", "Java/Kotlin", "Mobile UI", "API Integration", "App Architecture"] },
  { title: "Product Systems", icon: MonitorSmartphone, items: ["Dashboards", "Games", "Marketplaces", "Admin Panels", "Data Tools"] },
];

export const commands = [
  { command: "about", value: "Frontend & AI Product Engineer building scalable interfaces, AI tools, Android apps, and Web3 products." },
  { command: "skills", value: "React, Next.js, TypeScript, Tailwind, GSAP, Android, Web3, AI product platforms." },
  { command: "focus", value: "Persian-first products, real-time data, dashboards, canvas layers, and high-quality UX." },
  { command: "contact", value: "mohadese.ghadimi@gmail.com" },
];
