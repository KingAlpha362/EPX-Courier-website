import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY } from '@/constants/images';
import { LOGISTICS_ICONS } from '@/components/icons/LogisticsIcons';

gsap.registerPlugin(ScrollTrigger);

const whyFeatures = [
    { icon: 'nationwide', title: "Nationwide Reach", desc: "Door-to-door coverage across all 9 provinces." },
    { icon: 'tracking', title: "Real-Time Visibility", desc: "Advanced barcoded tracking for every parcel." },
    { icon: 'warehouse', title: "Secure Warehousing", desc: "State-of-the-art hubs with 24/7 security." },
    { icon: 'fleet', title: "Dedicated Fleet", desc: "Owner-managed fleet built for reliability." }
];

export default function Why() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.why-animate', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-primary-dark overflow-hidden" id="why">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 items-start">
                    <div className="lg:w-1/2 w-full lg:sticky lg:top-20 lg:self-start h-[300px] md:h-[450px] lg:h-[calc(100vh-5rem)] mb-10 lg:mb-0">
                        <div
                            className="relative w-full h-full overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
                        >
                            <img
                                src={WHY.freightTruck}
                                alt="EPX Fleet"
                                width={960}
                                height={640}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 why-animate">
                        <span className="label-caps text-accent-red mb-4 block">Why Partner With E.P.X?</span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8 leading-tight text-balance max-w-xl">
                            The <span className="text-accent-red">Precision Logistics</span> Evolution.
                        </h2>
                        <p className="text-lg text-white/70 font-inter mb-12 leading-relaxed">
                            Brothers James and Garreth Edwards founded Edwards Parcel Express in April 1999, starting with an overnight express
                            link between Polokwane and Johannesburg. Today, E.P.X. Courier Services brings that same ethos — &ldquo;IT&rsquo;S ALL ABOUT YOU&rdquo; —
                            to a national express network with owner-managed reliability, proven tracking technology, and teams who understand your business.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                            {whyFeatures.map((feat) => {
                                const Icon = LOGISTICS_ICONS[feat.icon];
                                return (
                                    <div key={feat.title} className="flex gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 border border-accent-red/80 flex items-center justify-center rounded-sm">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-inter font-semibold text-white mb-2 uppercase tracking-wide">{feat.title}</h4>
                                            <p className="text-xs text-white/50 leading-relaxed font-inter">{feat.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
