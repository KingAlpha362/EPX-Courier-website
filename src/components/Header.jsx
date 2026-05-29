import React from 'react';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { useMagnetic } from '@/hooks/useMagnetic';
import { BRAND } from '@/constants/images';

export default function Header() {
	const [open, setOpen] = React.useState(false);
	const [activeId, setActiveId] = React.useState('');
	const scrolled = useScroll(10);
	const quoteRef = useMagnetic(0.3);

	const links = [
		{ label: 'Services', href: '#features' },
		{ label: 'Solutions', href: '#solutions' },
		{ label: 'About Us', href: '#why' },
		{ label: 'Track & Trace', href: 'https://epx.pperfect.com/', external: true },
		{ label: 'Contact', href: '#faq' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [open]);

	// Active-section indicator for the nav links.
	React.useEffect(() => {
		const ids = ['features', 'solutions', 'why', 'coverage', 'faq'];
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
		return () => observer.disconnect();
	}, []);

	return (
		<header
			className={cn(
				'fixed top-0 z-50 w-full border-b border-transparent transition-all duration-300',
				{
					'bg-primary-dark/95 border-white/5 backdrop-blur-lg shadow-xl py-0': scrolled,
					'bg-transparent py-2': !scrolled,
					'bg-primary-dark': open
				}
			)}
		>
			<nav className="flex h-16 md:h-20 w-full items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
				<a href="/" className="flex items-center gap-2 shrink-0">
					<img
						src={BRAND.logoFooter}
						alt="EPX Logo"
						width={180}
						height={56}
						className={cn("h-10 md:h-12 w-auto transition-all", { "h-9 md:h-10": scrolled })}
					/>
				</a>
				<div className="hidden items-center gap-1 md:flex">
					{links.map((link, i) => {
						const active = !link.external && link.href === `#${activeId}`;
						return (
							<a
								key={i}
								data-cursor
								aria-current={active ? 'true' : undefined}
								className={buttonVariants({
									variant: 'ghost',
									className: cn(
										"nav-link transition-colors font-inter text-[11px] font-semibold uppercase tracking-[0.1em] hover:text-accent-red hover:bg-white/5",
										active ? "text-accent-red" : "text-white"
									)
								})}
								href={link.href}
								{...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
							>
								{link.label}
							</a>
						);
					})}
					<div className="w-px h-4 bg-white/10 mx-3 hidden lg:block" />
					<a
						ref={quoteRef}
						data-cursor
						href="https://www.epx.co.za/"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center bg-accent-red hover:bg-[#b00217] text-white border-none rounded-[4px] font-inter font-bold text-[11px] uppercase tracking-widest h-11 px-5 ml-1 transition-[background-color,transform] duration-200"
					>
						Get a Quote
					</a>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className={cn("md:hidden flex items-center justify-center h-11 w-11 transition-all border-white/20 text-white hover:bg-white/10")}
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			{/* Full-screen mobile menu */}
			<div
				className={cn(
					'bg-primary-dark fixed inset-0 z-[60] flex flex-col md:hidden transition-all duration-400 ease-in-out',
					open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
				)}
			>
				<div className="flex items-center justify-between h-16 px-4 border-b border-white/5">
					<img src={BRAND.logoFooter} alt="EPX Logo" className="h-9 w-auto" />
					<Button
						size="icon"
						variant="ghost"
						onClick={() => setOpen(false)}
						className="text-white hover:bg-white/10 h-11 w-11"
					>
						<MenuToggleIcon open={open} className="size-5" duration={300} />
					</Button>
				</div>
				<div className="flex flex-col justify-between flex-1 overflow-y-auto px-6 py-8">
					<div className="flex flex-col gap-y-1">
						{links.map((link, i) => (
							<a
								key={link.label}
								className="text-2xl font-display font-bold text-white hover:text-accent-red transition-colors py-3 border-b border-white/5"
								href={link.href}
								onClick={() => setOpen(false)}
								style={{ transitionDelay: `${i * 40}ms` }}
								{...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
							>
								{link.label}
								{link.external && <span className="ml-2 text-accent-red text-sm">↗</span>}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-3 pt-8">
						<a
							href="https://www.epx.co.za/"
							target="_blank"
							rel="noreferrer"
							onClick={() => setOpen(false)}
							className="w-full h-14 flex items-center justify-center text-base bg-accent-red hover:bg-[#b00217] text-white rounded-[4px] font-bold uppercase tracking-widest transition-colors"
						>
							Get a Quote
						</a>
						<a
							href="https://epx.pperfect.com/"
							target="_blank"
							rel="noreferrer"
							onClick={() => setOpen(false)}
							className="w-full h-12 flex items-center justify-center text-sm border border-white/20 hover:border-white/40 text-white rounded-[4px] font-semibold uppercase tracking-widest transition-colors"
						>
							Track My Parcel →
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
