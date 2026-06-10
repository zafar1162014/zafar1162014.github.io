'use client';

import {
	Github,
	Linkedin,
	Instagram,
	Facebook,
	Mail,
	ChevronDown,
	Download,
	ArrowUpRight,
	Sparkles,
	BrainCircuit,
	Camera,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { withBasePath } from '@/lib/base-path';

const highlights = [
	{ label: 'AI/ML', value: 'Machine Learning' },
	{ label: 'NLP', value: 'Semantic Search' },
	{ label: 'CV', value: 'Computer Vision' },
];

const featured = [
	'FastAPI + Next.js',
	'RAG workflows',
	'Protons EduVerse',
];

export function HeroSection() {
	return (
		<section
			id="home"
			className="relative overflow-hidden pt-28 md:pt-32">
			<div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.18),transparent_34%,transparent_66%,rgba(249,115,22,0.16))]" />
			<div className="absolute inset-x-0 top-[28rem] -z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

			<div className="section-shell py-12 md:py-16">
				<div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground backdrop-blur-xl">
							<Sparkles className="h-4 w-4 text-primary" />
							Available for portfolio collaborations
						</div>

						<div className="space-y-5">
							<h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
								<span className="block">Muhammad</span>
								<span className="gradient-text block">Zafar Ul Haq</span>
							</h1>
							<p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
								Portfolio focused on Protons EduVerse, applied machine
								learning, NLP, computer vision, semantic search, and FastAPI
								applications.
							</p>
						</div>

						<div className="flex flex-wrap gap-3">
							<Button
								asChild
								size="lg"
								className="gap-2 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-accent px-6 text-primary-foreground shadow-lg shadow-primary/20 hover:scale-[1.01]">
								<Link href="#projects">
									Explore Projects
									<ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="gap-2 rounded-full border-border/80 bg-background/70 px-6">
								<Link href="#contact">Let&apos;s Connect</Link>
							</Button>
							<Button
								asChild
								variant="secondary"
								size="lg"
								className="gap-2 rounded-full border border-border/80 bg-secondary/70 px-6">
								<a
									href={withBasePath('/resume.pdf')}
									download="Muhammad-Zafar-Resume.pdf">
									<Download className="h-4 w-4" />
									Download Resume
								</a>
							</Button>
						</div>

						<div className="grid gap-3 sm:grid-cols-3">
							{highlights.map((item) => (
								<div
									key={item.label}
									className="rounded-2xl border border-border/80 bg-card/70 p-4 backdrop-blur-xl">
									<p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
										{item.label}
									</p>
									<p className="mt-2 text-sm font-medium text-foreground">
										{item.value}
									</p>
								</div>
							))}
						</div>

						<div className="flex flex-wrap gap-2">
							{featured.map((item) => (
								<span
									key={item}
									className="rounded-full border border-border/80 bg-card/70 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-xl">
									{item}
								</span>
							))}
						</div>

						<div className="flex items-center gap-4 pt-2">
							<Link
								href="https://github.com/zafar1162014"
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
								<Github className="h-5 w-5" />
							</Link>
							<Link
								href="https://linkedin.com/in/mzafarulhaq"
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
								<Linkedin className="h-5 w-5" />
							</Link>
							<Link
								href="https://www.instagram.com/zafarulhaq1162014/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="https://www.facebook.com/zafarulhaq1162014/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="mailto:zafarulhaq1162014@gmail.com"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
								<Mail className="h-5 w-5" />
							</Link>
						</div>
					</div>

					<div className="relative">
						<div className="absolute inset-0 -z-10 rounded-[2rem] bg-[linear-gradient(145deg,rgba(56,189,248,0.28),rgba(251,191,36,0.18),rgba(168,85,247,0.22))] blur-2xl" />
						<div className="glass-surface overflow-hidden rounded-[2rem] p-4 md:p-5">
							<div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-4 md:p-5">
								<div className="flex items-center justify-between gap-4 pb-4">
									<div className="flex items-center gap-3">
										<div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border/70 bg-background/70 shadow-lg shadow-primary/10">
											<Image
												src={withBasePath('/profile.png')}
												alt="Muhammad Zafar Ul Haq"
												fill
												sizes="64px"
												className="object-cover"
												priority
											/>
										</div>
										<div>
											<p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
												Muhammad Zafar Ul Haq
											</p>
										</div>
									</div>
									<div className="rounded-full border border-border/80 bg-secondary/70 px-3 py-1.5 text-xs font-medium text-foreground">
										Lahore, Pakistan
									</div>
								</div>

								<div className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-[linear-gradient(180deg,rgba(14,165,233,0.12),rgba(249,115,22,0.08))] p-4 shadow-2xl">
									<div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />
									<Image
										src={withBasePath('/profile.png')}
										alt="Muhammad Zafar Ul Haq"
										width={760}
										height={920}
										className="relative z-10 w-full rounded-[1.25rem] object-cover shadow-2xl"
										priority
									/>
								</div>

								<div className="mt-4 grid gap-3 sm:grid-cols-2">
									<div className="rounded-2xl border border-border/70 bg-secondary/60 p-4">
										<div className="flex items-center gap-2 text-sm font-medium text-foreground">
											<BrainCircuit className="h-4 w-4 text-primary" />
											NLP & RAG
										</div>
										<p className="mt-2 text-sm text-muted-foreground">
											Semantic search, embeddings, SOP/LOR generation, and AI
											assistants.
										</p>
									</div>
									<div className="rounded-2xl border border-border/70 bg-secondary/60 p-4">
										<div className="flex items-center gap-2 text-sm font-medium text-foreground">
											<Camera className="h-4 w-4 text-accent" />
											Computer Vision
										</div>
										<p className="mt-2 text-sm text-muted-foreground">
											Classification, object detection, and applied ML research.
										</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<Link
				href="#about"
				className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-border/80 bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl transition-colors hover:text-foreground">
				<div className="flex items-center gap-2">
					<ChevronDown className="h-4 w-4" />
					<span>Scroll</span>
				</div>
			</Link>
		</section>
	);
}
