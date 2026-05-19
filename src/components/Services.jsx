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
        linkText: "Find a Branch"
    },
    {
        tag: "Bulk Freight",
        title: "Pallet & Volume Freight",
        desc: "High-volume, palletised freight between major centres with competitive rates and dedicated management.",
        image: SERVICES.bulkFreight,
        icon: "deliveryTruck",
        linkText: "Learn More"
    },
    {
        tag: "Hub Ops",
        title: "Sortation & Distribution",
        desc: "State-of-the-art hub operations with advanced sortation technology ensure accurate processing.",
        image: SERVICES.operationsHub,
        icon: "loading",
        linkText: "Our Network"
    },
    {
        tag: "Managed Logistics",
        title: "Enterprise Fleet Ops",
        desc: "Custom fleet management solutions for large enterprises requiring scale and precision.",
        image: SERVICES.managedFleet || SERVICES.bulkFreight,
        icon: "courier",
        linkText: "Custom Quote"
    }
];

export default function Services() {
    const sectionRef = useRef(null);
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
                <div className="mb-12 text-center md:text-left">
                    <span className="label-caps text-accent-red mb-2 block font-semibold tracking-widest text-xs">Our Solutions</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[0.95] tracking-tight uppercase">
                        Every Delivery Need. <br /><span className="text-accent-red">Covered.</span>
                    </h2>
                </div>

                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-4 overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 md:gap-6 -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="snap-start shrink-0 w-[85vw] md:w-auto flex flex-col items-start p-8 bg-white rounded-[2px] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
                        >
                            <div className="mb-6 bg-gray-50 p-4 rounded-full">
                                <Flaticon icon={service.icon} className="w-10 h-10" />
                            </div>
                            <span className="label-caps text-accent-red mb-2 block text-[10px] font-bold">
                                {service.tag}
                            </span>
                            <h4 className="font-display text-2xl font-black text-text-primary mb-3 uppercase leading-tight">{service.title}</h4>
                            <p className="text-text-primary/60 font-inter text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                            <a href="#" className="text-accent-red font-inter font-bold text-xs uppercase tracking-widest border-b-2 border-accent-red pb-1 hover:text-[#b80018] hover:border-[#b80018] transition-all">
                                {service.linkText} →
                            </a>
                        </div>
                    ))}
                </div>

                {/* Mobile Pagination Dots */}
                <div className="flex md:hidden justify-center gap-2 mt-8">
                    {services.map((_, i) => (
                        <div 
                            key={i} 
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                activeIndex === i ? "bg-accent-red w-4" : "bg-gray-200"
                            )} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
