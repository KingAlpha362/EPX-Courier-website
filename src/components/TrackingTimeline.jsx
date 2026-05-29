import { useEffect, useState } from 'react';

const STEPS = [
    { label: 'Collected', sub: 'Origin depot' },
    { label: 'In Transit', sub: 'Linehaul' },
    { label: 'At Sorting Hub', sub: 'Johannesburg' },
    { label: 'Out for Delivery', sub: 'Local courier' },
    { label: 'Delivered', sub: 'Signed for' },
];

function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

/**
 * Illustrative parcel-journey stepper shown when a waybill is submitted in the hero.
 * It is a sample animation, not live data — the real tracker opens via the link.
 */
export default function TrackingTimeline({ waybill, runKey }) {
    const reduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const [step, setStep] = useState(reduced ? STEPS.length - 1 : -1);

    useEffect(() => {
        if (reduced) {
            setStep(STEPS.length - 1);
            return;
        }
        setStep(-1);
        const timers = STEPS.map((_, i) =>
            setTimeout(() => setStep(i), 350 + i * 720)
        );
        return () => timers.forEach(clearTimeout);
    }, [runKey, reduced]);

    const frac = step <= 0 ? 0 : step / (STEPS.length - 1);
    const ref = (waybill || 'EPX-SAMPLE-001').toUpperCase();

    return (
        <div
            className="w-full max-w-xl rounded-[4px] border border-white/15 bg-black/30 backdrop-blur-md p-5 md:p-6 animate-fade-in"
            role="status"
            aria-live="polite"
        >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                <div className="min-w-0">
                    <span className="block font-inter text-[9px] uppercase tracking-[0.2em] text-white/40">
                        Tracking · <span className="text-brand-gold">Sample journey</span>
                    </span>
                    <span className="block font-poppins font-bold text-sm text-white truncate">{ref}</span>
                </div>
                <a
                    href={`https://epx.pperfect.com/?waybill=${encodeURIComponent(ref)}`}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor
                    className="shrink-0 inline-flex items-center gap-1.5 font-inter font-bold text-[10px] uppercase tracking-[0.15em] text-accent-red hover:text-white border-b border-accent-red/60 hover:border-white pb-0.5 transition-colors"
                >
                    Open live tracking <span aria-hidden="true">↗</span>
                </a>
            </div>

            {/* Stepper */}
            <div className="relative">
                {/* Connecting track between first & last node centres (each node = 1/5 width) */}
                <div className="absolute top-[14px] left-[10%] right-[10%]">
                    <div className="h-[2px] w-full bg-white/15" />
                    <div
                        className="absolute top-0 left-0 h-[2px] bg-accent-red transition-[width] duration-700 ease-out"
                        style={{ width: `${frac * 100}%` }}
                    />
                </div>

                <ol className="relative flex">
                    {STEPS.map((s, i) => {
                        const done = i <= step;
                        const current = i === step;
                        return (
                            <li key={s.label} className="flex-1 flex flex-col items-center text-center px-0.5">
                                <span
                                    className={`relative z-[1] flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300 ${
                                        done
                                            ? 'bg-accent-red border-accent-red text-white'
                                            : 'bg-primary-dark border-white/25 text-transparent'
                                    } ${current ? 'scale-110 shadow-[0_0_0_5px_rgba(232,0,29,0.18)]' : ''}`}
                                >
                                    {done ? <CheckIcon /> : <span className="w-1.5 h-1.5 rounded-full bg-white/25" />}
                                </span>
                                <span
                                    className={`mt-2.5 font-inter text-[10px] md:text-[11px] font-semibold leading-tight transition-colors duration-300 ${
                                        done ? 'text-white' : 'text-white/40'
                                    }`}
                                >
                                    {s.label}
                                </span>
                                <span className="mt-0.5 font-inter text-[9px] text-white/30 leading-tight hidden sm:block">
                                    {s.sub}
                                </span>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
