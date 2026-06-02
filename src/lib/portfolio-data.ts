import {
	Bot,
	BrainCircuit,
	Code2,
	Cpu,
	LineChart,
	MonitorSmartphone,
	ShieldCheck,
	Smartphone,
	Sparkles,
	Wand2,
} from "lucide-react";

export const profile = {
	name: "Mohadese Ghadimi",

	title:
		"Senior Software Engineer | AI Products, Fintech, Cloud & High-Performance Systems",

	subtitle:
		"Software engineer with 9+ years of experience building AI platforms, fintech products, gaming ecosystems, real-time systems, and enterprise applications. Specialized in scalable architecture, performance optimization, and product engineering.",

	email: "mohadese.ghadimi@gmail.com",

	linkedin: "https://www.linkedin.com/in/mohadese-ghadimi/",

	github: "https://github.com/mohadesegh",
};

export const bootLines = [
	"Initializing Mohadese OS...",
	"Loading frontend architecture...",
	"Loading AI product systems...",
	"Loading Android experience...",
	"Loading Web3 interfaces...",
	"Optimizing Persian-first UI engine...",
	"Portfolio ready.",
];

export const metrics = [
	{
		value: "9+",
		label: "Years Building Production Software",
	},

	{
		value: "20+",
		label: "Applications Delivered",
	},

	{
		value: "500+",
		label: "Active Users Supported Per Platform",
	},

	{
		value: "5+",
		label: "Engineering Teams Led",
	},
];

export const experiences = [
	{
		company: "Hoosh Smart Text Processing",

		role: "Senior Software Engineer",

		period: "2026 — Present",

		signal: "AI Products",

		scene: "AI Data & Annotation Platforms",

		description:
			"Building AI-powered data collection, annotation, validation, workforce management, and workflow automation systems. Focused on OCR, NLP, audio timestamping, real-time data processing, Canvas tooling, and Persian-first user experiences.",

		stack: [
			"React",
			"Next.js",
			"TypeScript",
			"Canvas API",
			"WebSockets",
			"Zustand",
			"Tailwind",
		],

		highlights: [
			"Built OCR, handwriting recognition, and audio timestamping workflows",
			"Designed layered Canvas-based annotation tools",
			"Developed RBAC, Timesheet, Workflow and Workforce platforms",
			"Created reusable RTL-first architecture for Persian products",
		],
	},

	{
		company: "CoinIran",

		role: "Senior Software Engineer",

		period: "Project Based",

		signal: "Fintech",

		scene: "Prediction Markets & Trading",

		description:
			"Led frontend development for prediction markets, trading systems, wallets, portfolio management, and authentication platforms.",

		stack: [
			"React",
			"Next.js",
			"TypeScript",
			"GraphQL",
			"Wagmi",
			"WalletConnect",
			"Ethers.js",
		],

		highlights: [
			"Built a Polymarket-inspired prediction platform",
			"Developed exchange, trading, wallet and portfolio systems",
			"Led frontend architecture and design system implementation",
			"Optimized expensive market calculations to eliminate UI blocking",
		],
	},

	{
		company: "Infinite8",

		role: "Lead Software Engineer",

		period: "2024 — 2025",

		signal: "Gaming",

		scene: "Web3 Gaming Ecosystem",

		description:
			"Led frontend development for marketplaces, staking systems, Play-to-Earn products, Telegram Mini Apps, and Three.js experiences.",

		stack: [
			"React",
			"Next.js",
			"TypeScript",
			"Three.js",
			"WebSockets",
			"WebGL",
		],

		highlights: [
			"Led an 11-member frontend team",
			"Built marketplace, staking and gaming systems",
			"Developed Telegram Mini App miner experience",
			"Improved application performance by 20%",
		],
	},

	{
		company: "Ledgersi",

		role: "Lead Software Engineer",

		period: "2023 — 2024",

		signal: "Multiplayer",

		scene: "Unity + Web Platform",

		description:
			"Built multiplayer gaming platforms with real-time synchronization between web, mobile, and Unity clients.",

		stack: ["Flutter", "React", "TypeScript", "Unity", "WebSockets"],

		highlights: [
			"Led a 4-member engineering team",
			"Built cross-platform Flutter applications",
			"Implemented real-time synchronization",
			"Managed sprint planning and delivery",
		],
	},

	{
		company: "TalentVerse",

		role: "Technical Project Manager",

		period: "2022 — 2023",

		signal: "Creator Economy",

		scene: "Monetization Platform",

		description:
			"Managed delivery of a Patreon-inspired creator platform enabling content monetization, subscriptions, and community support.",

		stack: ["Agile", "Scrum", "Jira", "Product Management"],

		highlights: [
			"Managed a 10-member team",
			"Led sprint planning and delivery",
			"Improved development workflow efficiency",
			"Coordinated product roadmap execution",
		],
	},
];
export const projects = [
	{
		title: "AI Annotation Platform",

		icon: BrainCircuit,

		type: "AI Platform",

		year: "2026",

		description:
			"Enterprise-grade platform for OCR, handwriting recognition, audio timestamping, NLP annotation, and AI data collection.",

		challenge:
			"Build scalable Persian-first annotation workflows with complex Canvas interactions.",

		solution:
			"Created reusable Canvas tooling, real-time updates, workflow automation, and RTL-first architecture.",

		stack: ["React", "Next.js", "Canvas API", "WebSockets", "TypeScript"],
	},

	{
		title: "Prediction Market Platform",

		icon: LineChart,

		type: "Fintech",

		year: "2025",

		description:
			"Polymarket-inspired platform supporting trading, prediction markets, portfolios, and wallet integrations.",

		challenge: "Complex pricing calculations and trading interactions.",

		solution:
			"Optimized rendering and calculation flows to keep the UI responsive.",

		stack: ["React", "Next.js", "GraphQL", "Wagmi", "WalletConnect"],
	},

	{
		title: "Web3 Gaming Ecosystem",

		icon: Cpu,

		type: "Gaming",

		year: "2024",

		description:
			"Marketplace, staking, Play-to-Earn products, and Telegram Mini Apps.",

		challenge: "Real-time interactions and high-performance rendering.",

		solution: "Built optimized frontend architecture and animation pipelines.",

		stack: ["React", "Next.js", "Three.js", "WebSockets"],
	},

	{
		title: "Multiplayer Gaming Platform",

		icon: Smartphone,

		type: "Gaming",

		year: "2023",

		description:
			"Unity-integrated multiplayer gaming platform with web and mobile clients.",

		challenge: "Real-time synchronization between multiple clients.",

		solution: "WebSocket-based architecture with shared game state.",

		stack: ["Flutter", "React", "Unity", "WebSockets"],
	},
];

export const skillClusters = [
	{
		title: "Architecture",
		icon: Cpu,

		items: [
			"Software Architecture",
			"System Design",
			"Distributed Systems",
			"Cloud Infrastructure",
			"Performance Engineering",
		],
	},

	{
		title: "Frontend",
		icon: Code2,

		items: ["React", "Next.js", "TypeScript", "GraphQL", "WebSockets"],
	},

	{
		title: "AI Platforms",
		icon: BrainCircuit,

		items: [
			"OCR",
			"Annotation Platforms",
			"NLP",
			"Audio Timestamping",
			"Human-in-the-loop Systems",
		],
	},

	{
		title: "Gaming & Real-Time",
		icon: MonitorSmartphone,

		items: [
			"Three.js",
			"Flutter",
			"Unity Integration",
			"Real-Time Systems",
			"WebGL",
		],
	},
];
export const commands = [
	{
		command: "about",
		value:
			"Senior Software Engineer building AI products, fintech platforms, gaming ecosystems, and enterprise applications.",
	},

	{
		command: "specialties",
		value:
			"Software Architecture, AI Platforms, Fintech Systems, Real-Time Applications, Performance Engineering.",
	},

	{
		command: "stack",
		value:
			"React, Next.js, TypeScript, GraphQL, WebSockets, Three.js, Flutter, Cloud Infrastructure.",
	},

	{
		command: "contact",
		value: "mohadese.ghadimi@gmail.com",
	},
];
