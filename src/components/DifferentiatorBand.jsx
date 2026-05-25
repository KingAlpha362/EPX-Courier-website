const differentiators = [
    {
        stat: '100%',
        title: 'Own Fleet. No Middlemen.',
        body: 'Every vehicle is EPX-owned and operated. No subcontractors, no excuses — full accountability from collection to delivery.',
    },
    {
        stat: '27+',
        title: 'Owner-Managed Since 1999.',
        body: 'Founded by the Edwards family, EPX is not a franchise. Decision-makers are directly accessible — escalation in minutes, not days.',
    },
    {
        stat: '24/7',
        title: 'Control. Always On.',
        body: 'Real-time fleet visibility and a round-the-clock operations center mean your cargo is never out of sight — or mind.',
    },
];

export default function DifferentiatorBand() {
    return (
        <section className="bg-primary-dark py-10 md:py-20 overflow-hidden" aria-label="Why EPX">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
                    {differentiators.map((d, i) => (
                        <div
                            key={i}
                            className={`reveal reveal-delay-${i + 1} py-7 first:pt-0 last:pb-0 md:py-0 md:px-8 md:first:pl-0 md:last:pr-0`}
                        >
                            <span className="block font-display text-4xl md:text-5xl font-bold text-accent-red mb-3 leading-none">
                                {d.stat}
                            </span>
                            <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                                {d.title}
                            </h3>
                            <p className="font-inter text-sm text-white/45 leading-relaxed">
                                {d.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
