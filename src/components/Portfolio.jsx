import { PORTFOLIO } from '@/constants/images';

const projects = [
    { title: "Fleet Operations", category: "Managed Logistics", image: PORTFOLIO.case13, span: 'tall' },
    { title: "Warehouse Excellence", category: "Secure Storage", image: PORTFOLIO.case115, span: 'top-right' },
    { title: "Hub Excellence", category: "Sortation & Distribution", image: PORTFOLIO.hubExcellence, span: 'bottom-left' },
    { title: "Same-Day Express", category: "Courier Solutions", image: PORTFOLIO.operations11, span: 'bottom-right' },
];

export default function Portfolio() {
    return (
        <section className="bg-surface-light" id="portfolio">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="mb-10 reveal">
                    <span className="label-caps text-accent-red mb-2 block">Operational Excellence</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
                        Our <span className="text-accent-red">Operations.</span>
                    </h2>
                </div>

                {/* Desktop: 2-col grid — tall left, 3 cells right */}
                <div className="hidden md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[240px_240px_240px] gap-4">
                    {/* Tall image spanning all 3 rows */}
                    <div className="group relative overflow-hidden rounded-[6px] row-span-3">
                        <img
                            src={projects[0].image}
                            alt={projects[0].title}
                            width={600}
                            height={720}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-14 bg-primary-dark/90 flex items-center justify-between px-5">
                            <div>
                                <span className="text-white font-inter font-semibold text-sm block">{projects[0].title}</span>
                                <span className="text-accent-red font-inter text-[10px] uppercase tracking-widest">{projects[0].category}</span>
                            </div>
                            <span className="text-accent-red text-xl">→</span>
                        </div>
                    </div>

                    {/* 3 smaller cells on the right */}
                    {projects.slice(1).map((project) => (
                        <div key={project.title} className="group relative overflow-hidden rounded-[6px]">
                            <img
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={240}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-primary-dark/90 flex items-center justify-between px-4">
                                <span className="text-white font-inter font-semibold text-sm">{project.title}</span>
                                <span className="text-accent-red text-lg">→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: stacked cards */}
                <div className="flex flex-col gap-4 md:hidden">
                    {projects.map((project) => (
                        <div key={project.title} className="group relative overflow-hidden rounded-[6px] h-[190px] sm:h-[240px]">
                            <img
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={240}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-primary-dark/90 flex items-center justify-between px-5">
                                <div>
                                    <span className="text-white font-inter font-semibold text-sm block">{project.title}</span>
                                </div>
                                <span className="text-accent-red text-lg">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
