import { useState, useEffect } from 'react';

export default function ScrollProgress() {
    const [pct, setPct] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setPct(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            aria-hidden="true"
            className="fixed top-0 left-0 z-[9999] h-[2px] bg-accent-red pointer-events-none"
            style={{ width: `${pct}%` }}
        />
    );
}
