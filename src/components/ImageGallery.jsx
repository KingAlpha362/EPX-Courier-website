import { GALLERY } from '@/constants/images';

const editorialItems = GALLERY.slice(0, 5);

export default function ImageGallery() {
    return (
        <section className="bg-surface-light overflow-hidden" id="gallery">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8">
                <div className="reveal">
                    <span className="label-caps text-accent-red mb-2 block">Our Network in Action</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                        Active. Human. <span className="text-accent-red">Real.</span>
                    </h2>
                </div>
            </div>

            <div className="w-full px-2 md:px-4">
                <div className="flex gap-2 md:gap-3 items-end justify-center max-w-[1400px] mx-auto overflow-x-auto md:overflow-visible pb-4 md:pb-0">
                    {editorialItems.map((item) => {
                        const isCenter = item.aspect === 'landscape';
                        return (
                            <div
                                key={item.src}
                                className={`gallery-cell group relative flex-shrink-0 overflow-hidden rounded-[4px] ${
                                    isCenter
                                        ? 'w-[min(42vw,320px)] aspect-video'
                                        : 'w-[min(22vw,180px)] aspect-[3/4]'
                                }`}
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
                                <span className="absolute bottom-3 left-3 z-[2] label-caps text-white" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
                                    {item.caption}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
