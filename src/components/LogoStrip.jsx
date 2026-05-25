const clients = [
    'Massmart', 'Pick n Pay', 'Tiger Brands', 'AVI Limited', 'Bidvest Group',
    'Imperial Logistics', 'Astral Foods', 'Pioneer Foods', 'Dis-Chem', 'Lewis Stores',
    'Mr Price Group', 'Pepkor Holdings', 'Shoprite', 'Spar Group', 'Distell',
];

export default function LogoStrip() {
    return (
        <div className="bg-white border-b border-black/[0.06] py-5 overflow-hidden" aria-label="Enterprise client network">
            <p className="text-center label-caps text-text-primary/25 mb-3.5 text-[9px]">
                Trusted by South Africa's leading enterprises
            </p>
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-14 animate-marquee" style={{ width: 'max-content' }}>
                    {[...clients, ...clients].map((name, i) => (
                        <span
                            key={i}
                            className="font-display font-bold text-[11px] uppercase tracking-[0.22em] text-text-primary/20 whitespace-nowrap"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
