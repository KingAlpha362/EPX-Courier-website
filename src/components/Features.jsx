import { FEATURES } from '@/constants/images';

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

    return (
        <section id="features" className="bg-surface-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="mb-10">
                    <span className="label-caps text-accent-red mb-2 block">Our Capabilities</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary">Precision Logistics. <br/><span className="text-accent-red">At Scale.</span></h2>
                </div>

                <div className="flex flex-col gap-12 md:gap-32">
                    {featureStories.map((story, idx) => (
                        <div
                            key={idx}
                            className="feature-card flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-10 md:gap-20"
                        >
                            <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-[2px] shadow-lg">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    width={960}
                                    height={600}
                                    loading="eager"
                                    
                                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            <div className="feature-card__body w-full md:w-1/2 flex flex-col justify-center border-l-4 border-accent-red pl-4 md:pl-12">
                                <span className="label-caps text-accent-red mb-4 block font-bold text-xs tracking-[0.2em]">
                                    {story.subtitle}
                                </span>
                                <h3 className="font-display text-4xl md:text-5xl font-black text-text-primary mb-6 uppercase leading-[0.95]">
                                    {story.title}
                                </h3>
                                <p className="text-text-primary/70 font-inter text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                                    {story.description}
                                </p>
                                <a href="#" className="inline-flex items-center text-accent-red font-inter font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-accent-red py-2 hover:text-[#b80018] hover:border-[#b80018] transition-all self-start">
                                    Learn More <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
