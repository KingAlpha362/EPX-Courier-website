import { FEATURES } from '@/constants/images';

const featureStories = [
    {
        title: "National Linehaul Network",
        subtitle: "Unmatched Coverage",
        description: "Our extensive hub-and-spoke network spans all nine provinces. We manage daily linehaul trunkers between major centres, ensuring your freight moves with precision across the South African landscape.",
        image: FEATURES.linehaul,
        stat: { value: "40+", label: "Strategic Hubs" },
        learnMore: { label: "See Our Coverage Map", href: "#coverage" },
    },
    {
        title: "Managed Fleet Excellence",
        subtitle: "Dedicated Logistics",
        description: "With over 500 managed vehicles from small 1-tonners to large 32-ton link-combinations, we provide the scale and flexibility required for enterprise logistics and bulk transport.",
        image: FEATURES.managedFleet,
        stat: { value: "500+", label: "Fleet Vehicles" },
        learnMore: { label: "View Fleet Operations", href: "#portfolio" },
    },
    {
        title: "Technology-Driven Visibility",
        subtitle: "Real-Time Tracking",
        description: "Every parcel is scanned at every touchpoint. Our proprietary tracking technology provides real-time visibility from collection through sortation to final delivery.",
        image: FEATURES.tracking,
        stat: { value: "99.2%", label: "On-Time Rate" },
        learnMore: { label: "Tracking Questions", href: "#faq" },
    },
    {
        title: "Industrial Warehousing",
        subtitle: "Secure Storage & Hub Ops",
        description: "Our state-of-the-art hubs utilise advanced sortation technology and 24/7 monitored security to ensure your high-value cargo is processed with absolute care.",
        image: FEATURES.warehousing,
        stat: { value: "24/7", label: "Monitored Security" },
        learnMore: { label: "See Hub Operations", href: "#portfolio" },
    }
];

export default function Features() {
    return (
        <section id="features" className="bg-surface-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="mb-8 md:mb-14 text-center md:text-left reveal">
                    <span className="label-caps text-accent-red mb-2 block">Our Capabilities</span>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
                        Precision Logistics. <br/><span className="text-accent-red">At Scale.</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-16 md:gap-28">
                    {featureStories.map((story, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-8 md:gap-16 reveal"
                        >
                            {/* Image + stat badge */}
                            <div className="w-full md:w-1/2 relative">
                                <div className="aspect-video overflow-hidden rounded-[2px] shadow-lg">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        width={960}
                                        height={600}
                                        loading="lazy"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
                                    />
                                </div>
                                <div className="absolute bottom-3 right-3 md:-bottom-5 md:-right-5 bg-accent-red text-white px-4 py-2.5 md:px-5 md:py-3 rounded-[2px] shadow-xl">
                                    <span className="block font-poppins font-bold text-xl md:text-3xl leading-none">{story.stat.value}</span>
                                    <span className="block font-inter text-[9px] md:text-[10px] uppercase tracking-widest text-white/80 mt-0.5">{story.stat.label}</span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3 md:mb-4">
                                    <div className="w-7 h-[2px] bg-accent-red shrink-0" />
                                    <span className="label-caps text-accent-red font-bold text-xs tracking-[0.2em]">
                                        {story.subtitle}
                                    </span>
                                </div>
                                <h3 className="font-display text-3xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6 leading-tight">
                                    {story.title}
                                </h3>
                                <p className="text-text-primary/70 font-inter text-sm md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl">
                                    {story.description}
                                </p>
                                <a
                                    href={story.learnMore.href}
                                    className="inline-flex items-center text-accent-red font-inter font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-accent-red py-2 hover:text-[#b80018] hover:border-[#b80018] transition-colors duration-200 self-start"
                                >
                                    {story.learnMore.label} <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
