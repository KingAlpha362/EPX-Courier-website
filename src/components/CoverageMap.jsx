import { useEffect, useRef, useState } from 'react';
import { CountUp } from 'countup.js';
import { SA_MAP } from '@/constants/images';
import { MAP_VIEWBOX, MAJOR_HUBS, LINEHAUL_ROUTES } from '@/constants/coverageHubs';
import BranchLocator from '@/components/BranchLocator';

const coverageStats = [
    { id: 'map-stat-provinces', end: 9, suffix: '', label: 'Provinces' },
    { id: 'map-stat-hubs', end: 40, suffix: '+', label: 'Strategic Hubs' },
    { id: 'map-stat-towns', end: 2400, suffix: '', label: 'Towns Reached', separator: ',' },
    { id: 'map-stat-km', end: 1.2, suffix: 'M km²', label: 'Coverage Area', decimals: 1 },
];

const prefersReduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function CoverageMap() {
    const sectionRef = useRef(null);
    const activated = useRef(false);
    const [active, setActive] = useState(false);
    const [locatorOpen, setLocatorOpen] = useState(false);
    const [reduced] = useState(prefersReduced);

    // Activate route-draw + hub pulses and run the count-up once the section is in view.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !activated.current) {
                        activated.current = true;
                        setActive(true);
                        coverageStats.forEach((s) => {
                            new CountUp(s.id, s.end, {
                                duration: 2.2,
                                suffix: s.suffix || '',
                                separator: s.separator || '',
                                decimalPlaces: s.decimals || 0,
                            }).start();
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-primary-dark overflow-hidden noise-overlay" id="coverage">
            {/* Content sits above the noise-overlay ::after (z-index 1) */}
            <div className="relative z-[2] max-w-[1200px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-10 md:mb-14 reveal">
                    <span className="label-caps text-accent-red mb-4 block">Our Coverage</span>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Moving South Africa <span className="text-accent-red">Everywhere.</span>
                    </h2>
                    <p className="mt-5 text-white/50 max-w-2xl mx-auto font-inter text-base md:text-lg">
                        Operational across all 9 provinces with 40+ strategic hubs ensuring your cargo
                        reaches its destination with surgical precision.
                    </p>
                </div>

                {/* Map + stats layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">

                    {/* Map card */}
                    <div className={`w-full lg:flex-1 bg-white rounded-[4px] overflow-hidden shadow-2xl relative ${active ? 'map-active' : ''}`}>
                        {/* Badge */}
                        <div className="absolute top-3 left-3 z-10 bg-accent-red text-white text-[9px] font-inter font-bold uppercase tracking-widest px-2 py-1 rounded-sm flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            EPX Live Network
                        </div>

                        {/* Base map image */}
                        <picture>
                            <source srcSet="/images/coverage/south-africa-map.webp" type="image/webp" />
                            <img
                                src={SA_MAP}
                                alt="South Africa coverage map showing EPX hubs and linehaul routes across all 9 provinces"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto block select-none"
                                draggable={false}
                                style={{ imageRendering: 'auto' }}
                            />
                        </picture>

                        {/* Animated linehaul routes */}
                        <svg
                            viewBox={`0 0 ${MAP_VIEWBOX.w} ${MAP_VIEWBOX.h}`}
                            preserveAspectRatio="xMidYMid meet"
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            aria-hidden="true"
                        >
                            <defs>
                                <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0A0E1A" floodOpacity="0.45" />
                                </filter>
                            </defs>
                            <g filter="url(#routeGlow)">
                                {LINEHAUL_ROUTES.map((route, i) => (
                                    <path
                                        key={route.to}
                                        className="coverage-route"
                                        d={route.d}
                                        pathLength="1"
                                        stroke="#ffffff"
                                        strokeWidth={route.primary ? 2.4 : 1.6}
                                        strokeOpacity={route.primary ? 0.95 : 0.7}
                                        style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                                    />
                                ))}
                            </g>
                            {/* Travelling flow pulses on primary routes */}
                            {!reduced && active &&
                                LINEHAUL_ROUTES.filter((r) => r.primary).map((route, i) => (
                                    <circle key={`flow-${route.to}`} r="3.2" fill="#C9A84C">
                                        <animateMotion
                                            dur="3s"
                                            begin={`${1.6 + i * 0.5}s`}
                                            repeatCount="indefinite"
                                            path={route.d}
                                            keyPoints="0;1"
                                            keyTimes="0;1"
                                            calcMode="linear"
                                        />
                                    </circle>
                                ))}
                        </svg>

                        {/* Interactive hub markers */}
                        {MAJOR_HUBS.map((h, i) => (
                            <button
                                key={h.name}
                                type="button"
                                data-cursor="hub"
                                onClick={() => setLocatorOpen(true)}
                                aria-label={`${h.name}, ${h.province} — find branches`}
                                className={`hub-marker ${h.hub ? 'hub-marker--origin' : ''} ${h.major ? 'hub-marker--major' : ''}`}
                                style={{
                                    left: `${(h.x / MAP_VIEWBOX.w) * 100}%`,
                                    top: `${(h.y / MAP_VIEWBOX.h) * 100}%`,
                                }}
                            >
                                <span className="hub-ping" style={{ animationDelay: `${i * 0.18}s` }} />
                                <span className="hub-dot" />
                                <span className="hub-tip">
                                    {h.name}
                                    <em>{h.province}</em>
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Stats sidebar */}
                    <div className="w-full lg:w-64 flex flex-row flex-wrap lg:flex-col gap-0 border border-white/10 rounded-[4px] overflow-hidden">
                        {coverageStats.map((stat) => (
                            <div
                                key={stat.id}
                                className="flex-1 min-w-[50%] lg:min-w-0 px-4 md:px-6 py-5 lg:py-8 border-b border-white/10 last:border-b-0 lg:border-b lg:last:border-b-0 bg-white/[0.03]"
                            >
                                <span
                                    id={stat.id}
                                    className="block font-poppins font-bold text-2xl md:text-4xl text-white leading-none mb-1"
                                >
                                    0
                                </span>
                                <span className="label-caps text-accent-red text-[10px]">{stat.label}</span>
                            </div>
                        ))}

                        {/* Branch-locator CTA */}
                        <div className="w-full lg:w-auto px-6 py-6 bg-accent-red/10 border-t border-white/10">
                            <p className="text-white/60 font-inter text-xs leading-relaxed mb-4">
                                Tap a hub or find the branch closest to you — door-to-door across every province.
                            </p>
                            <button
                                type="button"
                                data-cursor
                                onClick={() => setLocatorOpen(true)}
                                className="w-full inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-[#b80018] text-white font-inter font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-3.5 rounded-[2px] transition-colors duration-200 active:scale-[0.97]"
                            >
                                Find Nearest Branch
                                <span aria-hidden="true">→</span>
                            </button>
                            <a
                                href="#solutions"
                                className="mt-3 inline-flex items-center text-white/45 hover:text-white font-inter font-semibold text-[10px] uppercase tracking-[0.2em] transition-colors duration-200"
                            >
                                View Services →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <BranchLocator open={locatorOpen} onClose={() => setLocatorOpen(false)} />
        </section>
    );
}
