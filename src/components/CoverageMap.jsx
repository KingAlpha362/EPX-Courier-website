import { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';
import { SA_MAP } from '@/constants/images';

const coverageStats = [
    { id: 'map-stat-provinces', end: 9, suffix: '', label: 'Provinces' },
    { id: 'map-stat-hubs', end: 40, suffix: '+', label: 'Strategic Hubs' },
    { id: 'map-stat-towns', end: 2400, suffix: '', label: 'Towns Reached', separator: ',' },
    { id: 'map-stat-km', end: 1.2, suffix: 'M km²', label: 'Coverage Area', decimals: 1 },
];

export default function CoverageMap() {
    const statsRef = useRef(null);
    const statsAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !statsAnimated.current) {
                        coverageStats.forEach((s) => {
                            new CountUp(s.id, s.end, {
                                duration: 2.2,
                                suffix: s.suffix || '',
                                separator: s.separator || '',
                                decimalPlaces: s.decimals || 0,
                            }).start();
                        });
                        statsAnimated.current = true;
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-primary-dark overflow-hidden noise-overlay" id="coverage">
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
                    <div className="w-full lg:flex-1 bg-white rounded-[4px] overflow-hidden shadow-2xl relative">
                        {/* Badge */}
                        <div className="absolute top-3 left-3 z-10 bg-accent-red text-white text-[9px] font-inter font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                            EPX Network
                        </div>
                        <picture>
                            <source srcSet="/images/coverage/south-africa-map.webp" type="image/webp" />
                            <img
                                src={SA_MAP}
                                alt="South Africa province coverage map showing all 9 provinces"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto block"
                                style={{ imageRendering: 'auto' }}
                            />
                        </picture>
                    </div>

                    {/* Stats sidebar */}
                    <div ref={statsRef} className="w-full lg:w-64 flex flex-row flex-wrap lg:flex-col gap-0 border border-white/10 rounded-[4px] overflow-hidden">
                        {coverageStats.map((stat, idx) => (
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

                        {/* CTA inside sidebar */}
                        <div className="w-full lg:w-auto px-6 py-6 bg-accent-red/10 border-t border-white/10">
                            <p className="text-white/60 font-inter text-xs leading-relaxed mb-4">
                                Door-to-door delivery across every province, city, and town in South Africa.
                            </p>
                            <a
                                href="#solutions"
                                className="inline-flex items-center text-accent-red font-inter font-bold text-xs uppercase tracking-[0.2em] border-b border-accent-red pb-0.5 hover:text-[#b80018] transition-colors duration-200"
                            >
                                View Services →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
