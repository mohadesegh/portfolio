"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import {
	ArrowUpRight,
	Bot,
	Braces,
	ComputerIcon,
	Link2Icon,
	Mail,
	MousePointer2,
	Search,
	Sparkles,
	Terminal,
	X,
	Zap,
} from "lucide-react";
import {
	bootLines,
	commands,
	experiences,
	metrics,
	profile,
	projects,
	skillClusters,
} from "@/lib/portfolio-data";
import { cn, SectionTitle } from "@/components/ui";

gsap.registerPlugin(useGSAP);

function smoothScrollTo(href: string) {
	if (typeof window === "undefined") return false;

	const url = new URL(href, window.location.href);
	if (
		!url.hash ||
		url.pathname !== window.location.pathname ||
		url.search !== window.location.search
	) {
		return false;
	}

	const target = document.querySelector(url.hash);
	if (!target) return false;

	const top = target.getBoundingClientRect().top + window.scrollY;

	window.history.pushState(null, "", url.hash);
	window.scrollTo({ top, behavior: "smooth" });
	return true;
}

export default function Page() {
	const [bootDone, setBootDone] = useState(false);
	const [paletteOpen, setPaletteOpen] = useState(false);
	const [activeProject, setActiveProject] = useState(projects[0]);
	const [activeExperience, setActiveExperience] = useState(experiences[0]);
	const cursor = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			if (
				e.defaultPrevented ||
				e.button !== 0 ||
				e.metaKey ||
				e.ctrlKey ||
				e.shiftKey ||
				e.altKey
			) {
				return;
			}

			const link = (e.target as Element | null)?.closest<HTMLAnchorElement>(
				"a[href*='#']",
			);
			if (!link || link.target || link.hasAttribute("download")) return;

			if (smoothScrollTo(link.href)) {
				e.preventDefault();
			}
		};

		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);

	useEffect(() => {
		if (window.location.hash) {
			requestAnimationFrame(() => smoothScrollTo(window.location.hash));
		}
	}, []);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "/") {
				e.preventDefault();
				setPaletteOpen(true);
			}
			if (e.key === "Escape") setPaletteOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	useEffect(() => {
		const move = (e: MouseEvent) => {
			if (!cursor.current) return;
			gsap.to(cursor.current, {
				x: e.clientX - 160,
				y: e.clientY - 160,
				duration: 0.7,
				ease: "power3.out",
			});
		};
		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, []);

	return (
		<main className='relative min-h-screen overflow-x-hidden bg-[#050505] text-white'>
			<div
				ref={cursor}
				className='pointer-events-none fixed left-0 top-0 z-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl'
			/>
			<div className='noise' />
			<AnimatePresence>
				{!bootDone && <BootScreen onDone={() => setBootDone(true)} />}
			</AnimatePresence>
			<CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
			<Dock onPalette={() => setPaletteOpen(true)} />
			<Hero />
			<Metrics />
			<Experience active={activeExperience} setActive={setActiveExperience} />
			<ProjectLab active={activeProject} setActive={setActiveProject} />
			<Skills />
			<Contact />
		</main>
	);
}

function BootScreen({ onDone }: { onDone: () => void }) {
	const [visibleLines, setVisibleLines] = useState<string[]>([]);

	useEffect(() => {
		let index = 0;
		const id = setInterval(() => {
			setVisibleLines((prev) => [...prev, bootLines[index]].filter(Boolean));
			index += 1;
			if (index >= bootLines.length) {
				clearInterval(id);
				setTimeout(onDone, 650);
			}
		}, 210);
		return () => clearInterval(id);
	}, [onDone]);

	return (
		<motion.div
			exit={{ opacity: 0, filter: "blur(12px)" }}
			transition={{ duration: 0.7 }}
			className='fixed inset-0 z-[90] flex items-center justify-center bg-black px-5'>
			<div className='relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 font-mono shadow-2xl scanline'>
				<div className='mb-5 flex items-center gap-2'>
					<span className='h-3 w-3 rounded-full bg-red-400' />
					<span className='h-3 w-3 rounded-full bg-yellow-400' />
					<span className='h-3 w-3 rounded-full bg-green-400' />
					<span className='ml-2 text-xs text-white/35'>boot.mohadese-os</span>
				</div>
				<div className='space-y-3 text-sm text-emerald-300'>
					{visibleLines.map((line, idx) => (
						<motion.p
							key={`${line}-${idx}`}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}>
							&gt; {line}
						</motion.p>
					))}
					<p className='animate-pulse text-white/50'>_</p>
				</div>
			</div>
		</motion.div>
	);
}

function Dock({ onPalette }: { onPalette: () => void }) {
	const links = [
		["Home", "#home"],
		["Experience", "#experience"],
		["Projects", "#projects"],
		["Skills", "#skills"],
		["Contact", "#contact"],
	];
	return (
		<div className='fixed bottom-5 left-1/2 z-50 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/45 p-2 backdrop-blur-xl md:flex'>
			{links.map(([label, href]) => (
				<a
					key={label}
					href={href}
					onClick={(e) => {
						e.preventDefault();
						smoothScrollTo(href);
					}}
					className='rounded-full px-4 py-2 text-sm text-white/55 transition hover:bg-white hover:text-black'>
					{label}
				</a>
			))}
			<button
				onClick={onPalette}
				className='ml-1 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black'>
				<Search size={15} /> /
			</button>
		</div>
	);
}

function CommandPalette({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (next: boolean) => void;
}) {
	const actions = [
		{ label: "Go to Projects", href: "#projects" },
		{ label: "Go to Experience", href: "#experience" },
		{ label: "Go to Skills", href: "#skills" },
		{ label: "Send Email", href: `mailto:${profile.email}` },
		{ label: "Open LinkedIn", href: profile.linkedin },
	];
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className='command-backdrop fixed inset-0 z-[80] flex items-start justify-center px-5 pt-24'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					<motion.div
						initial={{ opacity: 0, y: -24, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -20, scale: 0.98 }}
						className='w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] shadow-2xl'>
						<div className='flex items-center gap-3 border-b border-white/10 px-5 py-4'>
							<Search size={18} className='text-white/40' />
							<input
								autoFocus
								placeholder='Search commands...'
								className='w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35'
							/>
							<button
								onClick={() => onOpenChange(false)}
								className='rounded-full p-2 text-white/40 hover:bg-white/10 hover:text-white'>
								<X size={16} />
							</button>
						</div>
						<div className='p-3'>
							{actions.map((action) => (
								<a
									key={action.label}
									href={action.href}
									onClick={(e) => {
										if (action.href.startsWith("#")) {
											e.preventDefault();
											smoothScrollTo(action.href);
										}
										onOpenChange(false);
									}}
									className='flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white hover:text-black'>
									{action.label}
									<ArrowUpRight size={15} />
								</a>
							))}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function Hero() {
	const root = useRef<HTMLElement | null>(null);
	useGSAP(
		() => {
			const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
			tl.from(".hero-kicker", { y: 22, opacity: 0, duration: 0.7 })
				.from(
					".hero-word",
					{ y: 120, opacity: 0, rotateX: -40, stagger: 0.07, duration: 1.1 },
					"-=0.35",
				)
				.from(".hero-sub", { y: 25, opacity: 0, duration: 0.8 }, "-=0.55")
				.from(".hero-actions", { y: 20, opacity: 0, duration: 0.7 }, "-=0.45")
				.from(
					".orb-shell",
					{ scale: 0.75, opacity: 0, filter: "blur(14px)", duration: 1.1 },
					"-=0.75",
				);
			gsap.to(".orb-core", {
				rotate: 360,
				duration: 22,
				repeat: -1,
				ease: "none",
			});
			gsap.to(".orbit", {
				rotate: 360,
				duration: 16,
				repeat: -1,
				ease: "none",
				stagger: 1,
			});
		},
		{ scope: root },
	);

	return (
		<section
			id='home'
			ref={root}
			className='relative flex min-h-screen items-center overflow-hidden px-5 py-28'>
			<div className='grid-bg absolute inset-0' />
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(56,189,248,.13),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,.14),transparent_30%),linear-gradient(to_bottom,transparent,rgba(0,0,0,.85))]' />
			<div className='relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center'>
				<div>
					<div className='hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur-xl'>
						<Sparkles size={16} /> AI OS Portfolio / Press{" "}
						<b className='text-white'>/</b> for commands
					</div>
					<h1 className='overflow-hidden text-6xl font-black leading-[0.86] tracking-[-0.08em] sm:text-8xl lg:text-9xl'>
						<span className='hero-word inline-block'>
							{profile.name.split(" ")[0]}
						</span>
						<br />
						<span className='hero-word inline-block bg-gradient-to-r from-white via-white to-white/20 bg-clip-text text-transparent'>
							{profile.name.split(" ").slice(1).join(" ")}
						</span>
					</h1>
					<p className='hero-sub mt-7 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white/85'>
						{profile.title}
					</p>
					<p className='hero-sub mt-4 max-w-2xl text-base leading-8 text-white/52 sm:text-lg'>
						{profile.subtitle}
					</p>
					<div className='hero-actions mt-8 flex flex-wrap gap-3'>
						<MagneticLink href='#projects' primary>
							Explore Product Lab <ArrowUpRight size={17} />
						</MagneticLink>
						<MagneticLink href={`mailto:${profile.email}`}>
							Contact <Mail size={17} />
						</MagneticLink>
					</div>
				</div>
				<div className='orb-shell relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center rounded-full'>
					<div className='absolute inset-8 rounded-full border border-white/10' />
					<div className='orbit absolute inset-0 rounded-full border border-dashed border-white/10'>
						<span className='absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,.8)]' />
					</div>
					<div className='orbit absolute inset-14 rounded-full border border-dashed border-white/10'>
						<span className='absolute right-5 top-12 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,.8)]' />
					</div>
					<div className='orb-core h-64 w-64 rounded-full' />
					<div className='absolute bottom-10 left-8 rounded-3xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl'>
						<p className='text-xs uppercase tracking-[.25em] text-white/35'>
							Core Signal
						</p>
						<p className='mt-1 font-bold'>Persian-first AI interfaces</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function MagneticLink({
	href,
	children,
	primary,
}: {
	href: string;
	children: React.ReactNode;
	primary?: boolean;
}) {
	const ref = useRef<HTMLAnchorElement | null>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const move = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			gsap.to(el, {
				x: (e.clientX - rect.left - rect.width / 2) * 0.18,
				y: (e.clientY - rect.top - rect.height / 2) * 0.18,
				duration: 0.35,
			});
		};
		const leave = () =>
			gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1,.35)" });
		el.addEventListener("mousemove", move);
		el.addEventListener("mouseleave", leave);
		return () => {
			el.removeEventListener("mousemove", move);
			el.removeEventListener("mouseleave", leave);
		};
	}, []);
	return (
		<a
			ref={ref}
			href={href}
			onClick={(e) => {
				if (href.startsWith("#")) {
					e.preventDefault();
					smoothScrollTo(href);
				}
			}}
			className={cn(
				"inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition active:scale-95",
				primary ?
					"bg-white text-black"
				:	"border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
			)}>
			{children}
		</a>
	);
}

function Metrics() {
	return (
		<section className='relative px-5 py-20'>
			<div className='mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4'>
				{metrics.map((m) => (
					<motion.div
						key={m.label}
						whileHover={{ y: -8, rotate: -1 }}
						className='glass rounded-[2rem] p-7'>
						<p className='text-5xl font-black tracking-[-0.07em]'>{m.value}</p>
						<p className='mt-3 text-sm leading-6 text-white/48'>{m.label}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}

function Experience({
	active,
	setActive,
}: {
	active: (typeof experiences)[number];
	setActive: (exp: (typeof experiences)[number]) => void;
}) {
	return (
		<section id='experience' className='relative px-5 py-24'>
			<SectionTitle
				eyebrow='Experience Scenes'
				title='Each role becomes a product scene.'
				text='A compact story of AI platforms, Web3 gaming, crypto products, and Android applications.'
			/>
			<div className='mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-[.75fr_1.25fr]'>
				<div className='space-y-3'>
					{experiences.map((exp) => (
						<button
							key={exp.company}
							onClick={() => setActive(exp)}
							className={cn(
								"w-full rounded-[1.7rem] border p-5 text-left transition",
								active.company === exp.company ?
									"border-white bg-white text-black"
								:	"border-white/10 bg-white/[.035] text-white hover:bg-white/[.07]",
							)}>
							<p className='font-black'>{exp.company}</p>
							<p
								className={cn(
									"mt-1 text-sm",
									active.company === exp.company ?
										"text-black/55"
									:	"text-white/45",
								)}>
								{exp.role} · {exp.signal}
							</p>
						</button>
					))}
				</div>
				<AnimatePresence mode='wait'>
					<motion.div
						key={active.company}
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
						className='glass overflow-hidden rounded-[2rem] p-7'>
						<div className='mb-6 flex flex-wrap items-start justify-between gap-4'>
							<div>
								<p className='text-sm uppercase tracking-[.28em] text-white/35'>
									{active.scene}
								</p>
								<h3 className='mt-2 text-4xl font-black tracking-[-.06em]'>
									{active.company}
								</h3>
								<p className='mt-2 text-white/45'>{active.period}</p>
							</div>
							<div className='rounded-full border border-white/10 px-4 py-2 text-sm text-white/55'>
								{active.signal}
							</div>
						</div>
						<p className='max-w-4xl text-lg leading-9 text-white/62'>
							{active.description}
						</p>
						<div className='mt-7 flex flex-wrap gap-2'>
							{active.stack.map((s) => (
								<span
									key={s}
									className='rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/55'>
									{s}
								</span>
							))}
						</div>
						<div className='mt-8 grid gap-3 sm:grid-cols-2'>
							{active.highlights.map((h) => (
								<div
									key={h}
									className='rounded-3xl border border-white/10 bg-black/25 p-4 text-white/65'>
									<Zap className='mb-3 text-emerald-300' size={18} />
									{h}
								</div>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}

function ProjectLab({
	active,
	setActive,
}: {
	active: (typeof projects)[number];
	setActive: (project: (typeof projects)[number]) => void;
}) {
	return (
		<section id='projects' className='relative px-5 py-24'>
			<SectionTitle
				eyebrow='Product Lab'
				title='Interactive case-study inventory.'
				text='Projects are presented like a product system, not a static resume list.'
			/>
			<div className='mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_.85fr]'>
				<div className='grid gap-4 sm:grid-cols-2'>
					{projects.map((p) => {
						const Icon = p.icon;
						return (
							<TiltCard
								key={p.title}
								active={active.title === p.title}
								onClick={() => setActive(p)}>
								<div className='mb-5 flex items-center justify-between'>
									<div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black'>
										<Icon size={22} />
									</div>
									<span className='text-xs text-white/35'>{p.year}</span>
								</div>
								<p className='text-sm text-white/40'>{p.type}</p>
								<h3 className='mt-2 text-2xl font-black tracking-[-.04em]'>
									{p.title}
								</h3>
								<p className='mt-4 line-clamp-3 text-sm leading-7 text-white/52'>
									{p.description}
								</p>
							</TiltCard>
						);
					})}
				</div>
				<AnimatePresence mode='wait'>
					<motion.aside
						key={active.title}
						initial={{ opacity: 0, x: 22 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -22 }}
						className='sticky top-8 h-fit rounded-[2rem] border border-white/10 bg-white text-black p-7'>
						<p className='text-xs font-bold uppercase tracking-[.28em] text-black/35'>
							Active Case Study
						</p>
						<h3 className='mt-3 text-4xl font-black tracking-[-.06em]'>
							{active.title}
						</h3>
						<p className='mt-5 text-base leading-8 text-black/62'>
							{active.description}
						</p>
						<div className='mt-6 rounded-3xl bg-black p-5 text-white'>
							<p className='text-sm font-bold'>Challenge</p>
							<p className='mt-2 text-sm leading-7 text-white/58'>
								{active.challenge}
							</p>
						</div>
						<div className='mt-4 rounded-3xl border border-black/10 p-5'>
							<p className='text-sm font-bold'>Solution</p>
							<p className='mt-2 text-sm leading-7 text-black/58'>
								{active.solution}
							</p>
						</div>
						<div className='mt-6 flex flex-wrap gap-2'>
							{active.stack.map((s) => (
								<span
									key={s}
									className='rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/60'>
									{s}
								</span>
							))}
						</div>
					</motion.aside>
				</AnimatePresence>
			</div>
		</section>
	);
}

function TiltCard({
	children,
	active,
	onClick,
}: {
	children: React.ReactNode;
	active?: boolean;
	onClick: () => void;
}) {
	const ref = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const move = (e: MouseEvent) => {
			const r = el.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width - 0.5;
			const py = (e.clientY - r.top) / r.height - 0.5;
			gsap.to(el, {
				rotateY: px * 10,
				rotateX: -py * 10,
				y: -6,
				duration: 0.35,
				ease: "power3.out",
			});
		};
		const leave = () =>
			gsap.to(el, {
				rotateY: 0,
				rotateX: 0,
				y: 0,
				duration: 0.55,
				ease: "elastic.out(1,.45)",
			});
		el.addEventListener("mousemove", move);
		el.addEventListener("mouseleave", leave);
		return () => {
			el.removeEventListener("mousemove", move);
			el.removeEventListener("mouseleave", leave);
		};
	}, []);
	return (
		<button
			ref={ref}
			onClick={onClick}
			className={cn(
				"tilt-card rounded-[2rem] border p-6 text-left transition",
				active ?
					"border-white/40 bg-white/[.09]"
				:	"border-white/10 bg-white/[.035] hover:bg-white/[.06]",
			)}>
			{children}
		</button>
	);
}

function Skills() {
	const all = useMemo(() => skillClusters.flatMap((s) => s.items), []);
	return (
		<section id='skills' className='relative overflow-hidden px-5 py-24'>
			<SectionTitle
				eyebrow='Skills Galaxy'
				title='The stack behind the interface.'
			/>
			<div className='mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4'>
				{skillClusters.map((s) => {
					const Icon = s.icon;
					return (
						<motion.div
							key={s.title}
							whileHover={{ y: -8 }}
							className='glass rounded-[2rem] p-6'>
							<div className='mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black'>
								<Icon size={22} />
							</div>
							<h3 className='text-2xl font-black tracking-[-.05em]'>
								{s.title}
							</h3>
							<div className='mt-5 flex flex-wrap gap-2'>
								{s.items.map((i) => (
									<span
										className='rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs text-white/55'
										key={i}>
										{i}
									</span>
								))}
							</div>
						</motion.div>
					);
				})}
			</div>
			<div className='pointer-events-none mt-16 flex overflow-hidden border-y border-white/10 py-4 text-white/22'>
				<div className='marquee-track flex min-w-max gap-8 text-5xl font-black tracking-[-.07em]'>
					{[...all, ...all].map((item, idx) => (
						<span key={`${item}-${idx}`}>{item}</span>
					))}
				</div>
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section id='contact' className='relative px-5 py-24 pb-36'>
			<div className='mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-white p-8 text-black md:p-12'>
				<div className='grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end'>
					<div>
						<p className='text-xs font-bold uppercase tracking-[.3em] text-black/35'>
							Contact Node
						</p>
						<h2 className='mt-4 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.08em] md:text-7xl'>
							Let’s build something fast, intelligent, and memorable.
						</h2>
					</div>
					<div className='flex flex-wrap gap-3'>
						<a
							href={`mailto:${profile.email}`}
							className='inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white'>
							<Mail size={17} />
							Email
						</a>
						<a
							href={profile.linkedin}
							target='_blank'
							className='inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-bold'>
							<Link2Icon size={17} />
							LinkedIn
						</a>
						<a
							href={profile.github}
							target='_blank'
							className='inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-bold'>
							<ComputerIcon size={17} />
							GitHub
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
