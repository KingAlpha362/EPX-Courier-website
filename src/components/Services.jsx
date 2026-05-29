import { useRef, useState } from 'react';
import { SERVICES } from '@/constants/images';
import { Flaticon } from '@/components/ui/Flaticon';
import { cn } from '@/lib/utils';

const services = [
    {
        tag: "Branch Network",
        title: "Over-the-Counter Drops",
        desc: "Drop off or collect from any one of our conveniently located branches across the country.",
        image: SERVICES.parcelDelivery,
        icon: "packageDelivery",
        linkText: "Find a Branch",
        href: "#coverage",
    },
    {
        tag: "Bulk Freight",
        title: "Pallet & Volume Freight",
        desc: "High-volume, palletised freight between major centres with competitive rates and dedicated management.",
        image: SERVICES.bulkFreight,
        icon: "deliveryTruck",
        linkText: "Our Capabilities",
        href: "#features",
    },
    {
        tag: "Hub Operations",
        title: "Sortation & Distribution",
        desc: "State-of-the-art hub operations with advanced sortation technology ensure accurate, on-time processing.",
        image: SERVICES.operationsHub,
        icon: "loading",
        linkText: "Our Network",
        href: "#coverage",
    },
    {
        tag: "Managed Logistics",
        title: "Enterprise Fleet Ops",
        desc: "Custom fleet management solutions for large enterprises requiring scale, precision, and dedicated account management.",
        image: SERVICES.managedFleet,
        icon: "courier",
        linkText: "Get a Custom Quote",
        href: "#contact",
    }
];

export default function Services() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const width = scrollRef.current.offsetWidth;
        const scrollLeft = scrollRef.current.scrollLeft;
        const index = Math.round(scrollLeft / (width * 0.8));
        setActiveIndex(index);
    };

    return (
        <section className="bg-surface-light overflow-hidden py-20" id="solutions">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="mb-12 text-center md:text-left reveal">
                    <span className="label-caps text-accent-red mb-2 block font-semibold tracking-widest text-xs">Our Solutions</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
                        Every Delivery Need. <br /><span className="text-accent-red">Covered.</span>
                    </h2>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-4 overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 md:gap-5 -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className={`reveal reveal-delay-${idx + 1} snap-start shrink-0 w-[82vw] md:w-auto bezel-outer card-premium`}
                        >
                            <div className="flex flex-col h-full overflow-hidden bezel-inner bg-white rounded-[3px]">
                                {/* Card image */}
                                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover"
                                        style={{ transition: 'transform 0.6s var(--ease-out)' }}
                                    />
                                    <div className="absolute inset-0 bg-primary-dark/10" />
                                </div>

                                {/* Card content */}
                                <div className="flex flex-col items-start p-4 md:p-6 flex-1">
                                    <div className="mb-4 p-3.5 rounded-full bg-accent-red/5 border border-accent-red/10">
                                        <Flaticon icon={service.icon} className="w-8 h-8" />
                                    </div>
                                    <span className="label-caps text-accent-red mb-2 block text-[10px] font-bold">
                                        {service.tag}
                                    </span>
                                    <h4 className="font-display text-lg font-bold mb-3 leading-snug text-text-primary">
                                        {service.title}
                                    </h4>
                                    <p className="font-inter text-sm leading-relaxed mb-6 flex-grow text-text-primary/60">
                                        {service.desc}
                                    </p>
                                    <a
                                        href={service.href}
                                        className="inline-flex items-center gap-2 text-accent-red font-inter font-bold text-xs uppercase tracking-widest border-b-2 border-accent-red pb-1 hover:text-[#ff3348] hover:border-[#ff3348] transition-colors duration-200"
                                    >
                                        {service.linkText} →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile pagination dots — larger, higher contrast */}
                <div className="flex md:hidden justify-center gap-2.5 mt-8">
                    {services.map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-2.5 rounded-full transition-all duration-300",
                                activeIndex === i ? "bg-accent-red w-6" : "w-2.5 bg-black/20"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
