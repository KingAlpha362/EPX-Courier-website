import { useState, useEffect } from 'react';

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.62A2 2 0 0 1 3.25 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function ArrowUpIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
        </svg>
    );
}


export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            aria-label="Quick contact"
            className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-2.5"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(14px)',
                pointerEvents: visible ? 'auto' : 'none',
                transition: 'opacity 0.3s var(--ease-out), transform 0.3s var(--ease-out)',
            }}
        >
            <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
                title="Back to top"
                data-cursor
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 flex items-center justify-center shadow-lg active:scale-95"
                style={{ transition: 'background-color 0.2s var(--ease-out), transform 0.16s var(--ease-out)' }}
            >
                <ArrowUpIcon />
            </button>
<a
                href="tel:0861379542"
                aria-label="Call EPX"
                title="Call 0861 379 542"
                className="w-11 h-11 rounded-full bg-accent-red text-white flex items-center justify-center shadow-lg"
                style={{ transition: 'box-shadow 0.2s var(--ease-out)' }}
            >
                <PhoneIcon />
            </a>
        </div>
    );
}
