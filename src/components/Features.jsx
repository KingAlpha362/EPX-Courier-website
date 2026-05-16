import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FEATURES } from '@/constants/images';

gsap.registerPlugin(ScrollTrigger);

const featureStories = [
    {
        title: "National Linehaul Network",
        subtitle: "Unmatched Coverage",
        description: "Our extensive hub-and-spoke network spans all nine provinces. We manage daily linehaul trunkers between major centers, ensuring your freight moves with precision across the South African landscape.",
        image: FEATURES.linehaul,
    },
    {
        title: "Managed Fleet Excellence",
        subtitle: "Dedicated Logistics",
        description: "With over 500 managed vehicles from small 1-tonners to large 32-ton link-combinations, we provide the scale and flexibility required for enterprise logistics and bulk transport.",
        image: FEATURES.managedFleet,
    },
    {
        title: "Technology Driven Visibility",
        subtitle: "Real-Time Tracking",
        description: "Every parcel is scanned at every touchpoint. Our proprietary tracking technology provides real-time visibility from collection through sortation to final delivery.",
        image: FEATURES.tracking,
    },
    {
        title: "Industrial Warehousing",
        subtitle: "Secure Storage & Hub Ops",
        description: "Our state-of-the-art hubs utilize advanced sortation technology and 24/7 monitored security to ensure your high-value cargo is processed with absolute care.",
        image: FEATURES.warehousing,
    }
];

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".features-section-title", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".features-section-title",
                    start: "top 85%"
                }
            });

            gsap.utils.toArray('.feature-card__body').forEach((body, i) => {
                gsap.from(body, {
                    opacity: 0,
                    x: i % 2 === 0 ? -48 : 48,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: body.closest('.feature-card'),
                        start: "top 80%"
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="features" className="bg-surface-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="features-section-title reveal mb-10">
                    <span className="label-caps text-accent-red mb-2 block">Our Capabilities</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Precision Logistics. <br/><span className="text-accent-red">At Scale.</span></h2>
                </div>

                <div className="flex flex-col gap-10 md:gap-12">
                    {featureStories.map((story, idx) => (
                        <div
                            key={idx}
                            className="feature-card flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12"
                        >
                            <div
                                className={`lg:w-[45%] feature-img-wrap group ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}
                            >
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    width={960}
                                    height={600}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="feature-card__body lg:w-[55%] flex flex-col justify-center border-l-4 border-accent-red pl-6 md:pl-8">
                                <span className="label-caps text-accent-red mb-2 block">
                                    {story.subtitle}
                                </span>
                                <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                                    {story.title}
                                </h3>
                                <p className="text-text-primary/70 font-inter text-base mb-8 leading-relaxed max-w-xl">
                                    {story.description}
                                </p>
                                <a href="#" className="inline-block text-accent-red font-inter font-semibold text-sm uppercase tracking-wider border-b border-accent-red pb-0.5 hover:text-[#b80018] hover:border-[#b80018] transition-all">
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
