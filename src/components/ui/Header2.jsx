'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(80);

	const siteBase = 'https://www.epx.co.za/';
	const links = [
		{ label: 'Services', href: '#features' },
		{ label: 'Solutions', href: '#solutions' },
		{ label: 'Our Story', href: '#why' },
		{ label: 'Network', href: '#gallery' },
		{ label: 'Tracking', href: 'https://epx.pperfect.com/', external: true },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [open]);

	const toolLinks = [
		{ label: 'Get a quote', href: siteBase },
		{ label: 'Search branch', href: siteBase },
		{ label: 'Client portal', href: siteBase },
		{ label: 'Track parcel', href: 'https://epx.pperfect.com/' },
	];

	const isDarkNav = scrolled && !open;

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-500',
				open && 'bg-white border-slate-200',
				!open && scrolled && 'bg-[rgba(10,14,26,0.96)] backdrop-blur-md border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.06)]',
				!open && !scrolled && 'bg-transparent border-transparent py-2',
			)}
		>
			<div
				className={cn(
					'hidden lg:flex border-b w-full justify-center transition-colors duration-500',
					open && 'bg-white border-slate-200 text-slate-600',
					isDarkNav && 'bg-black/20 border-white/10 text-white/90',
					!open && !scrolled && 'bg-black/30 border-white/10 text-white/90 backdrop-blur-sm',
				)}
			>
				<div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex h-9 items-center justify-between text-[11px] font-inter font-semibold uppercase tracking-[0.12em]">
					<a href="tel:0861379542" className="hover:text-accent-red transition-colors">
						0861 379 542
					</a>
					<div className="flex items-center gap-6">
						{toolLinks.map((l) => (
							<a
								key={l.label}
								href={l.href}
								target="_blank"
								rel="noreferrer"
								className="hover:text-accent-red transition-colors"
							>
								{l.label}
							</a>
						))}
					</div>
				</div>
			</div>
			<nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={cn(
						'flex h-20 w-full items-center justify-between transition-all duration-300',
						scrolled && !open && 'h-16',
					)}
				>
					<a href="/" className="flex items-center gap-2 min-w-[140px]">
						<BrandLogo
							variant={open ? 'light' : 'dark'}
							fetchPriority="high"
							className={cn('transition-all', scrolled && !open && 'h-10')}
						/>
					</a>
					<div className="hidden items-center gap-2 lg:flex">
						{links.map((link, i) => (
							<a
								key={i}
								className={cn('nav-link text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 transition-all', {
									'text-slate-900': open,
									'text-white hover:text-white': !open,
								})}
								href={link.href}
								{...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
							>
								{link.label}
							</a>
						))}
						<div
							className={cn('w-px h-6 mx-4 hidden lg:block transition-colors', {
								'bg-slate-200': open,
								'bg-white/20': !open,
							})}
						/>
						<Button
							variant="ghost"
							className={cn('font-bold text-[11px] uppercase tracking-[0.15em] h-11 px-6', {
								'text-slate-900': open,
								'text-white hover:bg-white/10': !open,
							})}
							asChild
						>
							<a href="https://epx.pperfect.com/" target="_blank" rel="noreferrer">Track</a>
						</Button>
						<Button
							className="bg-accent-red hover:bg-[#b80018] text-white font-bold text-[11px] uppercase tracking-[0.15em] h-11 px-6 rounded-[2px] shadow-lg shadow-accent-red/30 ml-2 border-none"
							asChild
						>
							<a href={siteBase} target="_blank" rel="noreferrer">Get a Quote</a>
						</Button>
					</div>
					<Button
						size="icon"
						variant="outline"
						onClick={() => setOpen(!open)}
						className={cn('lg:hidden transition-all', {
							'border-white/30 text-white': !scrolled && !open,
							'text-white border-white/30': isDarkNav,
							'text-slate-900': open,
						})}
					>
						<MenuToggleIcon open={open} className="size-5" duration={300} />
					</Button>
				</div>
			</nav>

			<div
				className={cn(
					'bg-white fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y lg:hidden transition-all duration-300',
					open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none',
					scrolled && 'top-16',
				)}
			>
				<div className="flex h-full w-full flex-col justify-between gap-y-2 p-6">
					<div className="grid gap-y-2">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-lg h-14 font-bold',
								})}
								href={link.href}
								{...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-3 pb-10">
						<a href="tel:0861379542" className="text-center text-sm font-inter text-slate-500">0861 379 542</a>
						<Button variant="ghost" className="w-full h-14 text-base font-bold text-slate-900" asChild>
							<a href="https://epx.pperfect.com/" target="_blank" rel="noreferrer">Track Parcel</a>
						</Button>
						<Button className="w-full h-14 text-base font-bold bg-accent-red hover:bg-[#b80018] text-white rounded-[2px]" asChild>
							<a href={siteBase} target="_blank" rel="noreferrer">Get a Quote</a>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
