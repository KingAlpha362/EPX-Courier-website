import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO } from '@/constants/images';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { title: "Fleet Operations", category: "Managed Logistics", image: PORTFOLIO.case13, span: 'tall' },
    { title: "Warehouse Excellence", category: "Secure Storage", image: PORTFOLIO.case115, span: 'top' },
    { title: "Same Day Express", category: "Courier Solutions", image: PORTFOLIO.operations11, span: 'bottom' },
];

export default function Portfolio() {
    const portfolioRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.portfolio-tile', {
                scrollTrigger: {
                    trigger: portfolioRef.current,
                    start: 'top 85%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
            });
        }, portfolioRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={portfolioRef} className="bg-surface-light" id="portfolio">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div className="reveal mb-10">
                    <span className="label-caps text-accent-red mb-2 block">Operational Excellence</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">Our <span className="text-accent-red">Operations</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[240px_240px] gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`portfolio-tile group relative overflow-hidden rounded-[6px] ${
                                project.span === 'tall' ? 'md:row-span-2 min-h-[280px] md:min-h-0' : 'min-h-[240px]'
                            } ${project.span === 'top' ? 'md:col-start-2 md:row-start-1' : ''} ${
                                project.span === 'bottom' ? 'md:col-start-3 md:row-start-2' : ''
                            }`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={480}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-primary-dark flex items-center justify-between px-5">
                                <span className="text-white font-inter font-semibold text-sm">{project.title}</span>
                                <span className="text-accent-red text-lg leading-none">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
