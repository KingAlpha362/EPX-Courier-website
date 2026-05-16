import { cn } from '@/lib/utils';
import { GALLERY } from '@/constants/images';

const editorialItems = GALLERY.slice(0, 5);

export default function ImageGallery() {
    return (
        <section className="bg-surface-light overflow-hidden" id="gallery">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8">
                <div className="reveal">
                    <span className="label-caps text-accent-red mb-2 block">Our Network in Action</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary leading-tight">
                        Active. Human. <span className="text-accent-red">Real.</span>
                    </h2>
                </div>
            </div>

            <div className="w-full">
                <div className="flex gap-4 md:gap-3 items-end overflow-x-auto md:overflow-visible pb-8 md:pb-0 px-4 md:px-0 no-scrollbar snap-x snap-mandatory">
                    {editorialItems.map((item) => {
                        const isCenter = item.aspect === 'landscape';
                        return (
                            <div
                                key={item.src}
                                className={cn(
                                    "gallery-cell group relative flex-shrink-0 overflow-hidden rounded-[4px] snap-start",
                                    isCenter
                                        ? 'w-[75vw] md:w-[min(42vw,320px)] aspect-video'
                                        : 'w-[65vw] md:w-[min(22vw,180px)] aspect-[3/4]'
                                )}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    width={isCenter ? 640 : 360}
                                    height={isCenter ? 360 : 480}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
                                />
                                <span className="absolute bottom-4 left-4 z-[2] label-caps text-white" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
                                    {item.caption}
                                </span>
                            </div>
                        );
                    })}
                </div>
                {/* Mobile Scroll Indicator */}
                <div className="flex md:hidden justify-center gap-1.5 mt-2">
                    {editorialItems.map((_, i) => (
                        <div key={i} className={cn("w-1.5 h-1.5 rounded-full bg-accent-red/20", { "bg-accent-red": i === 0 })} />
                    ))}
                </div>
            </div>
        </section>
    );
}
