import { WHY } from '@/constants/images';
import { LOGISTICS_ICONS } from '@/components/icons/LogisticsIcons';

const whyFeatures = [
    { icon: 'nationwide', title: "Nationwide Reach", desc: "Door-to-door coverage across all 9 provinces." },
    { icon: 'tracking', title: "Real-Time Visibility", desc: "Advanced barcoded tracking for every parcel." },
    { icon: 'warehouse', title: "Secure Warehousing", desc: "State-of-the-art hubs with 24/7 security." },
    { icon: 'fleet', title: "Dedicated Fleet", desc: "Owner-managed fleet built for reliability." }
];

export default function Why() {
    return (
        <section className="bg-primary-dark overflow-hidden py-14 md:py-24" id="why">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                    {/* Story image — sticky on desktop, normal flow on mobile */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-24 lg:self-start">
                        <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[3/2] overflow-hidden rounded-[2px]">
                            <img
                                src={WHY.freightTruck}
                                alt="EPX Courier Services fleet truck"
                                width={960}
                                height={640}
                                loading="lazy"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Brand callout overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-primary-dark/80 to-transparent">
                                <span className="font-display text-lg md:text-2xl font-bold text-white tracking-wide">
                                    &ldquo;It&rsquo;s All About <span className="text-accent-red">You.&rdquo;</span>
                                </span>
                                <p className="text-white/60 font-inter text-xs mt-1">Founded April 1999 — Edwards Parcel Express</p>
                            </div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="w-full lg:w-1/2 py-0 lg:py-16">
                        <span className="label-caps text-accent-red mb-4 block reveal">Our Story</span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-xl reveal reveal-delay-1">
                            A Polished <br className="hidden sm:block" /> Evolution <br />
                            <span className="text-accent-red">of Logistics.</span>
                        </h2>
                        <p className="text-base md:text-lg text-white/70 font-inter mb-12 md:mb-16 leading-relaxed reveal reveal-delay-2">
                            Brothers James and Garreth Edwards founded Edwards Parcel Express in April 1999, starting with an overnight express
                            link between Polokwane and Johannesburg. Today, E.P.X. Courier Services brings that same ethos —{' '}
                            <span className="text-white font-semibold">&ldquo;It&rsquo;s All About You&rdquo;</span>{' '}
                            — to a national express network with owner-managed reliability, proven tracking technology, and teams who understand your business.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-8 sm:gap-y-10">
                            {whyFeatures.map((feat) => {
                                const Icon = LOGISTICS_ICONS[feat.icon];
                                return (
                                    <div key={feat.title} className="flex gap-4">
                                        <div className="flex-shrink-0 w-11 h-11 border border-accent-red/80 flex items-center justify-center rounded-sm">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-inter font-semibold text-white mb-1.5 uppercase tracking-wide">{feat.title}</h4>
                                            <p className="text-xs text-white/50 leading-relaxed font-inter">{feat.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-10">
                            <a
                                href="#coverage"
                                className="inline-flex items-center text-accent-red font-inter font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-accent-red py-2 hover:text-[#b80018] hover:border-[#b80018] transition-colors duration-200"
                            >
                                See Our Coverage <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
