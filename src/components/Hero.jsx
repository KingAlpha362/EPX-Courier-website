import { useEffect, useRef, useState } from 'react';
import { CountUp } from 'countup.js';
import { HERO } from '@/constants/images';
import TrackingTimeline from '@/components/TrackingTimeline';
import { useMagnetic } from '@/hooks/useMagnetic';

const heroStats = [
    { id: 'hero-stat-0', end: 500,  suffix: '+',  label: 'Fleet Vehicles' },
    { id: 'hero-stat-1', end: 1200, suffix: '+',  separator: ',', label: 'Enterprise Clients' },
    { id: 'hero-stat-2', end: 100,  suffix: 'K+', label: 'Daily Deliveries' },
    { id: 'hero-stat-3', end: 99.2, suffix: '%',  decimals: 1, label: 'On-Time Rate' },
];

export default function Hero() {
    const bgRef = useRef(null);
    const [waybill, setWaybill] = useState('');
    const [showTrack, setShowTrack] = useState(false);
    const [trackRun, setTrackRun] = useState(0);
    const [entered, setEntered] = useState(false);
    const shipBtnRef = useMagnetic(0.28);
    const trackBtnRef = useMagnetic(0.28);

    // Entrance choreography — plays shortly after mount (immediately under reduced-motion).
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setEntered(true);
            return;
        }
        const t = setTimeout(() => setEntered(true), 60);
        return () => clearTimeout(t);
    }, []);

    // Subtle parallax — desktop only, respects reduced-motion
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const onScroll = () => {
            if (!bgRef.current || window.innerWidth < 768) return;
            bgRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // CountUp hero stats on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            heroStats.forEach((s) => {
                const cu = new CountUp(s.id, s.end, {
                    duration: 2,
                    suffix: s.suffix ?? '',
                    separator: s.separator ?? '',
                    decimalPlaces: s.decimals ?? 0,
                });
                if (!cu.error) cu.start();
            });
        }, 700);
        return () => clearTimeout(timer);
    }, []);

    const handleTrack = (e) => {
        e.preventDefault();
        setShowTrack(true);
        setTrackRun((n) => n + 1);
    };

    return (
        <section
            className={`hero-section hero-anim ${entered ? 'hero-ready' : ''} relative min-h-screen flex flex-col overflow-hidden bg-primary-dark noise-overlay`}
        >
            {/* Background image — extra height feeds parallax travel */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div ref={bgRef} className="absolute w-full" style={{ top: '-10%', height: '120%' }}>
                    <div className="absolute inset-0 hero-split-overlay z-10 pointer-events-none" />
                    <picture>
                        <source media="(max-width: 768px)" srcSet={HERO.backgroundMobile} type="image/webp" />
                        <source srcSet={HERO.background} type="image/webp" />
                        <img
                            src={HERO.background}
                            alt="EPX Fleet in Motion"
                            width={1920}
                            height={1080}
                            fetchPriority="high"
                            className="w-full h-full object-cover object-center"
                        />
                    </picture>
                </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[140px] pointer-events-none z-0" />

            {/* ── Main centred content ── */}
            <div className="relative z-20 flex-1 flex items-center">
                <div className="mx-auto w-full max-w-[1200px] flex flex-col items-center px-5 md:px-8 pt-28 pb-6 md:pt-36 md:pb-8">
                    <div className="flex flex-col items-center max-w-4xl w-full">

                        {/* Eyebrow */}
                        <div className="hero-enter inline-flex items-center gap-3 mb-6 md:mb-8" style={{ '--enter-delay': '0.05s' }}>
                            <div className="w-6 md:w-8 h-[2px] bg-accent-red" />
                            <span className="label-caps text-accent-red text-[10px] md:text-[11px]">
                                It&apos;s All About You — since 1999
                            </span>
                            <div className="w-6 md:w-8 h-[2px] bg-accent-red" />
                        </div>

                        {/* Headline — per-line mask reveal */}
                        <h1 className="font-display text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white mb-7 md:mb-8 leading-tight tracking-[-0.01em] text-center">
                            <span className="hero-headline-line" style={{ '--enter-delay': '0.12s' }}>
                                <span>Think Big.</span>
                            </span>
                            <span className="hero-headline-line" style={{ '--enter-delay': '0.24s' }}>
                                <span className="text-accent-red">Deliver Bigger.</span>
                            </span>
                        </h1>

                        {/* CTA buttons */}
                        <div className="hero-enter flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-8 justify-center items-stretch sm:items-center" style={{ '--enter-delay': '0.34s' }}>
                            <a
                                ref={shipBtnRef}
                                href="https://www.epx.co.za/"
                                target="_blank"
                                rel="noreferrer"
                                data-cursor
                                className="btn-hero-primary w-full sm:w-auto justify-center"
                            >
                                Start Shipping Today
                                <span className="btn-arrow">→</span>
                            </a>
                            <a
                                ref={trackBtnRef}
                                href="https://epx.pperfect.com/"
                                target="_blank"
                                rel="noreferrer"
                                data-cursor
                                className="btn-hero-ghost w-full sm:w-auto justify-center"
                            >
                                Track My Parcel
                                <span className="btn-arrow">→</span>
                            </a>
                        </div>

                        {/* Quick tracking widget */}
                        <form
                            onSubmit={handleTrack}
                            className="hero-enter w-full max-w-md flex rounded-[3px] overflow-hidden border border-white/20 bg-black/20 backdrop-blur-sm mb-7"
                            style={{ '--enter-delay': '0.44s' }}
                        >
                            <input
                                type="text"
                                value={waybill}
                                onChange={(e) => setWaybill(e.target.value)}
                                placeholder="Enter waybill / tracking number…"
                                className="flex-1 min-w-0 bg-transparent px-4 py-3.5 text-sm text-white placeholder-white/35 focus:outline-none font-inter"
                                aria-label="Waybill number"
                            />
                            <button
                                type="submit"
                                className="bg-accent-red hover:bg-[#b80018] text-white font-inter font-bold text-[10px] uppercase tracking-widest px-5 py-3.5 transition-colors duration-200 shrink-0 active:scale-[0.97]"
                            >
                                Track
                            </button>
                        </form>

                        {/* Live tracking demo — revealed on submit */}
                        {showTrack && (
                            <div className="w-full flex justify-center mb-7">
                                <TrackingTimeline waybill={waybill.trim()} runKey={trackRun} />
                            </div>
                        )}

                        <p className="hero-enter font-inter text-xs md:text-sm text-white/45 max-w-[420px] leading-relaxed text-center" style={{ '--enter-delay': '0.54s' }}>
                            South Africa&apos;s trusted enterprise-grade courier network — precision, scale, and unmatched reliability.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Stats bar — overlaid at the bottom of the hero image ── */}
            <div className="relative z-20 border-t border-white/[0.08] bg-black/40 backdrop-blur-md">
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-white/[0.08]">
                    {heroStats.map((stat, idx) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col items-center md:items-start justify-center px-5 md:px-8 py-5 md:py-6 ${
                                idx % 2 === 0 && idx < 2 ? 'border-r border-white/[0.08] md:border-r-0' : ''
                            } ${idx < 2 ? 'border-b border-white/[0.08] md:border-b-0' : ''}`}
                        >
                            <span
                                id={stat.id}
                                className="block font-poppins font-bold text-2xl md:text-3xl text-white leading-none"
                            >
                                0
                            </span>
                            <span className="mt-1 block font-inter text-[10px] text-white/45 uppercase tracking-[0.15em]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
