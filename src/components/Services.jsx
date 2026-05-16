import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '@/constants/images';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        tag: "Branch Network",
        title: "Over-the-Counter Drops",
        desc: "Drop off or collect from any one of our conveniently located branches and service points across the country.",
        image: SERVICES.parcelDelivery,
        linkText: "Find a Branch"
    },
    {
        tag: "Bulk Freight",
        title: "Pallet & Volume Freight",
        desc: "High-volume, palletised freight between major centres with competitive rates and dedicated account management.",
        image: SERVICES.bulkFreight,
        linkText: "Learn More"
    },
    {
        tag: "Hub Ops",
        title: "Sortation & Distribution",
        desc: "State-of-the-art hub operations with advanced sortation technology ensure accurate, rapid processing.",
        image: SERVICES.operationsHub,
        linkText: "Our Network"
    }
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".services-header", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".services-header",
                    start: "top 85%"
                }
            });

            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: ".service-grid",
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-surface-light overflow-hidden" id="solutions">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="services-header reveal mb-10">
                    <span className="label-caps text-accent-red mb-2 block">Our Solutions</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary leading-tight">
                        Every Delivery Need. <br/><span className="text-accent-red">Covered.</span>
                    </h2>
                </div>

                <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="service-card group relative block h-[320px] md:h-[420px] rounded-[6px] overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                width={600}
                                height={420}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,14,26,0.92)] via-[rgba(10,14,26,0.4)] to-transparent transition-opacity duration-300 group-hover:from-[rgba(10,14,26,0.97)]" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <span className="inline-block bg-accent-red text-white label-caps px-2.5 py-1 rounded-[2px] mb-3" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
                                    {service.tag}
                                </span>
                                <h4 className="font-display text-2xl font-bold text-white mb-2 uppercase">{service.title}</h4>
                                <p className="text-white/70 font-inter text-sm leading-relaxed mb-4 line-clamp-2">{service.desc}</p>
                                <span className="text-white font-inter font-semibold text-xs uppercase tracking-wider">
                                    {service.linkText} →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
