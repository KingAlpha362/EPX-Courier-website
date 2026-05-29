import { cn } from '@/lib/utils';
import { GALLERY } from '@/constants/images';

const captions = ["FLEET OPS", "LAST-MILE", "SORTATION", "CLIENT CARE", "COLLECTION"];
const bentoItems = GALLERY.slice(0, 5).map((item, i) => ({
    ...item,
    caption: captions[i] || item.caption
}));

export default function ImageGallery() {
    return (
        <section className="bg-surface-light overflow-hidden py-12 md:py-20" id="gallery">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12 md:mb-16">
                <span className="label-caps text-accent-red mb-2 block font-semibold tracking-widest text-xs reveal">Our Network in Action</span>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight reveal reveal-delay-1">
                    Active. Human. <span className="text-accent-red">Real.</span>
                </h2>
            </div>

            {/* Desktop bento grid */}
            <div className="hidden md:block max-w-[1400px] mx-auto px-2 md:px-4">
                <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[600px] lg:h-[700px]">
                    {/* Item 1 — tall portrait spanning 2 rows */}
                    <div className="relative overflow-hidden group row-span-2 rounded-[2px]">
                        <img src={bentoItems[0].src} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={bentoItems[0].label} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">{bentoItems[0].caption}</span>
                    </div>
                    {/* Items 2 & 3 — top row squares */}
                    {[bentoItems[1], bentoItems[2]].map((item) => (
                        <div key={item.label} className="relative overflow-hidden group rounded-[2px]">
                            <img src={item.src} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.label} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                            <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">{item.caption}</span>
                        </div>
                    ))}
                    {/* Items 4 & 5 — bottom row squares */}
                    {[bentoItems[3], bentoItems[4]].map((item) => (
                        <div key={item.label} className="relative overflow-hidden group rounded-[2px]">
                            <img src={item.src} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.label} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                            <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">{item.caption}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile: horizontal scroll strip */}
            <div className="md:hidden flex gap-3 overflow-x-auto no-scrollbar px-4 snap-x snap-mandatory">
                {bentoItems.map((item) => (
                    <div key={item.label} className="relative overflow-hidden rounded-[2px] flex-shrink-0 w-[72vw] h-[220px] snap-start">
                        <img src={item.src} loading="lazy" className="w-full h-full object-cover" alt={item.label} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-3 left-3 text-[10px] font-bold tracking-[0.2em] text-white uppercase">{item.caption}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
