import Link from 'next/link';
import { Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
	return (
		<footer className="py-16 border-t border-border/70 bg-[linear-gradient(180deg,transparent,rgba(56,189,248,0.05))]">
			<div className="section-shell">
				<div className="flex flex-col items-center gap-6">
					<div className="flex items-center gap-6">
						<Link
							href="https://github.com/zafar1162014"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors rounded-full p-2 hover:bg-secondary/60">
							<Github className="h-5 w-5" />
						</Link>
						<Link
							href="https://linkedin.com/in/mzafarulhaq"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors rounded-full p-2 hover:bg-secondary/60">
							<Linkedin className="h-5 w-5" />
						</Link>
						<Link
							href="https://www.instagram.com/zafarulhaq1162014/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors rounded-full p-2 hover:bg-secondary/60">
							<Instagram className="h-5 w-5" />
						</Link>
						<Link
							href="https://www.facebook.com/zafarulhaq1162014/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors rounded-full p-2 hover:bg-secondary/60">
							<Facebook className="h-5 w-5" />
						</Link>
						<Link
							href="mailto:zafarulhaq1162014@gmail.com"
							className="text-muted-foreground hover:text-primary transition-colors rounded-full p-2 hover:bg-secondary/60">
							<Mail className="h-5 w-5" />
						</Link>
					</div>

					<div className="text-center">
						<p className="text-sm text-muted-foreground mb-2">
							Designed & Built by Muhammad Zafar Ul Haq
						</p>
						<p className="text-xs text-muted-foreground">
							© {new Date().getFullYear()} All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
