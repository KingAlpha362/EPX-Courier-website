'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { BRAND } from '@/constants/images';

export default function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Services', href: '#features' },
		{ label: 'Solutions', href: '#solutions' },
		{ label: 'About Us', href: '#why' },
        { label: 'Track & Trace', href: 'https://epx.pperfect.com/' },
        { label: 'Contact', href: '#' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [open]);

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
			<nav className="flex h-20 w-full items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
				<a href="/" className="flex items-center gap-2">
                    <img 
                        src={BRAND.logoFooter} 
                        alt="EPX Logo" 
                        width={180}
                        height={56}
                        decoding="async"
                        className={cn("h-12 w-auto transition-all", { "h-10": scrolled })} 
                    />
                </a>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link, i) => (
						<a 
                            key={i} 
                            className={buttonVariants({ 
                                variant: 'ghost',
                                className: cn("transition-colors font-inter text-[11px] font-semibold uppercase tracking-[0.1em] text-white hover:text-accent-red hover:bg-white/5")
                            })} 
                            href={link.href}
                        >
							{link.label}
						</a>
					))}
					<div className="w-px h-4 bg-white/10 mx-4 hidden lg:block"></div>
					<Button className="bg-accent-red hover:bg-[#b00217] text-white border-none rounded-[4px] font-inter font-bold text-[11px] uppercase tracking-widest h-11 px-6 ml-2">
                        Get a Quote
                    </Button>
				</div>
				<Button 
                    size="icon" 
                    variant="outline" 
                    onClick={() => setOpen(!open)} 
                    className={cn("md:hidden transition-all border-white/20 text-white hover:bg-white/10")}
                >
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-primary-dark fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-white/5 md:hidden transition-all duration-300',
					open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
				)}
			>
				<div className="flex h-full w-full flex-col justify-between gap-y-2 p-6">
					<div className="grid gap-y-2">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-lg h-14 font-inter font-bold text-white',
								})}
								href={link.href}
                                onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-3 pb-10">
						<Button className="w-full h-14 text-base bg-accent-red hover:bg-[#b00217] text-white rounded-[4px] font-bold">Get a Quote</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
