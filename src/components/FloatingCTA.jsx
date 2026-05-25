import { useState, useEffect } from 'react';

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.62A2 2 0 0 1 3.25 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function WhatsAppIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.553 4.099 1.515 5.82L.006 24l6.335-1.461C8.04 23.453 9.978 24 11.999 24 18.627 24 24 18.627 24 12S18.627 0 11.999 0zm0 21.818c-1.886 0-3.64-.515-5.149-1.412l-.369-.22-3.763.986 1.003-3.659-.24-.38C2.432 15.493 1.817 13.804 1.817 12c0-5.618 4.565-10.182 10.182-10.182 5.618 0 10.182 4.564 10.182 10.182S17.617 21.818 11.999 21.818z" />
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
            <a
                href="https://wa.me/27861379542"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp EPX"
                title="Chat on WhatsApp"
                className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg"
                style={{ transition: 'box-shadow 0.2s var(--ease-out)' }}
            >
                <WhatsAppIcon />
            </a>
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
